import React from "react";
import { makeStyles } from "@material-ui/styles";
import Globe from '../../svgs/globe_connect.svg'
import "./hero.css";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 60,
    padding: "40px 0px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
      margin: "auto",
      width: 323
    },
  },
  text_box: {
    margin: "0px auto",
    maxWidth: 1200,
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  first_text: {
    color: theme.palette.secondary.main,
    fontSize: 24,
    fontWeight: "500",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  second_text: {
    color: theme.palette.primary.white,
    fontSize: 40,
    fontWeight: "500",
    width: window.innerWidth * 0.467,
    marginTop: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      width: 323,
    },
  },
  first_right_text: {
    color: theme.palette.secondary.main,
    width: window.innerWidth * 0.333,
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      marginTop: 36,
      width: 323,
      fontSize: 18,
    },
  },
  btn_container: {
    display: "flex",
    alignItems: "center",
  },
  hero_btn: {
    display: "flex",
    alignItems: "center",
    padding: "16px 24px",
    background: "#1A1A1A",
    borderRadius: 8,
    marginTop: 20,
    cursor: "pointer",
    border: "none",
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      width: 150,
    },
  },
  btn_icon: {
    width: 25,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: 19,
    },
  },
  get_text: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    width: 88,
    textAlign: "left",
    marginLeft: 14,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  play_store: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  world_box: {
    display: "flex",
    justifyContent: "center",
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      marginTop: 64,
    },
  },
  world_img: {
    width: window.innerWidth * 0.376,
    [theme.breakpoints.down("xs")]: {
      width: 266.25,
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.text_box}>
        <div className={classes.inner_flex}>
          <div className={classes.left_box}>
            <p className={classes.first_text}>
              Better Rates. Swift Payment. Zero Borders.
            </p>
            <p className={classes.second_text}>
              Borderless Payment Solution for the African
              <span className="changing_text" id="flip">
                <div>
                  <div>Freelancer</div>
                </div>
                <div>
                  <div>Enterpreneur</div>
                </div>
                <div>
                  <div>Content Creator</div>
                </div>
              </span>
            </p>
          </div>
          <div className={classes.right_box}>
            <p className={classes.first_right_text}>
              Snap your fingers! That’s how quick you can receive and exchange
              your foreign funds with Qpay.
            </p>
            <div className={classes.btn_container}>
              <button className={classes.hero_btn}>
                <img src="android.png" className={classes.btn_icon} />
                <span className={classes.get_text}>
                  Get it on <br />
                  <span className={classes.play_store}>Play Store</span>
                </span>
              </button>
              <button className={classes.hero_btn} style={{ marginLeft: 16 }}>
                <img src="apple.png" className={classes.btn_icon} />
                <span className={classes.get_text}>
                  Get it on <br />
                  <span className={classes.play_store}>App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.world_box}>
        <img src={Globe} className={classes.world_img} />
      </div>
    </div>
  );
};

export default Hero;
