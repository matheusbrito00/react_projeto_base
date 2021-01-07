import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Falha!');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Requisição!');
      return state;
    }

    default: {
      return state;
    }
  }
}
