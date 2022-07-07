const rootReducer = (state, action) => {
  switch (action.type) {
    case "withdraw":
      if (state.balance >= action.amount) {
        const withdrawBalance = state.balance - action.amount;
        return { ...state, balance: withdrawBalance };
      }
      return state;
    case "deposit":
      const depoBalance = state.balance + action.amount;
      return { ...state, balance: depoBalance };
    default:
      return state;
  }
};

export const selectUser = (state) => state.user;
export const selectBalance = (state) => state.balance;

export default rootReducer;
