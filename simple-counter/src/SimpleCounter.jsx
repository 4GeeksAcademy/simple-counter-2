import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './SimpleCounter.css';

function SimpleCounter(props) {
    React.useEffect(() => {});

    return (
        <div className="counter-display">
            <div className="clock-img">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="seconds thousands">{props.thousandsDigit}</div>
            <div className="seconds hundreds">{props.hundredsDigit}</div>
            <div className="seconds tens">{props.tensDigit}</div>
            <div className="seconds ones">{props.onesDigit}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    thousandsDigit: PropTypes.number.isRequired,
    hundredsDigit: PropTypes.number.isRequired,
    tensDigit: PropTypes.number.isRequired,
    onesDigit: PropTypes.number.isRequired
};

export default SimpleCounter;
