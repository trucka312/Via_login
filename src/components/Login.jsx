import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPInput from 'react-otp-input';

import { Button, Col, Form, Input, Row, Modal } from 'antd';

import { alerts } from '../utils/alerts.js';
import HeaderWaveBottomLogin from '../../public/assets/icons/HeaderWaveBottomLogin.jsx';
import { validatePassword, validateUserName } from '../utils/validate.js';
import { useAuthStore } from '../stores/authStore.js';
import '../../public/assets/styles/inputOpt.css';

const Login = () => {
  // other
  const navigate = useNavigate();
  // store
  const { login, forgotPassword, validateOtp, resetPassword, loading } = useAuthStore((state) => state);
  // state
  const [loginForm, setLoginForm] = useState({});
  const [rePassForm, setRePassForm] = useState({});
  const [forgotPassForm, setForgotPassForm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openModalConfirmOpt, setOpenModalConfirmOpt] = useState(false);
  const [openModalConfirmOptOnFail, setOpenModalConfirmOptOnFail] = useState(false);
  const [openModalConfirmOptOnSuccess, setOpenModalConfirmOptOnSuccess] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(180);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      console.log('time out', timer);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleLogin = () => {
    const onSuccess = (response) => {
      navigate('/homepage');
      alerts.success(`Đăng nhập thành công =)) chào ${response?.content?.userName}`);
    };
    const onFail = (error) => {
      alerts.error(error || 'Oop! something is wrong!');
    };
    login(loginForm, onSuccess, onFail);
  };

  const handleForgotPass = () => {
    const onSuccess = () => {
      hideModal();
      setOpenModalConfirmOpt(true);
      setTimer(180);
    };
    const onFail = (error) => {
      alerts.error(error || 'Oop! something is wrong!');
      hideModal();
    };
    const userName = forgotPassForm;
    forgotPassword(userName, onSuccess, onFail);
  };

  const handleValidateOpt = () => {
    const onSuccess = () => {
      alerts.success('okkkkkkkk');
      setOpenModalConfirmOpt(false);
      setOpenModalConfirmOptOnSuccess(true);
    };
    const onFail = (error) => {
      alerts.error(error || 'Oop! something is wrong!');
      hideModal();
      setOpenModalConfirmOptOnFail(true);
      setOpenModalConfirmOptOnFail(true);
    };
    const userName = forgotPassForm;
    validateOtp(userName, otp, onSuccess, onFail);
  };

  const handleChangePass = () => {
    const onSuccess = () => {
      alerts.success('okkkkkkkk');
      openModalConfirmOptOnSuccess(false);
      countDown();
    };
    const onFail = (error) => {
      alerts.error(error || 'Oop! something is wrong!');
      hideModal();
      openModalConfirmOptOnSuccess(true);
    };
    const form = {
      userName: forgotPassForm,
      otpCode: otp,
      password: rePassForm.password,
      confirmPassword: rePassForm.confirmPassword
    }
    resetPassword(form, onSuccess, onFail);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleChangeRePassForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRePassForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleChangeForgotField = (e) => {
    const value = e.target.value;
    setForgotPassForm(value);
  };

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  const handleBackToForgotPass = () => {
    setOpenModalConfirmOpt(false);
    showModal();
  };

  const validateRepass = () => {
    if (rePassForm.confirmPassword && rePassForm.confirmPassword !== rePassForm.password) {
      return Promise.reject('Mật khẩu nhập lại không trùng khớp !');
    }
    return Promise.resolve();
  };

  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: 'Mật khẩu đã được thiết lập lại',
      content: <div className='items-center w-full mx-auto text-center'>
        <p>Bạn vui lòng ghi nhớ mật khẩu nhé</p>
        <p>Tự động đăng nhập sau {secondsToGo} giây</p>
      </div>,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: <div className='items-center w-full mx-auto text-center'>
        <p>Bạn vui lòng ghi nhớ mật khẩu nhé</p>
        <p>Tự động đăng nhập sau {secondsToGo} giây</p>
      </div>,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <div className="bg-transparent w-[74.8rem] h-[20rem]">
      <p className="font-semibold leading-[2.2rem] text-[1.8rem] text-white mb-[1.6rem]">ĐĂNG NHẬP NGAY!</p>
      <div className="bg-white rounded-[0.4rem] p-[2.8rem] relative z-10">
        {/* modal forgot pass */}
        <Modal
          title="YÊU CẦU THAY ĐỔI MẬT KHẨU"
          open={openModal}
          onOk={hideModal}
          onCancel={hideModal}
          // okText="Gửi yêu cầu"
          cancelText="Quay lại"
          confirmLoading={loading}
        >
          {/* modal enter otp */}
          <Form onFinish={handleForgotPass} initialValues={{ remember: true }} autoComplete="off">
            <div className="mt-[3rem]">
              <p className="mb-[1rem]">Số điện thoại hoặc email</p>
              <Form.Item
                name="userName"
                style={{ marginBottom: '4px' }}
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại hoặc email!' },
                  {
                    validator(_, value) {
                      if (validateUserName(value) || !value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Số điện thoại hoặc email không hợp lệ!'));
                    },
                  },
                ]}
              >
                <Input
                  placeholder="Nhập số điện thoại hoặc email..."
                  className="py-[8px]"
                  type="text"
                  name="userName"
                  onChange={handleChangeForgotField}
                />
              </Form.Item>
            </div>
            <p className="text-[1.6rem] leading-[1.9rem] text-center mt-[4rem]">
              Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện thoại để lấy mã OTP
            </p>
            <div className="w-[40%] mt-[2rem] mx-auto text-center">
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-full h-[4.3rem]"
              >
                Gửi yêu cầu
              </Button>
            </div>
          </Form>
        </Modal>

        {/* confirm OTP modal */}
        <Modal
          title="NHẬP MÃ OTP"
          open={openModalConfirmOpt}
          onOk={() => setOpenModalConfirmOpt(false)}
          onCancel={() => setOpenModalConfirmOpt(false)}
          cancelText="Quay lại"
          confirmLoading={loading}
          width={560}
        >
          <div className="my-[2rem] pr-[62px] w-full">
            <p className="text-[1.9rem] leading-[2.3rem] text-[#10B981] font-semibold">
              MÃ OTP ĐÃ ĐƯỢC GỬI ĐẾN SỐ ĐIỆN THOẠI/EMAIL
            </p>
            <p className="text-[1.8rem] leading-[2.1rem] text-[#ECAD48] text-center mt-[2rem]">
              Thời gian còn lại: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
              {timer % 60} phút
            </p>
            <div className="my-[2rem] ml-[12rem] w-[80%]">
              <OTPInput
                value={otp}
                onChange={setOtp}
                inputType="number"
                numInputs={5}
                renderSeparator={<span className="w-[14px]"></span>}
                inputStyle="border-solid border-[2px] rounded-[4px] border-[#ECAD48] !w-[2.4rem] h-[3.4rem] outline-none"
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <p className="text-[1.8rem] leading-[2.1rem] text-[#4B5768] mt-[2rem] text-center">
              Không nhận được mã OTP.{' '}
              <span className="text-[#0079ED] cursor-pointer" onClick={handleForgotPass}>
                Gửi lại mã
              </span>
            </p>
            <div className="flex justify-between w-50% mt-[2rem] mx-auto">
              <Button className="px-[1.2rem] rounded-md w-[25%] h-[4.3rem]" onClick={handleBackToForgotPass}>
                {'<'} Trở về
              </Button>
              <Button
                loading={loading}
                type="primary"
                className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-[65%] h-[4.3rem]"
                onClick={handleValidateOpt}
              >
                Thay đổi mật khẩu
              </Button>{' '}
            </div>
          </div>
        </Modal>

        {/* confirm repass modal onFail */}
        <Modal
          title="THIẾT LẬP MẬT KHẨU MỚI"
          open={openModalConfirmOptOnFail}
          onOk={() => setOpenModalConfirmOptOnFail(false)}
          onCancel={() => setOpenModalConfirmOptOnFail(false)}
          cancelText="Quay lại"
          confirmLoading={loading}
          width={560}
        >
          <div className="my-[2rem] pr-[62px] w-full">
            <p className="text-[1.8rem] leading-[2.1rem] text-[#4B5768] mt-[2rem] text-center">
              Mã khôi phục không đúng.{' '}
              <span className="text-[#0079ED] cursor-pointer" onClick={handleForgotPass}>
                Gửi lại mã
              </span>
            </p>
            <p className="text-[1.8rem] leading-[2.1rem] text-[#ECAD48] text-center mt-[2rem]">
              Thời gian còn lại: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
              {timer % 60} phút
            </p>
            <div className="my-[2rem] ml-[12rem] w-[80%]">
              <OTPInput
                value={otp}
                onChange={setOtp}
                inputType="number"
                numInputs={5}
                renderSeparator={<span className="w-[14px]"></span>}
                inputStyle="border-solid border-[2px] rounded-[4px] border-[#ECAD48] !w-[2.4rem] h-[3.4rem] outline-none"
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="flex justify-between w-50% mt-[2rem] mx-auto">
              <Button className="px-[1.2rem] rounded-md w-[25%] h-[4.3rem]" onClick={handleBackToForgotPass}>
                {'<'} Trở về
              </Button>
              <Button
                loading={loading}
                type="primary"
                className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-[65%] h-[4.3rem]"
                onClick={handleValidateOpt}
              >
                Thay đổi mật khẩu
              </Button>{' '}
            </div>
          </div>
        </Modal>

        {/* confirm repass modal onSuccess */}
        <Modal
          title="YÊU CẦU THAY ĐỔI MẬT KHẨU"
          open={openModalConfirmOptOnSuccess}
          onOk={() => setOpenModalConfirmOptOnSuccess(false)}
          onCancel={() => setOpenModalConfirmOptOnSuccess(false)}
          cancelText="Quay lại"
          confirmLoading={loading}
        >
          {/* modal enter neww pass */}
          <Form onFinish={handleChangePass} initialValues={{ remember: true }} autoComplete="off">
            <Row gutter={[24, 24]} className="my-[2.7rem]">
              <Col span={24}>
                <p>Mật khẩu mới</p>
                <Form.Item
                  name="password"
                  style={{ marginBottom: '4px' }}
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                    {
                      validator(_, value) {
                        if (validatePassword(value) || !value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('Mật khẩu gồm ít nhất 9 kí tự bao gồm chữ hoa, chữ thường,  và số!'),
                        );
                      },
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Nhập mật khẩu..."
                    className="py-[8px]"
                    name="password"
                    onChange={handleChangeRePassForm}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <p>Xác nhận mật khẩu mới</p>
                <Form.Item
                  name="confirmPassword"
                  style={{ marginBottom: '4px' }}
                  rules={[{ required: true, message: 'Vui lòng xác nhận lại mật khẩu' }, { validator: validateRepass }]}
                >
                  <Input.Password
                    placeholder="Nhập mật khẩu..."
                    className="py-[8px]"
                    name="confirmPassword"
                    onChange={handleChangeRePassForm}
                  />
                </Form.Item>{' '}
              </Col>
              <Col span={7} className="mt-[2rem]">
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-full h-[4.3rem]"
                  >
                    Đăng nhập
                  </Button>
                </Col>
            </Row>
          </Form>
        </Modal>

        {/* change pass success */}
        {contextHolder}

        {/* form login */}
        <Form onFinish={handleLogin} initialValues={{ remember: true }} autoComplete="off">
          <Row>
            <Col span={10}>
              <p>Số điện thoại hoặc email</p>
              <Form.Item
                name="userName"
                style={{ marginBottom: '4px' }}
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại hoặc email!' },
                  {
                    validator(_, value) {
                      if (validateUserName(value) || !value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Số điện thoại hoặc email không hợp lệ!'));
                    },
                  },
                ]}
              >
                <Input
                  placeholder="Nhập số điện thoại hoặc email..."
                  className="py-[8px]"
                  type="text"
                  name="userName"
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Row>
                <Col span={15} className="mx-[1.6rem]">
                  <p>Mật khẩu</p>
                  <Form.Item
                    name="password"
                    style={{ marginBottom: '4px' }}
                    rules={[
                      { required: true, message: 'Vui lòng nhập mật khẩu!' },
                      {
                        validator(_, value) {
                          if (validatePassword(value) || !value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('Mật khẩu phải ít nhất 6 ký tự!'));
                        },
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Nhập mật khẩu..."
                      className="py-[8px]"
                      name="password"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>

                <Col span={7} className="mt-[2rem]">
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-full h-[4.3rem]"
                  >
                    Đăng nhập
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
      <HeaderWaveBottomLogin className="absolute top-[8.8rem] right-[4.5rem]" />
      <div className="flex justify-end ">
        <p
          className="w-[13rem] text-[1.8rem] leading-[2.2rem] text-white cursor-pointer mt-[1.6rem] z-50"
          onClick={showModal}
        >
          Quên mật khẩu
        </p>
      </div>
    </div>
  );
};

export default Login;
