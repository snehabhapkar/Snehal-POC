import React, { Component } from 'react';


class SelectComponent extends Component {
	
  	render() {
  		const {disabled, options, handleChange} = this.props;
  		return (
      		<select disabled={disabled} onChange={handleChange} className="filter-data">
        		{options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
      		</select>
    	);
  	}
}

export default SelectComponent;