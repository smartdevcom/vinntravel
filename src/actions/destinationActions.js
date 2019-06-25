import * as types from './actionTypes';
import CityApi from '../api/CityApi';
import * as _ from 'lodash';

export function updateInputValue(value) {
  return {
    type: types.UPDATE_INPUT_VALUE,
    value
  };
}

export function clearSuggestions() {
  return {
    type: types.CLEAR_SUGGESTIONS
  };
}

export function loadSuggestionsBegin() {
  return {
    type: types.LOAD_SUGGESTIONS_BEGIN
  };
}

export function maybeUpdateSuggestions(suggestions, value) {
  return {
    type: types.MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value
  };
}


export function loadSuggestions(value) {
  return function (dispatch) {
    dispatch(loadSuggestionsBegin());
    CityApi.getMatchingCities(value).then((json) => {
      let suggestions = _.map(json, function (s) {
        return {id: ''+s.id, name: s.adi};
      });
      dispatch(maybeUpdateSuggestions(suggestions, value));
    });
  };
}
