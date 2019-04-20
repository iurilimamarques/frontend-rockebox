import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleSubmit = async (evento) => {
    evento.preventDefault();

    const response = await api.post('/boxes', {
      title: this.state.newBox,
    });

    this.props.history.push(`/box/${response.data._id}`);
  }

  handleInputChange = (evento) => {
    this.setState({ newBox: evento.target.value })
  }
  
  render() {
    return (
        <div id='main-container'>
            <form onSubmit={this.handleSubmit} action=''>
                <img src={logo} alt=''></img>
                <input
                    placeholder='Criar um box'
                    value={this.state.newBox}
                    onChange={this.handleInputChange}
                />
                <button type='submit'>Criar</button>
            </form>
        </div>
    );
  }
}
