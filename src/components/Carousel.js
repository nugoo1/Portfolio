import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"
import carouselStyles from "./carousel.module.scss"

// This requires text styling for mobile. Please do not use this component without making necessary changes.

const DefaultCarousel = props => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        swipeable={true}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
      >
        <div className={carouselStyles.carousel__textContainer}>
          <h1 className={carouselStyles.carousel__leadingText}>
            {props.leadingText}
            <span>
              <h1>{props.mainText}</h1>
            </span>
          </h1>
          <Img sizes={props.data.imageOne.childImageSharp.sizes} />
        </div>
        <div className={carouselStyles.carousel__textContainer}>
          <h1 className={carouselStyles.carousel__leadingText}>
            {props.leadingText}
            <span>
              <h1 className={carouselStyles.carousel__mainText}>{props.mainText}</h1>
            </span>
          </h1>
          <Img sizes={props.data.imageTwo.childImageSharp.sizes} />
        </div>
        <div className={carouselStyles.carousel__textContainer}>
          <h1 className={carouselStyles.carousel__leadingText}>
            {props.leadingText}
            <span>
              <h1>{props.mainText}</h1>
            </span>
          </h1>
          <Img sizes={props.data.imageThree.childImageSharp.sizes} />
        </div>
        <div className={carouselStyles.carousel__textContainer}>
          <h1 className={carouselStyles.carousel__leadingText}>
            {props.leadingText}
            <span>
              <h1>{props.mainText}</h1>
            </span>
          </h1>
          <Img sizes={props.data.imageFour.childImageSharp.sizes} />
        </div>
      </Carousel>
    </div>
  )
}

export default DefaultCarousel
