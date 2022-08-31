import React from "react";
import { makeStyles } from "@material-ui/styles";
import Faq from "react-faq-component";
import { RiArrowRightUpLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    justifyContent: "center",
    padding: "120px 0px",
    maxWidth: 1200,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  faq_box: {
    margin: "64px 0px",
  },
  text: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  link_text: {
    fontSize: 18,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  text_icon: {
    color: theme.palette.secondary.main,
    fontSize: 18,
    marginLeft: 8,
    cursor: "pointer",
  },
}));

const data = {
  rows: [
    {
      title: "Why should I use Qpay?",
      content:
        "- QPay should be your choice because QPay offers better rates, spending options with fast and secure transactions in an all-in-one solution.",
    },
    {
      title: "Is Qpay secure?",
      content:
        " - The QPay team holds the security of your money and personal credentials as our top priority, for this reason we have partnered with the best institutions to implement top notch encryption and security measures to protect your information.",
    },
    {
      title: "What is the current exchange rate?",
      content:
        "QPay exchange rate depends on the current market rate, feel free to check today's rate on the QPay app.",
    },
    {
      title: "What is the minimum deposit?",
      content:
        "The minimum deposit for Dollar transactions is $50 while maximum is $5000.",
    },
    {
      title: "How much is the service charge?",
      content:
        "Qpay has a deposit charge of 1% for USD transactions, and a  0.5% percent charge on currency exchange.",
    },
    {
      title: "Why can’t I withdraw more than N5,000,000 at once?",
      content:
        "In order to adhere to the policies on money transfer for payment solution providers within Nigeria, QPay has a one-time transaction of #2,000,000",
    },
  ],
};

const FAQ = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div>
        <p className={classes.title}>Let us answer some of your questions</p>
        <div className={classes.faq_box}>
          <Faq
            data={data}
            styles={{
              bgColor: "transparent",
              titleTextColor: "#fff",
              rowTitleColor: "#fff",
              rowTitleTextSize: "18px",
              rowContentColor: "#f9f9f9",
              rowContentTextSize: "16px",
              rowContentPaddingTop: "10px",
              rowContentPaddingBottom: "10px",
              rowContentPaddingLeft: "10px",
              rowContentPaddingRight: "10px",
              arrowColor: "#fff",
            }}
            config={{
              animate: true,
            }}
          />
        </div>
        <div className={classes.text}>
          <p className={classes.link_text}>
            See more Frequently Asked Questions
          </p>
          <RiArrowRightUpLine className={classes.text_icon} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
