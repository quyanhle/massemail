import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
	renderFields() {
		return(
			<Field label="Survey Title" type="text" name="title" component={SurveyField} />
		);
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
				{this.renderFields()}
				<button type="submit">Submit</button>
			</form>
			);
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);