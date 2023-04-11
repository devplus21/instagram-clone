import Header from 'components/header/Header';
import React from 'react';
import { ClientRoutes } from 'routes';

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
