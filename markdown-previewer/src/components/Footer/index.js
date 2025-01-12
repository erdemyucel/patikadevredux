import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className="w-full text-center relative mt-14">
      <ul className="flex items-center justify-center text-slate-200">
        <li className="flex items-center justify-center">
          <AiFillGithub size={22} />
          <a
            className="ml-1 text-slate-200"
            href="https://github.com/furkancetintas"
          >
            /furkancetintas
          </a>
        </li>
        <li className="flex items-center justify-center ml-5">
          <AiFillLinkedin size={22} />
          <a
            className="ml-1 text-slate-200"
            href="https://www.linkedin.com/in/furkancetintas/"
          >
            /in/furkancetintas/
          </a>
        </li>
      </ul>
      <p className="mt-4 text-sm text-slate-200 sticky bottom-0 left-0 right-0">
        Markdown Dönüştürücü 2024
      </p>
    </div>
  );
}

export default Footer;
