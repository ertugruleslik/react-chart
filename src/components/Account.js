import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import moment from 'moment'

const Account = ( props ) => {

	let history = useHistory();

	const {id, displayName, accountType, role, price, quantity, volume, tradeDate, acceptedTradeQuantity} = props.data;

	return (
		<tr onClick={() => history.push(`detail/${id}`, props.data)}>
			<td>{id}</td>
			<td>{displayName}</td>
			<td>{accountType}</td>
			<td>{role}</td>
			<td>${(price).toFixed(2)}</td>
			<td>{quantity}</td>
			<td>{(volume).toFixed(2)}</td>
			<td>{moment(tradeDate).format('YYYY/MM/DD')}</td>
			<td>${(acceptedTradeQuantity).toFixed(2)}</td>
		</tr>
	)
};

export default withRouter(Account);
