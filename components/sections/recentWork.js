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
                            alt="Work"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Website redesigns
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center ">
                              <p>
                                If you're looking for random paragraphs, you've
                                come to the right place. When a random word or a
                                random sentence isn't quite enough, the next
                                logical step is to find a random paragraph. We
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
                            src="/seoGraph.webp"
                            alt="Work"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              SEO result graphs
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                If you're looking for random paragraphs, you've
                                come to the right place. When a random word or a
                                random sentence isn't quite enough, the next
                                logical step is to find a random paragraph. We
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
                            alt="Work"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Social media creatives
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                If you're looking for random paragraphs, you've
                                come to the right place. When a random word or a
                                random sentence isn't quite enough, the next
                                logical step is to find a random paragraph. We
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
                            alt="leadGen"
                            width={400}
                            height={400}
                            src="/leadGen.webp"
                            className="w-full object-cover lg:h-full rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-col md:w-1/2 w-65 ml-3 justify-between py-2">
                          <div className="flex flex-wrap">
                            <h3 className="flex-auto text-lg font-medium text-black">
                              Lead generation ad results
                            </h3>
                          </div>
                          <div className="flex py-4 text-sm text-black">
                            <div className="flex-1 inline-flex items-center">
                              <p>
                                If you're looking for random paragraphs, you've
                                come to the right place. When a random word or a
                                random sentence isn't quite enough, the next
                                logical step is to find a random paragraph. We
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
