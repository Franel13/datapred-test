import { instance } from "../helpers";

export const fetchOutputs = async (
  flowId,
  runId
) => {
  try {
    const response = await instance.get(
      `/without-auth/flows/${flowId}/runs/${runId}/outputs`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchOutputs;
