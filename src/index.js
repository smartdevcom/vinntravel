/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
// import Root from './components/Root';
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import './assets/css/react-auto-suggest.css';
import './assets/css/react-slick.css';
import './assets/style.css';
import '../node_modules/toastr/build/toastr.min.css';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import { Provider } from 'react-redux';
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App store={store} history={history} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./components/Root', () => {
		const App = require('./components/App').default;
		render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App history={history} />
				</ConnectedRouter>
			</Provider>,
			document.getElementById('app')
		);
	});
}
