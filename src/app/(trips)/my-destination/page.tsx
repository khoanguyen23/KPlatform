"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Destination {
  image: string;
  country: string;
  title: string;
  description: string;
}

const destinations: Destination[] = [
  {
    image: "/image/des-1.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
  {
    image: "/image/des-4.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
  {
    image: "/image/des-5.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
  {
    image: "/image/des-6.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
  {
    image: "/image/des-2.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
  {
    image: "/image/des-3.jpg",
    country: "ITALY",
    title: "SAN MIGUEL",
    description: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
  },
];

const Page: React.FC = () => {
  const router = useRouter();

  const goToHome = (): void => {
    router.push("/");
  };

  return (
    <main>
      <section>
        {/* inner-baner-wrapper */}
        <div className="pb-24">
          <div
            className="inner-baner-container"
            style={{
              backgroundImage: "url('/image/trips-background.jpg')",
              paddingTop: "134.375px",
            }}
          >
            <div className="container">
              <div className="inner-banner-content">
                <h1 className="page-title">Destination</h1>
              </div>
            </div>
          </div>
        </div>

        {/* destination-item-wrap */}
        <div className="pb-16">
          <div className="container">
            {/* 
            grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left
             */}
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-x-12">
              {destinations.map((destination, index) => (
                <div key={index}>
                  <article
                    className="flex min-h-[425px] mb-[50px] rounded-[25px] items-end flex-wrap destination-item"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  >
                    <div className="destination-content">
                      <span className="cat-link">
                        <a href="">{destination.country}</a>
                      </span>
                      <h3 className="text-2xl font-bold">
                        <a href="">{destination.title}</a>
                      </h3>
                      <p>{destination.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed-button" onClick={goToHome}>
          🏠
        </div>
      </section>
    </main>
  );
};

export default Page;
