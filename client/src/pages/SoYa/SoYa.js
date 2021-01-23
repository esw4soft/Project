import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Searchbar from '../../components/Soya/Searchbar'
import SoYa1 from '../../components/Soya/SoYa1'
import SoYa2 from '../../components/Soya/SoYa2'
import SoYa3 from '../../components/Soya/SoYa3'
import SoYa4 from '../../components/Soya/SoYa4'
import SoYa5 from '../../components/Soya/SoYa5'

function SoYa(props) {
  const { isAuth, setIsAuth, setConditionsobad } = props
  return (
    <>
      <SoYa1 setConditionsobad={setConditionsobad} />

      <SoYa2 setConditionsobad={setConditionsobad} />
      <SoYa3 />
      <SoYa4 isAuth={isAuth} />
      <SoYa5 />
    </>
  )
}

export default SoYa
