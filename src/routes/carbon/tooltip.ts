export function NORMAL (label : string, value : string | number) {
	return `
	<li>
		<div class="datapoint-tooltip">
			<div class="label">${label}</div>
			<p class="value">${value}</div>
		</div>
	</li>
	`
}

export function BOLD (label : string, value : string | number) {
	return `
	<div class="datapoint-tooltip bold">
		<div class="label">${label}</div>
		<p class="value">${value}</div>
	</div>
	`
}
