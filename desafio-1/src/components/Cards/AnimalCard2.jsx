import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import DecimalFormater from 'src/functions/DecimalFormater';

const ExpandMore = styled(props => {
	// eslint-disable-next-line no-unused-vars
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function AnimalCard2({ 
	name,
	latin_name,
	animal_type,
	active_time,
	length_min,
	length_max,
	weight_min,
	weight_max,
	lifespan,
	habitat,
	diet,
	geo_range,
	image_link
}) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 350 }}>
			<CardHeader
				avatar={
					<Avatar alt={name} src={image_link} />
				}
				title={name}
				subheader={latin_name}
			/>
			<CardMedia
				component={'img'}
				image={image_link}
				alt={name}
			/>
			<CardActions disableSpacing>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
					<Typography sx={{ fontSize: '0.8rem', fontWeight: 'bold' }} paragraph>{ 'Information:' }</Typography>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label={'show more'}
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</div>
			</CardActions>
			<Collapse in={expanded} timeout={'auto'} unmountOnExit>
				<CardContent>
					<BodyItem item={'Animal type:'} detail={animal_type} />
					<BodyItem item={'Habitat:'} detail={habitat} />
					<BodyItem item={'Dieta:'} detail={diet} />
					<BodyItem item={'Active time:'} detail={active_time} />
					<BodyItem item={'Minimum length:'} detail={DecimalFormater(length_min)} />
					<BodyItem item={'Maximum length:'} detail={DecimalFormater(length_max)} />
					<BodyItem item={'Minimum weight:'} detail={DecimalFormater(weight_min)} />
					<BodyItem item={'Maximum weight:'} detail={DecimalFormater(weight_max)} />
					<BodyItem item={'Lifespan:'} detail={lifespan} />
					<BodyItem item={'Geo range:'} detail={geo_range} />
				</CardContent>
			</Collapse>
		</Card>
	);
}

function BodyItem({ item, detail }) {

	return (
		<div style={{
			display: 'flex',
			width: '100%',
			padding: 2
		}}>
			<span style={{ fontWeight: 'bold', marginRight: 8, fontSize: '0.8rem' }}>{ item }</span>
			<span style={{ fontSize: '0.8rem' }}>{ detail }</span>
		</div>
	);
}

BodyItem.propTypes = {
	item: PropTypes.string,
	detail: PropTypes.string,
};

AnimalCard2.propTypes = {
	name: PropTypes.string,
	latin_name: PropTypes.string,
	animal_type: PropTypes.string,
	length_min: PropTypes.string,
	length_max: PropTypes.string,
	weight_min: PropTypes.string,
	weight_max: PropTypes.string,
	lifespan: PropTypes.string,
	habitat: PropTypes.string,
	diet: PropTypes.string,
	geo_range: PropTypes.string,
	image_link: PropTypes.string,
	active_time: PropTypes.string
};