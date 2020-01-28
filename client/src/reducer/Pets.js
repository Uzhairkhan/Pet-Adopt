const petInitState = [];

const petsReducer = (state = petInitState, action) => {
  switch (action.type) {
    case "GET_PETS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default petsReducer;
