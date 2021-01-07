import { Chart, Tooltip, Axis, Interval, Guide, Coord } from 'viser-react'
import numeral from 'numeral'
import * as React from 'react'

const scale = [
	{
		dataKey: 'value',
		// ax: 55000,
		min: 0,
		nice: false,
		alias: '-',
	},
]

const label = {
	textStyle: {
		fill: '#aaaaaa',
	},
}

const tickLine = {
	alignWithLabel: false,
	length: 0,
}

const line = {
	lineWidth: 0,
}

const grid = {
	lineStyle: {
		lineWidth: 0,
	},
}

const title = {
	offset: 30,
	textStyle: {
		fontSize: 12,
		fontWeight: 300,
	},
}

const lineStyle = {
	stroke: '#c0c0c0',
	lineDash: [2, 2],
}

const style = {
	fill: '#c0c0c0',
	fontSize: 12,
	fontWeight: '300',
	textAlign: 'center',
	rotate: -90,
}

const labelInterval = [
	'value',
	{
		textStyle: {
			fill: '#8d8d8d',
		},
		offset: 10,
		formatter: function formatter(text) {
			return numeral(text).format('$ 0,0.00')
		},
	},
]

const tooltip = [
	'name*value',
	(item, value) => {
		return {
			name: item,
			value: numeral(value).format('$ 0,0.00'),
		}
	},
]

export default class App extends React.Component {
	render() {
		const { data } = this.props

		return (
			<Chart
				forceFit
				height={500}
				data={data}
				scale={scale}
			>
				<Tooltip />
				<Axis dataKey="type" label={label} tickLine={tickLine} line={line} />
				<Axis
					dataKey="value"
					label={{ offset: 12 }}
					title={title}
					grid={grid}
				/>
				<Coord direction="LB" type="rect" />
				<Interval
					tooltip={tooltip}
					position="type*value"
					// color={color}
					opacity={1}
					size={26}
					label={labelInterval}
				/>
			</Chart>
		)
	}
}
