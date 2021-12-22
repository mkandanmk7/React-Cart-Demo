import data from "../data";

let initialState = {
  allProduct: data,

  cart: [],
  currentProduct: null, //current product {}
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addProduct": {
      const item = state.allProduct.find(
        (product) => product.id === action.payload.id
      );
      console.log("find Item", item);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    }

    case "removeCartItem": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case "incQuantity": {
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    }

    case "decQuantity": {
      return {
        ...state,
        quantity: state.quantity - 1,
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

    // case "removeItem": {
    //   return {
    //     ...state,
    //     cart: state.cart.filter((item) => item.id !== action.payload.id),
    //   };
    // }
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
