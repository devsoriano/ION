import React from 'react';
import './styles.scss';
import { BsStarFill, BsBellFill, BsTagFill } from 'react-icons/bs';

export const PrincipalMenu = () => {
  return (
    <div className="App__principalMenu">
      <div className="contentLogo">
        <div>
          <BsStarFill size="24" color="#fff" />
        </div>
        <label>Crer logo</label>
      </div>
      <div className="contentLogo">
        <div>
          <BsTagFill size="24" color="#fff" />
        </div>
        <label>Crer logo</label>
      </div>
      <div className="contentLogo">
        <div>
          <BsBellFill size="24" color="#fff" />
        </div>
        <label>Crer logo</label>
      </div>
    </div>
  );
};
