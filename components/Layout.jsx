import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-950">
            <Head>
                <title>NovaLift</title>
                <meta name='description' content='NovaLift is your launchpad for innovation. We equip startups and businesses with powerful technology, seamless integrations, and expert guidance to help you scale fast!' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout