import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<SnackbarProvider maxSnack={5}>
		<App />
	</SnackbarProvider>,
	rootElement
);
