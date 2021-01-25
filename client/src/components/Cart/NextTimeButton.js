import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/fukuanbutton.scss'

function NextTimeButton(props) {
  return (
    <>
      <div className="fukuanbutton">
        <div className="b1 d-flex">
          <button className="btn d-flex confirmbutton1">繼續購物</button>
          <Link to="/cart" className="btn d-flex confirmbutton2">
            返回首頁
          </Link>
        </div>
      </div>
    </>
  )
}

export default NextTimeButton
