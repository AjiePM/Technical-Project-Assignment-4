import {Link} from "react-router-dom"
import Image from '../images/main__header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#HalloEveryone </h4>
          <h1> My name is </h1>
          <h1>Ajie Prana Mesa S.T</h1>
          <p> Fresh Graduated Mechanical Engineering </p>
         
         <Link to="/plans" className='btn lg'></Link>

        </div>
        <div className="main__header-right"></div>
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div> 
    </header>
    
  )
}

export default MainHeader