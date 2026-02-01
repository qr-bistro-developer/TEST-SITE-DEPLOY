"use client";

import { useState } from "react";
import { testBearerFromClient } from "@/services/demo/client-side";

const ClientSidePage = () => {
  const [$result, setResult] = useState(null);
  const [$loading, setLoading] = useState(false);

  const handleTestApi = async () => {
    setLoading(true);
    try {
      const response = await testBearerFromClient();
      setResult(response);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Client Side Demo</h1>
      <p style={{ color: "#666" }}>
        This page calls API from Client Component using Server Action
      </p>

      <hr style={{ margin: "20px 0" }} />

      <button
        onClick={handleTestApi}
        disabled={$loading}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          cursor: $loading ? "not-allowed" : "pointer",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: 8,
        }}
      >
        {$loading ? "Loading..." : "Test Bearer Token API"}
      </button>

      {$result && (
        <>
          <hr style={{ margin: "20px 0" }} />

          <h2>API Response:</h2>
          <pre
            style={{
              background: "#f5f5f5",
              padding: 15,
              borderRadius: 8,
              overflow: "auto",
              fontSize: 12,
            }}
          >
            {JSON.stringify($result, null, 2)}
          </pre>
        </>
      )}

      <hr style={{ margin: "20px 0" }} />

      <p>
        <a href="/demo/server-side">Go to Server Side Demo</a>
      </p>
    </div>
  );
};

export default ClientSidePage;
