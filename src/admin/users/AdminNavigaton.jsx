import React, { useRef, useState } from "react";
import "./AdminUsers.css";
import {
  useGetUserQuery,
  useLogoutUserMutation,
  useUploadProfileImageMutation,
} from "../../redux/feature/auth/authApi";
import avatar from "../../assets/avatar.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../../redux/feature/auth/authSlice";

const AdminNavigaton = () => {
  const [file, setFile] = useState(null);
  const [editImage, setEditImage] = useState(false);
  const {
    data,
    isLoading: isUserLoading,
    error: userError,
  } = useGetUserQuery();
  const { user } = useSelector((state) => state.auth);
  const [uploadProfileImage, { isLoading }] = useUploadProfileImageMutation();
  const [logoutUser] = useLogoutUserMutation();
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  // admin menu
  const adminNavMenu = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Products", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add New Products", path: "/dashboard/add-new-products" },
    { label: "Manage Users", path: "/dashboard/manage-users" },
  ];

  // user menu
  const userNavMenu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const usersMenus =
    user?.role === "admin" ? [...adminNavMenu] : [...userNavMenu];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image")) {
      setFile(selectedFile);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a profile image");
      return;
    }
    const formData = new FormData();
    formData.append("profileImage", file); // Append the file
    formData.append("userId", user?.id); // Append the userId from Redux

    try {
      const response = await uploadProfileImage(formData).unwrap();
      alert("Profile image uploaded successfully");

      // update Redux user state with the new profile image
      dispatch(setUser({ ...user, profileImage: response.profileImage }));

      setFile(null); // Clear the file
      fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(error?.data?.message || "Failed to upload image");
    }
  };
  const handleImageError = (e) => {
    e.target.src = avatar; // Fallback to default avatar on error
  };

  const handleImageEdit = () => {
    setEditImage(!editImage);
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout");
    if (!confirmLogout) return;
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      localStorage.removeItem("user");
      console.log(
        "User logged out successfully and data removed from localStorage."
      );
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  if (isUserLoading) return <p>Loading user...</p>;
  if (userError) return <p>Failed to load user data.</p>;

  return (
    <div className="adminNav">
      {/* header */}
      <div className="adminNav-Header">
        <div className="adminNavImage-wrapper">
          <img
            src={user?.profileImage || avatar}
            alt="avatar"
            onError={handleImageError}
          />
          <div className="adminNav-editbtns">
            <button onClick={handleImageEdit}>
              Edit <i className="ri-image-edit-line"></i>
            </button>
          </div>
        </div>
        {editImage && (
          <div className="adminNav-profileImage-Edit">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <button onClick={handleUpload} disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        )}
        <h4>{user?.username}</h4>
        <p>Admin Dashboard</p>
      </div>
      <hr className="adminNav-line" />
      <div className="adminNavlist-wrapper">
        <ul className="adminNavlist">
          {usersMenus.map((nav, index) => (
            <li key={index}>
              <NavLink
                to={`${nav.path}`}
                className={({ isActive }) =>
                  isActive ? "active" : "admin-navLink"
                }
              >
                {nav.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="adminNav-btns-wrapper">
          <hr className="adminNav-line" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigaton;
