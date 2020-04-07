import React from "react";
import PropTypes from "prop-types";

const Event  = (event) => {
    return (
        <div>
            <span>{event.id}</span>
            <span>{event.title}</span>
        </div>
    );
};

Event.defaultProps = {
    id: '',
    title: ''
};

Event.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
}
export default Event;