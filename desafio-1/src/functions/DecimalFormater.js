export default function DecimalFormater(val, maxDig, minDig) {
	return new Intl.NumberFormat('pt-BR', {
		maximumFractionDigits: maxDig || 2,
		minimumFractionDigits: minDig || 2,
	}).format(val);
}