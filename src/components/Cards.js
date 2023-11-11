import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1> Check out our newest items! </h1>
        <div className ="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="ReactPictures/feast.jpg"
                    text = "Explore our newest Fragrences"
                    label = 'Scents'
                    path = '/frangrences'
                    />

                    <CardItem
                    src="ReactPictures/Jewlery-Necklace.jpg"
                    text = "Explore our newest Jewlery"
                    label = 'Jewlery'
                    path = '/frangrences'
                    />

                      <CardItem
                    src="ReactPictures/stock-photo.jpg"
                    text = "Explore our newest Fragrences"
                    label = 'Clothes'
                    path = '/frangrences'
                    />
                    
                    <CardItem
                    src="ReactPictures/HandModel-Perfume.jpg"
                    text = "Explore our newest Fragrences"
                    label = 'Reward Program'
                    path = '/frangrences'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;
