import React, { Component } from 'react';

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        this.setTipo = this.setTipo.bind(this); // responsavel por manter a referencia do objeto atual
        this.setNome = this.setTipo.bind(this);
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value });
    }
    setNome(e) {
        this.setState({ nome: e.target.value });
    }
    //onChange={(e) => this.setTipo} /> // se utilizar assim n precisa do bind no construtor
    render() {
        const { tipo, nome } = this.state;
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={this.setNome} />
            </div>
        )
    }
}