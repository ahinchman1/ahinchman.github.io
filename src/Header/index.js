import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = props =>
	<header>
        <h1>Watch my dog attempt to play with my bird</h1>
        <p>Will she stay calm or will she panic</p>
        <GuestInputForm
        	newGuestSubmitHandler={props.newGuestSubmitHandler}
        	pendingGuest={props.pendingGuest}
        	handleNameInput={props.handleNameInput} />
        <p>Look at her panicking</p>
    </header>;

Header.propTypes = {
	newGuestSubmitHandler: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired,
	handleNameInput: PropTypes.func.isRequired
};

export default Header;