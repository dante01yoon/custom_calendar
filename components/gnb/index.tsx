import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface GnbProps {
  
}


const Gnb:FC<GnbProps> = () => {
  return(
    <ul>
      <li><Image src="/dante_white.png" width="40px" height="40px"/></li>
      <li><Link href="/">홈</Link></li>
      <li> <Link href="/calendar">캘린더</Link></li>
    </ul>
  )
}

export default Gnb;