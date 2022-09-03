import { ReactComponent as Logo } from "../../public/assets/back.svg";
import { useRouter } from "next/router";
import { useState } from "react";

function GoBack(props) {
  let extraClasses;
    if(props.allPage){
        extraClasses="md:m-8 m-4"
    }

  const router = useRouter();
  function goBackHandler() {
    router.back();
  }
  return (
    <a
      onClick={goBackHandler}
      className={`flex items-center text-brightPrimary hover:cursor-pointer hover:text-darkPrimary transition duration-200 ${extraClasses}`}
    >
      {/* <div className="flex p-3 text-brightPrimary hover:cursor-pointer hover:text-darkPrimary transition duration-200 w-1/2 md:w-1/4">
        <svg viewBox="0 0 50 50" fill="currentColor" className="h-7">
          <path
            d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113
		c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909
		c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313
		c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z"
          />
        </svg>
        Go back
      </div> */}
      <div className="p-3 w-12 inline-block">
        <svg
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          fill="currentColor"
          y="0px"
          viewBox="0 0 384.97 384.97"
          xmlSpace="preserve"
          {...props}
        >
          <g>
            <g id="Chevron_Left_Circle">
              <path d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485 C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061 s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z" />
              <path d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2 c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61 C240.57,112.315,240.57,104.628,235.878,99.876z" />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>{" "}
      </div>
      <span className="inline-block">Go back</span>
    </a>
  );
}

export default GoBack;
