const initialState = {};

const formReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "SUBMIT_FORM_DATA":
      return {
        ...state,
        formData: {},
      };
    default:
      return state;
  }
};

export default formReducer;
