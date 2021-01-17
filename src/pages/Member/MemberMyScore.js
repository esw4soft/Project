import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Button, Accordion } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/member/member_score.scss'
// import Rating from '../../components/Member/rating'
import '../../style/member/member_navbar.scss'
import '../../style/member/member.scss'
import { MdGrade } from 'react-icons/md'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { DateConvert } from '../../components/Main/DateTimeConverter'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const labels = {
  0: '0.0',
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
}
function MemberMyScore(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [score, setScore] = useState([])
  const [member_id, setMemberId] = useState('')
  const [event_id, setEventId] = useState('')
  const [toscore_id, setToscoreId] = useState('')
  // const [rating, setRating] = useState('')
  const [rating_eva, setRatingEva] = useState('')
  const [value, setValue] = React.useState(5)
  const [hover, setHover] = React.useState(-1)

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/event/${props.match.params.id}`
    ).then((res) => {
      if (res.data) {
        setMemberEvent(res.data[0])
        console.log(JSON.parse(res.data[0].event_id))
        setEvents(JSON.parse(res.data[0].event_id))
      } else {
        return
      }
    })
  }

  const getAtt = async () => {
    await Axios.get(
      `http://localhost:3001/member/history/event/att?id=${events.join(',')}`
    )
      .then((res) => {
        setAtt(res.data)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getEvent()
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      getAtt()
    }
  }, [events])

  const Submit = () => {
    Axios.post('http://localhost:3001/member/score', {
      member_id: member_id,
      event_id: event_id,
      toscore_id: toscore_id,
      rating: value,
      rating_evaluate: rating_eva,
    }).then(() => {
      setScore([
        ...score,
        {
          member_id: member_id,
          event_id: event_id,
          toscore_id: toscore_id,
          rating: value,
          rating_evaluate: rating_eva,
        },
      ])
    })
  }
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
                  <div className="container">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的評價</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox"
                      >
                        <ul className="row navbar d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a href="#">未評價</a>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a href="#">已評價</a>
                          </li>
                        </ul>
                        <br />
                        {att.map((m) => {
                          return (
                            <Card.Body style={{ padding: '0' }}>
                              <Accordion>
                                <div className="pd_score">
                                  <div className="ccard">
                                    <div className="d-flex dcard">
                                      <div>
                                        <img
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          className="card-img-top photo"
                                          alt="..."
                                        />
                                      </div>
                                      <div className="">
                                        <div className="card-body">
                                          <h5 className="card-title">
                                            {m.event_name}
                                          </h5>
                                          <div className="d-flex bbb">
                                            <img
                                              className="icon"
                                              src="/pic/svg/photo-camera.svg"
                                              alt=""
                                            />
                                            <p className="caption">
                                              {m.event_location}
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
                                                jsonDate={m.event_start_time}
                                              />
                                              &nbsp;~&nbsp;
                                              <DateConvert
                                                jsonDate={m.event_end_time}
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
                                              {m.event_address}
                                            </p>
                                          </div>
                                        </div>

                                        <div className=" d-flex justify-content-end">
                                          <div>
                                            <Accordion.Toggle
                                              as={Button}
                                              variant="link"
                                              eventKey="0"
                                            >
                                              <Button className="btn-style botton-font btn_icon mem_card_btn btn_toscore">
                                                <MdGrade />
                                                我要評價
                                              </Button>
                                            </Accordion.Toggle>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <Accordion.Collapse eventKey="0">
                                  <form className="mymem_toscoreM">
                                    {/* {score.map((s) => {
                                      return ( */}
                                    <div className="mymem_toscore">
                                      <div className="row mem_toscore_G ">
                                        <figure className="">
                                          <img
                                            className="mem_toscore"
                                            src={
                                              devUrl + '/pic/pic/桌布-德國.jpg'
                                            }
                                            alt="photo1"
                                            style={{ cursor: ' pointer ' }}
                                          ></img>
                                          <figcaption>王陽明</figcaption>
                                        </figure>
                                      </div>
                                      <div className="score_table">
                                        <div className="d-flex mem_toscore_table align-items-center ">
                                          <p className=" d-flex score_p">
                                            評分
                                          </p>
                                          <div className=" d-flex row">
                                            {value !== null && (
                                              <p className=" d-flex align-items-center star_Points">
                                                <Box sml={2}>
                                                  {
                                                    labels[
                                                      hover !== -1
                                                        ? hover
                                                        : value
                                                    ]
                                                  }
                                                </Box>
                                              </p>
                                            )}
                                            <Rating
                                              name="hover-feedback"
                                              value={value}
                                              precision={0.5}
                                              onChange={(event, newValue) => {
                                                setValue(newValue)
                                              }}
                                              onChangeActive={(
                                                event,
                                                newHover
                                              ) => {
                                                setHover(newHover)
                                              }}
                                            />
                                          </div>
                                        </div>
                                        <div className="d-flex mem_toscore_table ">
                                          <p className=" d-flex align-items-start score_p">
                                            評價
                                          </p>
                                          <div class="form-floating">
                                            <textarea
                                              className="form-control ScoText"
                                              placeholder="評價內容"
                                              id="floatingTextarea2"
                                              onChange={(e) => {
                                                setRatingEva(e.target.value)
                                              }}
                                            ></textarea>
                                          </div>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-end ">
                                          <Button
                                            className="btn_sm join d-flex  align-items-center justify-content-center"
                                            // onClick={() => {
                                            //   Submit(s.member_id)
                                            // }}
                                          >
                                            送出
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* )
                                    })} */}
                                  </form>
                                </Accordion.Collapse>
                              </Accordion>
                            </Card.Body>
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

export default withRouter(MemberMyScore)
