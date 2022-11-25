import aboutImg from "../../assets/about-image.png";
// import "./about.css";

const About = () => {
  return (
    <main className="flex flex-1 gap-8 px-12 max-w-screen-xl mx-auto">
      <div className="flex basis-1/3 items-center">
        <img src={aboutImg} alt="" className="max-h-full" />
      </div>
      <div className="flex flex-col flex-1 my-auto">
        <h1 className="text-5xl mb-12 tracking-wide pb-2 border-b-2 w-[96%]">
          About
        </h1>
        <div className="mb-auto flex flex-col gap-8 text-justify overflow-y-auto flex-1 max-h-96 pr-12 scrollbar scrollbar-thumb-primary-500 normal-case">
          <p>
            Muhammad Ali once said, “Even the greatest was once a beginner.
            Don’t be afraid to take that first step”.
          </p>
          <p>
            My life changed the day I wrote my first line of code. Never had I
            found something that was so enthralling. Soon, I was completely
            hooked, and knew that I wanted nothing more than to be the greatest
            of all time.
          </p>
          <p>
            I’m only being a little tongue-in-cheek here, although I don’t think
            I can match the confidence of Muhammad Ali, my faith in my own
            abilities comes close and my motivation to be the best could compete
            with his, too.
          </p>
          <p>
            To me, being the greatest of all time is much more than simply
            writing the “best” code, whatever that means, but it’s about a
            plurality of topics, including feeling an obligation to always learn
            new technologies and improve on the ones I already know, actively
            using any and all available resources to do so. It’s about an
            obligation to being a good team member motivated to work with others
            and complete my assigned tasks. It’s also about an ethical
            responsibility to only use my skills to make a positive impact on
            the world, and to resolutely refuse otherwise.
          </p>
          <p>
            To humble myself a little bit, I will probably never be the greatest
            of all time. But that’s not really the point. The point is to always
            work to close that gap. I may never be the GOAT, but I will always
            be getting closer.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
