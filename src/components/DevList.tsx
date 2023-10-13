import { useAppSelector } from "@/hooks/useReduxHooks";
import Image from "next/image";

export const DevList = () => {
  const { developers } = useAppSelector((state) => state.dev);

  return (
    <div className="flex flex-col w-full">
      {developers.map((developer) => (
        <div
          className="bg-white mt-2 mb-2 p-2 rounded flex flex-row justify-between"
          key={developer.id}
        >
          <div className="flex flex-row align-middle justify-center">
            <Image
              src={developer.avatar_url || "/"}
              alt="avatar-pic"
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
              className="rounded-full "
              width={40}
              height={40}
            />
            <p className="self-center pl-2">{developer.name}</p>
          </div>

          <p className="self-center pr-2">Joined {developer.created_at}</p>
        </div>
      ))}
    </div>
  );
};
