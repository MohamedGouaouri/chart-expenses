import React, {useEffect, useRef, useState} from "react";
import '../assets/styles/chart.css'
import {data} from '../services/data/data'
const Chart = () => {
    const ref = useRef(null)


    let itemsLength = 10
    const height = 100
    const width = 500
    return <div className={"chart"}>

        {
            data.map((e) => {
                return <Bar
                    height={height}
                    amount={e.amount}
                    width={width}
                    name={e.day}
                    itemsLength={itemsLength}
                    key={e.day}
                />
            })
        }

    </div>
}


const Bar = ({name, height, amount, width, itemsLength}) => {
    const [color, _] = useState("var(--clr-primary-red-soft)")

    return <div className={"chart-bar-container"}>
        <div className={"chart-bar"}
        >
            <div style={{
                height: height,
                width: width / itemsLength,
                backgroundColor: 'transparent',
            }}
            >
                <div className={"inner"}
                     style={{
                        height: amount * height * 3 / 100,
                        backgroundColor: color,
                        borderRadius: '0.5rem',

                    }}

                >
                </div>
            < /div>

        </div>
        <div className={"chart-bar-title"}>
            {name}
        </div>
    </div>

}

export default Chart