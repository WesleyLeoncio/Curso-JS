import React from 'react';

// Formas de renderizar varios componentes

const BomDia = (props) =>
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Sua idade: {props.idade}</h2>
    </div>


/*const BomDia = (props) =>
    <React.Fragment>
        <h1> Bom dia {props.nome}</h1>
        <h2>Sua idade: {props.idade}</h2>
    </React.Fragment>*/

/*const BomDia = (props) =>
    [
        <h1 key='h1'> Bom dia {props.nome}</h1>, // quando usa array tem q colocar uma key
        <h2 key='h2'>Sua idade: {props.idade}</h2>
    ]*/

export default BomDia;
