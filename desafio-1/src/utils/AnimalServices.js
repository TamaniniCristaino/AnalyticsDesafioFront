import axios from 'axios';
import { toast } from 'react-toastify';

async function AnimalServices() {
	const API_URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

	const resp = await axios.get(API_URL);

	if(resp.status !== 200) {
		toast.error('Erro inesperado!');
		return [];
	} else {
		return resp.data;
	}
}

export default AnimalServices;