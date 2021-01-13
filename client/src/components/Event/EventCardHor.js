import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import { DateConvert } from '../Main/DateTimeConverter'
import { useHistory } from 'react-router-dom'
import '../../style/event/event_card_hor.scss'

function EventCardHor(props) {
  const [isActive, setIsActive] = useState(false)
  const [cardInfo, setCardInfo] = useState(props.initVal)

  let history = useHistory()
  function click2Detail(id) {
    let stringId = JSON.stringify(id)
    console.log(stringId)
    history.push('/event/' + stringId)
  }

  return (
    <>
      <div className="event-card-horizon">
        <div className="d-flex">
          <div>
            <img
              src={devUrl + '/Pic/SVG/bookmark.svg'}
              className="bookmark"
              alt="..."
              onClick={() => setIsActive(true)}
              style={isActive ? { display: 'none' } : { display: 'inline' }}
            />
            <img
              src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
              className="bookmark"
              alt="..."
              onClick={() => setIsActive(false)}
              style={isActive ? { display: 'inline' } : { display: 'none' }}
            />
            <figure className="card-img-top event-photo">
              <img
                src={devUrl + '/pic/event/' + cardInfo.event_photo}
                className="photo"
                alt={cardInfo.event_name}
              />
            </figure>
            <a href="#">
              <div className="more-att">+3</div>
            </a>
            <a href="#">
              <img
                className="second-att"
                src={devUrl + '/pic/pic/member2.jpg'}
              ></img>
            </a>
            <a href="#">
              <img
                className="first-att"
                src={devUrl + '/pic/pic/member3.jpg'}
              ></img>
            </a>
          </div>

          <div className="card-body">
            <h5 className="card-title">{cardInfo.event_name}</h5>
            <div className="t2">
              {/* {cardInfo.event_details} */}
              <div
                dangerouslySetInnerHTML={{ __html: cardInfo.event_details }}
                className="preview"
              ></div>
            </div>
            <div className="d-flex bbb">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <p className="subtitle1 card-text ">{cardInfo.event_location}</p>
            </div>
            <div className="d-flex bbb">
              <img
                className="icon2"
                src="/pic/svg/date_range-24px.svg"
                alt=""
              />
              <p className="card-text d-flex">
                <DateConvert jsonDate={cardInfo.event_start_time} />
              </p>
            </div>
            <div className="d-flex bbb">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <p className="card-text">{cardInfo.event_address}</p>
            </div>
            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <a
                  href="#"
                  className="btn rounded-pill btn-md tag"
                  type="button"
                >
                  {cardInfo.event_type_name}
                </a>
                <a
                  href="#"
                  className="btn rounded-pill btn-md tag aaa"
                  type="button"
                >
                  {cardInfo.event_theme_name}
                </a>
              </div>
              <a
                onClick={() => click2Detail(cardInfo.event_id)}
                className="btn d-flex join"
              >
                參加活動
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCardHor
