import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout 
				name="Massemail"
				description="1$ for 100 emails"
				amount={100}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn red lighten-2">Add credit</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);