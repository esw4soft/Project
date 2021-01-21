import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Button } from 'react-bootstrap'
import { MdCreate } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/member/member_score.scss'
import Axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import ValidMemberPassword from '../../components/Member/ValidMemberPassword'
import { Formik, Field, Form, ErrorMessage } from 'formik'

function MemberMyManagement(props) {
  Axios.defaults.withCredentials = true

  // 做驗證
  const ValidMemberP = async (fields) => {
    // console.log(fields)
    const isValid = await ValidMemberPassword.isValid(fields)
    // console.log(isValid)
    if (isValid) {
      passwordpass(fields)
    }
  }

  // 船去資料庫
  const passwordpass = (fields) => {
    Axios.post('http://localhost:3001/passwordpass', {
      passwordConfirmation: fields.passwordConfirmation,
    }).then(() => {
      // 返回的位置
      props.history.goBack()
    })
  }
  const [member, setMember] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
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
                  <div className="container">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>帳號管理</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  42px  43px 42px' }}
                        className="navbarbox "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyManagement`
                              }
                            >
                              修改密碼
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyManagement/Delete`
                              }
                            >
                              刪除帳號
                            </a>
                          </li>
                        </ul>
                        <br />
                        {/* {member.map((val) => {
                          return ( */}
                        <Formik
                          // 初始值
                          initialValues={{
                            nowpass: '',
                            password: '',
                            passwordConfirmation: '',
                          }}
                          // 驗證表單,提交
                          validationSchema={ValidMemberPassword}
                          onSubmit={(fields) => {
                            ValidMemberP(fields)
                          }}
                        >
                          <Form className="p-3">
                            <div className="contentboxinput mb-4">
                              <div className="starbox d-flex">
                                <div className="startitle">*</div>
                                <div className="starafter mb-3">現有密碼</div>
                              </div>

                              <div className="inputbox">
                                <Field
                                  name="nowpass"
                                  type="password"
                                  className="form-control form-control-md card-input col-5"
                                />
                                <ErrorMessage
                                  name="nowpass"
                                  className="invalid-feedback"
                                >
                                  {(msg) => (
                                    <div
                                      style={{
                                        color: 'red',
                                        height: '0',
                                      }}
                                    >
                                      {msg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>

                            <div className="contentboxinput mb-4">
                              <div className="starbox d-flex">
                                <div className="startitle">*</div>
                                <div className="starafter mb-3">更改密碼</div>
                              </div>

                              <div className="inputbox">
                                <Field
                                  name="password"
                                  type="password"
                                  placeholder="更改密碼"
                                  className="form-control form-control-md card-input col-5"
                                />
                                <ErrorMessage
                                  name="password"
                                  className="invalid-feedback"
                                >
                                  {(msg) => (
                                    <div
                                      style={{
                                        color: 'red',
                                        height: '0',
                                      }}
                                    >
                                      {msg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>

                            <div className="contentboxinput mb-4">
                              <div className="starbox d-flex">
                                <div className="startitle">*</div>
                                <div className="starafter mb-3">確認密碼</div>
                              </div>

                              <div className="inputbox">
                                <Field
                                  name="passwordConfirmation"
                                  type="password"
                                  placeholder="確認密碼"
                                  className="form-control form-control-md card-input col-5"
                                />
                                <ErrorMessage
                                  name="passwordConfirmation"
                                  className="invalid-feedback"
                                >
                                  {(msg) => (
                                    <div
                                      style={{
                                        color: 'red',
                                        height: '0',
                                      }}
                                    >
                                      {msg}
                                    </div>
                                  )}
                                </ErrorMessage>
                              </div>
                            </div>

                            <div className="d-flex justify-content-end">
                              <Button
                                onclick=""
                                className="btn-style botton-font btn_icon mem_card_btn col-2"
                                type="submit"
                              >
                                <MdCreate />
                                確認修改
                              </Button>
                            </div>
                          </Form>
                        </Formik>
                        {/* )
                        })} */}
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

export default withRouter(MemberMyManagement)
