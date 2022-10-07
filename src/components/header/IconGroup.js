import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import Axios from "axios";

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass,
}) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleLogout = (e) => {
    window.localStorage.clear()
    // window.location.reload()
     window.location.replace("/");
    //  window.location.replace("http://soxypay.com/");

  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const [carts, setCarts] = useState([]);
  //const { id } = useParams();
  const fetchcarts = async (token) => {
    const { data } = await Axios.get(
      // `http://13.235.180.192/api/admin/cartbycustomer`,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const carts = data.data;
    setCarts(carts);
    console.log(carts);
  };
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchcarts();
    }
  }, []);
  const history = useHistory();

  const [wish, setWish] = useState([]);
  const fetchWish = async () => {
    const { data } = await Axios.get(
      // "http://13.235.180.192/api/admin/getallwishlist",
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const wish = data.data;
    setWish(wish);
    console.log(wish);
  };
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchWish();
    }
  }, []);


  // account
const [customer, setCustomer] = useState([]);
const fetchCustomer = async () => {
  const { data } = await Axios.get(
    `http://13.235.180.192:8000/admin/getoneAstro/632846ee78e712488b9646d0`,
    {
      // headers: {
      //   "auth-token": localStorage.getItem("auth-token"),
      // },
    }
  );

  
  
  
  const customer = data.data;
  setCustomer(customer);
  console.log(customer);
};
useEffect(() => {
  if (localStorage.getItem("auth-token")) {
    fetchCustomer();
  }
}, []);

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      {/* <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
          <span className="username">{customer?.fullname}</span>
        </button>
        <div className="account-dropdown">
          <ul>
            {!localStorage.getItem("auth-token") ? (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    Register
                  </Link>
                </li>
                {/* <li>
                  <Link to={process.env.PUBLIC_URL + "/astrologerlogin"}>
                    Astrologer login
                  </Link>
                </li> */}
                <li>
                  <Link to={process.env.PUBLIC_URL + "/astrologersignup"}>
                    Astrologer Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/myOrder"}>My Order</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/notificationlist"}>
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/wallettransaclist"}>
                      Wallet Transaction 
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/walletmoney"}>
                      Wallet Recharge 
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/"}
                    // onClick={(e) =>{(
                    //   window.localStorage.clear()
                      
                    //   //localStorage.removeItem("auth-token","userInfo")
                    // )}
                    onClick = {(e) => handleLogout()}
                    //}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div> */}
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wish && wish.length ? wish.length : 0}
          </span>
        </Link>
      </div>

      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {carts && carts.length ? carts.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          carts={carts}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {carts && carts.length ? carts.length : 0}
          </span>
        </Link>
      </div>

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
