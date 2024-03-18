import { useState } from "react";
import Payouts from "./payments/Payouts";
import { getTransactions } from "./payments/utils/transactionData";

function App() {
  return <Payouts />;
}

export default App;
