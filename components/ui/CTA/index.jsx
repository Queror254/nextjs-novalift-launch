import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0 bg-gray-900 dark:text-slate-100">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Create Successful Business Models with Our IT Solutions
                        </h2>
                        <p className="mt-3 text-gray-500">
                            NovaLift, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 mb-2"
                        >
                            Get started
                        </NavLink>
                    </div>
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA