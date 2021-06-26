import logo from '../assets/healthy.png';
import './Screen.css';

function Screen() {
  return (
    <div className="screen">
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="ball3"></div>
      <div className="ball4"></div>
      <div className="ball5"></div>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default Screen;