import {createActions, handleActions} from 'redux-actions';

/* ----- Initial State ----- */
const initialState = [
    {
        id: 0,
        name: ''
    }
];

/* ----- Action ----- */
// action type 설정
const GET_POKEMONS = 'pokemons/GET_POKEMONS';

// 포켓몬 관련 action 함수
const actions = createActions({
    [GET_POKEMONS]: () => {}
});

/* ----- Reducer ----- */
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, {payload}) => {
            console.log('payload: ', payload);
            return payload;
        }
    }, initialState
);

export default pokemonReducer;