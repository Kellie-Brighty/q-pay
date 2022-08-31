import React, { useState } from "react";
import { makeStyles, Modal } from "@material-ui/core";
import { HiChevronDown, HiOutlineMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "transparent",
    padding: "40px 0px",
    margin: "auto",
    maxWidth: 1200,
    [theme.breakpoints.down("xs")]: {},
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo_box: {},
  logo: {
    width: 114.14,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: 83,
    },
  },
  menu_box: {
    display: "flex",
    alignItems: "center",
    width: 578,
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menu_icon: {
    display: "none",
    transition: ".5s",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      color: "#fff",
      fontSize: 30,
    },
  },
  menu_item: {
    cursor: "pointer",
  },
  menu_text: {
    color: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: "500",
  },
  menu_item_mobile: {
    cursor: "pointer",
    background: "transparent",
    margin: "24px 0px"
  },
  menu_text_mobile: {
    color: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: "500",
    background: "transparent",
  },
  menu_dropdown_icon: {
    color: theme.palette.secondary.main,
    fontSize: 18,
  },
  button: {
    color: theme.palette.primary.white,
    padding: "20px 30px",
    border: "2px solid #1A1A1A",
    cursor: "pointer",
    borderRadius: 8,
  },
  modal_main: {
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  modal_body: {
    display: "flex",
    justifyContent: "center",
    outline: "none",
    alignItems: "center",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: 258,
      margin: "auto",
    },
  },
  inner_modal: {
    color: "#fff",
    marginTop: 100,
    background: "transparent",
    background: "#090909",
    padding: "60px 40px",
  },
  modal_list: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
    background: "transparent",
    cursor: "pointer",
  },
  modal_icon: {
    width: 45,
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: 24,
    },
  },
  modal_title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    background: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  modal_text: {
    fontSize: 14,
    color: theme.palette.secondary.main,
    background: "transparent",
    marginTop: 4,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  text_div: {
    marginLeft: 20,
    background: "transparent",
  },
  mobile_dropdown: {
    background: "#090909",
    transition: ".5s",
    position: "absolute",
    left: 0,
    width: window.innerWidth,
    zIndex: 5,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [opened, setOpened] = useState(false);

  const openDropdown = () => {
    setHeight(278);
    setOpened(true);
  };

  const closeDropdown = () => {
    setHeight(0);
    setOpened(false);
  };

  const navigate = useNavigate();
  const route = (route) => {
    navigate(`/${route}`);
  };

  return (
    <header className={classes.header}>
      <div className={classes.inner_flex}>
        <div className={classes.logo_box}>
          <img
            src="logo.png"
            className={classes.logo}
            onClick={() => route("")}
          />
        </div>

        <div>
          {opened ? (
            <IoIosClose
              className={classes.menu_icon}
              onClick={() => closeDropdown()}
              style={{ fontSize: 40 }}
            />
          ) : (
            <HiOutlineMenu
              className={classes.menu_icon}
              onClick={() => openDropdown()}
            />
          )}

          <div
            className={classes.mobile_dropdown}
            style={{
              height: height,
              padding: height > 0 ? 25 : 0,
              transition: ".5s",
            }}
          >
            <div
              className={classes.menu_box_mobile}
              style={{ display: height > 0 ? "block" : "none", background: 'transparent' }}
            >
              <div
                className={classes.menu_item_mobile}
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setModalOpen(true)}
              >
                <p className={classes.menu_text_mobile}>Products</p>
                <HiChevronDown className={classes.menu_dropdown_icon} />
              </div>
              <div className={classes.menu_item_mobile}>
                <p className={classes.menu_text_mobile}>Help Center</p>
              </div>
              <div className={classes.menu_item_mobile}>
                <p className={classes.menu_text_mobile}>FAQ</p>
              </div>
              <div className={classes.menu_item_mobile}>
                <button className={classes.button}>Get the App</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.menu_box}>
          <div
            className={classes.menu_item}
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setModalOpen(true)}
          >
            <p className={classes.menu_text}>Products</p>
            <HiChevronDown className={classes.menu_dropdown_icon} />
          </div>
          <div className={classes.menu_item}>
            <p className={classes.menu_text}>Help Center</p>
          </div>
          <div className={classes.menu_item}>
            <p className={classes.menu_text}>FAQ</p>
          </div>
          <div className={classes.menu_item}>
            <button className={classes.button}>Get the App</button>
          </div>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className={classes.modal_main}
      >
        <div className={classes.modal_body} onClick={() => setModalOpen(false)}>
          <div className={classes.inner_modal}>
            <div
              className={classes.modal_list}
              style={{ marginTop: 0 }}
              onClick={() => route("money_transfer")}
            >
              <img src="money.png" className={classes.modal_icon} />
              <div className={classes.text_div}>
                <p className={classes.modal_title}>Money Transfer</p>
                <p className={classes.modal_text}>
                  Get paid by foreign clients with no hassle...
                </p>
              </div>
            </div>
            <div
              className={classes.modal_list}
              onClick={() => route("currency_exchange")}
            >
              <img src="currency.png" className={classes.modal_icon} />
              <div className={classes.text_div}>
                <p className={classes.modal_title}>Currency Exchange</p>
                <p className={classes.modal_text}>
                  Better rates for every currency exchange...
                </p>
              </div>
            </div>
            <div
              className={classes.modal_list}
              onClick={() => route("virtual_accounts")}
            >
              <img src="money.png" className={classes.modal_icon} />
              <div className={classes.text_div}>
                <p className={classes.modal_title}>Multicurrency wallet</p>
                <p className={classes.modal_text}>
                  Welcome to a word of limitless financial...
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
