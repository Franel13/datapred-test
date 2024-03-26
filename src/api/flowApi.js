import { instance } from "../helpers";

export const fetchFlows = async (
  flowId
) => {
  try {
    const response = await instance.get(
      `/without-auth/flows/${flowId}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
