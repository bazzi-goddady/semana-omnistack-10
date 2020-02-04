import React from 'react';

import './styles.css';

export default function DevItem({ dev }) {
  return (
    <li className='dev-item' key={dev._id}>
      <header>
        <img src={dev.avatar_url} alt={dev.name} title={dev.name} />
        <div className='user-info'>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(',', '')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li>
  );
}