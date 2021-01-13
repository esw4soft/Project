import './index.scss'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'
import EventAttendant from './components/Event/EventAttendant'
import Event from './pages/Event/'
import Album from './pages/Event/EventAlbum'
import EventAlbumPhoto from './pages/Event/EventAlbumPhoto'
import EventDetails from './pages/Event/EventDetail'
import SearchTop from './components/Class/SearchTop'
import SearchMain from './components/Class/SearchMain'
import MainClass from './components/Class/MainClass'
import SoYa from './pages/SoYa/SoYa'
import Test from './Test'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/event/:id">
              <EventDetails />
            </Route>
            <Route path="/begin">
              <EventAttendant />
            </Route>
            <Route exact path="/event">
              <Event />
            </Route>
            <Route path="/class">
              <MainClass />
            </Route>
            <Route exact path="/photo">
              <EventAlbumPhoto />
            </Route>
            <Route path="/event/album">
              <Album />
            </Route>
            <Route exact path="/">
              <SoYa />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </>
    </Router>
  )
}

export default App
