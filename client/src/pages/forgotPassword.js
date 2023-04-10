import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword } from '../redux/actions/authAction';

const ForgotPassword = () => {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    email: '',
  };

  const [data, setData] = useState(initialState);

  const { email } = data;
  useEffect(() => {
    if (auth.token) navigate('/');
  }, [auth.token, navigate]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setData({ ...data });
    dispatch(forgotPassword(data));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Instagram</h3>

        <div className="form-group">
          <h5 className="text-uppercase text-center mb-4">Quên Mật Khẩu ?</h5>

          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleChangeInput}
            value={email}
            style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }}
          />

          <small className="form-text text-danger">
            {alert.email ? alert.email : ''}
          </small>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Xác Thực Email
        </button>

        {/* <p className="my-2">
          Bạn Không Quên Mật Khẩu?{" "}
          <Link to="/" style={{ color: "crimson" }}>
            Hãy Đăng Nhập
          </Link>
        </p> */}
      </form>
    </div>
  );
};

export default ForgotPassword;
