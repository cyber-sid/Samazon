export const initialState = {
  basket: [],
  user: null,
};

export const BaskTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Basket":
      // console.log(action);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_Basket":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product{id: ${action.id}} as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "Set_User":
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  }
};

export default reducer;
