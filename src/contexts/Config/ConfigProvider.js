import useSWR from "swr";
import ConfigContext from "@/contexts/Config/ConfigContext";

export const ConfigProvider = ({ children }) => {
  const { data, isLoading } = useSWR("/api/config", (url) => {
    return fetch(url).then((resp) => {
      return resp.json();
    });
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
  );
};
