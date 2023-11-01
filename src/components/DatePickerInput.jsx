import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import '../assets/styles/datePicker.css';

const DatePickerInput = ({id,name}) => {
    const [startDate, setStartDate] = useState(null);

    return (
        <DatePicker
            id={id}
            name={name}
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => {
                const monthNames = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];

                return (
                    <div
                        style={{
                            margin: '10px 17px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <h5 style={{fontWeight: 600 }}>{monthNames[date.getMonth()]}</h5>
                            <h5 style={{fontWeight: 600 }}>{date.getFullYear()}</h5>

                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '5px'
                        }}>
                            <button className='calChevIcon' onClick={(e) => { e.preventDefault(); decreaseMonth() }} disabled={prevMonthButtonDisabled}>
                                <HiOutlineChevronLeft />
                            </button>
                            <button className='calChevIcon' onClick={(e) => { e.preventDefault(); increaseMonth() }} disabled={nextMonthButtonDisabled}>
                                <HiOutlineChevronRight />
                            </button>
                        </div>
                    </div>
                );
            }}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Month / Day / Year"
            showIcon
            icon={<AiOutlineCalendar />}
            isClearable
        />
    );
};

export default DatePickerInput;
