import React from 'react';
import { BarChart, YAxis, XAxis, Bar } from 'recharts';
import * as Styled from './Statistic.styled';

const data = [
  { label: 'meet', value: 5000 },
  { label: 'fish', value: 3200 },
  { label: 'chicken', value: 4000 },
  { label: 'shirts', value: 1200 },
  { label: 'shoes', value: 2320 },
  { label: 'skirts', value: 2500 },
  { label: 'coffee', value: 120 },
  { label: 'tea', value: 900 },
  { label: 'beer', value: 800 },
  { label: 'water', value: 1500 },
];

const Statistic = () => {
  return (
    <Styled.Container>
      <BarChart
        width={600}
        height={240}
        data={data.sort((a, b) => b.value - a.value)}
        layout="horizontal"
      >
        <YAxis />
        <XAxis dataKey="label" />
        <Bar dataKey="value" fill="#FF751D" layout="horizontal" />
      </BarChart>
    </Styled.Container>
  );
};

export default Statistic;
