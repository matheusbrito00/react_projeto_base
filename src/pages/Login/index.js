import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/globalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/alunos');
  //     const { data } = response;
  //     console.log(data);
  //   }

  //   getData();
  // }, []);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Teste</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Save
      </button>
    </Container>
  );
}
