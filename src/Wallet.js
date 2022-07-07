import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { selectBalance, selectUser } from "./rootReducer";
const Wallet = () => {
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);

  const [currentAmount, setCurrentAmount] = useState();

  const dispatch = useDispatch();

  const onWithdraw = (amount) => {
    dispatch({
      type: "withdraw",
      amount,
    });
  };
  const onDeposit = (amount) => {
    dispatch({
      type: "deposit",
      amount,
    });
  };

  return (
    <div className="App">
      <h1> {user}Wallet</h1>
      <h2>Balance: Rp{balance.toLocaleString("ID")}</h2>
      <button onClick={() => onWithdraw(10000)}> Withdraw 10000</button>
      <button onClick={() => onDeposit(10000)}> Deposit 10000</button>
      <br></br>
      <input
        type="number"
        id="nominal"
        onChange={(e) => setCurrentAmount(parseInt(e.target.value))}
      ></input>
      <button onClick={() => onWithdraw(currentAmount)}>Withdraw</button>
      <button onClick={() => onDeposit(currentAmount)}>Deposit</button>
    </div>
  );
};

export default Wallet;
