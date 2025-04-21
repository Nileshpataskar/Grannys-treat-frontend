import  { useState, useEffect } from "react";

const Page8 = () => {
  const [thumbnails, setThumbnails] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://graph.instagram.com/9189784584476382/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGAAd2GoR0Qz5BZAE5tVU9fSzZAqSk5Qd3d0N1liLU8ybDZAtTzB6TVlpUHh3ek5vVlNNWktLLXdUV2kxMFdzZAlAxR3hKZAWQyejlBOVd5N1c5dlZA5Rm1WWmV6c0NoY1M3eUFUQjdfT0hKQ0xHM05GRm5UMzB6QzNuZA2d5eW9FOGNOcwZDZD`
  //     );
  //     const data = await response.json();
  //     setThumbnails(data?.data?.slice(0, 6)); // Get 6 images
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="min-h-screen w-full bg-[#d2eef9] relative">
 
      <div className="w-full max-w-7xl mx-auto p-8">
        <h3 className="font-[Fredoka] text-[#285192] font-extrabold text-center text-3xl md:text-5xl mb-12 tracking-wider">
          Be a part of our Instagram community
        </h3>

        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          {/* Column 1: Single large image */}
          <div className="lg:w-[450px]">
            {thumbnails[0] && (
              <img
                src={thumbnails[0]?.thumbnail_url || thumbnails[0]?.media_url}
                alt={thumbnails[0]?.caption}
                className="w-full h-[516px] border-8 border-white object-cover rounded-lg shadow-lg"
              />

            )}
          </div>

          {/* Column 2: Grid layout */}
          <div className="lg:w-[1200px]">
            {/* Row 1: Two larger images */}
            <div className="flex gap-4 mb-4 h-[250px]">
              {thumbnails[1] && (
                <img
                  src={thumbnails[1].thumbnail_url || thumbnails[1].media_url}
                  alt={thumbnails[1].caption}
                  className="w-1/2 object-cover border-8 border-white rounded-lg shadow-lg"
                />
              )}
              {thumbnails[2] && (
                <img
                  src={thumbnails[2].thumbnail_url || thumbnails[2].media_url}
                  alt={thumbnails[2].caption}
                  className="w-2/3 object-cover border-8 border-white rounded-lg shadow-lg"
                />
              )}
            </div>

            {/* Row 2: Three smaller images */}
            <div className="flex gap-4 h-[250px]">
              {thumbnails[3] && (
                <img
                  key={thumbnails[3].id}
                  src={thumbnails[3].thumbnail_url || thumbnails[3].media_url}
                  alt={thumbnails[3].caption}
                  className="w-[60%] object-cover border-8 border-white rounded-lg shadow-lg"
                />
              )}
              {thumbnails[4] && (
                <img
                  key={thumbnails[4].id}
                  src={thumbnails[4].thumbnail_url || thumbnails[4].media_url}
                  alt={thumbnails[4].caption}
                  className="w-[40%] object-cover border-8 border-white rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Page8;
