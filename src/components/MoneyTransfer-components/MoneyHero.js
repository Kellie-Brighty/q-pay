import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "60px auto",
  },
  inner_body: {
    width: "100%",
    margin: "auto",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.palette.secondary.main,
    letterSpacing: 4,
  },
  white_title: {
    fontSize: 40,
    fontWeight: "500",
    color: "#fff",
    marginTop: 8,
  },
  grey_text: {
    fontSize: 24,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    width: 1036,
    marginTop: 16,
  },
  btn_container: {
    display: "flex",
    alignItems: "center",
    marginTop: 32
  },
  hero_btn: {
    display: "flex",
    alignItems: "center",
    padding: "16px 24px",
    background: "#1A1A1A",
    borderRadius: 8,
    marginTop: 20,
    cursor: "pointer",
  },
  btn_icon: {
    width: 25,
    background: "transparent",
  },
  get_text: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    width: 88,
    textAlign: "left",
    marginLeft: 14,
    background: "transparent",
  },
  play_store: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    background: "transparent",
  },
}));

const MoneyHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.inner_body}>
        <p className={classes.title}>MONEY TRANSFER</p>
        <p className={classes.white_title}>
          Get paid by foreign clients with no hassle
        </p>
        <p className={classes.grey_text}>
          Convert your foreign funds (USD, EUR & GBP) within the app at better
          market rates in minutes.
        </p>
        <div className={classes.btn_container}>
          <button className={classes.hero_btn}>
            <img src="android.png" className={classes.btn_icon} />
            <span className={classes.get_text}>
              Get it on <span className={classes.play_store}>Play Store</span>
            </span>
          </button>
          <button className={classes.hero_btn} style={{ marginLeft: 16 }}>
            <img src="apple.png" className={classes.btn_icon} />
            <span className={classes.get_text}>
              Get it on <span className={classes.play_store}>App Store</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyHero;
