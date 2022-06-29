export const TextCircle = ({
  text,
  background,
  position,
  circleSize = "w-[70px] h-[70px] md:w-[100px] md:h-[100px] 3xl:w-[150px] 3xl:h-[150px]",
  fontSize = "text-[7px] lg:text-[12px] 3xl:text-[18px]",
}) => {
  return (
    <div
      className={` absolute hover:animate-ping rounded-full text-white font-extended font-semibold flex justify-center items-center ${fontSize} ${circleSize} ${position} ${background}`}
    >
      {text}
    </div>
  );
};


export const Circle = ({
    text,
    background,
    position,
    circleSize = "w-[40px] h-[40px] md:w-[60px] md:h-[60px] 3xl:w-[110px] 3xl:h-[110px]",
  }) => {
    return (
      <div
        className={` absolute hover:animate-ping rounded-full  ${circleSize} ${position} ${background}`}
      >
        {text}
      </div>
    );
  };


  export const ImageCircle = ({
    text,
    background="bg-slate-900",
    position,
    topBackground,
    circleSize = "z-[1000] w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] 3xl:w-[180px] 3xl:h-[180px]",
    fontSize = "text-[10px] lg:text-[12px] 3xl:text-[18px]",
  }) => {
    return (
        <div className={`absolute z-[1000] hover:animate-bounce rounded-full cursor-pointer ${position} ${topBackground}`}>
        <div className={`relative z-[1000] ${background} transition duration-300 opacity-0 hover:opacity-100 rounded-full ${circleSize}`}>
          <p className={`absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold ${fontSize}`}>
           {text}
          </p>
        </div>
      </div>
    );
  };
  
  

