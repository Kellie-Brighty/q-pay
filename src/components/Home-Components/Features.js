import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronRight } from "react-icons/hi";
import svg_two from "../../svgs/svg_two.svg";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30,
    },
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    width: window.innerWidth * 0.453,
    margin: "0px auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      textAlign: "left",
      width: 325,
      margin: "auto",
    },
  },
  second_section: {
    marginTop: 66,
    [theme.breakpoints.down("xs")]: {
      marginTop: 48,
    },
  },
  feature_box: {
    background: "#090909",
    border: "0.5px solid rgb(40, 40, 40)",
    margin: "20px auto",
    backgroundImage: `url("${svg_two}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("xs")]: {
      width: 325,
    },
  },
  overlay: {
    padding: 80,
    borderRadius: 8,
    background: "#090909f7",
    [theme.breakpoints.down("xs")]: {
      padding: 30,
    },
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  left_feature: {
    background: "transparent",
  },
  first_text: {
    fontSize: 36,
    fontWeight: "500",
    color: theme.palette.primary.white,
    width: window.innerWidth * 0.347,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      width: 270,
      marginTop: 24,
    },
  },
  colored_text: {
    color: theme.palette.primary.main,
    background: "transparent",
  },
  second_text: {
    color: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: "500",
    width: window.innerWidth * 0.347,
    background: "transparent",
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 257,
    },
  },
  btn_section: {
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
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
      fontSize: 14,
      padding: 15,
      alignItems: "center",
    },
  },
  btn_text: {
    color: theme.palette.primary.white,
    fontSize: 18,
    fontWeight: "500",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  btn_icon: {
    color: theme.palette.primary.white,
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5,
    background: "transparent",
  },
  right_feature: {
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      order: -1,
    },
  },
  img: {
    width: window.innerWidth * 0.277,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: 270,
    },
  },
}));

const Features = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <p className={classes.title}>
        From your oversea employer to your local bank account in minutes
      </p>
      <div className={classes.second_section}>
        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.first_text}>
                  Get access to a{" "}
                  <span className={classes.colored_text}>
                    free local bank account
                  </span>
                  .
                </p>
                <p className={classes.second_text}>
                  Spend and send your local currency to your friends and family
                  from Qpay directly to their local bank.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>
                      Get a free local bank account
                    </span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="local_card.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.first_text}>
                  Top up with any of three{" "}
                  <span className={classes.colored_text}>deposit options</span>.
                </p>
                <p className={classes.second_text}>
                  On Qpay you can fund your Qpay account from either Payoneer,
                  local bank or from your debit card.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>Top up my account</span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="top_up.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.first_text}>
                  Withdraw from marketplaces{" "}
                  <span className={classes.colored_text}>in minutes</span>.
                </p>
                <p className={classes.second_text}>
                  Deposit funds from Payoneer to Qpay in five minutes.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>
                      Get my funds wired in minutes
                    </span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="withdraw.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.first_text}>
                  Exchange your foreign currency{" "}
                  <span className={classes.colored_text}>securely</span>.
                </p>
                <p className={classes.second_text}>
                  Convert your foreign funds (USD, EUR & GBP) within the app at
                  better market rates in minutes.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>
                      Exchange my foreign currency
                    </span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="exchange.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
