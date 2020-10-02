import React from 'react';
import './Nav.css';
import { data } from '../../data';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<div className="container">
				<div className="item left">
					 {/* invalid link to logo in data.js, found replacement online */}
					{/* <img className="logo" src={data.site.logoImage}></img> */}
					<Link to="/Home">
						<img className="logo" alt="logo" src={require('../../logo.png')}></img>
					</Link>
				</div>
				<div className="item mid" >{data.site.title}</div>
				<div className="item right">
					<Link to="/Profile">Welcome Sally</Link>
				</div>
			</div>
		</nav>
	);
}

export default Nav;





