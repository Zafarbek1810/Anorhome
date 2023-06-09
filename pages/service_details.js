import Head from "next/head";
import ServiceDetail from "../src/Components/Pages/ServicesPage/ServiceDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../src/Components/Common/Loader";

export default function Home() {
    const router =useRouter()
    const id=router.query.id
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          setLoading2(true);
        }, 2500)
      }, [])
    
    console.log(id);
    return (
        <div>
            <Head>
                <title>Anorhome</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ServiceDetail id={id}/>
            {/* {loading && <Loader loading2={loading2} />} */}
        </div>
    )
}