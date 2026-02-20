import React from "react";
import Image from "next/image";

export default function RecentWork() {
  return (
    <section
      className="bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: 'url("/building.webp")',
      }}
    >
      <div className="mx-auto w-full backdrop-filter backdrop-blur-md py-6">
        <h2 className="md:text-4xl text-3xl font-bold text-center my-5 ">
          Our Recent Work
        </h2>
        <div
          id="services"
          className="bg-cover w-full flex justify-center items-center"
        >
          <div className="max-w-7xl mb-5">
            <div className="w-12/12 mx-auto rounded-2xl md:p-5">
              <div>
                <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-2 justify-center text-gray-800">
                  <div className="flex flex-col md:w-1/2 xl:w-1/2 w-[300px] md:p-4 p-2">
                    <div className="bg-white/40 shadow-md rounded-3xl md:p-4 p-2 border border-gray-100">
                      <div className="flex-none lg:flex items-center">
                        <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
                          <Image
                            width={400}
                            height={400}
                            src="/website.jpg"
                            alt="website-development"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Website Development
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center ">
                              <p>
                                Our website redesign initiatives are based on a
                                clear plan, good user experience, and modern
                                design. The results reveal that people are more
                                interested, things happen faster, and more
                                people buy on important pages.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[300px] md:w-1/2 xl:w-1/2 md:p-4 p-2">
                    <div className="bg-white/40 shadow-md rounded-3xl md:p-4 p-2 border border-gray-100">
                      <div className="flex-none lg:flex items-center">
                        <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
                          <Image
                            width={400}
                            height={400}
                            src="/seoGraph.png"
                            alt="seo-graph"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              SEO Result Graphs
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                Our SEO campaigns are built on strong research,
                                technical optimization, and quality content. The
                                graphs of these results illustrate that search
                                visibility, traffic growth, and keyword rankings
                                have all steadily improved over time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[300px] md:w-1/2 xl:w-1/2 md:p-4 p-2">
                    <div className="bg-white/40 shadow-md rounded-3xl md:p-4 p-2 border border-gray-100">
                      <div className="flex-none lg:flex items-center">
                        <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
                          <Image
                            width={400}
                            height={400}
                            src="/socialmedia.jpg"
                            alt="social-media"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Social Media Creatives
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                We design social media visuals that align with
                                your brand voice and marketing goals. Our
                                creatives, from posts to advertising, are made
                                to get people to interact with your brand, trust
                                you, and make your online presence stronger.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[300px] md:w-1/2 xl:w-1/2 md:p-4 p-2">
                    <div className="bg-white/40 shadow-md rounded-3xl md:p-4 p-2 border border-gray-100">
                      <div className="flex-none lg:flex items-center">
                        <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
                          <Image
                            alt="lead-gen"
                            width={400}
                            height={400}
                            src="/leadGen.webp"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Lead Generation Ad Results
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                Smart targeting, persuasive copy, and optimized
                                landing pages are the main things our lead
                                generation ads focus on. We assist companies get
                                high-quality leads that are more likely to turn
                                into genuine customers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
