import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const MeVideoElem = () => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <div className="items-center flex justify-center">
      <video
        style={{ width: "70%" }}
        className="rounded-2xl"
        ref={videoRef}
        autoPlay
        muted
        playsInline
      ></video>
    </div>
  );
};

export default MeVideoElem;
