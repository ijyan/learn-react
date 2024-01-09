import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function NotFound() {
  return (
    <>
      <Header />
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </>
  );
}

export default NotFound;
