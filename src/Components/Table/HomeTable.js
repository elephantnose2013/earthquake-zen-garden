import React from 'react';
import { data } from '../../data';
import './HomeTable.css';
import { Link } from 'react-router-dom';

function HomeTable() {
	return (
		<div>
			<table>
				<caption>{data.data.metadata.title}</caption>
				<thead className="colnames">
					<tr>
						<td>Place</td>
						<td>Magnitude</td>
						<td>Time</td>
					</tr>
				</thead>
				<tbody>
					{data.data.features.map(function (feature) {
						var time_val = new Date(feature.properties.time).toISOString();
						time_val = time_val.substring(0, time_val.length - 5) + "-07:00";
						const detail_redir = {
							pathname: "/Detail",
							obj: feature
						};
						return <tr key={feature.id}>
							<td><Link to={detail_redir}>{feature.properties.place}</Link></td>
							<td style={{ textAlign: "center" }}>{feature.properties.mag}</td>
							<td >{time_val}</td>
						</tr>
					})}
				</tbody>
			</table>
		</div>
	);
}

export default HomeTable;
