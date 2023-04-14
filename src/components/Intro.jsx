import Me from "../assets/Me.jpeg";
const Intro = () => {
  return (
    <div className="bg-[#2c1334]">
      <div className="flex flex-col items-center lg:h-[94vh] font-sans p-5 ">
        <div className="flex flex-col items-center justify-center lg:h-[94vh] h-screen font-sans p-5">
          <h1 className="text-3xl text-[#C147E9] baloo-lg">Hey, I am</h1>
          <h1 className="m-1 lg:text-5xl baloo lg:font-extrabold md:text-4xl md:font-extrabold text-3xl text-[#E5B8F4]">
            Aaron Joshua P
          </h1>
          <h1 className="lg:text-2xl md:text-2xl sm:text-lg text-center text-[#E5B8F4] m-7 font-light font-style:italic">
            Just a guy with big dreams and bigger aspirations
          </h1>
          <div className="h-[50px] bg-[#810CA8] w-44  text-center flex justify-center items-center rounded-xl">
            <a href="mailto:aaronjp9@gmail.com">
              <h1 className="text-white font-medium">Contact Me</h1>
            </a>
          </div>
        </div>
        <div className="flex lg:px-5 lg:pt-10 w-full justify-center">
          <div className="lg:w-1/2 h-[370px]  flex flex-col ">
            {/* <div className="w-44 h-full"> */}
            <h1 className="font-bold text-[#C147E9] text-5xl text-center pt-10 josefin">
              About me
            </h1>
            <h1 className="lg:text-xl text-sm pt-6 text-[#E5B8F4] lg:p-2 px-4 lg:text-left text-justify josefin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quaerat iste molestiae recusandae velit beatae tenetur tempora
              dicta ad corrupti totam eligendi, cum consequuntur, ratione
              maiores accusantium exercitationem ipsa? Unde?Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum quaerat iste
              molestiae recusandae velit beatae tenetur tempora dicta ad
              corrupti totam eligendi, cum consequuntur, ratione maiores
              accusantium exercitationem ipsa? Unde?
            </h1>
            {/* </div> */}
          </div>
          <div className="w-1/2 h-[370px]  lg:flex lg:justify-center lg:items-center hidden ">
            <img
              src={Me}
              alt="Self potrait"
              className="w-4/5 h-4/5 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
