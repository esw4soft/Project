import React, { useState, useEffect } from 'react'
import '../../style/event/event_detail_attendant.scss'
import { devUrl } from '../../config'
import Axios from 'axios'

function EventDetailAttendant(props) {
  const [detailData, setDetailData] = useState(props.initValue[0])
  console.log(detailData)
  const attendants = JSON.parse(detailData.event_attendents)
  const [attendantsData, setAttendantsData] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/attendants?id=${attendants.join(',')}`)
      .then((response) => {
        setAttendantsData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className="detail-attendant-wrapper d-flex flex-wrap justify-content-start">
        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar">
            <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="" />
          </figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>{detailData.event_host_name}</h6>
            <div className="subtitle2 identity host caption">主揪</div>
          </div>
        </div>
        {attendantsData.map((val) => {
          return (
            <div className="attendant-card  d-flex justify-content-center">
              <figure className="detail-attendant-avatar">
                <img
                  src={`${devUrl}/pic/mem_img/${val.member_img}`}
                  alt={val.member_name}
                />
              </figure>
              <div className="name d-flex flex-column align-items-center">
                <h6>{val.member_name}</h6>
                <div className="subtitle2 identity attendants">參與者</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventDetailAttendant
