import Head from "next/head";
import MainHeader from "./mainHeader";
const Layout = ({children}:any) => {
  return ( <>
  <Head>

  </Head>
  <main className="bg-[#1F2021]">
    <MainHeader/>
    {children}
  </main>
  </> );
}
 
export default Layout;