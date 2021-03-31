import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrincipalMenu } from './components/PrincipalMenu';
import { ClientInfo } from './components/ClientInfo';
import { DetailPayNow } from './components/DetailPayNow';
import { MoveList } from './components/MoveList';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <ClientInfo />
      <PrincipalMenu />
      <DetailPayNow />
      <MoveList />
    </div>
  );
};

export default Home;
