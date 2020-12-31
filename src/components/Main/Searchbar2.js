import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../style/searchbar2.scss'

function Searchbar2(props) {
  return (
    <>
      <div className="searchbarrr">
        <div className="container-fluid mt-5">
          <form className="form-inline md-form mb-4 col-8 m-auto position-relative">
            <img
              src={devUrl + '/pic/pic/icon-action-search_24px.png'}
              alt="Sear"
              className="position-absolute searchicon"
            />

            <input
              className="form-control rounded-pill col-6 searchbarrrr"
              type="text"
              placeholder="尋找活動"
              aria-label="Search"
            />
            <button className="btn rounded-pill btn-md sub" type="submit">
              搜尋
            </button>
          </form>
          <div className="mr-auto mb-4 col-8 m-auto tags d-flex">
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img src={devUrl + '/pic/pic/location_on-24px.png'} alt="Loca" />
              地點(縣市)
            </button>
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img src={devUrl + '/pic/pic/date_range-24px.png'} alt="Date" />
              時間
            </button>
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img
                src={devUrl + '/pic/pic/filter_vintage-24px.png'}
                alt="Vint"
              />
              類型
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar2
