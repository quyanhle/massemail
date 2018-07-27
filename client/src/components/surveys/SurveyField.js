import React from 'react';

const SurveyField = ({ input, label, meta: {touched, error, warning} }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{marginBottom: '5px'}}/>
			<div className="red-text" style={{marginBottom: '20px'}}>
			{touched &&
	        ((error && <span>{error}</span>) ||
	          (warning && <span>{warning}</span>))}
	        </div>
		</div>
		);
}

export default SurveyField;