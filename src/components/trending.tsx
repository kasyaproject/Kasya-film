const trending = () => {
  return (
    <div className="transition-transform duration-300 transform bg-yellow-50 hover:scale-105">
      {/* IMage Film */}
      <div
        className="relative border-2 shadow-lg h-60 sm:h-80 group"
        style={{
          backgroundImage: "url('/bg-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a
          href=""
          className="absolute inset-0 flex flex-col justify-between p-2 text-xs font-bold text-white transition-transform duration-300 transform rounded-lg cursor-pointer hover:scale-100 items- opacity-1000 sm:text-lg group-hover:opacity-100"
        >
          {/* Rating Film */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p>8.6</p>
          </div>
          {/* Judul Film */}
          <p>The Penguin (2024)</p>
        </a>
      </div>
    </div>
  );
};

export default trending;
