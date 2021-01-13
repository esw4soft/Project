import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 元素
import ClassResult from './pages/Class/ClassResult'
import ClassSearch from './pages/Class/ClassSearch'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <Switch>
            <Route exact path="/class">
              <ClassSearch />
            </Route>
            <Route path="/class/:id?">
              <ClassResult />
            </Route>

            {/* <Route path="/begin">
              <ProductMen />
            </Route>
            <Route path="/cart">
              <ProductMen />
            </Route> */}
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
