import React from "react";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="flex justify-between items-center py-5 text-white">
          <div>
            <p>©2024 | All Right Reserved</p>
          </div>
          <div>
            <p>Made By: Bakr Ali</p>
            <div className="flex gap-3 justify-center mt-3">
              <Link target="_blank" href="https://twitter.com/BakrPr"><XIcon /></Link>
              <Link target="_blank" href="https://www.linkedin.com/in/bakr-a-ibrahim-13853a237/"><LinkedInIcon /></Link>
              <Link target="_blank" href="https://github.com/ba7rIbrahim"><GitHubIcon /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
