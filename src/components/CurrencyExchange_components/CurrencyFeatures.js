import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronRight } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 120,
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
    width: window.innerWidth * 0.453,
    margin: "0px auto",
  },
  second_section: {
    marginTop: 66,
  },
  feature_box: {
    padding: 80,
    background: "#090909",
    border: "0.5px solid rgb(40, 40, 40)",
    margin: "20px auto",
    maxWidth: 1200,
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    background: "transparent",
    alignItems: "center",
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
    marginTop: 12,
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
  right_feature: {
    background: "transparent",
  },
  img: {
    width: window.innerWidth * 0.277,
    background: "transparent",
  },
  title: {
    letterSpacing: 4,
    fontSize: 14,
    fontWeight: "600",
    color: theme.palette.secondary.main,
  },
  title_flex: {
    display: "flex",
    alignItems: "center",
  },
  title_white: {
    letterSpacing: 4,
    fontSize: 14,
    fontWeight: "600",
    color: theme.palette.primary.white,
    marginLeft: 8,
  },
}));

const CurrencyFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.second_section}>
        <div className={classes.feature_box}>
          <div className={classes.inner_flex}>
            <div className={classes.left_feature}>
              <div className={classes.title_flex}>
                <p className={classes.title}>P2P EXCHANGE /</p>
                <p className={classes.title_white}>COMING SOON</p>
              </div>
              <p className={classes.first_text}>
                Meet with verified{" "}
                <span className={classes.colored_text}>
                  {" "}
                  currency exchangers
                </span>
                .
              </p>
              <p className={classes.second_text}>
                Meet with our Peer-to-Peer currency exchangers at highly
                compettitive exchange rate.
              </p>

              <div className={classes.btn_section}>
                <button className={classes.btn}>
                  <span className={classes.btn_text}>Get Early Access</span>
                  <HiChevronRight className={classes.btn_icon} />
                </button>
              </div>
            </div>

            <div className={classes.right_feature}>
              <img src="p2p_exchange.png" className={classes.img} />
            </div>
          </div>
        </div>

        <div className={classes.feature_box}>
          <div className={classes.inner_flex}>
            <div className={classes.left_feature}>
              <div className={classes.title_flex}>
                <p className={classes.title}>QPAY EXPRESS /</p>
                <p className={classes.title_white}>COMING SOON</p>
              </div>
              <p className={classes.first_text}>
                Get your money wired to naira{" "}
                <span className={classes.colored_text}>in seconds</span>.
              </p>
              <p className={classes.second_text}>
                Just send to Qpay's Exchange hh get it wired into your Naira
                wallet in minutes.
              </p>

              <div className={classes.btn_section}>
                <button className={classes.btn}>
                  <span className={classes.btn_text}>Exchange my money</span>
                  <HiChevronRight className={classes.btn_icon} />
                </button>
              </div>
            </div>

            <div className={classes.right_feature}>
              <img src="qpay_express.png" className={classes.img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyFeatures;
