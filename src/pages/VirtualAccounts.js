import React from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "../components/General-components/Header";
import DynamicNav from "../components/General-components/DynamicNav";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0px 120px",
    color: "#fff",
  },
}));

const VirtualAccounts = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <DynamicNav />
      <div style={{ color: "#fff" }}>Virtual Accounts</div>
    </div>
  );
};

export default VirtualAccounts;
