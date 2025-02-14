import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-300">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-100 font-extrabold mx-auto sm:text-6xl">
                    Innovate, Launch, Scale – Faster Than Ever!
                </h1>
                <p className="max-w-xl mx-auto">
                    NovaLift is your launchpad for innovation. We equip startups and businesses with powerful technology, seamless integrations, and expert guidance to help you scale fast!
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Start building
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-300 border border-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero