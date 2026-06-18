import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030014 0%, #1a0a3e 100%)",
          borderRadius: 8,
          fontSize: 18,
          fontWeight: 800,
          color: "#00f0ff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        IL
      </div>
    ),
    { ...size }
  );
}
