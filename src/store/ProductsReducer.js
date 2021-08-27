import { ADDPRO } from "../actions/SimpleActions";

const initialState = {
  button: {}
};

const selectData = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRO:
      return {
        ...state,
        button: action.payload.data
      };
    default:
      return state;
  }
};

export default selectData;
