import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_result.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'
import EventCardHor from './EventCardHor'
import Pagination from '../Main/Pagination'
import { withRouter, useHistory } from 'react-router-dom'

//connect with backend
import Axios from 'axios'

function EventResult(props) {
  // console.log(props)
  let history = useHistory()

  const {
    locate = '',
    searchbar = '',
    theme = '',
    time = '',
    type = '',
  } = props.condition

  const [displayCard, setDisplayCard] = useState(true)
  const [eventResult, setEventResult] = useState([])

  // 取得後端資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/eventsearch?locate=${locate}&searchbar=${searchbar}&theme=${theme}&time=${time}&type=${type}`
    )
      .then((response) => {
        // console.log(response)
        setEventResult(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [locate, searchbar, theme, time])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = eventResult.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const resultCard = (
    <div className="result-card d-flex flex-wrap justify-content-start">
      {currentPosts.map((val) => {
        return <EventCardVer initVal={val} />
      })}
    </div>
  )
  const resultList = (
    <div className="result-list d-flex justify-content-start flex-wrap">
      {currentPosts.map((val) => {
        return <EventCardHor initVal={val} />
      })}
    </div>
  )

  return (
    <>
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">
              搜尋結果 共{eventResult.length}筆
            </h6>
          </div>
          <div className="result-icon d-inline-block">
            <img
              className=" c-icon"
              src={devUrl + '/Pic/SVG/d-card-unselected.svg'}
              alt=""
              onClick={() => setDisplayCard(true)}
              style={
                displayCard
                  ? { display: 'none' }
                  : { display: 'inline-block', marginRight: '44px' }
              }
            />
            <img
              className=" c-icon card-selected"
              src={devUrl + '/Pic/SVG/d-card-selected.svg'}
              alt=""
              onClick={() => setDisplayCard(false)}
              style={{ display: displayCard ? 'inline-block' : 'none' }}
            />
            <img
              className=" c-icon"
              src={devUrl + '/Pic/SVG/d-list-unselected.svg'}
              alt=""
              onClick={() => setDisplayCard(false)}
              style={{ display: displayCard ? 'inline-block' : 'none' }}
            />
            <img
              className=" c-icon list-selected"
              src={devUrl + '/Pic/SVG/d-list-selected.svg'}
              alt=""
              onClick={() => setDisplayCard(true)}
              style={{ display: displayCard ? 'none' : 'inline-block' }}
            />
          </div>
        </div>
        <div className="divider"></div>
        {eventResult.length > 0 ? (
          <div className="have-result d-flex justify-content-center">
            {displayCard ? resultCard : resultList}
          </div>
        ) : (
          <div className="no-result ">
            <h5>很抱歉，未找到符合的搜尋結果。</h5>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary rounded-pill"
                onClick={() => {
                  window.location.reload()
                }}
              >
                返回全部活動
              </button>
            </div>
          </div>
        )}

        <div className="page ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={eventResult.length}
            paginate={paginate}
            className="pagination"
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(EventResult)
