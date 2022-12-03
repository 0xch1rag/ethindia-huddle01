import Head from "next/head";
import Image from "next/image";
import MeVideoElem from "../components/MeVideoElem";
import PeerVideoAudioElem from "../components/PeerVideoAudioElem";
import { getHuddleClient } from "@huddle01/huddle01-client";

import { useHuddleStore } from "@huddle01/huddle01-client/store";
// import { useHuddleStore } from "huddle01-client/hooks";

import { useEffect } from "react";

export default function Home() {
  const huddleClient = getHuddleClient(
    "052d7c4930885c3e9d837eb1e1eeab370465806b3315e96dc6afd9a734bc9068"
  );
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const recordingState = useHuddleStore((state) => state.recordingState);
  const recordings = useHuddleStore((state) => state.recordings);
  const roomId = useHuddleStore((state) => state.roomState.roomId);

  const handleJoin = async () => {
    console.log({ roomId });

    try {
      await huddleClient.join("dev", {
        address: "csd",
        wallet: "",
        ens: "ch1rag.eth",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen ">
        <div className=" border-b container mx-auto ">
          <div className="container mx-auto">
            <div className="max-w-screen  justify-between">
              <div className="grid grid-cols-2">
                <div>
                  <div>
                    <MeVideoElem />

                    {lobbyPeers[0] && <h2>Lobby Peers</h2>}

                    <div className="bg-red-100 border">
                      {lobbyPeers.map((peer) => (
                        <div className="bg-green-100" key={peer.peerId}>
                          {peer.peerId}
                        </div>
                      ))}
                    </div>

                    {peersKeys[0] && <h2>Peers</h2>}

                    <div className="peers-grid">
                      {peersKeys.map((key) => (
                        <>
                          <PeerVideoAudioElem
                            key={`peerId-${key}`}
                            peerIdAtIndex={key}
                          />
                          <p>{key}</p>
                        </>
                      ))}
                    </div>

                    <div className="card flex">
                      <button onClick={handleJoin}>Join Room {roomId}</button>

                      <button onClick={() => huddleClient.enableWebcam()}>
                        Enable Webcam
                      </button>
                      <button onClick={() => huddleClient.disableWebcam()}>
                        Disable Webcam
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <p> Please Enter Display Name</p>
                  <input value="dsads" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
