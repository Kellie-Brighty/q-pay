import React from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "../components/General-components/Header";
import DynamicNav from "../components/General-components/DynamicNav";
import GetStarted from "../components/General-components/GetStarted";
import AdsBox from "../components/General-components/AdsBox";
import Footer from "../components/General-components/Footer";
import MoneyHero from "../components/MoneyTransfer-components/MoneyHero";
import MoneyFeatures from "../components/MoneyTransfer-components/MoneyFeatures";

const useStyles = makeStyles((theme) => ({
  mainBody: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 25px",
    },
  },
  body: {
    padding: "0px 120px",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 25px",
    },
  },
}));

const MoneyTransfer = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.mainBody}>
        <Header />
      </div>
      <DynamicNav />
      <div className={classes.body}>
        <MoneyHero />
        <MoneyFeatures />
        <GetStarted />
        <AdsBox />
        <Footer />
      </div>
    </div>
  );
};

export default MoneyTransfer;
