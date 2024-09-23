import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
import React from 'react';
import mockData from '../assets/mockData.json';
import Modal from './Modal';
import './RadarMap.css';

class RadarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParkingMarkers: false,
      selectedLocationName: '',
      showModal: false,
      modalContent: null,
    };
  }

  componentDidMount() {
    const apiKey = 'prj_test_pk_c930b0ad7045f6ed46872536a3fd6582d0e3619c'; 
    Radar.initialize(apiKey);

    this.map = Radar.ui.map({
      container: 'map',
      style: 'radar-dark-v1',
      center: [80.04411, 12.82113], 
      zoom: 13,
    });

    Radar.ui.autocomplete({
      container: 'autocomplete',
      showMarkers: true,
      markerColor: '#0000ff',
      responsive: true,
      width: '400px',
      maxHeight: '600px',
      placeholder: 'Search address...',
      limit: 8,
      minCharacters: 3,
      near: '12.82109, 80.04409',
      onSelection: (address) => {
        const [lng, lat] = address.geometry.coordinates;
        const locationName = address.text || 'Selected Location';

        if (this.marker) {
          this.marker.setLngLat([lng, lat]);
        } else {
          this.marker = Radar.ui.marker({
            color: '#ff0000',
            popup: {
              html: `<div class="popup-content"><h3>${locationName}</h3><p>This is the location you selected.</p></div>`,
              offset: [0, -10],
            }
          }).setLngLat([lng, lat]).addTo(this.map);
        }

        this.map.setCenter([lng, lat]);
        this.map.setZoom(14);

        this.setState({ 
          showParkingMarkers: true,
          selectedLocationName: locationName,
        });
      },
    });

    // Attach the event listener to the document
    document.addEventListener('click', this.handleReadMoreClick);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showParkingMarkers && !prevState.showParkingMarkers) {
      mockData.parkingLocations.forEach(location => {
        Radar.ui.marker({
          color: '#0000ff',
          popup: {
            html: `
              <div class="popup-content">
                <h3>${location.title}</h3>
                <p>Capacity: ${location.capacity} vehicles</p>
                <p>Distance: ${location.distanceFromUser} meters</p>
                <button class="read-more-btn" data-location="${location.title}">Read More</button>
              </div>`,
            offset: [0, -10],
          }
        }).setLngLat([location.longitude, location.latitude]).addTo(this.map);
      });
    }
  }
  


  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    document.removeEventListener('click', this.handleReadMoreClick);
  }

  handleReadMoreClick = (event) => {
    const button = event.target.closest('.read-more-btn');
  if (button) {
    const locationName = button.getAttribute('data-location');
    const location = mockData.parkingLocations.find(loc => loc.title === locationName);
    if (location) {
      this.setState({
        showModal: true,
        modalContent: {
          owner: location.owner || 'Unknown Owner',
          vehicleType: location.vehicleType || 'Unknown Type',
          timing: location.timing || 'Not Specified',
          price: location.price || 'Not Specified',
        },
        selectedLocationName: locationName,
      });
    }
  }
  };

  closeModal = () => {
    this.setState({ showModal: false, modalContent: null });
  };

  render() {
    const { showModal, modalContent, selectedLocationName } = this.state;

    return (
      <div id="map-container" className="map-container">
        <div id="autocomplete" className="search-container"></div>
        <div id="map" className="map"></div>

        {showModal && modalContent && (
          <Modal 
            title={selectedLocationName}
            details={modalContent}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default RadarMap;
