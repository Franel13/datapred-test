import { useState } from "react"

import { Datepicker } from "../datepicker/Datepicker"
import { HorizonState } from "../horizon/HorizonState";
import "./Dashboard.css"

export const Dashboard = () => {
    const [date, setDate] = useState('');

    return (
        <>
            <h1>Datapred Test</h1>
            <Datepicker
                placeholder="Select date"
                name="datepicker"
                onDateChange={(value) => {
                    setDate(value)
                }}
                value={date}
            />
            <HorizonState date={date} />
        </>
    )
}