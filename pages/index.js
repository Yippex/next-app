import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>SOD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fcs-logo.png" />
      </Head>

      <main className=" border-b ">
        <div className="flex justify-between items-center p-5 md:px-20">
          <div className="flex items-center gap-2">
            <Image src="/fcs-logo.png" alt="FCS" width={60} height={60} />
            <h1 className="font-semibold text-base">
              Fellowship of <br />Christian Students
            </h1>
          </div>
          <div>
            <button className="bg-green-500 border md:hidden rounded-lg p-3 w-20 text-white">
              SOD
            </button>
            <button className="bg-green-500 border hidden md:block rounded-lg p-3 text-white">
              School of Destiny
            </button>
          </div>
        </div>
      </main>
      <section className="p-5 md:px-20">
          <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, hic. Reprehenderit veritatis mollitia velit aut alias voluptatem quibusdam ad nobis! Harum repellendus architecto nostrum omnis minima praesentium porro aspernatur ex.</p>
      </section>

      <section className="p-5 md:px-20">
        <div className="flex-col  flex md:flex-row md:justify-between">
          
        <p className="md:order-last md:mt-9 text-justify md:ml-10 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati accusamus molestiae rem dicta animi nobis natus, doloribus adipisci consequatur, laudantium, nam aspernatur optio. Deserunt impedit in voluptatibus nulla incidunt eligendi.</p>
        <p className="text-center mt-3 md:order-last hidden md:absolute"> John Tochukwu Maxwell <br/> <i>General President</i></p>
        
        <div className="flex justify-center items-center object-center"></div>
        <Image src='/fcs-logo.png' alt="" width={200} height={200}  id='img' className=" object-center mt-3 my-0 mx-auto  rounded-full md:rounded-lg " />
        <p className="text-center mt-3 md:order-last md:hidden"> John Tochukwu Maxwell <br/> <i>General President</i></p>
        </div>
      </section>
      <section className="p-5 mt-10 md:p-20">

        <p className="text-center">Worship with us <br/> @Chapel of Grace  </p>
      </section>
      
    </div>
  );
}