"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/giftolexia_logo.jpeg",
    name: "Hike (Airtel Subsidiary)",
    job: "Backend Developer Intern",
    review:
      "Bhuvan delivered scalable microservices and efficient REST APIs using Spring Boot and Python. He quickly understood complex workflows and contributed to high-performance gaming modules, making him a reliable and impactful member of the team.",
    company_link: "https://www.linkedin.com/company/hike/",
    certificate_link:
      "https://drive.google.com/file/d/1W1ZltOnXx0QmpnEP_8WCrOJ2sKctQMp4/view?usp=sharing",
  },
  {
    avatar: "/reviews/liaplus_logo.jpeg",
    name: "InfoTech Brains",
    job: "Full Stack Developer Intern",
    review:
      "Bhuvan made valuable contributions across multiple full-stack projects, building and optimizing high-quality web applications using Next.js, React, and TypeScript. His consistency, attention to detail, and ownership were highly appreciated.",
    company_link: "https://www.linkedin.com/company/infotechbrains/",
    certificate_link:
      "https://drive.google.com/file/d/1KhjCcvL1MnigFK4A62--Ud9hed5Vt9Hi/view?usp=sharing",
  },

  {
    avatar: "/reviews/amazon.jpeg", 
    name: "Amazon MLSS 2025",
    job: "MLSS Cohort Participant",
    review:
      "Selected from 100,000+ students, Bhuvan successfully completed Amazon’s Machine Learning Summer School, demonstrating strong analytical thinking and a deep interest in advanced ML concepts.",
    company_link: "https://amazonmlsummerschool.com",
    certificate_link:
      "https://drive.google.com/file/d/19eCZXVsA3x37Y8A4BEfO2fvzG0VGtX3M/view?usp=sharing",
  },

];


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-12 text-center">Experience</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[450px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="min-h-[400px] bg-tertiary p-8 dark:bg-secondary/40">
                  <CardHeader className="mb-10 p-0">
                    <a
                      href={person.company_link}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-x-4 transition-all hover:underline"
                    >
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                        className="rounded-full"
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </a>
                  </CardHeader>
                  <CardDescription className="h-[200px] text-justify text-lg text-muted-foreground">
                    <a
                      href={person.certificate_link}
                      target="_blank"
                      rel="noopener"
                      className="hover:text- flex items-center gap-x-4 transition-all"
                    >
                      {person.review}
                    </a>
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
