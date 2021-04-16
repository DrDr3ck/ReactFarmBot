import './styles.css';
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tile from './Tile';
import { withSnackbar } from 'notistack';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Row">
					<Tile>Tile</Tile>
					<Tile>Tile</Tile>
					<Tile>Tile</Tile>
				</div>
				<div className="Row">
					<Tile>FCTile</Tile>
					<Tile>Bot</Tile>
					<Tile>FCTile</Tile>
				</div>
				<div className="Row">
					<Tile>Tile</Tile>
					<Tile>Tile</Tile>
					<Tile>Tile</Tile>
				</div>
			</div>
		);
	}
}

export default withSnackbar(App);
