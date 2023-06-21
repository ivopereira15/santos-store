const config = {
    api: 'https://esaintsmarket.onrender.com',
    options: {
      headers: { 'content-type': 'application/json' },
    },
  };
  
  const httpGetProducts = (endpoint) => {
    return fetch(`${config.api}${endpoint}`, {
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };

    
  const httpGetProduct = (endpoint) => {
    return fetch(`${config.api}${endpoint}`, {
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };

  const httpGetCategoryList = (endpoint) => {
    return fetch(`${config.api}${endpoint}`, {
      ...config.options,
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const handleResponse = (response) => {
    if (response.status === 200) {
       
      return response.json();
    } else {
      throw Error(response.json() | 'error');
    }
  };

  // eslint-disable-next-line import/no-anonymous-default-export
  export default { httpGetProducts, httpGetCategoryList, httpGetProduct };

