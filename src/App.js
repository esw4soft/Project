import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.scss'
// 頁面元件
import MemberHome from './pages/Member/MemberHome'
import MemberMyjoinin from './pages/Member/MemberMyjoinin'
import MemberMyOrder from './pages/Member/MemberMyOrder'
import MemberCoupon from './pages/Member/MemberCoupon'
import MemberHistory from './pages/Member/MemberHistory'
import MemberMyCollection from './pages/Member/MemberMyCollection'
import MemberMyPhoto from './pages/Member/MemberMyPhoto'
function App() {
  return (
    <>
      <Router>
        <body>
          <Switch>
            <Route path="/member">
              <MemberHome />
            </Route>
            <Route path="/Myjoinin">
              <MemberMyjoinin />
            </Route>
            <Route path="/MyOrder">
              <MemberMyOrder />
            </Route>
            <Route path="/MyCoupon">
              <MemberCoupon />
            </Route>
            <Route path="/MyHistory">
              <MemberHistory />
            </Route>
            <Route path="/MyCollection">
              <MemberMyCollection />
            </Route>
            <Route path="/MyPhoto">
              <MemberMyPhoto />
            </Route>
          </Switch>
        </body>
      </Router>
    </>
  )
}

export default App
