import './styles.css';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';

const growLimit = 10;

const TileFC = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [ seed, setSeed ] = useState('');
	const [ grow, setGrow ] = useState(0);

	useEffect(
		() => {
			if (grow > growLimit) {
				setGrow(growLimit);
			}
		},
		[ grow ]
	);

	const handleGrow = () => {
		//console.log('grow' + grow);
		setGrow((grow) => grow + 1);
		if (grow < growLimit) {
			setTimeout(handleGrow, 1000);
		}
	};

	const handleClick = () => {
		if (!seed) {
			enqueueSnackbar("You choose 'wheat'!!", { variant: 'info' });
			setSeed('wheat');
			setTimeout(handleGrow, 1000);
		} else if (grow < growLimit) {
			enqueueSnackbar('Wait! Not ready to be harvested', { variant: 'warning' });
		} else {
			// ready to harvest
			enqueueSnackbar('Harvesting', { variant: 'success' });
			setGrow(0);
		}
	};

	return (
		<Card className="Card" onClick={handleClick}>
			{`${seed} - ${grow}`}
		</Card>
	);
};

export default TileFC;
