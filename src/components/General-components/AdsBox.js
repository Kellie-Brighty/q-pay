import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronRight } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    // padding: "120px 0px",
    display: "flex",
    justifyContent: "center",
    border: "1px solid #1A1A1A",
    borderRadius: 8,
    paddingTop: 80,
    // paddingLeft: 80,
    marginBottom: 120,
    maxWidth: 1200,
    margin: "0px auto",
    width: "100%"
  },
  flex_container: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "90%",
    margin: 'auto'
  },
  left_box: {
    width: window.innerWidth * 0.361,
  },
  logo: {
    width: window.innerWidth * 0.083,
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: theme.palette.primary.white,
    marginTop: 24,
  },
  sub_text: {
    color: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: "500",
    width: window.innerWidth * 0.361,
    marginTop: 12,
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
  last_text: {
    marginTop: 64,
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: "500"
  },
  right_box: {
    width: window.innerWidth * 0.412,
    background: "transparent",
    height: "100%",
    overflow: "hidden",
    alignSelf: 'flex-end'
  },
  img: {
    // width: window.innerWidth * 0.382,
    width: 594,
    background: "transparent",
    marginLeft: -50,

  },
}));

const AdsBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.flex_container}>
        <div className={classes.left_box}>
          <img src="logo.png" className={classes.logo} />
          <p className={classes.title}>Get started now, It’s free</p>
          <p className={classes.sub_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim,
            mauris sem neque amet nunc nisl velit tincidunt amet.
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

          <p className={classes.last_text}>
            Better Rates. Swift Payment. Zero Borders.
          </p>
        </div>

        <div className={classes.right_box}>
          <img src="phone.png" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default AdsBox;
