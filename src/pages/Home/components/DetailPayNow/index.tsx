import React from 'react';
import './styles.scss';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';

export const DetailPayNow = () => {
  return (
    <div className="App__detailPayment">
      <div className="boxDetail">
        <div className="labelCommon">Tu próximo pago</div>
        <div className="titleOne">$28, 860.00</div>
        <div className="boxDetail__pay">
          <div className="date">
            <div className="labelCommon">Fecha de pago</div>
            <div className="titleTwo">16 de Enero</div>
          </div>
          <div className="payNow">
            <a href="#"> PAGAR AHORA </a>
          </div>
        </div>
        <div className="boxDetail__list">
          <div className="item">
            <AiFillDollarCircle color="#5acaee" />
            <label className="labelMin">Mis logros</label>
          </div>
          <div className="total">$27,250.00</div>
        </div>
        <div className="boxDetail__list">
          <div className="item">
            <FaMoneyCheckAlt color="#5acaee" />
            <label className="labelMin">Compras con TDC</label>
          </div>
          <div className="total2">$1, 600.00</div>
        </div>
      </div>
    </div>
  );
};
