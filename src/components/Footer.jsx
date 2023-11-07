import { Col, Row } from 'antd';
import LogoLightThemeIcon from '../../public/assets/icons/LogoLightThemeIcon.jsx';
import FacebookIcon from '../../public/assets/icons/facebookIcon.jsx';
import InstagramIcon from '../../public/assets/icons/InstagramIcon.jsx';
import TiktokIcon from '../../public/assets/icons/TiktokIcon.jsx';
import YoutubeIcon from '../../public/assets/icons/YoutubeIcon.jsx';
import ZaloIcon from '../../public/assets/icons/ZaloIcon.jsx';
import MailIcon from '../../public/assets/icons/MailIcon.jsx';
import AddressIcon from '../../public/assets/icons/AddressIcon.jsx';
import PhoneIcon from '../../public/assets/icons/PhoneIcon.jsx';

const Footer = () => {
  return (
    // container
    <div className="bg-[#DCA245] mx-auto ">
      <div className="py-[4.8rem] w-[80%] mx-auto gap-[8rem]">
        <div className="pb-[1.6rem]">
          <LogoLightThemeIcon />
        </div>
        <div className="">
          <Row>
            <Col span={8} className="pr-[8rem]">
              <p className="font-semibold text-[1.3rem] leading-[1.8rem] text-white pb-[1rem]">
                CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT
              </p>
              <p className="text-[1.3rem] text-white leading-[1.8rem]">Mã Số Thuế: 0106494214</p>
              <p className="text-[1.3rem] text-white leading-[1.8rem]">Ngày hoạt động: 27/03/2014 </p>
              <p className="text-[1.3rem] text-white leading-[1.8rem]">Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</p>
              <div className="flex justify-between w-2/3 mt-[4.8rem]">
                <FacebookIcon />
                <InstagramIcon />
                <TiktokIcon />
                <YoutubeIcon />
                <ZaloIcon />
              </div>
            </Col>
            <Col span={8} className="pr-[8rem]">
              <p className="font-semibold text-[1.3rem] leading-[1.8rem] text-white pb-[1rem]">LIÊN HỆ</p>
              <div className="flex">
                <MailIcon />
                <p className="text-[1.3rem] ml-[6px] text-white leading-[1.8rem]">contact@viajsc.com</p>
              </div>
              <div className="flex">
                <PhoneIcon />
                <p className="text-[1.3rem] ml-[6px] text-white leading-[1.8rem]">1900 9999</p>
              </div>
              <div className="flex">
                <AddressIcon />
                <p className="text-[1.3rem] ml-[6px] text-white leading-[1.8rem]">
                  16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN{' '}
                </p>
              </div>
              <div className="mt-[4.8rem]">
                <img src="./assets/images/icon-bct.png" alt="" />
              </div>
            </Col>
            <Col span={8} className="pr-[8rem]">
              <p className="font-semibold text-[1.3rem] leading-[1.8rem] text-white pb-[2rem]">TẢI ỨNG DỤNG</p>
              <div className="flex gap-[2rem]">
                <div className="">
                  <img src="./assets/images/QR-code.png" alt="" />
                </div>
                <div className="">
                  <img src="./assets/images/appStore.png" alt="" className="w-[11rem]" /> <br />
                  <img src="./assets/images/ggPlay.png" alt="" className="w-[12.5rem] ml-[-0.7rem]" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="text-center py-[1.6rem]">
        <p className="font-semibold text-[1.3rem] leading-[1.8rem] text-white pb-[1.6rem]">Chính sách bảo mật</p>
        <p className="text-[1.3rem] leading-[1.8rem] text-white">Copyright © 2021 VIA JSC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
