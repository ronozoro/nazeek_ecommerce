const current_url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_DEPLOYMENT_URL;

export default current_url;

const determineHeaders = () => {
  if (navigator.cookieEnabled && localStorage.getItem("ecom_token")) {
    return {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `JWT ${localStorage.getItem("ecom_token")}`
    };
  }
  return {
    accept: "application/json",
    "Content-Type": "application/json"
  };
};

export { determineHeaders };
