import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Account from '../components/Account';
import Chart from '../components/Chart';
import Loader from '../components/Loader';
import Table from 'react-bootstrap/Table'
import { getAccountList } from '../store/account/actions';

const Home = (props) => {

	const { nodes, loading } = props;

	useEffect(() => {
		props.getAccountList({indent:2});
	}, []);

	return (
		<div className="container">
			<div className="items">
				<Chart />
				<Table striped bordered hover>
					<thead>
					<tr>
						<th>#</th>
						<th>Account Display Name</th>
						<th>Account Type</th>
						<th>Direction</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Volume</th>
						<th>Trade Time</th>
						<th>Avoided Loss</th>
					</tr>
					</thead>
					<tbody>
						{ nodes.map((res, index) =>
							<Account key={index} data={res} />
						)}
					</tbody>
				</Table>

				{loading && (
					<div className="text-center">
						<Loader />
					</div>
				)}
			</div>
		</div>
	);

}

const mapStateToProps = state => ({
	nodes: state.account.nodes,
	loading: state.account.loading
});

const mapDispatchToProps = {
	getAccountList
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
