import React from 'react'
import Chart from 'react-apexcharts'

import './Grafico.css'

export const Grafico = () => {

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

    const options = {
        plotOptions: {
            pie: {
                donut: {
                    size: '40%'
                }
            }
        },
        series: [54, 171, 171, 69, 69, 26, 70, 40, 11, 11, 1, 1, 7, 7],
        labels: labels,
        colors: backgroundColorsHexa,
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: []
            }
        },
        dataLabels: {
            colors: ['white'],
            style: {
                colors: ['white']
            }
        }

    }

    return (
        <div style={{ marginTop: '100px', textAlign: 'left', color: 'white' }} className='content-grafic'>
            <div className="donut">
                <Chart options={options} series={options.series} type="donut" width="600" />
            </div>
        </div>
    )
}
