import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgotPassword';
import Reset from './pages/resetPassword';

import Alert from './components/alert/Alert';
import Header from './components/header/Header';
import StatusModal from './components/StatusModal';
import NotFound from './components/NotFound';

import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import { getPosts } from './redux/actions/postAction';
import { getSuggestions } from './redux/actions/suggestionsAction';

import io from 'socket.io-client';
import { GLOBALTYPES } from './redux/actions/globalTypes';
import SocketClient from './SocketClient';

import { getNotifies } from './redux/actions/notifyAction';
import CallModal from './components/message/CallModal';
import Peer from 'peerjs';
import News from 'pages/News';
import Message from 'pages/message';
import Conversation from 'pages/message/[id]';

// import Classrooms from './pages/Classrooms';
// import { ClassLayout } from 'layout/ClassLayout';
// import HomeClass from './pages/HomeClass';
// import Exercise from './pages/Exercise';
// import Feedback from './pages/Feedback';
// import Point from './pages/Point';
// import Meeting from './pages/Meeting';
// import Forum from 'pages/Forum';
// import About from './pages/About';
// import AdminRoutes from './routes/AdminRoutes';
// import ProtectedRoutes from './routes/ProtectedRoutes';
// import AdminLayout from './layout/AdminLayout';

// import Profile from './pages/profile/[id]';

function App() {
  const { auth, status, modal, call } = useSelector((state) => state);
  const { isLogged } = auth;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
        }
      });
    }
  }, []);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: '/',
      secure: true,
    });

    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (
    <div className={`App ${(status || modal) && 'mode'}`}>
      <Alert />
      <div className="main">
        {auth.token && <Header />}
        {status && <StatusModal />}
        {auth.token && <SocketClient />}
        {call && <CallModal />}
        <Routes>
          <Route path="/" element={auth.token ? <News /> : <Login />} />
          <Route path="/login" element={auth.token && <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<Forgot />} />
          <Route path="/reset/:token" element={<Reset />} />
          <Route path="/new" element={<News />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message/:id" element={<Conversation />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/classrooms" element={<Classrooms />} />
          <Route path="/classroom">
            <Route path=":id" element={<ClassLayout />}>
              <Route index element={<HomeClass />} />
              <Route path="exercise" element={<Exercise />} />
              <Route path="users" element={<Users />} />

              <Route path="meeting" element={<Meeting />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="point" element={<Point />} />
            </Route>
          </Route>

          <Route path="/forum" element={<Forum />} />
          <Route path="/message" element={<Message />} />
          <Route path="/admin" element={<AdminRoutes />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoutes>
                <AdminLayout />
              </ProtectedRoutes>
            }
          /> */}

          {/* <PrivateRouter path="/:page" element={<RouterRender />} />
        <PrivateRouter path="/:page/:id" element=
        {<RouterRender />} /> */}

          {/* <Route
          path="/admin/*"
          element={
            <ProtectedRoute isAdmin={true}>
              <Admin />
            </ProtectedRoute>
          }
        /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
