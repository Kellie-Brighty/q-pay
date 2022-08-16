import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Header from "../components/General-components/Header";
import DynamicNav from "../components/General-components/DynamicNav";

const useStyles = makeStyles(theme => ({

}))

const CurrencyExchange = () => {
  return (
    <div>
      <Header />
      <DynamicNav />
      <div style={{ color: "#fff" }}>Currency Exchange</div>
    </div>
  );
}

export default CurrencyExchange