import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

export default function TableAnimals({ list, onClick, favorites }) {

	const items = list.map(el => {
		const itemSel = favorites.findIndex(object => {
			return object.name === el.name;
		});
		return {
			...el,
			selectItem: itemSel
		};
	});

	return (
		<TableContainer component={Paper}>
			<Table size={'small'}>
				<TableHead>	
					<TableRow>
						<TableCell width={'360'} align={'left'}>
							<Typography sx={{ fontWeight: 'bold' }}>
								{ 'Nome' }
							</Typography>
						</TableCell>
						<TableCell width={'40'}  align={'center'}>
							<Tooltip title={'Favoritos'} placement={'right-start'}>
								<StarIcon sx={{ color: '#FFC701' }} />
							</Tooltip>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ items.map(obj => (
						<TableRow
							key={obj.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align={'left'}>
								<Typography>
									{ obj.name }
								</Typography>
							</TableCell>
							<TableCell>
								{
									obj.selectItem === -1 ? <IconButton sx={{ height: 24, width: 24 }} onClick={() => onClick(obj)}>
										<StarIcon sx={{ color: '#000', fontSize: 20 }} />
									</IconButton> : <IconButton sx={{ height: 24, width: 24 }} onClick={() => onClick(obj, 'remove')}>
										<StarIcon sx={{ color: '#FFC701', fontSize: 20 }} />
									</IconButton>
								}
							</TableCell>
						</TableRow>
					)) }
				</TableBody>
			</Table>
		</TableContainer>
	);
}

TableAnimals.propTypes = {
	list: PropTypes.array,
	onClick: PropTypes.func,
	favorites: PropTypes.array,
};