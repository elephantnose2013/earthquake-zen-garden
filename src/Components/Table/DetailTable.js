import React, { Component } from 'react';

class DetailTable extends Component {
	render() {
		return (
			<div>
				<table>
					<caption>{this.props.location.obj.properties.title}</caption>
					<tbody>
						<tr>
							<td className="bolded">Place</td>
							<td>{this.props.location.obj.properties.place}</td>
						</tr>
						<tr>
							<td className="bolded">Magnitude</td>
							<td>{this.props.location.obj.properties.mag}</td>
						</tr>
						<tr>
							<td className="bolded">time</td>
							<td>{this.props.location.obj.properties.time}</td>
						</tr>
						<tr>
							<td className="bolded">status</td>
							<td>{this.props.location.obj.properties.status}</td>
						</tr>
						<tr>
							<td className="bolded">tsunami</td>
							<td>{this.props.location.obj.properties.tsunami}</td>
						</tr>
						<tr>
							<td className="bolded">type</td>
							<td>{this.props.location.obj.properties.type}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default DetailTable;
