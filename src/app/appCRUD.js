import axios from "axios";

const base_url = `https://restcountries.com`;

export function getCountrylist() {
  return axios.get(`${base_url}/v2/all?fields=name,region,flag`);
}
