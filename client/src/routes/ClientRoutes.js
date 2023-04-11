import NotFound from 'components/Common/NotFound';
import HomeClass from 'pages/HomeClass';
import Users from 'pages/Users';
import Exercise from 'pages/Exercise';
import Feedback from 'pages/Feedback';
import Point from 'pages/Point';
import Meeting from 'pages/Meeting';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClassLayout } from 'layout/ClassLayout';

export function ClientRoutes({ classroom }) {
  return (
    <Routes>
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
