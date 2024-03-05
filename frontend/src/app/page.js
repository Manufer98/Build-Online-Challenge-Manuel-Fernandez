import Image from "next/image";

import { red_hat_display } from "./ui/fonts";

import Login from "./auth/login/page";

export default function Home() {
  
  return (
    <main className='h-screen'>
     
      <Login/>
      
    </main>
  );
}
