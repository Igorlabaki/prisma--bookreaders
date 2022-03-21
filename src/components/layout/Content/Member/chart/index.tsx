import { useState } from "react";
import { Chart } from "react-google-charts";
import { CharContainer } from "./styles";


export default function ChartComponent(){
    const [options, setOptions] = useState({
        title: 'Gráfico de Pizza'
      })

    const [data, setData] = useState([
        ['Linguagens', 'Quantidade'],
        ['React', 100],
        ['Angula', 80],
        ['Vue', 50],
      ])
    return(
        <CharContainer>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                data={data}
                options={options}
                className={'chart'}
            />
        </CharContainer>
    )
}