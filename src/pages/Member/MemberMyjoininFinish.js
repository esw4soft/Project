import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { MdVisibility, MdBrightnessHigh } from 'react-icons/md'
import '../../style/member/member_navbar.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import {
  DateConvert,
  TimeConvert,
} from '../../components/Main/DateTimeConverter'

function MemberMyjoinin(props) {
  const [memjoininFinish, setMemberjoininFinish] = useState([])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/event_host/finish/${props.match.params.id}`
    )
      .then((res) => {
        setMemberjoininFinish(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper  ">
            <main className="container">
              <aside className="d-flex justify-content-end">
                <br />
                <div>
                  <MemberCard />
                  <br />
                  <MemberNavlist />
                </div>

                <article>
                  <div className="container ">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的揪團</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/Myjoinin`
                              }
                            >
                              發起中
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyjoininFinish`
                              }
                            >
                              已完成
                            </a>
                          </li>
                        </ul>
                        <br />
                        {memjoininFinish.map((val) => {
                          return (
                            <div className="pdCard">
                              <div className="ccard">
                                <div className="d-flex dcard">
                                  <div>
                                    <img
                                      src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                      className="card-img-top photo"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="">
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {val.event_name}
                                      </h5>

                                      <div className="d-flex bbb">
                                        <img
                                          className="icon"
                                          src="/pic/svg/photo-camera.svg"
                                          alt=""
                                        />
                                        <p className="caption">
                                          {val.event_location}
                                        </p>
                                      </div>
                                      <div className="d-flex bbb">
                                        <img
                                          className="icon2"
                                          src="/pic/svg/date_range-24px.svg"
                                          alt=""
                                        />
                                        <p className="caption  d-flex">
                                          <DateConvert
                                            jsonDate={val.event_start_time}
                                          />
                                          &nbsp;~&nbsp;
                                          <DateConvert
                                            jsonDate={val.event_end_time}
                                          />
                                        </p>
                                      </div>
                                      <div className="d-flex bbb">
                                        <img
                                          className="icon3"
                                          src="/pic/svg/location_on-24px.svg"
                                          alt=""
                                        />
                                        <p className="caption ">
                                          {val.event_address}
                                        </p>
                                      </div>
                                      <div className="d-flex justify-content-end btn_group">
                                        <Button
                                          onclick=""
                                          className="btn-style botton-font btn_icon mem_card_btn"
                                        >
                                          <MdVisibility />
                                          活動檢視
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </Card.Body>
                    </Card>
                  </div>
                </article>
              </aside>
            </main>
          </div>
          <br />
        </div>
      </body>
    </>
  )
}

export default withRouter(MemberMyjoinin)
