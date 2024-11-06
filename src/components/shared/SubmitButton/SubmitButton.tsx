import React from 'react';
import './SubmitButton.css';

const SubmitButton = () => {
    return <input type="submit" value={'Submit'} className={'search_and_filters_submit'} onSubmit={(e) => e.preventDefault()}/>;
};

export default SubmitButton;