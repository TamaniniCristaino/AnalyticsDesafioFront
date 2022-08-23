// eslint-disable-next-line no-unused-vars
const arr = [
	{
		name: 'Cougar',
		latin_name: 'Puma concolor',
		animal_type: 'Mammal',
		active_time: 'Nocturnal',
		length_min: '3.4',
		length_max: '6.4',
		weight_min: '80',
		weight_max: '225',
		lifespan: '13',
		habitat: 'Desert, savannah, tropical rainforest, forest, scrubland, and mountain areas',
		diet: 'Mammals ranging in size from mice to white-tail deer',
		geo_range: 'Western North America, Florida, and Central and South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg',
		id: 59
	},
	{
		name: 'Vampire Bat',
		latin_name: 'Desmodus rotundus',
		animal_type: 'Mammal',
		active_time: 'Nocturnal',
		length_min: '0.23',
		length_max: '0.32',
		weight_min: '0.08',
		weight_max: '0.1',
		lifespan: '9',
		habitat: 'Rainforest, scrub, and desert',
		diet: 'Mammal blood',
		geo_range: 'Mexico, Central and South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Desmodus_rotundus_A_Catenazzi.jpg',
		id: 180
	},
	{
		name: 'Red-capped Cardinal',
		latin_name: 'Paroaria coronata',
		animal_type: 'Bird',
		active_time: 'Diurnal',
		length_min: '0.54',
		length_max: '0.55',
		weight_min: '0.49',
		weight_max: '0.51',
		lifespan: '6',
		habitat: 'Scrubland',
		diet: 'Seeds and invertebrates',
		geo_range: 'South America from Brazil to Argentina',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Paroaria_gularis%2C_Red-capped_Cardinal.jpg',
		id: 147
	},
	{
		name: 'Burmese Python',
		latin_name: 'Python molurus',
		animal_type: 'Reptile',
		active_time: 'Nocturnal',
		length_min: '16',
		length_max: '25',
		weight_min: '140',
		weight_max: '200',
		lifespan: '20',
		habitat: 'Tropical forest',
		diet: 'Birds, mammals, and reptiles',
		geo_range: 'Southern and Southeastern Asia',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Burmese_python_%286887388927%29.jpg',
		id: 49
	},
	{
		name: 'Andean Condor',
		latin_name: 'Vultur gryphus',
		animal_type: 'Bird',
		active_time: 'Diurnal',
		length_min: '3.3',
		length_max: '4.3',
		weight_min: '18',
		weight_max: '33',
		lifespan: '46',
		habitat: 'Desert, mountains, grasslands and coasts',
		diet: 'Carrion',
		geo_range: 'Western South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg',
		id: 14
	},
	{
		name: 'North American River Otter',
		latin_name: 'Lutra canadensis',
		animal_type: 'Mammal',
		active_time: 'Nocturnal',
		length_min: '3.2',
		length_max: '3.9',
		weight_min: '11',
		weight_max: '33',
		lifespan: '11',
		habitat: 'Freshwater rivers, streams, lakes, ponds, marshes, swamps, and coastal waters',
		diet: 'Fish, crayfish, ducklings, turtles, and other small animals',
		geo_range: 'Canada and the United States',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/1/19/North_American_River_Otter_-_CNP_3361_%287056954311%29.jpg',
		id: 125
	},
	{
		name: 'Steller\'s Sea Eagle',
		latin_name: 'Haliaeetus pelagicus',
		animal_type: 'Bird',
		active_time: 'Diurnal',
		length_min: '2.7',
		length_max: '3',
		weight_min: '13',
		weight_max: '20',
		lifespan: '25',
		habitat: 'Coastal cliffs and forests near rivers and lakes',
		diet: 'Primarily salmon; some carrion and other small animals',
		geo_range: 'Russia, Japan, China, and Korea',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Adult_Steller%27s_sea_eagle_fishing.jpg',
		id: 169
	},
	{
		name: 'Boa Constrictor',
		latin_name: 'Boa constrictor',
		animal_type: 'Reptile',
		active_time: 'Nocturnal',
		length_min: '3.3',
		length_max: '13',
		weight_min: '120',
		weight_max: '140',
		lifespan: '30',
		habitat: 'Forest and grassland',
		diet: 'Mammals and birds',
		geo_range: 'Central and South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Boa_constrictor%2C_Va%C5%88kovka%2C_Brno_%282%29.jpg',
		id: 42
	},
	{
		name: 'Trumpeter Swan',
		latin_name: 'Olor buccinator',
		animal_type: 'Bird',
		active_time: 'Diurnal',
		length_min: '5.8',
		length_max: '6',
		weight_min: '20',
		weight_max: '26',
		lifespan: '20',
		habitat: 'Freshwater rivers, lakes, ponds and marshes',
		diet: 'Aquatic vegetation',
		geo_range: 'Northwestern and central North America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tumpeter1byWoodigo.JPG',
		id: 177
	},
	{
		name: 'Black Rhinoceros',
		latin_name: 'Diceros bicornis',
		animal_type: 'Mammal',
		active_time: 'Diurnal',
		length_min: '4.7',
		length_max: '5.2',
		weight_min: '2000',
		weight_max: '2900',
		lifespan: '40',
		habitat: 'Woodland and scrubland',
		diet: 'Woody plants, herbs, and fruits',
		geo_range: 'Central and Southern Africa',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/2/22/2012_Black_Rhinoceros_Gemsbokvlakte.jpg',
		id: 33
	}
];

const sels = [
	{
		name: 'Cougar',
		latin_name: 'Puma concolor',
		animal_type: 'Mammal',
		active_time: 'Nocturnal',
		length_min: '3.4',
		length_max: '6.4',
		weight_min: '80',
		weight_max: '225',
		lifespan: '13',
		habitat: 'Desert, savannah, tropical rainforest, forest, scrubland, and mountain areas',
		diet: 'Mammals ranging in size from mice to white-tail deer',
		geo_range: 'Western North America, Florida, and Central and South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg',
		id: 59
	},
	{
		name: 'Vampire Bat',
		latin_name: 'Desmodus rotundus',
		animal_type: 'Mammal',
		active_time: 'Nocturnal',
		length_min: '0.23',
		length_max: '0.32',
		weight_min: '0.08',
		weight_max: '0.1',
		lifespan: '9',
		habitat: 'Rainforest, scrub, and desert',
		diet: 'Mammal blood',
		geo_range: 'Mexico, Central and South America',
		image_link: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Desmodus_rotundus_A_Catenazzi.jpg',
		id: 180
	},
];

const items = arr.map(el => {
	const itemSel = sels.findIndex(object => {
		return object.name === el.name;
	});
	return {
		...el,
		selectItem: itemSel
	};
});

console.log(items);