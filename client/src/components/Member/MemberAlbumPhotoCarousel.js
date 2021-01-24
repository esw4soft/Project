import React, { Component } from 'react'
import { devUrl } from '../../config'
import Carousel from 'react-elastic-carousel'
import '../../style/event/event_album_photo_carousel.scss'

class MemberAlbumPhotoCarousel extends Component {
  render() {
    // const { items } = this.state
    return (
      <Carousel
        itemsToScroll={1}
        itemsToShow={1}
        itemPadding={[10, 10, 10, 10]}
        // enableAutoPlay
        // autoPlaySpeed={2000}
      >
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/pic/pic/桌布-德國.jpg'}
            alt=""
          ></img>
          <figcaption>
            <h6>我是標題</h6>
          </figcaption>
        </figure>

        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/pic/pic/桌布-德國.jpg'}
            alt=""
          ></img>
          <figcaption>
            <h6>我是標題</h6>
          </figcaption>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/pic/pic/桌布-德國.jpg'}
            alt=""
          ></img>
          <figcaption>
            <h6>我是標題</h6>
          </figcaption>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/pic/pic/桌布-德國.jpg'}
            alt=""
          ></img>
          <figcaption>
            <h6>我是標題</h6>
          </figcaption>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/pic/pic/桌布-德國.jpg'}
            alt=""
          ></img>
          <figcaption>
            <h6>我是標題</h6>
          </figcaption>
        </figure>
      </Carousel>
    )
  }
}

export default MemberAlbumPhotoCarousel
