const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "EDIT_CART":
      return {
        ...state,
        todo: state.products.map(product => product.id === action.payload.id ? (product = action.payload) : product)
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        todos: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};

export default Reducer;