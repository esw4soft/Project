import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member.scss'
import '../../style/member/member_photo.scss'
import { devUrl } from '../../config'
import { Card } from 'react-bootstrap'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

function MemberMyPhoto(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [photo, setPhoto] = useState([])
  const [attphoto, setAttphoto] = useState([])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/event/${props.match.params.id}`
    )
      .then((res) => {
        setMemberEvent(res.data[0])
        // console.log(res.data[0])
        if (res.data) {
          console.log(JSON.parse(res.data[0].event_id))
          setEvents(JSON.parse(res.data[0].event_id))
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
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

  const getPhoto = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/event/photo?id=${events.join(
        ','
      )}&member=${props.match.params.id}`
    )
      .then((res) => {
        setPhoto(res.data)
        console.log(res.data)
        setAttphoto(res.data.slice(0, 4))
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
      getPhoto()
    }
  }, [events])

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
                        <h5>我的相簿</h5>
                      </Card.Header>

                      {att.length > 0 ? (
                        <div>
                          <Card.Body
                            style={{ padding: '14px  42px  43px 42px' }}
                          >
                            <div className="d-flex justify-content-start  flex-wrap">
                              {att.map((m) => {
                                return (
                                  <div
                                    className="photo_album  justify-content-start "
                                    style={{ marginRight: '32px' }}
                                  >
                                    <h6 className="subtitle2 albumtitle">
                                      {m.event_name}
                                    </h6>

                                    <div className="img_box d-flex align-items-center position-relative">
                                      <div className="d-flex justify-content-center flex-wrap">
                                        {attphoto.map((p) => {
                                          return (
                                            <img
                                              src={`${devUrl}/pic/event_pic/${p.photo_name}`}
                                              alt="photo1"
                                            ></img>
                                          )
                                        })}
                                      </div>
                                      <figure className="position-absolute addphoto">
                                        <div className="">
                                          <div>
                                            <Link
                                              to={`/member/${props.match.params.id}/MyPhoto/photo`}
                                            >
                                              <MdAddCircle className="justify-content-center" />
                                            </Link>
                                          </div>
                                        </div>
                                      </figure>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </Card.Body>
                        </div>
                      ) : (
                        <div style={{ margin: '32px' }}>
                          <p>目前沒有已完成的活動，尚未建立相簿</p>
                        </div>
                      )}
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

export default withRouter(MemberMyPhoto)
