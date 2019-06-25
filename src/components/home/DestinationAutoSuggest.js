import React from 'react';
import PropTypes from 'prop-types';
import * as suggestionActions from '../../actions/destinationActions';
import * as logger from '../../services/Logger';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

class DestinationAutoSuggest extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: this.props.value,
			suggestions: this.props.suggestions,
			isLoading: this.props.isLoading
		};
		this.onChange = this.onChange.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.getSuggestionValue = this.getSuggestionValue.bind(this);
		this.renderSuggestion = this.renderSuggestion.bind(this);
	}

	onChange(event, { newValue }) {
		this.props.dispatch(suggestionActions.updateInputValue(newValue));
		this.props.onChange(newValue);
	}

	onSuggestionsFetchRequested({ value }) {
		this.props.dispatch(suggestionActions.loadSuggestions(value));
	}

	onSuggestionsClearRequested() {
		this.props.dispatch(suggestionActions.clearSuggestions());
	}

	getSuggestionValue(suggestion) {
		return suggestion.name;
	}

	renderSuggestion(suggestion) {
		return <span>{suggestion.name}</span>;
	}

	render() {
		const { value, suggestions, isLoading } = this.props;
		const inputProps = {
			placeholder: 'Cities, areas and places',
			value,
			onChange: this.onChange
		};
		const status = isLoading ? 'Loading...' : 'Type to load suggestions';
		logger.info(status);
		return (
			<div>
				{/*<div className="status">*/}
				{/*<strong>Status:</strong> {status}*/}
				{/*</div>*/}
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionValue={this.getSuggestionValue}
					renderSuggestion={this.renderSuggestion}
					inputProps={inputProps}
				/>
			</div>
		);
	}
}

DestinationAutoSuggest.propTypes = {
	value: PropTypes.string.isRequired,
	suggestions: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	dispatch: PropTypes.func,
	onChange: PropTypes.func
};

function mapStateToProps(state) {
	const { value, suggestions, isLoading } = state.suggestionReducer;

	return {
		value,
		suggestions,
		isLoading
	};
}

export default connect(mapStateToProps)(DestinationAutoSuggest);
