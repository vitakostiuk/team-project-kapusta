import React, { useEffect, useState } from 'react';
import {
  BarChart,
  YAxis,
  XAxis,
  Bar,
  Text,
  ResponsiveContainer,
} from 'recharts';
import * as Styled from './Statistic.styled';

const Statistic = ({ list }) => {
  const [arr, setArr] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const data = list.reduce((acc, el) => {
      let label = el.description.split(' ')[0];
      if (label.length > 8) {
        label = label.slice(0, 8);
      }
      return [
        {
          label: label,
          value: el.value,
        },
        ...acc,
      ];
    }, []);
    setArr(data);
  }, [list]);

  const maxValue = arr.reduce(
    (acc, el) => (el.value > acc ? el.value : acc),
    0,
  );

  const customTick = ({ x, y, width, height, type, fill, payload }) => {
    const axis = x / maxValue;
    const delta = maxValue - payload.value;
    const position = x - delta * axis - 80;
    const data = payload.value + ' uah.';
    return (
      <Text
        type={type}
        fill={fill}
        width={width}
        height={height}
        x={position >= x ? x : position < x * 0.4 ? x * 0.43 : position}
        y={y - 12}
      >
        {data}
      </Text>
    );
  };

  const customVerticalTick = ({ x, y, width, height, type, fill, payload }) => {
    const axis = y / maxValue;
    const delta = maxValue - payload.value;
    const position = y + delta * axis * 7;
    return (
      <Text
        type={type}
        fill={fill}
        width={width}
        height={height}
        textAnchor={'middle'}
        x={x}
        y={position <= y ? y : position}
      >
        {payload.value}
      </Text>
    );
  };

  if (window.innerWidth < 768) {
    return (
      <Styled.Container>
        <ResponsiveContainer width={'100%'} height={arr.length * 40 + 40}>
          <BarChart
            data={arr.sort((a, b) => b.value - a.value)}
            layout="vertical"
            barSize={15}
            barCategoryGap={200}
            margin={{ bottom: 0, left: -40, top: 20, right: -80 }}
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
              width={100}
              dataKey="value"
              axisLine={false}
              tickLine={false}
              orientation="right"
              tick={customTick}
            />
            <Bar dataKey="value" fill="#FF751D" radius={[0, 10, 10, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Styled.Container>
    );
  }

  if (window.innerWidth > 767) {
    const width = arr.length * 70 + 150;
    return (
      <Styled.Container>
        <Styled.BgContainer>
          <ResponsiveContainer
            width={width > window.innerWidth * 0.8 ? '100%' : width}
            height={422}
          >
            <BarChart
              data={arr.sort((a, b) => b.value - a.value)}
              barSize={width > window.innerWidth * 0.8 ? 25 : 38}
              barCategoryGap={width > window.innerWidth * 0.8 ? 40 : 25}
              margin={{ left: 70, right: 70 }}
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
              <Bar
                dataKey="value"
                fill="currentColor"
                radius={[10, 10, 0, 0]}
                onMouseEnter={({ value }) => setActive(value)}
                onMouseLeave={() => setActive(null)}
                key={'label'}
                label={props => {
                  const activeLabel = props.value === active;
                  props = {
                    ...props,
                    y: '5%',
                    x: '50%',
                  };

                  const data = props.value + ' uah.';

                  if (activeLabel) return <text {...props}>{data}</text>;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </Styled.BgContainer>
      </Styled.Container>
    );
  }
};

export default Statistic;
