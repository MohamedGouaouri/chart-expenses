import React, {useContext, useEffect, useState} from "react";
import '../assets/styles/home.css'
import Chart from "../components/Chart";
import {SocketContext} from "../services/context/context";

const Home = () => {
    const [balance, setBalance] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)
    const socket = useContext(SocketContext)

    useEffect(() => {
        const onFetchBalance = (newBalance) => {
            setBalance(newBalance)
        }
        const onFetchTotal = (total) => {
            setTotalBalance(total)
        }

        socket.on("fetch_balance", onFetchBalance)

        socket.on("fetch_total", onFetchTotal)

        return () => {
            socket.off("fetch_balance")
            socket.off("fetch_total")
        }

    }, [socket])
    return <div className={"home"}>
        <div className={"content-wrapper"}>

            <div className={"balance-container"}>
                <span className={"title"}>
                    My balance
                </span>
                <h2 className={"balance"}>
                    ${balance}
                </h2>
            </div>

            <div className={"chart-container"}>
                <h2 className={"chart-title"}>
                    Spending - Last 7 days
                </h2>

                <Chart />

                <Divider />
                <div className={"footer"}>
                    <div className={"left"}>
                        <span className={"title"}>
                            Total this month
                        </span>
                        <h2 className={"balance"}>
                            ${totalBalance}
                        </h2>
                    </div>

                </div>
            </div>

        </div>
    </div>
}

const Divider = () => {
    return <div className={"divider"}>

    </div>
}

export default Home