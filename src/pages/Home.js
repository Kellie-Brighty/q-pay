import React from 'react'
import Header from '../components/General-components/Header';
import { makeStyles } from '@material-ui/styles';
import Hero from '../components/Home-Components/Hero';
import Features from '../components/Home-Components/Features';
import GetStarted from '../components/General-components/GetStarted';
import FAQ from '../components/Home-Components/FAQ';
import AdsBox from '../components/General-components/AdsBox';
import Footer from '../components/General-components/Footer';

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0px 120px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 25px"
    },
  },
}));

const Home = () => {
    const classes = useStyles();
  return (
    <div className={classes.body}>
        <Header />
        <Hero />
        <Features /> 
        <GetStarted />
        <FAQ />
        <AdsBox />
        <Footer />
    </div>
  )
}

export default Home