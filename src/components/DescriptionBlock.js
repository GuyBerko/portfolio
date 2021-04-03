import React from 'react';
import { Button } from 'reactstrap';
import '../style/DescriptionBlock.css';
import PropTypes from 'prop-types';

export const DescriptionBlock = ({ onToggleModal }) => {
    return (
        <div className="main-description nonselectable">
            <h1>Hello!</h1>
            <h2>I am Guy Berkovich</h2>
            <h3>A FullStack Developer</h3>
            <div className="buttons-container">
                <Button size="lg" outline color="secondary" onClick={ onToggleModal.bind(this, 'aboutModal') }>About Me</Button>
                <Button size="lg" outline color="secondary" onClick={ onToggleModal.bind(this, 'contactModal') }>Contact Me</Button>
            </div>
        </div>
    )
};

DescriptionBlock.propTypes = {
    onToggleModal: PropTypes.func.isRequired
}

export default DescriptionBlock;
