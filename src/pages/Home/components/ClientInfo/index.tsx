import React from 'react';
import './styles.scss';

export const ClientInfo = () => {
  return (
    <div className="App__Principal">
      <div className="App__PrincipalContainer">Hola José</div>
      <div className="App__PrincipalBalance">
        <div className="App__PrincipalBalance--title">SALDO DISPONIBLE</div>
        <div className="App__PrincipalBalance--amount">$1,499,970.00</div>
      </div>
    </div>
  );
};
