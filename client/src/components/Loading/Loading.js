import React from 'react';
import { Div } from 'basedesign-iswad';

function Loading() {
  return (
    <Div className="flex flex--jc--center flex--ai--center w-per-100 text-center height-vh-full pos-fix z-10 bgSilver">
      <Div className="flex flex--jc--center flex--ai--center w-px-200 height-px-200 br-rad-per-50 bgBlue textRed">
        Loading
      </Div>
    </Div>
  );
}

export default Loading;
