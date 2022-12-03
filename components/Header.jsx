import React from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";

const GetEnsName = () => {
  const { address, isConnected } = useAccount();

  const { data, isError, isLoading } = useEnsName({
    address: address,
  });

  console.log(isError)

  if (isLoading) return <div>Fetching name…</div>;
  if (isError) return <div>Error fetching name</div>;
  return <div>Name: {data}</div>;
};

const WalletButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) return <div>{address} <GetEnsName /></div>;

  return <button onClick={() => connect()}>Connect Wallet</button>;
};

function Header() {
  return (
    <div className="bg-gray-200 border-b ">
      <div className="container mx-auto bg-gray-200">
        <div className="max-w-screen py-[20px] flex items-center justify-between">
          <span className="font-bold text-[30px] text-[#5135C9]">
            Consultly
          </span>
          <WalletButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
