import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { resetPassword } from "../redux/actions/authAction";
import { postDataAPI } from '../utils/fetchData';
import { GLOBALTYPES } from '../redux/actions/globalTypes';
import validReset from '../utils/validreset';

function ResetPassword() {
  const { token } = useParams();
  const { auth, alert } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    password: '',
    cf_password: '',
  };

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  const [data, setData] = useState(initialState);

  const { password, cf_password } = data;
  useEffect(() => {
    if (auth.token) navigate('/');
  }, [auth.token, navigate]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: '', success: '' });
  };
  const handleSubmit = async (dispatch) => {
    // e.preventDefault();
    const check = validReset(data);
    if (check.errLength > 0)
      return dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });
    try {
      const res = await postDataAPI('reset', data, token);
      setData({ ...data });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          success: res.data.msg,
        },
      });
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err.response.data.msg,
        },
      });
    }

    // dispatch(resetPassword(data, token));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Instagram</h3>

        <div className="form-group">
          <h5 className="text-uppercase text-center mb-4">Đặt Lại Mật Khẩu</h5>

          <label htmlFor="exampleInputPassword1">Mật Khẩu</label>

          <div className="pass">
            <input
              type={typePass ? 'text' : 'password'}
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleChangeInput}
              value={password}
              name="password"
              style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
            />

            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>

          <small className="form-text text-danger">
            {alert.password ? alert.password : ''}
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="cf_password">Nhập Lại Mật Khẩu</label>

          <div className="pass">
            <input
              type={typeCfPass ? 'text' : 'password'}
              className="form-control"
              id="cf_password"
              onChange={handleChangeInput}
              value={cf_password}
              name="cf_password"
              style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
            />

            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? 'Hide' : 'Show'}
            </small>
          </div>

          <small className="form-text text-danger">
            {alert.cf_password ? alert.cf_password : ''}
          </small>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Hoàn Thành
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
