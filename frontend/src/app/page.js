import Image from "next/image";

import { red_hat_display } from "./ui/fonts";
import Contacts from "./contacts/page";
import Login from "./auth/login/page";

export default function Home() {
  
  return (
    <main className='h-screen' /* className="flex min-h-screen flex-col items-center justify-between p-24" */>
      {/* <h5>Next js</h5> */}
      <Login/>
      <Contacts/>
    </main>
  );
}
