import { Button, Checkbox, Col, Form, Input, Modal, Row, Select } from 'antd';
import { validatePassword, validatePhoneNumber, validateEmail } from '../utils/validate.js';
import { useState } from 'react';
import { useAuthStore } from '../stores/authStore.js';
import { alerts } from '../utils/alerts.js';
import SuccessIcon from '../../public/assets/icons/SuccessIcon.jsx';
import FailIcon from '../../public/assets/icons/FailIcon.jsx';

const Register = () => {
  const { register, loading } = useAuthStore((state) => state);
  const [form, setForm] = useState({});
  const [modal, contextHolder] = Modal.useModal();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleShowMess = () => {
    modal.confirm({
      title: 'Chính sách đang được cập nhật',
      content: `Chính sách đang được cập nhật =))`,
    });
  };

  const handleCheck = (e) => {
    const name = 'acceptTerm';
    setForm((prevForm) => ({ ...prevForm, [name]: e.target.checked }));
  };

  const validateRepass = () => {
    if (form.confirmPassword && form.confirmPassword !== form.password) {
      return Promise.reject('Mật khẩu nhập lại không trùng khớp !');
    }
    return Promise.resolve();
  };

  const handleRegister = () => {
    const onSuccess = (response) => {
      alerts.success(`Đăng kí thành công =)) chào ${response?.content?.userName}`);
      success();
    };
    const onFail = (res) => {
      alerts.error(res?.data?.error);
      error();
    };
    const formValue = {
      userName: 'phuctest',
      ...form,
    };
    register(formValue, onSuccess, onFail);
  };

  const success = () => {
    Modal.success({
      content: (
        <div className="w-full">
          <div className="w-full my-[2rem]">
            <SuccessIcon />
          </div>
          <p className="font-semibold text-[2.8rem] text-[#10B981] leading-[3.4rem]">ĐĂNG KÍ THÀNH CÔNG</p>
          <p className="my-[2rem]">Để sử dụng dịch vụ thu hộ, bạn có muốn Ký kết hợp đồng điện tử ngay ?</p>
          <div className="w-70% flex justify-between mx-auto items-center">
            <Button ghost>Đăng nhập</Button>
            <Button type="primary">Ký kết hợp đồng</Button>
          </div>
        </div>
      ),
      width: 560,
    });
  };

  const error = () => {
    Modal.error({
      content: (
        <div className="w-full">
          <div className="w-full my-[2rem]">
            <FailIcon />
          </div>
          <p className="font-semibold text-[2.8rem] text-[#10B981] leading-[3.4rem]">ĐĂNG KÍ KHÔNG THÀNH CÔNG</p>
          <p className="my-[2rem]">Thông tin bạn đăng ký có thể đã trùng với một tài khoản khác trong hệ thống</p>
          <div className="w-70% flex justify-between mx-auto items-center">
            <Button ghost>Bỏ qua đăng kí</Button>
            <Button type="primary">Thử lại</Button>
          </div>
        </div>
      ),
      width: 560,
    });
  };

  return (
    // conatainer
    <div className="w-[100%] mx-auto">
      <p className="text-[#FDBA4D] text-[2.5rem] font-semibold mx-auto w-full text-center pb-[2.7rem]">
        ĐĂNG KÍ TÀI KHOẢN
      </p>

      {contextHolder}
      <Form onFinish={handleRegister} initialValues={{ remember: true }} autoComplete="off">
        {/* agency name + phone number + email */}
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <p>Tên cửa hàng</p>
            <Form.Item
              name="shopName"
              style={{ marginBottom: '4px' }}
              rules={[{ required: true, message: 'Vui lòng nhập tên cửa hàng' }]}
            >
              <Input
                name="shopName"
                placeholder="Nhập tên cửa hàng..."
                className="py-[8px]"
                type="text"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <p>Nhập số điện thoại</p>
            <Form.Item
              name="phoneNumber"
              style={{ marginBottom: '4px' }}
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                {
                  validator(_, value) {
                    if (validatePhoneNumber(value) || !value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Số điện thoại không hợp lệ!'));
                  },
                },
              ]}
            >
              <Input
                placeholder="Nhập số điện thoại..."
                className="py-[8px]"
                type="number"
                name="phoneNumber"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <p>Email</p>
            <Form.Item
              name="email"
              style={{ marginBottom: '4px' }}
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                {
                  validator(_, value) {
                    if (validateEmail(value) || !value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Email không hợp lệ!'));
                  },
                },
              ]}
            >
              <Input
                placeholder="Nhập email..."
                className="py-[8px]"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* password */}
        <Row gutter={[24, 24]} className="my-[2.7rem]">
          <Col span={12}>
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
                    return Promise.reject(
                      new Error('Mật khẩu gồm ít nhất 9 kí tự bao gồm chữ hoa, chữ thường, và số!'),
                    );
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
          <Col span={12}>
            <p>Xác nhận mật khẩu</p>
            <Form.Item
              name="confirmPassword"
              style={{ marginBottom: '4px' }}
              rules={[{ required: true, message: 'Vui lòng xác nhận lại mật khẩu' }, { validator: validateRepass }]}
            >
              <Input.Password
                placeholder="Nhập mật khẩu..."
                className="py-[8px]"
                name="confirmPassword"
                onChange={handleChange}
              />
            </Form.Item>{' '}
          </Col>
        </Row>

        {/* address */}
        <Row gutter={[24, 24]} className="mb-[2.7rem]">
          <Col span={24}>
            <p>Địa chỉ </p>
            <Form.Item name="address" style={{ marginBottom: '4px' }}>
              <Input
                placeholder="Nhập số nhà, tòa nhà, tên đường..."
                className="py-[8px]"
                name="address"
                onChange={handleChange}
              />
            </Form.Item>{' '}
          </Col>
        </Row>

        <Row gutter={[24, 24]} className="mb-[2.7rem]">
          <Col span={8}>
            <p>Phường/ Xã</p>
            <Form.Item name="wards" style={{ marginBottom: '4px' }}>
              <Select
                name="wards"
                defaultValue="Chọn Phường"
                onChange={handleChange}
                options={[
                  {
                    value: 'Bách Khoa',
                    label: 'Bách khoa',
                  },
                  {
                    value: 'Phương Mai',
                    label: 'Phương Mai',
                  },
                  {
                    value: 'Hà Nội',
                    label: 'Hà Nội',
                  },
                  {
                    value: 'Gia Lâm',
                    label: 'Gia Lâm',
                  },
                ]}
              />
            </Form.Item>{' '}
          </Col>
          <Col span={8}>
            <p>Quận/ Huyện </p>
            <Form.Item name="district" style={{ marginBottom: '4px' }}>
              <Select
                name="district"
                defaultValue="Chọn Huyện/ Xã"
                onChange={handleChange}
                options={[
                  {
                    value: 'Đông Anh',
                    label: 'Đông Anh',
                  },
                  {
                    value: 'Mê Linh',
                    label: 'Mê Linh',
                  },
                  {
                    value: 'Sóc SƠn',
                    label: 'Sóc SƠn',
                  },
                  {
                    value: 'Gia Lâm',
                    label: 'Gia Lâm',
                  },
                ]}
              />
            </Form.Item>{' '}
          </Col>
          <Col span={8}>
            <p>Thành Phố</p>
            <Form.Item name="province" style={{ marginBottom: '4px' }}>
              <Select
                name="province"
                defaultValue="Thành Phố"
                onChange={handleChange}
                options={[
                  {
                    value: 'Hà Nội',
                    label: 'Hà Nội',
                  },
                ]}
              />
            </Form.Item>{' '}
          </Col>
        </Row>

        <div className="flex items-center justify-between">
          <Form.Item name="acceptTerm">
            <Checkbox name="acceptTerm" onChange={handleCheck} className="text-[1.6rem] leading-[1.9rem]">
              Tôi đã đọc và đồng ý với
            </Checkbox>
            <span className="text-[#FDBA4D] cursor-pointer" onClick={handleShowMess}>
              Chính sách bảo mật thông tin
            </span>
          </Form.Item>
          <div>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="px-[1.2rem] bg-[#FDBA4D] rounded-md w-full h-[4.3rem]"
            >
              Đăng kí ngay
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Register;
