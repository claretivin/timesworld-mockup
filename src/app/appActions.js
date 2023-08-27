import * as api from "./appCRUD";
import { appSlice, callTypes } from "./appSlice";

const { actions } = appSlice;

export const countryList = () => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return api.getCountrylist().then((response) => {
    const country_list = response.data;
    dispatch(actions.country_list({ country_list }));
  });
};
