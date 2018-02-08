let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "zendichron.herokuapp.com") {
  backendHost = "https://zendichron-rest-api.herokuapp.com";
} else {
  backendHost = "http://localhost:3050";
}

export default backendHost;
