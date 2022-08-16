import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "../components/General-components/Header";
import DynamicNav from "../components/General-components/DynamicNav";
import GetStarted from "../components/General-components/GetStarted";
import AdsBox from "../components/General-components/AdsBox";
import Footer from "../components/General-components/Footer";
import VirtualHero from "../components/VirtualAccounts_components/VirtualHero";
import VirtualFeatures from "../components/VirtualAccounts_components/VirtualFeatures";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0px 120px",
    color: "#fff",
  },
}));

const VirtualAccounts = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    if (document.body.scrollTop > 0) {
      document.body.scrollTop = 0;
    }
  };
  window.onscroll = scrollToTop()

  useEffect(() => {
    scrollToTop()
    console.log(document.body.scrollTop)
  }, [])

  return (
    <div>
      <Header />
      <DynamicNav />
      <div className={classes.body}>
        <VirtualHero />
        <VirtualFeatures />
        <GetStarted />
        <AdsBox />
        <Footer />
      </div>
    </div>
  );
};

export default VirtualAccounts;
