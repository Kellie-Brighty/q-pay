import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronRight } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    margin: "0px auto",
    padding: "120px 0px",
    maxWidth: 1200,
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  left_box: {},
  first_text: {
    fontSize: 36,
    fontWeight: "500",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  second_text: {
    fontSize: 24,
    fontWeight: "400",
    color: theme.palette.secondary.main,
    width: window.innerWidth * 0.338,
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      width: 325,
      fontSize: 14,
    },
  },
  btn_section: {
    background: "transparent",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    padding: "20px 30px",
    border: "2px solid #1A1A1A",
    borderRadius: 8,
    marginTop: 24,
    cursor: "pointer",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  btn_text: {
    color: theme.palette.primary.white,
    fontSize: 18,
    fontWeight: "500",
    background: "transparent",
  },
  btn_icon: {
    color: theme.palette.primary.white,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5,
    background: "transparent",
  },
  how_box: {
    display: "flex",
    alignItems: "center",
    margin: "48px 0px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 55,
    },
  },
  no_img: {
    width: window.innerWidth * 0.033,
    [theme.breakpoints.down("xs")]: {
      width: 28,
    },
  },
  text_div: {
    marginLeft: 24,
  },
  title_text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  sub_text: {
    fontSize: 18,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    width: window.innerWidth * 0.337,
    marginTop: 8,
    [theme.breakpoints.down("xs")]: {
      width: 276,
      fontSize: 12,
    },
  },
}));

const GetStarted = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.inner_flex}>
        <div className={classes.left_box}>
          <p className={classes.first_text}>How to get started</p>
          <p className={classes.second_text}>
            Opening an account has never been this seamless. From registration
            to withdrawal in four easy steps.
          </p>

          <div className={classes.btn_section}>
            <button className={classes.btn}>
              <span className={classes.btn_text}>Get Started</span>
              <HiChevronRight className={classes.btn_icon} />
            </button>
          </div>
        </div>

        <div className={classes.right_box}>
          <div className={classes.how_box}>
            <img src="no_one.png" className={classes.no_img} />
            <div className={classes.text_div}>
              <p className={classes.title_text}>Register in minutes</p>
              <p className={classes.sub_text}>
                Sign up and create a Qpay with your basic details to get
                started.
              </p>
            </div>
          </div>
          <div className={classes.how_box}>
            <img src="no_two.png" className={classes.no_img} />
            <div className={classes.text_div}>
              <p className={classes.title_text}>Verify your identity</p>
              <p className={classes.sub_text}>
                Complete the easy KYC verifiction levels to start transacting.
              </p>
            </div>
          </div>
          <div className={classes.how_box}>
            <img src="no_three.png" className={classes.no_img} />
            <div className={classes.text_div}>
              <p className={classes.title_text}>Top up your account</p>
              <p className={classes.sub_text}>
                Whether it’s in USD from Payoneer or NGN from a local bank.
              </p>
            </div>
          </div>
          <div className={classes.how_box}>
            <img src="no_four.png" className={classes.no_img} />
            <div className={classes.text_div}>
              <p className={classes.title_text}>
                Withdraw directly into your bank account
              </p>
              <p className={classes.sub_text}>
                You can spend and send money from your Qpay account to a local
                bank or another Qpay account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
