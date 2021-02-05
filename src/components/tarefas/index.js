import React from 'react';
import PropTypes from 'prop-types';
import isRetina from '../isretina';
import imgRecycleBin1x from '../../assets/img/icons/ic-delete.png';
import imgRecycleBin2x from '../../assets/img/icons/ic-delete@2x.png';
import './tarefas.css';

export default function Tarefas({ tarefas, handleDel }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div className="deleteBtn" role="button" tabIndex="0" aria-label="deleta tarefa" onClick={(e) => handleDel(e, index)} onKeyDown={handleDel}>
            <img alt="" src={isRetina(imgRecycleBin1x, imgRecycleBin2x)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDel: PropTypes.func.isRequired,
};
