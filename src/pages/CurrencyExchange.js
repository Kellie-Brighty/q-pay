import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "../components/General-components/Header";
import DynamicNav from "../components/General-components/DynamicNav";
import CurrencyHero from "../components/CurrencyExchange_components/CurrencyHero";
import CurrencyFeatures from "../components/CurrencyExchange_components/CurrencyFeatures";
import GetStarted from "../components/General-components/GetStarted";
import AdsBox from "../components/General-components/AdsBox";
import Footer from "../components/General-components/Footer";

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

const CurrencyExchange = () => {
  const classes = useStyles();

  useEffect(() => {
    // scrollToTop()
    console.log(document.body.scrollTop);
  }, []);

  return (
    <div>
      <div className={classes.mainBody}>
        <Header />
      </div>
      <DynamicNav />
      <div className={classes.body}>
        <CurrencyHero />
        <CurrencyFeatures />
        <GetStarted />
        <AdsBox />
        <Footer />
      </div>
    </div>
  );
};

export default CurrencyExchange;
