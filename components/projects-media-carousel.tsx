"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type ProjectMediaItem =
  | {
      type: "image"
      src: string
      alt: string
    }
  | {
      type: "video"
      src: string
      alt: string
    }

const projectMedia: ProjectMediaItem[] = [
    {
    type: "image",
    src: "/images/(Nessun oggetto)/cb0c5b85-6e9d-497d-a69d-46b5d9e6679a.JPG",
    alt: "Studio creativo",
  },
    {
    type: "video",
    src: "/videos/SaveVid.Net_AQOzRc9KFkV_2jDfVUBqtEBGw0NpTgtJeQoigLMVyR55Gu21V2wzGJxOEcgFSqJmywLkqIJ0MjO_MK1taiTHKog2e8uojbrGsf8AwpI.mp4",
    alt: "Video performance 1",
  },
  {
    type: "image",
    src: "/images/(Nessun oggetto)/16ffbd70-7b7e-4bab-b041-71969d747cce.JPG",
    alt: "Performance sul palco",
  },
  {
    type: "video",
    src: "/videos/tikmate.app_7597006628088581398_hd.mp4",
    alt: "Video performance 2",
  },
  {
    type: "video",
    src: "/videos/SaveVid.Net_AQM-Fnk4cH5-Z5e-uWCZTF0iquStZvIaKmO4SuDCQIvDKG1PmBZAS9SN9IJEovxVwZN-kGAzNxdVhNCd0U94rlZV.mp4",
    alt: "Video performance 3",
  },
]

const loopedMedia = [...projectMedia, ...projectMedia]

export function ProjectsMediaCarousel() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden px-8">
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      navigation
      pagination={{ clickable: true }}
      centeredSlides
      slidesPerView={1.4}
      spaceBetween={12}
      breakpoints={{
        640: {
          slidesPerView: 2.2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      grabCursor
      style={{ overflow: "visible" }}
      className="[--swiper-theme-color:var(--accent)] [&_.swiper-slide]:scale-85 [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300 [&_.swiper-slide-active]:scale-110 [&_.swiper-slide-active]:opacity-100"
    >
      {loopedMedia.map((item, i) => (
        <SwiperSlide key={`${item.src}-${i}`}>
          <div className="relative aspect-[3/4] overflow-hidden border border-border bg-card">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                quality={85}
              />
            ) : (
              <video
                src={item.src}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                aria-label={item.alt}
              />
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}
