import React from 'react';
import { Link } from 'react-router-dom';

import { AUTH_TOKEN } from '../constants';

export default function Header({ history }) {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const _logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    history.push('/');
  }

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">new</Link>
        <div className="ml1">|</div>
        <Link to="/top" className="ml1 no-underline black">
          top
        </Link>
        <div className="ml1">|</div>
        <Link to="/search" className="ml1 no-underline black">
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">submit</Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div className="ml1 pointer black" onClick={_logout}>logout</div>
        ) : (<Link to="/login" className="ml1 no-underline black">login</Link>)}
      </div>
    </div>
  );
};
