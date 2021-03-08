import { SET_PRODUCTS, SET_SINGLEPRODUCT } from "../constants";

const inicialState = {
  products: [],
  singleProduct: {},
};

const productsReducer = (state = inicialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SINGLEPRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
