import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


import './css/Chartblock.css';

const data = [
    {
        name: 'Январь', uv: 4000, pv: 2400,
    },
    {
        name: 'Февраль', uv: 3000, pv: 1398,
    },
    {
        name: 'Март', uv: 2000, pv: 9800,
    },
    {
        name: 'Апрель', uv: 2780, pv: 3908,
    },
    {
        name: 'Май', uv: 1890, pv: 4800,
    },
    {
        name: 'Июнь', uv: 2390, pv: 3800,
    },
    {
        name: 'Июль', uv: 3490, pv: 4300,
    },
    {
        name: 'Август', uv: 4000, pv: 2400,
    },
    {
        name: 'Сентябрь', uv: 3000, pv: 1398,
    },
    {
        name: 'Октябрь', uv: 2000, pv: 9800,
    },
    {
        name: 'Ноябрь', uv: 2780, pv: 3908,
    },
    {
        name: 'Декабрь', uv: 1890, pv: 4800,
    },
];

export default class Chartblock extends PureComponent {


    render() {
        return (
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar  dataKey="pv" stackId="a" fill="#2F80ED"/>
                <Bar   dataKey="uv" stackId="a" fill="#F2C94C" />
            </BarChart>
        );
    }
}
