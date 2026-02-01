import { testBearerFromServer } from "@/services/demo/server-side";

export const metadata = {
  title: "Server Side Demo | QR Bistro",
  description: "Demo page for testing bearer token from server side",
};

const ServerSidePage = async () => {
  const response = await testBearerFromServer();
  console.log("result :>> ", response);

  return (
    <div style={{ padding: 20 }}>
      <h1>Server Side Demo</h1>
      <p style={{ color: "#666" }}>
        This page calls API from Server Component using httpRequest
      </p>

      <hr style={{ margin: "20px 0" }} />

      <h2>API Response:</h2>
      <div
        style={{
          background: response.status ? "#e8f5e9" : "#ffebee",
          padding: 15,
          borderRadius: 8,
        }}
      >
        <p>
          <strong>Status:</strong> {response.status ? "Success" : "Failed"}
        </p>
        <p>
          <strong>Source:</strong> {JSON.stringify(response.result)}
        </p>
      </div>

      <p>
        <a href="/demo/client-side">Go to Client Side Demo</a>
      </p>
    </div>
  );
};

export default ServerSidePage;
