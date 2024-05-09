# Fetcher

Fetcher is a React component that simplifies fetching data from APIs using Axios and renders the results using render props. This component is highly customizable and ensures efficient data fetching with built-in loading and error handling states.

## Installation

To install Fetcher, you need to have Node.js installed on your machine. Then, you can install the package using npm or yarn:

```bash
npm install fetcher
# or
yarn fetcher
```

### Example Usage

```js
import React from "react";
import Fetcher from "fetcher";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
});

function App() {
  return (
    <Fetcher
      api="/data"
      axiosInstance={axiosInstance}
      render={({ loading, json }) => {
        if (loading) return <p>Loading...</p>;
        return <pre>{JSON.stringify(json, null, 2)}</pre>;
      }}
    />
  );
}

export default App;
```

## Props

The Fetcher component accepts the following props:

_api_ (string): The endpoint URL to fetch data from.
_render_ (function): A render prop that returns the JSX based on the fetched data.
_axiosInstance_ (AxiosInstance): An Axios instance configured as needed for requests.
_defaultParams_ (object, optional): Default parameters to be sent with each request.
_searchTerm_ (string, optional): A search term to trigger re-fetching when changed.
_loadingLabel_ (boolean | string, optional): Text or a boolean to show a custom loading message.
_enableSearch_ (boolean, optional): Enables the component to re-fetch data on searchTerm change.

## Contributing

Contributions are always welcome! If you have any improvements or bug fixes, please fork the repository and submit a pull request.

## Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Mtabe - mtabe@gmail.com

Project Link: https://github.com/zechtz/fetcher
