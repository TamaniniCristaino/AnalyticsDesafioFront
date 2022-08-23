import './FieldSelect.css';

export default function FieldSelect({ onChange, listOptions, value }) {
	return (
		<select onChange={e => onChange(e)} className="fieldSelect">
			{
				listOptions.map(el => {
                    const id = el.id ?? el.value;
					return (
						<option key={id} value={id}>{ el.value }</option>
					);
				})
			}
		</select>
	);
}