export default function Loading() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(180deg, #081a36 0%, #0b2347 42%, #f4f7fb 42%, #f4f7fb 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "32px 28px",
          borderRadius: "22px",
          boxShadow: "0 12px 30px rgba(11, 31, 58, 0.10)",
          border: "1px solid #d6e2f2",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            margin: "0 auto 18px",
            borderRadius: "999px",
            border: "6px solid #d6e2f2",
            borderTopColor: "#c9a227",
            animation: "spin 1s linear infinite",
          }}
        />
        <h1
          style={{
            margin: "0 0 10px 0",
            color: "#0b1f3a",
            fontSize: "28px",
            fontWeight: 800,
          }}
        >
          Loading SSGPT6 Core
        </h1>
        <p
          style={{
            margin: 0,
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: "1.7",
          }}
        >
          Please wait while your content is being prepared.
        </p>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}