import { instance } from "../helpers";
import moment from "moment";

export const fetchRuns = async (
  flowId,
  date,
  frequency
) => {
  try {
    const response = await instance.get(
      `/without-auth/flows/${flowId}/runs?production_date=${moment(
        date
      )
        .utc(true)
        .format()}&run_frequency=${frequency}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
