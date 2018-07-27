import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
	{ label: 'Survey Field', name: 'title'},
	{ label: 'Subject Line', name: 'subject'},
	{ label: 'Email body', name: 'body'},
	{ label: 'Recipients', name: 'emails'}
];
class SurveyForm extends Component {
	renderFields() {
		return(
			FIELDS.map(({ label, name }) => {

				return <Field key={name} label={label} name={name} type="text" component={SurveyField}/>;
			})
		);
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
				{this.renderFields()}
				<Link to="/surveys" className="red btn-flat white-text">
					Cancel
				</Link>
				<button type="submit" className="teal btn-flat right white-text">
					Next
					<i className="material-icons right">send</i>
				</button>
			</form>
			);
	}
}

const validate = values => {
	const errors = {};
	FIELDS.forEach( ({name}) => {
		if (!values[name]) {
			errors[name] = 'Requires';
		}
	});
	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);