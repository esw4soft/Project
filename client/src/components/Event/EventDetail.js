import React, { useState, useEffect } from 'react'
// import '../../style/default.scss'
import '../../style/event/event_detail.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'

//DatePicker
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

// 元素
import EventDetailInfo from './EventDetailInfo'
import Card from './ClassCard2'
import GMap from './GMap'
import Carousel1 from './Carousel1'
import EventDetailAttendant from './EventDetailAttendant'
import EventForum from './EventForum'
import EventRelativeCarousel from './EventRelativeCarousel'

//connect with backend
import Axios from 'axios'

//GMap地圖Pin標記位置
const location = {
  address: '320桃園市中壢區中大路300號',
  lat: 24.96803,
  lng: 121.19498,
}

function EventDetail() {
  const [calenderValue, setcalenderValue] = useState([
    new Date('2021-01-12'),
    new Date('2021-01-15'),
  ])
  const [eventDataList, setEventDataList] = useState([])

  //取得後端資料
  useEffect(() => {
    // console.log(`execute function in useEffect`)
    // fetchEventData()
    Axios.get('http://localhost:5000/api/event')
      .then((response) => {
        setEventDataList(response.data)
      })
      .then(() => console.log(eventDataList))
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  // const fetchEventData = () => {
  //   fetch('http://localhost:5000/api/event')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data', data)
  //       setEventDataList(data)
  //       console.log(eventDataList)
  //     })
  // }

  //google-calendar
  var gapi = window.gapi
  var CLIENT_ID =
    '897217797385-ed32odgg8o4lepjju6fr9f0r3d6e9f6s.apps.googleusercontent.com'
  var API_KEY = 'AIzaSyD3l0MOFo3V54Z5un3apYr4vp165za9LwQ'
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]
  var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load(`calendar`, 'v3', () => console.log(`bam!`))

      gapi.auth2.getAuthInstance().signIn()
    })
  }

  return (
    <>
      <div className="event_wave_background">
        <div className="mainclass_wrapper">
          <div className="page-head">
            <div className="title">
              <h6 className="subtitle1">2020/05/30</h6>
              <h5>阿里山國家公園二日遊輕鬆拍</h5>
            </div>
            <div className="page-head-part2">
              <div className="organizer_info d-flex align-items-center">
                <div className="organizer">
                  <figure>
                    <img src={devUrl + '/Pic/pic/member.jpg'} alt="" />
                  </figure>
                </div>
                <span>
                  張思婷
                  <br />
                  <span style={{ fontSize: '12px' }}>發起的活動</span>
                </span>
              </div>
              <div className="btn_part">
                <button className="btn bttn save rounded-pill">
                  <MdBookmark
                    size={30}
                    style={{ color: 'white', paddingRight: '6px' }}
                  />
                  <span className="align-middle">收藏</span>
                </button>
                <button className="btn bttn share rounded-pill">
                  <MdShare
                    size={30}
                    style={{ color: 'white', paddingRight: '6px' }}
                  />
                  <span className="align-middle">分享</span>
                </button>
              </div>
            </div>
            <div className="bread_crumb">麵包屑放置處</div>
          </div>
          <div className="page-head-part3">
            <div className="content_big_part">
              <div className="class_pic">
                <figure>
                  <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="課程圖片" />
                </figure>
              </div>
              <div className="underline-title">
                <span className="detail-title">詳細資訊</span>
              </div>
              <p>
                攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
                薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。不要先入為主覺得攝影很複雜，實際上，攝影可能比你想的還要更複雜。既然如此，顧炎武講過一段耐人尋思的話，人生富貴駒過隙，唯有榮名壽金石。這句話改變了我的人生。攝影勢必能夠左右未來。一般來說，我認為，話雖如此，做好攝影這件事，可以說已經成為了全民運動。
                雨果說過一句發人省思的話，世上只有兩種力量，一種是劍，一。這是撼動人心的。諸葛亮深信，將不可驕，驕則失禮，失禮則人離，人離則眾叛。但願諸位理解後能從中有所成長。若發現問題比我們想像的還要深奧，那肯定不簡單。看看別人，再想想自己，會發現問題的核心其實就在你身旁。
                攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
                薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。
              </p>
              <div className="underline-title">
                <span className="detail-title">參與者名單</span>
              </div>
              <EventDetailAttendant />
            </div>
            <div className="left_part">
              <EventDetailInfo />

              <Calendar value={calenderValue} />

              <button
                onClick={handleClick}
                className="btn rounded-pill google-calender font-bold"
              >
                <h5>+ 加入Google行事曆</h5>
              </button>

              <div className="gmap">
                <GMap location={location} zoomLevel={15} />
              </div>
            </div>
          </div>
        </div>
        {/* 上波浪 */}
        <div className="wave_background2">
          <img src={devUrl + '/Pic/SVG/wave-darker-blue-1440-01.svg'} />
        </div>
        {/* 討論區 */}
        <div className="forum-wave-height d-flex justify-content-center">
          <EventForum />
        </div>

        {/* 下波浪 */}
        <div className="wave_background3">
          <img src={devUrl + '/Pic/SVG/wave-darker-blue-opposite-1440.svg'} />
        </div>
        {/* 相似活動 */}

        <div className="mainclass_wrapper relative-event">
          <div className="underline-title">
            <span className="detail-title">相似活動</span>
          </div>
          <div className="relative-event-carousel">
            <EventRelativeCarousel />
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetail
