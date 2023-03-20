/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { getCurrentUser } from '../../api/auth';
import DashboardCss from './Dashboard.module.css';

function Dashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
    };

    console.log(data);
    // await updateUser(data);
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
          <p name="firstName" type="text" className={DashboardCss.info}>
            FirstName: {user?.firstName}
          </p>
          <p name="lastName" type="text" className={DashboardCss.info}>
            LastName: {user?.lastName}
          </p>
          <p name="emailAddress" type="email" className={DashboardCss.info}>
            Email Address: {user?.emailAddress}
          </p>
          <p name="phone" type="phone" className={DashboardCss.info}>
            Phone: {user?.phone}
          </p>
          <p name="apKey" type="text" className={DashboardCss.info}>
            ApiKey: {user?.apiKey}
          </p>
          <button
            className={DashboardCss.edit_btn}
            title="Edit Profile"
            type="submit"
          >
            Edit User <FaUserEdit className={DashboardCss.profile_icon} />
          </button>
        </div>
      </form>
      <button className={DashboardCss.edit_btn} title="drinks" type="button">
        Our Drinks
      </button>
    </div>
  );
}
export default Dashboard;
