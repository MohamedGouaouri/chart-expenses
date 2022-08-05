import React from "react";
import '../assets/styles/home.css'
import Chart from "../components/Chart";

const Home = () => {
    return <div className={"home"}>
        <div className={"content-wrapper"}>

            <div className={"balance-container"}>
                <span className={"title"}>
                    My balance
                </span>
                <h2 className={"balance"}>
                    $951.25
                </h2>
            </div>

            <div className={"chart-container"}>
                <h2 className={"chart-title"}>
                    Spending - Last 7 days
                </h2>

                {/* TODO: Chart here   */}

                <Chart />

                {/*<Divider />*/}


            </div>

        </div>
    </div>
}

const Divider = () => {
    return <div className={"divider"}>

    </div>
}

export default Home