import React from 'react'
import '../../style/default.scss'
import '../../style/member/member_card.scss'
import '../../style/member/member_pdcard.scss'
import { devUrl } from '../../config'
import { Button } from 'react-bootstrap'
import '../../style/member/member_content.scss'
import { MdVisibility, MdBrightnessHigh } from 'react-icons/md'
function MemberPdCard() {
  return (
    <>
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
              <h5 className="card-title">四草綠意盎然 台南七股一日遊</h5>

              <div className="d-flex bbb">
                <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
                <p className="card-text">四草綠色隧道 </p>
              </div>
              <div className="d-flex bbb">
                <img
                  className="icon2"
                  src="/pic/svg/date_range-24px.svg"
                  alt=""
                />
                <p className="card-text d-flex">2021-01-28 </p>
              </div>
              <div className="d-flex bbb">
                <img
                  className="icon3"
                  src="/pic/svg/location_on-24px.svg"
                  alt=""
                />
                <p className="card-text">台南市歸仁區歸仁大道100號 </p>
              </div>
              <div className="d-flex justify-content-end btn_group">
                <Button
                  onclick=""
                  className="btn-style botton-font btn_icon mem_card_btn"
                >
                  <MdVisibility />
                  活動檢視
                </Button>

                <Button
                  onclick=""
                  className="btn-style botton-font btn_icon mem_card_btn btn_edit"
                >
                  <MdBrightnessHigh />
                  活動編輯
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MemberPdCard
