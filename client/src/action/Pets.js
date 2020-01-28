import axios from "../config/Axios";

export const getPets = (pets) => {
  return {
    type: "GET_PETS",
    payload: pets
  };
};

export const startGetPets = () => {
  return (dispatch) => {
    axios
      .get("/pets")
      .then((response) => {
        const pets = response.data;
        dispatch(getPets(pets));
      })
      .catch((err) => console.log(err));
  };
};
