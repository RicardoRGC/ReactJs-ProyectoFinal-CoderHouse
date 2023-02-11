import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);

  async function handleAxiosGet(url) {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleAxiosGet(url);
  }, []);

  return [data];
}

export default useFetch;
