import moment from 'moment';
import './Datepicker.css';

export const Datepicker = (props) => {
    const { placeholder, name, onDateChange, value } = props;

    const handleDateChange = (event) => {
        onDateChange(moment(event.target.value).format('YYYY-MM-DD'))
    }

    return (
        <>
            <div className="input-wrap">
                <div className='input-container'>
                    <label htmlFor={name}>Select a date</label>
                    <br />
                    <input
                        type={"date"}
                        placeholder={placeholder}
                        value={value || ''}
                        onChange={handleDateChange}
                        name={name}
                    />

                </div>
            </div>
        </>
    )
}