export const TextCircle = ({
  text,
  background,
  position,
  circleSize = "w-[80px] h-[80px] md:w-[100px] md:h-[100px] 3xl:w-[150px] 3xl:h-[150px]",
  fontSize = "text-[8px] lg:text-[12px] 3xl:text-[18px]",
}) => {
  return (
    <div
      className={`z-10 absolute hover:animate-ping rounded-full text-white font-extended font-semibold flex justify-center items-center ${fontSize} ${circleSize} ${position} ${background}`}
    >
      {text}
    </div>
  );
};


export const Circle = ({
    text="",
    background,
    position,
    circleSize = "w-[45px] h-[45px] md:w-[60px] md:h-[60px] 3xl:w-[110px] 3xl:h-[110px]",
  }) => {
    return (
      <div
        className={`z-10 absolute hover:animate-ping rounded-full  ${circleSize} ${position} ${background}`}
      >
        {text}
      </div>
    );
  };


  export const ImageCircle = ({
    text,
    background,
    position,
    topBackground,
    circleSize = "w-[110px] h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] 3xl:w-[180px] 3xl:h-[180px]",
    fontSize = "text-[10px] lg:text-[12px] 3xl:text-[18px]",
  }) => {
    return (
        <div className={`absolute hover:animate-bounce rounded-full cursor-pointer ${position} ${topBackground}`}>
        <div className={`relative z-[1000] hover:${background} transition duration-300 opacity-0 hover:opacity-100 rounded-full ${circleSize}`}>
          <p className={`absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold ${fontSize}`}>
           {text}
          </p>
        </div>
      </div>
    );
  };
  
  

