import React from "react";
import WithCommonMenus from '../../HOC/WithCommonMenus'
import Ticket from "../../Components/Ticket/Ticket";

const Transaction = () => {
  return (
    <Ticket />
  );
};

export default WithCommonMenus(Transaction);
