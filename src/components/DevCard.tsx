import { useDevs } from "@/hooks/useDevs";
import { useAppSelector } from "@/hooks/useReduxHooks";
import Image from "next/image";
import { useEffect } from "react";

export const DevCard = () => {
  const { startGettingUsers } = useDevs();

  const { activeDev, status } = useAppSelector((state) => state.dev);

  useEffect(() => {
    startGettingUsers();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {status === "loading" ? (
        <></>
      ) : (
        <div className="flex flex-row">
          <Image
            src={activeDev.avatar_url || "/"}
            alt="avatar-pic"
            className="rounded-full"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <div className="flex flex-row justify-around">
              <h2>{activeDev.name}</h2>
              <p>Joined {activeDev.created_at}</p>
            </div>
            <a href={activeDev.html_url}>@{activeDev.login}</a>
            <p>{activeDev.bio}</p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p>Repos</p>
                <h3>{activeDev.public_repos}</h3>
              </div>
              <div className="flex flex-col">
                <p>Followers</p>
                <h3>{activeDev.followers}</h3>
              </div>
              <div className="flex flex-col">
                <p>Following</p>
                <h3>{activeDev.following}</h3>
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row">
              <div className="flex flex-col">
                <p>{activeDev.location}</p>
                <p>{activeDev.blog}</p>
              </div>
              <div className="flex flex-col">
                <p>{activeDev.twitter_username}</p>
                <p>{activeDev.company}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};