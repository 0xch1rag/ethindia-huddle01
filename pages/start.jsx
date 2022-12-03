import React from "react";

function Start() {
  const handlechange = (e) => {
    console.log(e.target.value);
  };

  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="pl-[30px] mt-[80px]">
          <span className="text-[35px]">Welcome At Consultly !</span>
          <div className="mt-[25px]">
            <p>Select who you are :-</p>
            
            <div className="mt-[20px] border rounded-lg px-[20px] py-[10px] space-x-[10px] flex">
              <input type="checkbox" onChange={handlechange}/>
              <p>I am a Consultant</p>
            </div>
            <div className="mt-[15px] border rounded-lg px-[20px] py-[10px] space-x-[10px] flex">
              <input type="checkbox" />
              <p>I want Consultation</p>
            </div>

            <div className="mt-[20px]">
              <button className="px-[20px] py-[10px] rounded-lg bg-[#5135C9] text-white">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Start;
