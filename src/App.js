import './styles.css';
import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Tile from './Tile';
import { withSnackbar } from 'notistack';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Card className="Card">{'Wheat'}</Card>
				<div className="TilesContainer">
					<div className="Row">
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
					</div>
					<div className="Row">
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Bot
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
					</div>
					<div className="Row">
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
						<Tile
							handleHarvest={(seed) => {
								console.log(`handle harvest ${seed}`);
							}}
						>
							Tile
						</Tile>
					</div>
				</div>
			</div>
		);
	}
}

export default withSnackbar(App);
