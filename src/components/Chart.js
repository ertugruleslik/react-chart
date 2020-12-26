import React from 'react';
import moment from 'moment'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const Chart = ({data}) => {

	const options = {
		chart: {
			width: 1140
		},
		title: {
			text: 'Chart'
		},
		series: [{
			data: data
		}],
		xAxis: {
			tickInterval: 1,
			labels: {
				enabled: true,
				formatter: function() { return data[this.value][0]},
			}
		},
	};

	return (
		<HighchartsReact highcharts={Highcharts} options={options} />
	)
};

const mapStateToProps = state => ({
	data: state.account.graphData.map((item) => {return [moment(item.date).format('YYYY/MM/DD'), item.quantity]})
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chart));
