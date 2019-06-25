import Client from "./Client";

function getCities(value) {
  let url = '/api/facilities/citySuggest?name=' + value;
  return Client.fetchJson(url);
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getCitySuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : getCities(value);
};
const CityService = {getCitySuggestions};
export default CityService;
