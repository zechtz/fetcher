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
