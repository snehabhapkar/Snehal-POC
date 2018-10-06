/* globals document */
import React from 'react';
import { render } from 'react-dom';
import Search from './components/Search';
import './style/app.css';
import searchData from './ref-data/hotel-search-data.json'
import constants from './ref-data/application-constants'

render(
  <Search searchData={searchData} filterOptions={constants.FILTER_OPTIONS}/>,
  document.getElementById('app'),
);
