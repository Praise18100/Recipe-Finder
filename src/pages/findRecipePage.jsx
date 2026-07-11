import { LuUserSearch } from "react-icons/lu";
import burger from "../assets/burger.png"
import pasta from "../assets/pasta.png"
import pizza from "../assets/pizza.png"
import salad from "../assets/salad.png"
import { motion } from "framer-motion";
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"

import testimonial from "../assets/testimonial.bg.png"
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function FindRecipt() {


  return (
    <div className="find-recipe">
      <section className="recipe-title">
        <h1>Food Recipes</h1>

        <div className="title-line"></div>

        <p>
          Delicious meals made simple filter by cravings, cuisine, time, or
          dietary needs. Find recipes that match your unique taste.
        </p>

        <div className="search-container">
            <input
              type="text"
              placeholder="Search for recipes here..."
            />

           
              <div className="search-icons">
               <LuUserSearch />
              </div>
          </div>

          {/* recipe grid */}
          <div className="recipe-grid">

              <div className="recipe-card">

                <div className="card-content">
                  <motion.img
                        src={burger}
                        alt="Cheesy Burger"
                        initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                      />

                  <div className="card-text">
                    <h3>Cheesy Burger</h3>
                    <div className="card-line"></div>
                    <p>
                        A juicy beef patty layered with melted cheddar cheese, crisp lettuce,
                        tomatoes, and our signature sauce, served on a soft toasted bun.
                      </p>
                  </div>
                </div>
              </div>

              <div className="recipe-card">

                <div className="card-content">
                 <motion.img
                        src={pizza}
                        alt="Cheesy Burger"
                        initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                      />
                  <div className="card-text">
                    <h3>Veggie Pizza</h3>
                    <div className="card-line"></div>
                    <p>
                        A delicious blend of mozzarella cheese, fresh vegetables, olives, and rich
                        tomato sauce baked on a crispy golden crust.
                      </p>
                  </div>
                </div>
              </div>

              <div className="recipe-card">

                <div className="card-content">
                 <motion.img
                        src={pasta}
                        alt="Cheesy Burger"
                        initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                      />

                  <div className="card-text">
                    <h3>Creamy Pasta</h3>
                    <div className="card-line"></div>
                    <p>
                        Tender pasta tossed in a rich, creamy garlic sauce with parmesan cheese,
                        fresh herbs, and perfectly seasoned vegetables.
                      </p>
                  </div>
                </div>
              </div>

                <div className="recipe-card">

                  <div className="card-content">
                    <motion.img
                        src={salad}
                        alt="Cheesy Burger"
                        initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                      />

                    <div className="card-text">
                      <h3>Fresh Salad</h3>
                      <div className="card-line"></div>
                      <p>
                        A refreshing mix of crisp lettuce, cucumbers, tomatoes, avocado, and carrots
                        tossed in a light homemade vinaigrette.
                      </p>
                    </div>
                  </div>
                </div>

          </div>
      </section>

      {/* testimonial section */}
      <section  className="  testimonial-section" style={{ backgroundImage: `url(${testimonial})` }}>
          <div className="testimonial-overlay">

            <h2>Happy User Reviews</h2>

            <div className="title-line"></div>

            <p className="testimonial-description">
              Discover why food lovers trust our recipes. Every meal is crafted with
              care to bring delicious flavors and memorable moments to your table.
            </p>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={30}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="testimonial-card">

                  <p className="review-text">
                    "Recipe Finder has completely changed the way I cook!
                    I love how easy it is to find meals based on
                    what I have at home."
                  </p>

                    <div className="review-user">

                      <img src={user1} alt="Alicia Bain" />

                      <div className="user-details">
                        <h3>Alicia Bain</h3>
                        <span>Food Critic</span>
                      </div>

                     </div>

                 </div>
              </SwiperSlide>

              <SwiperSlide>

                <div className="testimonial-card">

                <p className="review-text">
                  "The recipes are incredibly simple to follow and every meal turns out
                  delicious. This website has made cooking enjoyable and stress-free for
                  me and my family."
                </p>

            <div className="review-user">

                <img src={user2} alt="David Brown" />

                <div className="user-details">
                  <h3>David Brown</h3>
                  <span>Home Chef</span>
                </div>

            </div>

          </div>
              </SwiperSlide>
            </Swiper>

          </div>
     </section>

     {/* Get In Touch */}

      <section className="  contact-section">

          <div className="contact-title">

              <h2>Get in Touch</h2>

              <div className="title-line"></div>

              <p>
                  We're here to help with any questions, feedback, or collaboration
                  ideas.
              </p>

          </div>

          <div className="contact-box">

              <form className="contact-form">

                  <label>Full Name</label>
                  <input
                      type="text"
                      placeholder="zee "
                  />

                  <label>Email Address</label>
                  <input
                      type="email"
                      placeholder="johnzee@gmail.com"
                  />

                  <label>Phone Number</label>
                  <input
                      type="tel"
                      placeholder="08167456564"
                  />

                  <label>Message</label>

                  <textarea
                      rows="6"
                      placeholder="Type your Message..."
                  ></textarea>

                  <button type="submit">
                      Send Message
                  </button>

              </form>
          </div>
      </section>
    </div>
  );
}

export default FindRecipt;