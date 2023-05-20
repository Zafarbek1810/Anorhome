import Head from "next/head";
import News from "../src/Components/Pages/News";

export default function Home() {
    return (
        <div>
            <Head>
                <title>News and Analytics</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <News />
        </div>
    )
}