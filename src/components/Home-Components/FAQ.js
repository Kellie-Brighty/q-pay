import React from "react";
import { makeStyles } from "@material-ui/styles";
import Faq from "react-faq-component";
import { RiArrowRightUpLine } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    justifyContent: "center",
    padding: "120px 0px",
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: "#fff",
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
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Is Qpay secure?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "What is the current exchange rate?",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the minimum deposit?",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "How much is the service charge?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Why can’t I withdraw more than N5,000,000 at once?",
      content: "Lorem ipsum dolor sit amet, consectetur",
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
              rowContentColor: "#48484a",
              rowContentTextSize: "16px",
              rowContentPaddingTop: "10px",
              rowContentPaddingBottom: "10px",
              rowContentPaddingLeft: "50px",
              rowContentPaddingRight: "150px",
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
