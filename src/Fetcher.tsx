import React, { useEffect, useState } from "react";
import { AxiosInstance } from "axios";

/**
 * Type definition for the response state in the component.
 */
interface Response {
  loading: boolean;
  json: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Initial state value for response, sets loading to false and json to an empty object.
 */
const RESPONSE_PARAMS: Response = {
  loading: false,
  json: {},
};

/**
 * Props definition for the Fetcher component.
 *
 * @param {string} api - The URL to fetch data from.
 * @param {Function} render - A render prop function that renders the content based on the fetched data.
 * @param {boolean} [enableSearch=false] - Flag to enable or disable search functionality.
 * @param {string} [searchTerm=""] - The search term used when `enableSearch` is true.
 * @param {boolean | string} [loadingLabel=false] - Custom label or boolean to show a loading text.
 * @param {AxiosInstance} axiosInstance - The Axios instance to be used for HTTP requests.
 * @param {Object} [defaultParams={}] - Default parameters to append to the API request.
 */
interface Props {
  api: string;
  render: (response: Response) => JSX.Element;
  enableSearch?: boolean;
  searchTerm?: string;
  loadingLabel?: boolean | string;
  axiosInstance: AxiosInstance;
  defaultParams?: { [key: string]: any };
}

export const Fetcher: React.FC<Props> = ({
  api,
  render,
  defaultParams = {},
  loadingLabel,
  axiosInstance,
  searchTerm = "",
}) => {
  const [response, setResponse] = useState<Response>(RESPONSE_PARAMS);

  /**
   * Fetch data using the provided API and update state accordingly.
   */
  useEffect(() => {
    const fetchData = async () => {
      setResponse((prevState) => ({ ...prevState, loading: true }));

      try {
        const resp = await axiosInstance.get(api, { params: defaultParams });
        setResponse({
          loading: false,
          json: resp.data,
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setResponse((prevState) => ({ ...prevState, loading: false }));
      }
    };

    fetchData();
  }, [searchTerm]);

  /**
   * Conditionally render loading text or the result through a render prop.
   */
  return response.loading && loadingLabel ? (
    <span>
      Loading {typeof loadingLabel === "string" ? loadingLabel : ""}...
    </span>
  ) : (
    <div>{render(response)}</div>
  );
};

export default Fetcher;
