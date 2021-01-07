import { Chart, Tooltip, Axis, StackBar, Coord, Legend } from 'viser-react'
import * as React from 'react'
const DataSet = require('@antv/data-set')

export default class App extends React.Component {
	render() {
		const { data: sourceData, fields } = this.props

		const dv = new DataSet.View().source(sourceData)
		dv.transform({
			type: 'fold',
			fields,
			key: 'green',
			value: 'a',
			retains: ['name'],
		})
		const data = dv.rows

		return (
			<Chart forceFit height={600} data={data}>
				<Coord type="rect" direction="LB" />
				<Tooltip />
				<Legend />
				<Axis dataKey="name" label={{ offset: 12 }} />
				<StackBar position="name*a" color="green" />
			</Chart>
		)
	}
}
