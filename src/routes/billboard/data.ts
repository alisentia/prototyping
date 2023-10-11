import {DateTime} from "luxon";
import errorsFile from "$lib/data/errors.json?raw"
import vusFile from "$lib/data/vus.json?raw"
import type { ScatterChartOptions } from '@carbon/charts-svelte'

export const errorData = errorsFile.trim().split("\n").map((v : any) => {
	const j = JSON.parse(v);
	return {
		// x : new Date(j.data.time).getTime(), 
		x : DateTime.fromISO(j.data.time), 
		y : j.data.value
	}
})
export const vusData = vusFile.trim().split("\n").map((v : any) => {
	const j = JSON.parse(v);
	return {
		// x : new Date(j.data.time).getTime(),
		x : DateTime.fromISO(j.data.time), 
		y : j.data.value
	}
})

const errorsTemp = errorsFile.trim().split("\n").map((v) => {
	const j = JSON.parse(v);
	return {
		group : "errors",
		date : j.data.time,
		errorsValue : j.data.value,
	}
});
const vusTemp = vusFile.trim().split("\n").map((v) => {
	const j = JSON.parse(v);
	return {
		group : "vus",
		date : j.data.time,
		vusValue : j.data.value,
	}
});
export const carbonData = errorsTemp.concat(vusTemp);

export const options : ScatterChartOptions = {
	"title": "Scatter (time series)",
	"axes": {
		// "bottom": {
		// 	"title": "2019 Annual Sales Figures",
		// 	"scaleType": "time",
		// 	"mapsTo": "date",
		
		// },
		bottom : {
			ticks : {
				number : 15,
			},
			title: "2019 Annual Sales Figures",
			scaleType: "time",
			mapsTo: "date",
		},
		"left": {
			// correspondingDatasets : [
			// 	"errors",
			// ],
			// ticks : {
			// 	min : -5,
			// 	max : 5,

			// },
			"mapsTo": "errorsValue",
			"title": "errors"
		},
		"right": {
			// correspondingDatasets : [
			// 	"vus",
			// ],
			"mapsTo": "vusValue",
			title: "vus"
		},
	},
	"height": "500px",
	width: "1000px",
	"theme": "white"
}
