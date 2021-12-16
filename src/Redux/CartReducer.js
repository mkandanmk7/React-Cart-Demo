import data from "../data";

let initialState = {
  allProduct: data,
  products: [],
  quantity: 0,
  total: 0,
  currentProduct: null, //current product
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addProduct": {
      state.products.push(action.payload); // product details appended on products array
      return {
        ...state,
        quantity: state.quantity + 1,
        total: state.total + action.payload.price * action.payload.quantity,
      };
    }

    case "emptyCart": {
      return {
        ...state,
        products: [], //empty the products array
        quantity: 0,
        total: 0,
      };
    }

    case "removeItem": {
      let tempProducts = [...state.products]; //take all prouducts
      //remove the item from cart products
      tempProducts.splice(action.itemNo, 1); //one item
      console.log(tempProducts);

      return {
        state,
        products: [...tempProducts],
        quantity: state.quantity - 1,
        total: state.total - action.product.price * action.product.quantity,
      };
    }
    case "getCurrentProduct": {
      return {
        ...state,
        currentProduct: action.payload,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
