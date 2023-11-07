import Register from './components/Register.jsx';
import TypicalCustomers from './components/TypicalCustomers.jsx';
import CardService from './components/CardService.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import HeaderWaveTop from '../public/assets/icons/HeaderWaveTop.jsx';
import HeaderWaveTopRight from '../public/assets/icons/HeaderWaveTopRight.jsx';
import useRoutesElements from './routers/routes.jsx'
import { Col, Row } from 'antd';

function App() {
  const elements = useRoutesElements();
  return (
    // container
    <div className="w-full">
      {/* header */}
      <div className=" h-[45rem] bg-[url('./assets/images/BackGroundHeader.png')] bg-no-repeat bg-cover relative">
        {/* icon area */}
        <div>
          <div className="absolute bg-transparent left-[2rem]">
            <img src="./assets/images/LogoDarkTheme.png" alt="" className="object-cover w-full h-full" />
          </div>
          <HeaderWaveTop className="absolute left-[50%]" />
          <HeaderWaveTopRight className="absolute right-0" />
        </div>
        {/* form login area */}
        <div className="absolute top-[9rem] left-[66rem]">
          <Login />
        </div>
      </div>

      {/* body */}
      <div className="w-10/12 items-center mx-auto mt-[5rem] pb-[8rem]">
        <Row>
          <Col span={14} className="mr-[9rem]">
            <Register />
          </Col>
          <Col span={8}>
            <CardService />
          </Col>
        </Row>
      </div>
      {/* exemplary customers */}
      <div className="">
        <TypicalCustomers />
      </div>
      {/* footer */}
      <div className="">
        <Footer />
      </div>
      <div>
        {elements}
      </div>
    </div>
  );
}

export default App;
