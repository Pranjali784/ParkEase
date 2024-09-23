import React, { useEffect } from 'react';
import './AboutPage.css'; // Import the CSS file for card styles
import * as THREE from 'three'; // Import Three.js
import VANTA from 'vanta/dist/vanta.dots.min'; // Import Vanta Dots

function AboutPage() {
  return (
    <div className="about-page-container">
      <div id="vanta-background" className="vanta-background"></div> {/* Element for Vanta.js */}
      <div className="cards">
        <div className="card card-1">
          <p className="tip">What We Do...</p>
          <p className="second-text">Introducing our innovative web application that transforms urban parking! Effortlessly connect with available parking spaces, list and search for spots, and book on flexible schedules. Enjoy real-time notifications, secure payments, and location-based search for ultimate convenience. Our app features a rating system for trust and reliability, making parking hassles a thing of the past. Join the future of parking and experience a seamless, shared economy platform designed to connect space owners with those in need. Discover the next evolution in parking today!</p>
        </div>
        <div className="card card-2">
          <p className="tip">How It Works...</p>
          <p className="second-text">
          <ul>
        <li><strong>Registration and Profile Creation:</strong> Users register and create profiles for listing or renting parking spaces.</li>
        <li><strong>Listing Parking Spaces:</strong> Space owners list their available parking spots with details and images.</li>
        <li><strong>Searching and Booking:</strong> Renters search for parking spaces based on location, availability, and pricing, then book and pay securely.</li>
        <li><strong>Real-Time Notifications:</strong> Users receive real-time updates for bookings, inquiries, and changes.</li>
    </ul>
          </p>
        </div>
        <div className="card card-3">
          <p className="tip">Radar API</p>
          <p className="second-text">The Radar API is a comprehensive geolocation service that provides robust tools for location-based functionalities in applications. It offers features such as forward and reverse geocoding, which allow developers to convert addresses into geographic coordinates and vice versa. Additionally, Radar API enables the integration of real-time location tracking, geofencing, and distance calculation, making it ideal for applications requiring precise location data. With its user-friendly interface and detailed documentation, the Radar API supports a wide range of use cases.
          </p>
          <a href='https://radar.com/product/api' className='card-link'>visit</a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
