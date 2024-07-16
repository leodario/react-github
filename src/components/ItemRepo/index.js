import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {
  
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }
  

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a className='verRepositorio' href={`${repo.html_url}`} rel='noreferrer' target='_blank'>VER REPOSITÓRIO</a>
      
      <a className='remover' onClick={handleRemove} rel='noreferrer' href='#'>REMOVER</a>
      <hr/>
    </ItemContainer>
  )
}

export default ItemRepo;