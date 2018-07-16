import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return [
					<li><Payments /></li>,
					<li>
						<a href="/api/logout">Log out</a>
					</li>
				];
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper teal lighten-2">
					<Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
						Logo
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
