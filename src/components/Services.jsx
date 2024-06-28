import React from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckIcon from '@mui/icons-material/Check';

export default function Services() {
  return (
    <div className="my-20 py-7 bg-background h-fit md:h-[500px] flex justify-center items-center">
      <div className="container">
        <h1 className="text-main mb-10 font-bold text-6xl">SERVICES</h1>
        <div className="md:grid grid-cols-3 gap-4 text-white">
          <div className="bg-black rounded-lg text-center p-5 my-4">
            <CheckIcon className="text-7xl mb-5" />
            <p>
            Accuracy in Transmitting News so That The News is From Reliable Sources
            </p>
          </div>
          <div className="bg-black rounded-lg text-center p-5 my-4">
            <AutorenewIcon className="text-7xl mb-5" />
            <p>
              Lost of News Related to Different Fields You Can Find Here
            </p>
          </div>
          <div className="bg-black rounded-lg text-center p-5 my-4">
            <TrendingUpIcon className="text-7xl mb-5" />
            <p>
              Everything Related to Technology And Trending News
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
