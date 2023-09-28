import _Chart from "chart.js/auto"
import {DateTime} from "luxon";
import errorsFile from "$lib/data/errors.json?raw"
import vusFile from "$lib/data/vus.json?raw"

const errorData = errorsFile.trim().split("\n").map((v : any) => {
	const j = JSON.parse(v);
	return {
		// x : new Date(j.data.time).getTime(), 
		x : DateTime.fromISO(j.data.time), 
		y : j.data.value
	}
})
const vusData = vusFile.trim().split("\n").map((v : any) => {
	const j = JSON.parse(v);
	return {
		// x : new Date(j.data.time).getTime(),
		x : DateTime.fromISO(j.data.time), 
		y : j.data.value
	}
})
export const config : ConstructorParameters<typeof _Chart>[1] = {
	data : {
		datasets : [
			{
				data : errorData,
				label : "errors",
				backgroundColor : "red",
				borderColor: "pink",
				showLine : true,
				yAxisID : "y",

			},
			{
				data : vusData,
				label : "vus",
				showLine : true,
				yAxisID : "y1",
			},
		]
	},
	options : {
		responsive : true,
		// maintainAspectRatio : false,
		scales : {
			x : {
				type : "time",
				ticks : {
					// callback : function (value, ticks, index) {
						// return value;
						// return ticks;
						// return DateTime.fromSeconds(value).toFormat("hh:mm:ss");
					// },
					stepSize : 60,
					maxTicksLimit : 12,
				},
				title : "test",
				time : {
					round : "minute",
				}
			},
			y : {
				type: 'linear',
				display: true,
				position: 'left',
				title : "left errors",
			},
			y1 : {
				type: 'linear',
				display: true,
				title : "right vus",
				position: 'right',
			},
		},
		plugins : {
			title : "example",
			tooltip : {

			}
		}
	},
	type : "scatter",
}
