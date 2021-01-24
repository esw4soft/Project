import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style/cart/buttonx3.scss'

function Buttonx3(props) {
  return (
    <>
      <div className="d-flex buttonx3">
        <Link to="/cart" className="btn d-flex buttonx3">
          活動
        </Link>
        <Link to="/cart2" className="btn d-flex buttonx3">
          課程
        </Link>
        <Link to="/NextTime" className="btn d-flex buttonx3">
          下次再買
        </Link>
      </div>
    </>
  )
}

export default Buttonx3
