import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';

import particlesParams from '../../const/particles';
import '../../style/Layout.css';

const Layout = props => {
    return (
        <Animate to="1" from="0" attributeName="opacity">
            <Particles
                params={ particlesParams }
                className="particle"
            />
            {props.children }
        </Animate>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Layout;

