import _Chart from "chart.js/auto"
import {DateTime} from "luxon";

const exampleData = [
	{
		// x: 100,
		x: DateTime.now().toSeconds(),
		y: 0
	}, 
	{
		// x: 200,
		x: DateTime.now().plus({minutes : 2}).toSeconds(),
		y: 10
	}, 
	{
		// x: 300,
		x: DateTime.now().plus({minutes : 4}).toSeconds(),
		y: 5
	}, 
]
export const config : ConstructorParameters<typeof _Chart>[1] = {
	type : "scatter",
	options : {
		scales : {
			x : {
				ticks : {
					callback : function (value, ticks, index) {
						// return value;
						// return ticks;
						return DateTime.fromSeconds(value).toFormat("hh:mm:ss");
					},
					stepSize : 60,
					// maxTicksLimit : 12,
				},
			}
		}
	},
	data : {
		datasets : [
			{
				label : "example",
				data : exampleData,
			}
		]
	}
}
