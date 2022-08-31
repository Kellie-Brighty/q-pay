import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronRight } from "react-icons/hi";
import svg_two from "../../svgs/svg_two.svg";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 120,
  },
  // title: {
  //   fontSize: 36,
  //   fontWeight: "500",
  //   color: "#fff",
  //   textAlign: "center",
  //   width: window.innerWidth * 0.453,
  //   margin: "0px auto",
  //   [theme.breakpoints.down("xs")]: {
  //     fontSize: 20,
  //     textAlign: "left",
  //     width: 227,
  //     margin: "auto",
  //     // marginTop: 1000,
  //   },
  // },
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
    maxWidth: 1200,
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
    alignItems: "center",
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
    marginTop: 12,
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
  title: {
    letterSpacing: 4,
    fontSize: 14,
    fontWeight: "600",
    color: theme.palette.secondary.main,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      textAlign: "left",
      width: 227,
      // margin: "auto",
      marginTop: 20,
    },
  },
  title_flex: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
  },
  title_white: {
    letterSpacing: 4,
    fontSize: 14,
    fontWeight: "600",
    color: theme.palette.primary.white,
    marginLeft: 8,
  },
}));

const MoneyFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.second_section}>
        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.title}>USERNAMES</p>
                <p className={classes.first_text}>
                  Quickly send money to another{" "}
                  <span className={classes.colored_text}>Qpay user</span>.
                </p>
                <p className={classes.second_text}>
                  Make fast to another Qpay user using their Qpay ID.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>Get your username</span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="usernames.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.title}>
                  QPAY EXPRESS /{" "}
                  <span className={classes.title_white}>COMING SOON</span>
                </p>
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

        <div className={classes.feature_box}>
          <div className={classes.overlay}>
            <div className={classes.inner_flex}>
              <div className={classes.left_feature}>
                <p className={classes.title}>
                  FOREIGN VIRTUAL ACCOUNT /{" "}
                  <span className={classes.title_white}>COMING SOON</span>
                </p>
                <p className={classes.first_text}>
                  Request and get your{" "}
                  <span className={classes.colored_text}>global account</span>.
                </p>
                <p className={classes.second_text}>
                  Create a personal foreign virtual account for your USD, EUR
                  and GBP payments.
                </p>

                <div className={classes.btn_section}>
                  <button className={classes.btn}>
                    <span className={classes.btn_text}>Get Early Access</span>
                    <HiChevronRight className={classes.btn_icon} />
                  </button>
                </div>
              </div>

              <div className={classes.right_feature}>
                <img src="virtual_account.png" className={classes.img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyFeatures;
