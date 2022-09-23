import React from 'react'
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './DonoutGraf.css'

console.log(Chart);

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

const labels = [
    'Deposito Virtual',
    'Transferencia Interna Saliente',
    'Transferencia Interna Entrante',
    'Link de Pago Saliente',
    'Link de Pago Entrante',
    'Retiro Virtual',
    'Transferencia Externa Saliente',
    'Retención',
    'deposito.virtual.entrante',
    'deposito.virtual.saliente',
    'retiro.virtual.saliente',
    'retiro.virtual.entrante',
    'qr.pago.saliente',
    'qr.pago.entrante'
]

const backgroundColors = [
    'midnightblue',
    'navy',
    'darkblue',
    'mediumblue',
    'blue',
    'royalblue',
    'dodgerblue',
    'deepskyblue',
    'cornflowerblue',
    'skyblue',
    'lightskyblue',
    'powderblue',
    'lightblue',
    'steelblue'
]

const backgroundColorsHexa = [
    '#0697FF',
    '#4F74A6',
    '#48C8FF',
    '#E5E5E5',
    '#7196F5',
    '#0789EC',
    '#61B3D7',
    '#0A52A4',
    '#0871CD',
    '#3764A3',
    '#DCE8F6',
    '#DCE8F6',
    '#768CC3',
    '#C0E5FF'
]

export const DonoutGraf = () => {

    const data = {
        labels: labels,
        datasets: [{
            label: '',
            data: [54, 171, 171, 69, 69, 26, 70, 40, 11, 11, 1, 1, 7, 7],
            backgroundColor: backgroundColorsHexa,
            borderColor: backgroundColorsHexa,
            color: 'red',
            borderWidth: 1
        }]
    };

    return (
        <div className='grafic-container-section'>
            <div className='grafic-container-box'>
                <Doughnut
                    data={data} height={500} width={700}
                    options={
                        {
                            maintainAspectRatio: false,
                            plugins: {
                                datalabels: {
                                    color: 'white',
                                    font: {
                                        size: '15px',
                                        weight: 'bold'
                                    },
                                    formatter: (value, dnct1) => {
                                        let sum = 0;
                                        let dataArr = dnct1.chart.data.datasets[0].data;
                                        dataArr.map(data => {
                                            return sum += data;
                                        });
                                        let percentage = (value * 100 / sum).toFixed(2) + '%';
                                        return percentage;
                                    }
                                },
                                legend: {
                                    position: 'right',
                                    display: true,
                                    labels: {
                                        usePointStyle: true,
                                        color: '#000000',
                                        padding: 18,
                                        font: {
                                            size: 14
                                        }
                                    },
                                    onHover: (evt, item, legend) => {
                                        const chart = legend.chart;
                                        const tooltip = chart.tooltip;

                                        const chartArea = chart.chartArea;
                                        tooltip.setActiveElements([{
                                            datasetIndex: 0,
                                            index: item.index,
                                        }], {
                                            x: (chartArea.left + chartArea.right) / 2,
                                            y: (chartArea.top + chartArea.bottom) / 2,
                                        });
                                        chart.update();
                                    }
                                }
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}