import {
  useState,
  useEffect,
} from "react";
import {
  fetchFlows,
  fetchRuns,
  fetchOutputs,
  fetchTrends,
} from "../api";

export const useHorizon = (
  flowId = 1,
  date,
  frequency = "B"
) => {
  const [flowData, setFlowData] =
    useState();
  const [runData, setRunData] =
    useState();
  const [outputData, setOutputData] =
    useState();
  const [trendData, setTrendData] =
    useState();

  const loadFlowsData = async () => {
    try {
      const result = await fetchFlows(
        flowId
      );
      setFlowData(result);
    } catch (err) {
      console.log(err);
    }
  };

  const loadRunsData = async () => {
    try {
      const result = await fetchRuns(
        flowId,
        date,
        frequency
      );
      setRunData(result);
    } catch (err) {
      console.log(err);
    }
  };

  const loadOutputsData = async () => {
    try {
      const result = await fetchOutputs(
        flowId,
        runData?.results?.[0]?.id
      );
      setOutputData(result);
    } catch (err) {
      console.log(err);
    }
  };

  const loadTrendsData = async () => {
    try {
      const result = await fetchTrends(
        flowId,
        runData?.results?.[0]?.id,
        outputData?.results?.[0]?.id
      );
      setTrendData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (date) {
      loadFlowsData();
      loadRunsData();
    }
  }, [date]);

  useEffect(() => {
    if (
      runData?.results?.[0]?.complete
    ) {
      loadOutputsData();
    }
  }, [runData]);

  useEffect(() => {
    if (
      runData?.results?.[0]?.complete &&
      outputData?.results?.[0]?.id
    ) {
      loadTrendsData();
    }
  }, [runData, outputData]);

  return {
    flowData,
    runData,
    outputData,
    trendData,
  };
};
