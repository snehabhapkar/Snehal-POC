import React, { Component } from 'react';
import _ from 'lodash'
import '../style/component/search.css';
import SelectComponent from './select.js'
import ResultSetComponent from './result-set.js'


class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchData: props.searchData
    }

    this.handleSort = this.handleSort.bind(this)
  }

  handleSort(event) {
    const {searchData} = this.state
    const filterValue = event.target.value;

    switch (filterValue) {
      case 'highToLow':
        this.setState({
          searchData: _.orderBy(searchData, ['price'], ['desc'])
        })
        break
      case 'lowToHigh':
        this.setState({
          searchData: _.orderBy(searchData, ['price'], ['asc'])
        })
      break

      default:
        this.setState({
          searchData: this.props.searchData
        })
      break
    }
  }

  render() {
    const {searchData} = this.state
    const {filterOptions} = this.props
    return (
      <div className="app">
        <header>
          <div className="app-logo"></div>
        </header>

        <section>
          <div className="filter-section">
            <span className="hotel-count">{searchData.length} <i>hotels in</i> Sydney</span>

            <div className="sort-by">
              Sort By:
              <SelectComponent
                options={filterOptions}
                handleChange={this.handleSort}
              />
            </div>  
          </div>  

          <div className="hotel-info">       
            <ResultSetComponent 
            resultData={searchData}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
