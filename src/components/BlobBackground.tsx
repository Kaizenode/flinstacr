"use client";

import { memo } from "react";

interface BlobConfig {
  color: string;
  size: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  duration: number;
  delay: number;
}

const blobs: BlobConfig[] = [
  { color: "#d0d0d0", size: 600, top: "-10%", right: "-5%",  duration: 22, delay: 0   },
  { color: "#888888", size: 500, top: "30%",  left: "-8%",   duration: 18, delay: -5  },
  { color: "#ffffff", size: 400, bottom: "0%",left: "30%",   duration: 25, delay: -10 },
  { color: "#444444", size: 700, top: "-15%", left: "-10%",  duration: 20, delay: -8  },
  { color: "#bbbbbb", size: 350, bottom: "5%",right: "-5%",  duration: 15, delay: -3  },
];

function BlobBackground({ intensity = 1 }: { intensity?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: blob.size,
            height: blob.size,
            top: blob.top,
            right: blob.right,
            bottom: blob.bottom,
            left: blob.left,
            background: blob.color,
            filter: "blur(100px)",
            opacity: 0.055 * intensity,
            willChange: "transform",
            animation: `morphDrift ${blob.duration}s ease-in-out ${blob.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

export default memo(BlobBackground);
