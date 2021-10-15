import { SET_PERSON_INFO } from '../actions/personsActions';

const INITIAL_STATE = {
  personSelected: {},
  persons: [
    {
      id: '01',
      name: 'Eduardo Silva',
      age: 18,
      ocupation: 'Student'
    },
    {
      id: '02',
      name: 'Fabrício Duarte',
      age: 20,
      ocupation: 'Student'
    },
    {
      id: '03',
      name: 'Clara Drummond',
      age: 25,
      ocupation: 'Librarian'
    },
    {
      id: '04',
      name: 'Maria de Mello',
      age: 23,
      ocupation: 'Junior Developer'
    },
    {
      id: '05',
      name: 'Antônio Gonçalves',
      age: 22,
      ocupation: 'Junior Developer'
    }
  ]
};

const personsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERSON_INFO:
      return { ...state,  personSelected: action.payload}
    default:
      return state;
  }
}

export default personsReducer;
