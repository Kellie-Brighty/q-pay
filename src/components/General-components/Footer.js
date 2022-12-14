import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth: 1200,
    margin: "120px auto",
    padding: "40px 0px",
    paddingBottom: 89,
    marginBottom: 0,
  },
  inner_flex: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    background: "transparent",
  },
  footer_box: {},
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.palette.primary.white,
  },
  options: {
    marginTop: 32,
  },
  option: {
    fontSize: 18,
    fontWeight: "400",
    color: theme.palette.secondary.main,
    marginTop: 32,
    cursor: "pointer",
  },
  divider: {
    width: "100%",
    borderTop: `0.5px solid ${theme.palette.secondary.main}`,
    marginTop: 200,
    display: "flex",
    justifyContent: "space-between",
    padding: "32px 0px",
  },
  first_text: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
  social_box: {
    display: "flex",
    alignItems: "center",
    width: 196,
    justifyContent: "space-between",
  },
  social_icon: {
    width: 28,
    cursor: "pointer",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const route = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div className={classes.footer}>
      <div className={classes.inner_flex}>
        <div className={classes.footer_box}>
          <p className={classes.title}>PRODUCTS</p>
          <div className={classes.options}>
            <p
              className={classes.option}
              style={{ marginTop: 0 }}
              onClick={() => route("money_transfer")}
            >
              Money Transfer
            </p>
            <p
              className={classes.option}
              onClick={() => route("currency_exchange")}
            >
              Currency Exchange
            </p>
            <p
              className={classes.option}
              onClick={() => route("virtual_accounts")}
            >
              Multicurrency wallets
            </p>
          </div>
        </div>
        <div className={classes.footer_box}>
          <p className={classes.title}>RESOURCES</p>
          <div className={classes.options}>
            <p className={classes.option} style={{ marginTop: 0 }}>
              FAQs
            </p>
            <p className={classes.option}>Help Center</p>
          </div>
        </div>
        <div className={classes.footer_box}>
          <p className={classes.title}>LEGAL</p>
          <div className={classes.options}>
            <p className={classes.option} style={{ marginTop: 0 }}>
              Privacy Policy
            </p>
            <p className={classes.option}>Terms and Conditions</p>
          </div>
        </div>
        <div className={classes.footer_box}>
          <p className={classes.title}>CONTACT</p>
          <div className={classes.options}>
            <p className={classes.option} style={{ marginTop: 0 }}>
              hello@myqpay.app
            </p>
            <p className={classes.option}>contact@myqpay.app</p>
            <p className={classes.option}>+XXX XXXX XXXX</p>
          </div>
        </div>
      </div>

      <div className={classes.divider}>
        <p className={classes.first_text}>?? Aza Finance, 2022</p>

        <div className={classes.social_box}>
          <img src="twitter.png" className={classes.social_icon} />
          <img src="facebook.png" className={classes.social_icon} />
          <img src="linkedin.png" className={classes.social_icon} />
          <img src="instagram.png" className={classes.social_icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
