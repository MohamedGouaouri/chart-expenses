import React, {useContext, useEffect, useRef, useState} from "react";
import '../assets/styles/chart.css'
import {data} from '../services/data/data'
import {SocketContext} from "../services/context/context";
const Chart = () => {

    const socket = useContext(SocketContext)
    const [amounts, setAmounts] = useState(data)
    useEffect(() => {
        const onFetchAmounts = (newData) => {
            setAmounts(newData)
        }
        socket.on("fetch_amounts", onFetchAmounts)

        return () => {
            socket.off("fetch_amounts")
        }

    }, [socket])

    let itemsLength = 10
    const height = 100
    const width = 500
    return <div className={"chart"}>

        {
            amounts.map((e) => {
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
    const [tooltipVisibility, setTooltipVisibility] = useState(false)


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
                     onMouseEnter={
                         () => {
                             setTooltipVisibility(true)
                         }
                     }
                     onMouseLeave={
                         () => {
                             setTooltipVisibility(false)
                         }
                     }
                >
                    <ToolTip value={amount}
                             width={width / itemsLength}
                             isVisible={tooltipVisibility}
                    />
                </div>

            < /div>

        </div>
        <div className={"chart-bar-title"}>
            {name}
        </div>
    </div>

}


const ToolTip = ({value, width, isVisible}) => {
    const visibility = isVisible ? "visible" : "hidden"
    return <div className={"tool-tip"} style={{width: width, visibility: visibility}}>
        ${value}
    </div>
}

export default Chart