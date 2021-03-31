import React from 'react';
import type { IList } from './interface';
import './styles.css';

export const MoveList = ({ listMove }: IList) => {
  listMove = [
    {
      id: 'jkfdshujfgdsyuhft765765765765467fdsfdsf',
      name: 'Auto',
      type: 'Mis logros',
      time: '2m',
      cash: '$350,000.00',
      img:
        'https://www.eluniversal.com.mx/sites/default/files/2019/09/24/cavalier_2020_chevrolet_3.jpg',
    },
    {
      id: 'jkfhdskjfhdskjfhkdsjfh877687687687687678',
      name: 'CFE',
      type: 'Pago de servicio',
      time: 'Ayer',
      cash: '$280.00',
      img:
        'https://tvazteca.brightspotcdn.com/dims4/default/cad014a/2147483647/strip/true/crop/800x420+0+90/resize/1200x630!/quality/90/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F4a%2Fb5%2Fe586e9ea237369fac3e211f18604%2Fmoreno-diaz-ex-director-de-cfe-no-podra-ser-detenido.jpg',
    },
    {
      id: 'jkfhdskjfhdskjfhkdsjfh877687687687687678',
      name: 'Netflix',
      type: 'Suscripciones',
      time: 'Ayer',
      cash: '$140.00',
      img: 'https://lavozdgo.com/wp-content/uploads/2020/03/NETFLIX.jpg',
    },
    {
      id: 'jkfhdskjfhdskjfhkdsjfh877687687687687678',
      name: 'Soriana',
      type: 'Compras',
      time: 'Ayer',
      cash: '$2,800.00',
      img:
        'https://pbs.twimg.com/profile_images/1268689045489684489/nkpJrZM__400x400.jpg',
    },
  ];

  return (
    <>
      <div className="App__MoveList">
        <div className="App__MoveList--header">
          <div className="title"> Tus movimientos</div>
          <div className="seeAll">
            <a href="#">Ver todos</a>
          </div>
        </div>
      </div>
      <div className="App__List">
        {listMove.map((move) => (
          <div className="App__List--Item">
            <img src={move.img} alt={move.id} />
            <div className="description">
              <div className="name">{move.name}</div>
              <div className="type">{move.type}</div>
            </div>
            <div className="timeAndCash">
              <div className="time">{move.time}</div>
              <div className="cash">{move.cash}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
