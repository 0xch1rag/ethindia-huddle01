import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { useRouter } from "next/router";

function Index() {
  const { address, isConnected } = useAccount();
  const [link, setLink] = useState("");

  const router = useRouter();

  const handlechange = (e) => {
    console.log(e.target.value);
  };
  



  const generateLink = () => {
    const generateId = address.slice(-10);
    console.log("Generating Huddle01 Link ....");
    router.push(`/room/${generateId}`)
  };

  return (
    <div className="w-screen">
      <div className="flex container mx-auto flex items-center">
        <div className=" w-full flex items-center justify-center">
          <div className="pl-[30px] mt-[100px] w-[400px]">
            <div className="text-center">
              <span className="text-[35px]">Start with Consultly !</span>
              <p>Decentralised consultation with money streaming</p>
            </div>
            <div className="mt-[25px]">
              <div className="">
                <div className="mt-[15px]">
                  <p className="pb-[10px]">Token Per Minute</p>
                  <select
                    id="token"
                    className="w-full px-[10px] py-[7px] border"
                  >
                    <option value="dat">10</option>
                  </select>
                </div>

                <div className="mt-[15px]">
                  <p className="pb-[10px]">Select Token</p>
                  <select
                    id="token"
                    className="w-full px-[10px] py-[7px] border"
                  >
                    <option value="dat">Dai</option>
                  </select>
                </div>
              </div>

              {/* <div className="mt-[15px] border rounded-lg px-[20px] py-[10px] space-x-[10px] flex">
              <input type="checkbox" />
              <p>I want Consultation</p>
            </div> */}

              <div className="mt-[30px]">
                <button
                  onClick={() => generateLink()}
                  className="px-[20px] py-[10px] rounded-lg bg-[#5135C9] text-white w-full"
                >
                  Start Instant Consultation
                </button>
              </div>

              <div className="flex flex-col mt-[30px]">
                <p className="font-bold text-[20px]">Generated Link</p>
                {link}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
