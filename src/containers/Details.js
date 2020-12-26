import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

import AccountDetail from '../components/AccountDetail';

const Details = (props) => {

	return (
		<div className="container">
			<Button className="btn" onClick={() => props.history.goBack()}>Back</Button>
			<AccountDetail {...props.location.state} />
		</div>
	);
}

export default withRouter(Details);
