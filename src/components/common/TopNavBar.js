import {Link} from "react-router-dom";
import React from "react";
import urls from "../../urls";
import * as urlUtils from '../../utils/urlUtils';

const TopNavBar = () => {

  return (
    <div className="top-nav-bar" id="menu">
      <div className="top-nav-bar-inner">
        <nav>
          <input type="checkbox" id="css-toggle-menu" name="css-toggle-menu"/>
          <ul className="main">
            <li><Link to={urls.root}>Home</Link></li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">Holiday Types</a>
              <div className="dropdown-content">
                <Link to={urlUtils.holidayTypeUrl("activity-holidays")}>Activity Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("wedding-holidays")}>Wedding Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("ski-holidays")}>Ski Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("all-inclusive-holidays")}>All Inclusive Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("beach-holidays")}>Beach Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("wildlife-holidays")}>Wildlife Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("city-breaks")}>City Breaks</Link>
                <Link to={urlUtils.holidayTypeUrl("stay-and-cruise")}>Stay And Cruise</Link>
                <Link to={urlUtils.holidayTypeUrl("safari-holidays")}>Safari Holidays</Link>
                <Link to={urlUtils.holidayTypeUrl("family-holidays")}>Family Holidays</Link>
              </div>
            </li>
            <li><Link to={urls.brands}>Brands</Link></li>
            <li><Link to={urls.blog}>Blog</Link></li>
            <li><Link to={urls.news}>News</Link></li>

          </ul>
          <label htmlFor="css-toggle-menu" id="css-toggle-menu"/>
        </nav>
      </div>
    </div>
  );
};

export default TopNavBar;
