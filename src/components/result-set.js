import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ResultSetComponent extends Component {
	
  	render() {
  		const {resultData} = this.props;
  		return (
      		<div className="result">
      			{ resultData.map((hotel, index) =>
      				<a key={index} id={hotel.id} className="hotel-items" href="/">
      					<div className="data-item-list"> 
      						<figure className="data-item-photo">
              			<img src={hotel.image} className="hotel-image" alt={hotel.title} />
              			<div className="result-ribbon"> {hotel.promotion} </div>
            			</figure>
                  <div className="data-item-content">
                    <div className="property-details">
                      <div className="title-section">
                        <h3 className="property-name">{hotel.title}</h3>
                        { hotel.ratingType === 'star' ? 
                          <StarRatingComponent 
                            name="rate2" 
                            editing={false}
                            starCount={5}
                            value={hotel.rating}
                          />
                          :
                          <StarRatingComponent 
                            name="rate2" 
                            editing={false}
                            renderStarIcon={() => <span>●</span>}
                            starCount={5}
                            value={hotel.rating}
                          />
                        }
                      </div>
                      
                      
                      <div className="property-address">{hotel.address}</div>
                      <div className="property-room-name">{hotel.roomName}</div>
                					{ hotel.freeCancellation && 
                  				  <span className="item-cancellation">Free cancellation</span> }  
                    	</div>

                			<div className="price-details">
                  				<div className="item-nights">1 night from (AUD)</div> 
                  				<div className="item-price"> <sup>$</sup> {hotel.price}</div> 
                  				{ hotel.savings > 0 &&
                  				<div className="item-save">Save ${hotel.savings}~</div>  }
                			</div>
                  	</div>
      					</div>
      				</a>	
      			)}	
      		</div>
    	);
  	}
}

export default ResultSetComponent;