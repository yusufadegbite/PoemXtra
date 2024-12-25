import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Poems = () => {
  const poems = [
    {
      title: "A Starlit Night",
      author: "Jane Doe",
      excerpt: "The stars shimmer brightly, painting the sky with hope",
    },
    {
      title: "Whispers of the Sea",
      author: "John Smith",
      excerpt: "The waves sing a melody, soothing the weary soul",
    },
    {
      title: "Nature's Embrace",
      author: "Emily White",
      excerpt: "The gentle breeze carries whispers of forgotten dreams",
    },
    {
      title: "The Dance of Autumn",
      author: "Alice Green",
      excerpt: "Leaves twirl in the crisp air, a golden ballet of change",
    },
    {
      title: "The Silent Moon",
      author: "Mark Brown",
      excerpt: "In the quiet night, the moon listens to our dreams",
    },
    {
      title: "The River's Song",
      author: "Sophia Blue",
      excerpt: "Flowing gently, the river hums its timeless tune",
    },
    // Add more poems as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 poems at a time
    slidesToScroll: 3, // Slide 3 poems at a time
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 poems for medium screens
          slidesToScroll: 2, // Slide 2 poems at a time
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For tablets
        settings: {
          slidesToShow: 1, // Show 1 poem for smaller screens
          slidesToScroll: 1, // Slide 1 poem at a time
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // For mobile phones
        settings: {
          slidesToShow: 1, // Show 1 poem for mobile
          slidesToScroll: 1, // Slide 1 poem at a time
        },
      },
    ],
  };

  return (
    <section id="poems" className="py-16 px-6" style={{ backgroundColor: "#f5f5dc" }}>
      <h3 className="text-3xl font-semibold text-center mb-6">Featured Poems</h3>
      <Slider {...settings}>
        {poems.map((poem, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow mx-2"
          >
            <h4 className="text-xl font-bold mb-2">{poem.title}</h4>
            <p className="italic text-sm mb-4">by {poem.author}</p>
            <p className="text-sm">{poem.excerpt}...</p>
            <a
              href="/"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Poems;
