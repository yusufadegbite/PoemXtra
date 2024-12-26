import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Poems = () => {
  const poems = [
    {
      title: "A Starlit Night",
      author: "Jane Doe",
      excerpt: "The stars shimmer brightly, painting the sky with hope",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "The stars shimmer brightly,\nPainting the sky with hope and dreams,\nA quiet night, a peaceful breeze,\nWhispers carried across moonlit streams.\nThe heavens tell their ancient tales,\nOf love, of loss, of winds that sail.\nBeneath their glow, our spirits rise,\nTo dance with stars in endless skies.",
    },
    {
      title: "Whispers of the Sea",
      author: "John Smith",
      excerpt: "The waves sing a melody, soothing the weary soul",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "The waves sing a melody,\nSoothing the weary soul with their song,\nA timeless rhythm, a gentle caress,\nWhere hearts find solace, where they belong.\nThe sea whispers secrets to the shore,\nOf treasures lost and legends of yore.\nIn its embrace, the world stands still,\nA place of calm, a gentle thrill.",
    },
    {
      title: "Nature's Embrace",
      author: "Emily White",
      excerpt: "The gentle breeze carries whispers of forgotten dreams",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "The gentle breeze carries whispers,\nOf forgotten dreams and serene skies,\nLeaves rustle in nature’s sweet symphony,\nA melody where the spirit flies.\nMountains echo with timeless grace,\nRivers carve paths in their endless race.\nIn nature’s arms, we find our place,\nA home of wonder, a warm embrace.",
    },
    {
      title: "The Dance of Autumn",
      author: "Alice Green",
      excerpt: "Leaves twirl in the crisp air, a golden ballet of change",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "Leaves twirl in the crisp air,\nA golden ballet of change and delight,\nAutumn whispers in tones so rare,\nA fleeting beauty, a fleeting sight.\nThe trees shed tears of amber and gold,\nStories of seasons, of life retold.\nIn the dance of autumn, we see the truth,\nThe circle of life, from age to youth.",
    },
    {
      title: "The Silent Moon",
      author: "Mark Brown",
      excerpt: "In the quiet night, the moon listens to our dreams",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "In the quiet night, the moon listens,\nTo dreams and wishes, to love and loss,\nIts light a beacon, its glow a solace,\nGuiding wanderers through paths they cross.\nThe moon holds secrets, ancient and vast,\nA mirror of time, of futures and pasts.\nBeneath its glow, hearts find their muse,\nIn the silent moon, no soul can lose.",
    },
    {
      title: "The River's Song",
      author: "Sophia Blue",
      excerpt: "Flowing gently, the river hums its timeless tune",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1NzN8MHwxfGFsbHwwfHx8fHx8fHwxNjEyNjA4MTA3&ixlib=rb-1.2.1&q=80&w=1080", // Replace with a relevant image URL
      fullText:
        "Flowing gently, the river hums,\nA timeless tune, a lullaby of peace,\nIts waters carry tales of yesteryears,\nOf journeys begun, of endless seas.\nThe river dances under the sun,\nIts journey eternal, never undone.\nIn its depths, dreams are born anew,\nA song of hope, pure and true.",
    },
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
            <img
              src={poem.image}
              alt={poem.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4" // Adjust className as needed
            />
            <h4 className="text-xl font-bold mb-2">{poem.title}</h4>
            <p className="italic text-sm mb-4">by {poem.author}</p>
            <p className="text-sm">{poem.excerpt}...</p>
            <Link
              to={`/poem/${poem.title}`}
              state={{ poem }}
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Poems;
