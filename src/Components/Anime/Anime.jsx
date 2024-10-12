import React from "react";
import "./anime.css";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import image7 from "./7.jpg";
import image8 from "./8.jpg";

const Anime = () => {
  const movies = [
    {
      title: "Spellbound",
      year: "2024",
      duration: "109m",
      type: "Movie",
      badge: "sd",
      image: image1,
    },

    {
      title: "Everybody Still Hates Chris",
      year: "SS 1",
      duration: "EPS 2",
      type: "TV",
      badge: "hd",
      image: image2,
    },
    {
      title: "Twilight of the Gods",
      year: "SS 1",
      duration: "EPS 8",
      type: "TV",
      badge: "hd",
      image: image3,
    },
    {
      title: "The Wild Robot",
      year: "2024",
      duration: "102m",
      type: "Movie",
      badge: "cam",
      image: image4,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "cam",
      image: image5,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image6,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image7,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    {
      title: "Transformers One",
      year: "2024",
      duration: "104m",
      type: "Movie",
      badge: "hd",
      image: image8,
    },
    // Add more movies as needed
  ];

  return (
    <div>
<h2 className="animeh2">Popular Anime</h2>

    <div className="container">
      
      
            <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>→</button>
                <button>»</button>
            </div>

      <div className="grid">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <div className={`badge ${movie.badge}`}>
              {movie.badge.toUpperCase()}
            </div>
            <img src={movie.image} alt={movie.title} />
            <p className="title">{movie.title}</p>
            <p className="info">{`${movie.year} · ${movie.duration}`}</p>
            <p className="type">{movie.type}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>→</button>
        <button>»</button>
      </div>
    </div>
    </div>
  );
};

export default Anime;
