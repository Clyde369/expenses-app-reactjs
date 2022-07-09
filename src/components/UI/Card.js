import React from 'react'
import '../UI/Card.css'

//this card component is a wrappper for styling different components so that you dont have to make different styles for other components
const Card = (props) => {
   //the classes function will allow the card styles and any other className that you have defined differently for the other components 
   const classes = 'card '+ props.className
  return (
    <div className={classes}>
      {/* props.children allow you to make styling wrapper props for your components, that way you dont have to use the same styles repetitively */}
      {props.children}
    </div>
  )
}

export default Card