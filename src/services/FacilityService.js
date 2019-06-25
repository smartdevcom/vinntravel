/* eslint-disable no-undef */
import Client from "./Client";

export default function getFacilities(searchBoxData) {
  let url = '/api/facilities/search?location=' +
    searchBoxData.location +
    '&start=' + new Date(searchBoxData.start).toISOString().slice(0,10) +
    '&end=' + new Date(searchBoxData.end).toISOString().slice(0,10) +
    '&room=' + searchBoxData.room +
    '&adults=' + searchBoxData.adults +
    '&kids=' + searchBoxData.kids;
  return Client.fetchJson(url).then(searchBoxData);
}
