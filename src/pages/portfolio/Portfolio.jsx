import React, { Component } from 'react';
import Filterizr from 'filterizr';
import PortfolioContainer from '../../components/PortfolioContainer.jsx'
import homepageImage from '../../media/homepage-image.jpg';

import './Portfolio.css';




export default class Portfolio extends Component {
  
  // Default options
  const options = {
  animationDuration: 0.5, // in seconds
  callbacks: { 
    onFilteringStart: function() { },
    onFilteringEnd: function() { },
    onShufflingStart: function() { },
    onShufflingEnd: function() { },
    onSortingStart: function() { },
    onSortingEnd: function() { }
  },
  controlsSelector: '', // Selector for custom controls
  delay: 0, // Transition delay in ms
  delayMode: 'progressive', // 'progressive' or 'alternate'
  easing: 'ease-out',
  filter: 'all', // Initial filter
  filterOutCss: { // Filtering out animation
    opacity: 0,
    transform: 'scale(0.5)'
  },
  filterInCss: { // Filtering in animation
    opacity: 0,
    transform: 'scale(1)'
  },
  gridItemsSelector: '.filtr-container',
  gutterPixels: 0, // Items spacing in pixels
  layout: 'sameSize', // See layouts
  multifilterLogicalOperator: 'or',
  searchTerm: '',
  setupControls: true, // Should be false if controlsSelector is set 
  spinner: { // Configuration for built-in spinner
    enabled: false,
    fillColor: '#2184D0',
    styles: {
      height: '75px',
      margin: '0 auto',
      width: '75px',
      'z-index': 2,
    },
  },
} 
// Adjust the CSS selector to match the container where
// you set up your image gallery
const filterizr = new Filterizr('.filter-container', options);

  render() {
    return (
      <div>
        <div className="portfolio">
          <h2>PORTFOLIO</h2>
          <div class="filter-container">
            <div class="filtr-item" data-category="Beauty" data-sort="value">
              <img src={homepageImage} alt="sample" />
            </div>
            <div class="filtr-item" data-category="Editorial" data-sort="value">
              <img src={homepageImage} alt="sample" />
            </div>
          </div>
          <select data-sortOrder>
            <option value="index"> Position in DOM </option>
            <!-- Other options and then... -->
            <option value="author">Author Name</option>
            <option value="year">Year Published</option>
            <option value="novel">Book Title</option>
          </select>
          <ul>
            {/* <!-- For filtering controls add --> */}
            <li data-filter="all"> All items </li>
            <li data-filter="Beauty"> Beauty </li>
            <li data-filter="Editorial"> Editorial </li>
            {/* <!-- For a shuffle control add --> */}
            <li data-shuffle> Shuffle items </li>
          </ul>
          <PortfolioContainer/>
        </div>
      </div>
    )
  }
}
