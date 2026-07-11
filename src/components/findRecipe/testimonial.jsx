import { motion } from "framer-motion";
import "./testimonial.css";

import testimonialBg from "../../assets/testimonial.bg.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


export default function Testimonial() {
  const testimonials = [
    {
      image: user1,
      name: "Alicia Bain",
      role: "Food Critic",
      review:
        "Recipe Finder has completely changed the way I cook! I love how easy it is to find meals based on what I have at home. Every recipe I've tried has been delicious.",
    },
    {
      image: user2,
      name: "David Brown",
      role: "Home Chef",
      review:
        "The recipes are incredibly simple to follow and every meal turns out delicious. This website has made cooking enjoyable and stress-free for me and my family.",
    },
  ];

  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${testimonialBg})` }}
    >
      <div className="testimonial-overlay">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Happy User Reviews
        </motion.h2>

        <div className="title-line"></div>

        <motion.p
          className="testimonial-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Discover why food lovers trust our recipes. Every meal is crafted
          with care to bring delicious flavors and memorable moments to your
          table.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="review-text">
                  "{testimonial.review}"
                </p>

                <div className="review-user">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                  <div className="user-details">
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}