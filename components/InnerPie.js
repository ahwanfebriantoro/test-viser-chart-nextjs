import { Chart, Tooltip, Coord, StackBar, Legend, Pie } from 'viser-react';
import * as React from 'react';
import numeral from 'numeral';

const itemTpl =
  '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';

const tooltip = [
  'name*value',
  (item, value) => {
    return {
      name: item,
      value: numeral(value).format('$ 0,0.00')
    };
  }
];

const scale = [
  {
    dataKey: 'value',
    min: 0,
    formatter: (val) => {
      return val + 'a';
    }
  }
];

export default class App extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Chart forceFit data={data} height={700} scale={scale}>
        <Tooltip showTitle={false} itemTpl={itemTpl} />
        <Legend position="right-center" offsetX={-100} />
        <Coord type="theta" radius={0.75} />
        <StackBar
          position="value"
          tooltip={tooltip}
          color={[
            'name',
            ['#1890ff', '#37c661', '#fbce1e', '#2b3b79', '#8a4be2', '#1dc5c5']
          ]}
          style={{
            stroke: 'white',
            lineWidth: 1
          }}
          label={[
            'value',
            function () {
              return {
                offset: -30,
                textStyle: {
                  fill: 'white',
                  fontSize: 14,
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)'
                },
                formatter: function formatter(text) {
                  return numeral(text).format('$ 0,0.00');
                }
              };
            }
          ]}
        />
      </Chart>
    );
  }
}
