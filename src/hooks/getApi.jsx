import axios from "axios";
import { useEffect, useState } from "react";

function getApi(params) {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true)
  async function getData(params) {
    try {
      let data = await axios.get(`${import.meta.env.VITE_BASE_URL}${params}`);
      setdata(data.data);
      setloading(false)
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getData(params);
  }, []);
  return {data, loading};
}

export default getApi;
