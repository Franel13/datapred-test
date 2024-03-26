import { Horizon } from './Horizon';
import { useHorizon } from '../../hooks';

import "./HorizonState.css";

export const HorizonState = (props) => {
    const { date, flowId = 1, frequency = 'B' } = props;

    const { runData, trendData } = useHorizon(flowId, date, frequency);

    if (!date) {
        return (
            <div className='error-message'>
                <h5>Please select a date</h5>
            </div>
        )
    }

    if (!runData) {
        return (
            <div className='error-message'>
                <h5>No run available for this date</h5>
            </div>
        )
    }

    if (!!runData && !runData.results[0].complete) {
        return (
            <div className='error-message'>
                <h5>No complete run for this date</h5>
            </div>
        )
    }

    return (
        <>
            {!!trendData?.results?.length && <Horizon data={trendData.results} />}
        </>
    )
}