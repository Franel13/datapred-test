import { instance } from "../helpers";

export const fetchTrends = async (
  flowId,
  runId,
  outputId
) => {
  try {
    const response = await instance.get(
      `/without-auth/flows/${flowId}/runs/${runId}/outputs/${outputId}/trends`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
