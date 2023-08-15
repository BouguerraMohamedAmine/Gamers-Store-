import React from 'react'

const Details = (props) => {
  return (
  <>
  <div className="col-lg-3 col-sm-6">
  <div className="item">
                     <img src={props.element.image} alt="" />
                     <div>
                  <h4>{props.element.name}
                  <span>{props.element.category}</span></h4>
    <ul>
      <li>{props.element.quantity} Piece </li>
      <li>{props.element.price} TND</li>
    </ul>
    </div>
  </div>
</div>


  
  
  
  </>
  )
}

export default Details
