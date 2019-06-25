import * as logger from './Logger';
import urls from '../urls';

/* eslint-disable no-undef */
function fetchJson(url) {
  let inputUrl = combinePath(urls.apiHost, url);
  return fetch(inputUrl, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON);
}

function postData(url, data) {
  let inputUrl = combinePath(urls.apiHost, url);
  // Default options are marked with *
  return fetch(inputUrl, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    //mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    //redirect: "follow", // manual, *follow, error
    //referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  logger.log(error); // eslint-disable-line no-console
  //throw error;
  return response;
}

function parseJSON(response) {
  return response.json();
}

function combinePath(host, url) {
  let h = host.trim();
  let u = url.trim();
  if (!h.endsWith("/")) {
    h = h + "/";
  }
  if (u.startsWith("/")) {
    u = u.substring(1);
  }
  return h + u;
}

const Client = {
  fetchJson,postData
};
export default Client;
