import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { HiChevronDown } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  border_bottom: {
    borderTop: "2px solid #1A1A1A",
    padding: "30px 120px",
    maxWidth: 1200,
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 25px",
    },
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  white_text: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.primary.white,
    marginLeft: 8,
    // [theme.breakpoints.down("xs")]: {
    //   width: 196,
    // },
  },
  product_text: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 375,
    },
  },
  down_arrow: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
  menu_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menu_item: {
    fontSize: 18,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menu_item_sub: {
    fontSize: 18,
    fontWeight: "500",
    color: theme.palette.secondary.main,
    cursor: "pointer",
    marginLeft: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const DynamicNav = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;

  return (
    <div className={classes.border_bottom}>
      <div className={classes.inner_flex}>
        <p className={classes.product_text}>
          Products /{" "}
          <span className={classes.white_text}>
            {pathname === "/money_transfer"
              ? "Money Transfer"
              : pathname === "/currency_exchange"
              ? "Currency Exchange"
              : pathname === "/virtual_accounts"
              ? "Virtual Accounts"
              : "A path"}
            <HiChevronDown className={classes.down_arrow} />
          </span>
        </p>

        {pathname === "/money_transfer" ? (
          <div className={classes.menu_box}>
            <p className={classes.menu_item}>QPay Express</p>
            <p className={classes.menu_item_sub}>Foreign Virtual Accounts</p>
            <p className={classes.menu_item_sub}>Usernames</p>
          </div>
        ) : (
          <>
            {pathname === "/currency_exchange" ? (
              <>
                <div className={classes.menu_box}>
                  <p className={classes.menu_item}>P2P Exchange</p>
                  <p className={classes.menu_item_sub}>QPay Express</p>
                </div>
              </>
            ) : (
              <>
                {pathname === "/virtual_accounts" ? (
                  <>
                    <div className={classes.menu_box}>
                      <p className={classes.menu_item}>Virtual Account</p>
                      <p className={classes.menu_item_sub}>Virtual Card</p>
                      <p className={classes.menu_item_sub}>
                        Multicurrency wallets
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicNav;
