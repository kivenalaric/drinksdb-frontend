/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { updateCurrentUser } from '../../api/auth';
import AuthGuard from '../../Components/AuthGuard/AuthGuard';
import DashboardCss from './Dashboard.module.css';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const updateUser = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      id: user.id,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
    };
    console.log(data);
    await updateCurrentUser(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    window.location.reload(true);
  };

  return (
    <div className={DashboardCss.main}>
      <h1>
        Welcome To The <span>dRinksDB</span>
      </h1>
      <form className={DashboardCss.userbox} onSubmit={updateUser}>
        <FaUserCircle className={DashboardCss.user_pic} />
        <h2 className={DashboardCss.user_h3}>My Profile</h2>
        <div className={DashboardCss.user_info}>
          <label htmlFor="firstname">Last Name</label>
          <input
            name="firstName"
            type="text"
            className={DashboardCss.info}
            defaultValue={user?.firstName}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            name="lastName"
            type="text"
            className={DashboardCss.info}
            defaultValue={user?.lastName}
          />
          <label htmlFor="emailaddress"> Email Address</label>
          <input
            name="emailAddress"
            type="email"
            className={DashboardCss.info_disable}
            defaultValue={user?.emailAddress}
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            type="phone"
            className={DashboardCss.info}
            defaultValue={user?.phone}
          />
          <label htmlFor="apikey">ApiKey</label>
          <input
            name="apKey"
            type="text"
            className={DashboardCss.info_disable}
            defaultValue={user?.apiKey}
          />
          <button
            className={DashboardCss.edit_btn}
            title="Edit Profile"
            type="submit"
          >
            Edit User <FaUserEdit className={DashboardCss.profile_icon} />
          </button>
        </div>
      </form>
      <button
        className={DashboardCss.logout_btn}
        onClick={logout}
        title="logout"
        type="button"
      >
        LogOut
      </button>
    </div>
  );
}
export default AuthGuard(Dashboard);
