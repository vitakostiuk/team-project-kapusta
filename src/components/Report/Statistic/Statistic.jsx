import React from 'react';
import {
  BarChart,
  YAxis,
  XAxis,
  Bar,
  Text,
  ResponsiveContainer,
} from 'recharts';
import * as Styled from './Statistic.styled';

const data = [
  { label: 'meet', value: 5000 },
  { label: 'fish', value: 3200 },
  { label: 'chicken', value: 4000 },
  { label: 'shirts', value: 1200 },
  { label: 'shoes', value: 2320 },
  { label: 'skirts', value: 2500 },
  { label: 'coffee', value: 120 },
  { label: 'tea', value: 7000 },
  { label: 'beer', value: 800 },
  { label: 'water', value: 1500 },
];

const Statistic = () => {
  const maxValue = data.reduce(
    (acc, el) => (el.value > acc ? el.value : acc),
    0,
  );

  const customTick = ({ x, y, width, height, type, fill, index, payload }) => {
    const axis = x / maxValue;
    const delta = maxValue - payload.value;
    const position = x - delta * axis + index * 19 - 80;
    return (
      <Text
        type={type}
        fill={fill}
        width={width}
        height={height}
        x={position >= x ? x : position}
        y={y - 12}
      >
        {payload.value}
      </Text>
    );
  };

  const customVerticalTick = ({ x, y, width, height, type, fill, payload }) => {
    const axis = y / maxValue;
    const delta = maxValue - payload.value;
    const position = y + delta * axis * 7 + 40;
    return (
      <Text
        type={type}
        fill={fill}
        width={width}
        height={height}
        x={x - 16}
        y={position <= y ? y : position}
      >
        {payload.value}
      </Text>
    );
  };

  if (window.innerWidth < 768) {
    return (
      <Styled.Container>
        <ResponsiveContainer width={'130%'} height={440}>
          <BarChart
            data={data.sort((a, b) => b.value - a.value)}
            layout="vertical"
            barSize={15}
            barCategoryGap={200}
            margin={{ bottom: 0, left: 0, top: 10 }}
          >
            <XAxis type="number" hide />
            <YAxis
              yAxisId={0}
              type="category"
              width={50}
              dataKey="label"
              axisLine={false}
              tickLine={false}
              textAnchor="start"
              tick={{
                transform: 'translate(8, -18)',
              }}
              scaleToFit
            />
            <YAxis
              yAxisId={1}
              type="category"
              width={50}
              dataKey="value"
              axisLine={false}
              tickLine={false}
              orientation="right"
              tick={customTick}
            />
            <Bar dataKey="value" fill="#FF751D" />
          </BarChart>
        </ResponsiveContainer>
      </Styled.Container>
    );
  }

  if (window.innerWidth > 767) {
    return (
      <Styled.Container>
        <ResponsiveContainer width={'100%'} height={422}>
          <BarChart
            data={data.sort((a, b) => b.value - a.value)}
            barSize={38}
            barCategoryGap={100}
            barGap={25}
            margin={{ bottom: 0, left: 70, top: 0 }}
          >
            <YAxis type="number" hide />
            <XAxis
              xAxisId={0}
              type="category"
              height={30}
              dataKey="label"
              axisLine={false}
              tickLine={false}
              scaleToFit
            />
            <XAxis
              xAxisId={1}
              type="category"
              height={50}
              dataKey="value"
              axisLine={false}
              tickLine={false}
              orientation="top"
              tick={customVerticalTick}
            />
            <Bar dataKey="value" fill="#FF751D" />
          </BarChart>
        </ResponsiveContainer>
      </Styled.Container>
    );
  }
};

export default Statistic;
