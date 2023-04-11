import React from 'react';
import { ClientRoutes } from 'routes';
import Header from '../components/Header/Header';

export function ClientLayout() {
  return (
    <div className="client">
      <Header />
      <div className="client_content">
        <ClientRoutes />
      </div>
    </div>
  );
}
