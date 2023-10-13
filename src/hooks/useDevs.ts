import { Octokit } from "octokit";
import { useAppDispatch, useAppSelector } from "./useReduxHooks";
import { onLoading, onSelectDev } from "@/store/dev/devSlice";

export const useDevs = () => {
  const dispatch = useAppDispatch();
  const dev = useAppSelector((state) => state.dev);

  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  const startGettingUser = async (username: string) => {
    dispatch(onLoading());
    try {
      const { data } = await octokit.request("GET /users/{username}", {
        username,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      dispatch(onSelectDev(data));
    } catch (error) {
      console.error(error);
    }
  };
  return { startGettingUser, dev };
};
