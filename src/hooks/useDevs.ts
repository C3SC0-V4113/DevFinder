import { Octokit } from "octokit";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";
import { onLoading, onSelectDev } from "@/store/dev/devSlice";

export const useDevs = () => {
  const dispatch = useAppDispatch();
  const dev = useAppSelector((state) => state.dev);

  const octokit = new Octokit({
    auth: "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",
  });

  const startGettingUsers = async () => {
    dispatch(onLoading());
    try {
      const { data } = await octokit.request("GET /users/{username}", {
        username: "C3SC0-V4113",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      dispatch(onSelectDev(data));
    } catch (error) {
      console.error(error);
    }
  };
  return { startGettingUsers, dev };
};