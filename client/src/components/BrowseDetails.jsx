import React from 'react'

const BrowseDetails = (props) => {
  return (
  <>
  
  
  <div className="item">
  <div className="thumb">
    <img src={props.element.image}alt="" />
    <div className="hover-effect">
      <h6>{props.element.description}</h6>
    </div>
  </div>
  <h4>{props.element.name}<br /><span>{props.element.category}</span></h4>
  <ul>
    <li> {props.element.quantity}</li>
    <li>{props.element.price}</li>
  </ul>
</div>
  
  
  </>
  )
}

export default BrowseDetails
