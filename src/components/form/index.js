import React from 'react';
import PropTypes from 'prop-types';
import imgPlus1x from '../../assets/img/icons/ic-add.png';
import imgPlus2x from '../../assets/img/icons/ic-add@2x.png';
import isRetina from '../isretina';

import './form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input
        className="campoTexto"
        onChange={handleChange}
        type="text"
        tabIndex="0"
        placeholder="Digite"
        value={novaTarefa}
      />
      <button type="submit" id="submitBtn" tabIndex="0">
        <img alt="" src={isRetina(imgPlus1x, imgPlus2x)} />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
