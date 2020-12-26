import React from 'react';
import moment from "moment";

const AccountDetail = (props) => {

	const {id, displayName, accountType, role, price, quantity, volume, tradeDate, acceptedTradeQuantity} = props;

	console.log(props);

	return (
		<div className="detail">
			<div className="ui segment">
				<ul>
					<li>Id : <strong>{id}</strong></li>
					<li>Account Display Name : <strong>{displayName}</strong></li>
					<li>Account Type : <strong>{accountType}</strong></li>
					<li>Direction : <strong>{role}</strong></li>
					<li>Price : <strong>{price}</strong></li>
					<li>Quantity : <strong>{quantity}</strong></li>
					<li>Volume : <strong>{volume}</strong></li>
					<li>Trade Time : <strong>{moment(tradeDate).format('YYYY/MM/DD')}</strong></li>
					<li>Avoided Loss : <strong>{acceptedTradeQuantity}</strong></li>
				</ul>
			</div>
		</div>
	)
};

export default AccountDetail;
