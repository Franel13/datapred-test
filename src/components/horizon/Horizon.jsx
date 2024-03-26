import moment from "moment";

import "./Horizon.css";

export const Horizon = (props) => {

    return (
        <>
            <table className="striped">
                <caption>Price trend summary</caption>
                <thead>
                    <tr>
                        <th scope="col">Horizon Date</th>
                        <th scope="col">Horizon Name</th>
                        <th scope="col">Trend</th>
                    </tr>
                </thead>
                <tbody>
                    { props.data.map((result, index) => (
                        <tr key={index}>
                            <td>{moment(result.horizon_date).format('YYYY-MM-DD')}</td>
                            <td>{result.horizon_name}</td>
                            <td>{result.trend}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    )
}