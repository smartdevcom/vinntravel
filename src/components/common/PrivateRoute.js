// import React, {Component} from 'react';
// import {Route, Redirect} from 'react-router-dom';
// import urls from "../../urls";
//
// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={props => (
//     localStorage.getItem('user')
//       ? <Component {...props} />
//       : <Redirect to={{pathname: urls.login, state: {from: props.location}}}/>
//   )}/>
// );
//
// export default PrivateRoute;
