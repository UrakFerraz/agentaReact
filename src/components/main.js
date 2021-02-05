/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import './main.css';

import Form from './form';
import Tarefas from './tarefas';

export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [],
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { tarefas } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();

      const campo = document.querySelector('.campoTexto').value;

      const campoTrim = campo.trim();

      if (campoTrim === '') return;

      if (tarefas.indexOf(novaTarefa) !== -1) return;

      const novasTarefas = [...tarefas];

      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      });

      if (tarefas.length < 0) {
        document.querySelector('.listaVazia').classList.remove('listaVaziaOculta');
      } else {
        document.querySelector('.listaVazia').classList.add('listaVaziaOculta');
      }
    }

    handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      });
    }

    handleDel = (e, index) => {
      const { tarefas } = this.state;
      const novasTarefas = [...tarefas];
      novasTarefas.splice(index, 1);

      if (novasTarefas.length < 1) document.querySelector('.listaVazia').classList.remove('listaVaziaOculta');

      this.setState({
        tarefas: [...novasTarefas],
      });
    }

    render() {
      const { novaTarefa, tarefas } = this.state;
      return (
        <div className="main">
          <div className="tarefasWrapper">
            <Form
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              novaTarefa={novaTarefa}
            />
            <div className="listaTarefas">
              <div className="listaVazia">
                <span>Nenhum item cadstrado</span>
              </div>
              <Tarefas
                handleDel={this.handleDel}
                tarefas={tarefas}
              />
            </div>
          </div>
        </div>
      );
    }
}
