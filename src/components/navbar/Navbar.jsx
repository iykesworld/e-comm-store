import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../../shop/CartModal";
import avatar from '../../assets/avatar.png'
import { useLogoutUserMutation } from "../../redux/feature/auth/authApi";
import { logout } from "../../redux/feature/auth/authSlice";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const products = useSelector((state) => state.cart?.products || []);
  const [isCartOpen, setIsCartOpen] = useState(false);

   // show user if logged in 
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth || {});

   const [logoutUser] = useLogoutUserMutation();

  // handle cart toggle
  const handleCartToggle = useCallback(() => {
    setIsCartOpen((prev) => !prev);
}, []);

 


  const handleMenuToggle = ()=>{
    setMenuToggle(!menuToggle);
  }

  // handle drop down toggle
  const handleDropDownToggle = ()=>{
    setIsDropDownOpen(!isDropDownOpen);
  };

  // admin drop down menu
  const adminDropDownMenu = [
    {label: "Dashboard", path: "/dashboard/admin"},
    {label: "Manage Products", path: "/dashboard/manage-products"},
    {label: "All Orders", path: "/dashboard/manage-orders"},
    {label: "Add New Products", path: "/dashboard/add-new-products"},
    {label: "Manage Users", path: "/dashboard/manage-users"},
  ]

  // user drop down menu
  const userDropDownMenu = [
    {label: "Dashboard", path: "/dashboard"},
    {label: "Profile", path: "/dashboard/profile"},
    {label: "Payments", path: "/dashboard/payments"},
    {label: "Orders", path: "/dashboard/orders"},
  ]

  const dropDownMenus = user?.role === 'admin' ? [...adminDropDownMenu] : [...userDropDownMenu];

  // handle logout 
  const handleLogout = async ()=>{
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if(!confirmLogout) return;
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      localStorage.removeItem('user');
      console.log("User logged out successfully and data removed from localStorage.");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Failed to log out. Please try again.");
    }
  }

  // add event listener for the header scroll
  useEffect(() => {
    const handleScroll = () => {
        setHeaderFixed(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
  return (
    <>
    <header className={headerFixed? "header header-backgrpund-set" : "header"}>
      <div className="header-container">
        <div>
          <Link to={"/"} className="link-logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-list">
          <ul>
            <li>
              <Link to="/"className="header-link">Home</Link>
            </li>
            <li>
              <Link to="/shop"className="header-link">Shop</Link>
            </li>
            <li>
              <Link to="/blog"className="header-link">Blog</Link>
            </li>
            <li>
              <Link to="/contact"className="header-link">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <span>
            <Link to="/search" className="header-link">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="header-icon-btn" ><i className="ri-shopping-bag-line"></i>
            <sup>{products.length}</sup>
            </button>
          </span>
          <span>
            {
              user && user? (<>
              <img onClick={handleDropDownToggle} className="profileImage" src={user?.profileImage || avatar} alt="user profile image" />

              {
                isDropDownOpen && (
                  <div className="dropdown">
                    <ul className="dropdown-list">
                      {
                        dropDownMenus.map((menu, index)=>(
                          <li key={index}>
                            <Link className="dropDownItems" onClick={()=> setIsDropDownOpen(false)} to={menu.path}>{menu.label}</Link>
                          </li>
                        ))
                      }
                      <li>
                        <button onClick={handleLogout} className="dropDownItems dropdown-btn">Logout</button>
                      </li>
                    </ul>
                  </div>
                )
              }
              </>) : (
                <Link to="login" className="header-link">
            <i className="ri-user-line"></i>
            </Link>
              )
            }
            
          </span>
        </div>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      {
        isCartOpen && <CartModal products={products} isOpen ={isCartOpen} onClose ={handleCartToggle} />
      }
    </header>
    {
      menuToggle && <div className="menu-toggle">
      <ul className="menu-toggle-list">
        <li><Link to="/"className="header-link-two">Home</Link></li>
        <li><Link to="/shop"className="header-link-two">Shop</Link></li>
        <li><Link to="/blog"className="header-link-two">Blog</Link></li>
        <li><Link to="/contact"className="header-link-two">Contact us</Link></li>
      </ul>
    </div>
    }
    
    </>
  );
};

export default Navbar;
