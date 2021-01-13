import React from 'react';
import ReactDOM from 'react-dom';
//import BomDia from './componentes/BomDia'; 
//import { BoaTarde, BoaNoite } from './componentes/Multiplos'; // Uma forma de importa mais de um componente
//import Multiplos from './componentes/Multiplos'; // importando usando objeto
//import Saudacao from './componentes/Saudacao'; // importando usando objeto
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>,
    document.getElementById('root'));

