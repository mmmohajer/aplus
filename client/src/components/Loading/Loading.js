import React from "react";

function Loading() {
  return (
    <div className="flex flex--jc--center flex--ai--center w-per-100 text-center height-vh-full pos-fix z-10 bgSilver">
      <div className="flex flex--jc--center flex--ai--center w-px-200 height-px-200 br-rad-per-50 bgBlue textRed">
        Loading
      </div>
    </div>
  );
}

export default Loading;
