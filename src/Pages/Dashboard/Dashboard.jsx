/* eslint-disable prettier/prettier */
import React from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import DashboardCss from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={DashboardCss.main}>
      <h1>
        Welcome To The <span>dRinksDB</span>
      </h1>
      <div className={DashboardCss.userbox}>
        <FaUserCircle className={DashboardCss.user_pic} />
        <h2 className={DashboardCss.user_h3}>My Profile</h2>
        <div className={DashboardCss.user_info}>
          <p className={DashboardCss.info}>FirstName:</p>
          <p className={DashboardCss.info}>LastName:</p>
          <p className={DashboardCss.info}>Email Address:</p>
          <p className={DashboardCss.info}>Phone:</p>
          <p className={DashboardCss.info}>ApiKey:</p>
          <button
            className={DashboardCss.edit_btn}
            title="Edit Profile"
            type="button"
          >
            Edit User <FaUserEdit className={DashboardCss.profile_icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
