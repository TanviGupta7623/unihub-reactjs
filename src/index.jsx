import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";

function Index() {
  const [tagline, setTagline] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const taglineText = "Whhere College Life Comes Alive";
    let i = 0;

    const interval = setInterval(() => {
      if (i < taglineText.length) {
        if (taglineText === "Where College Life Comes Alive") {
          setTagline("");
        } else {
          setTagline((prevTagline) => prevTagline + taglineText.charAt(i));
          i++;
        }
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-r from-purple-700 to-purple-400 h-screen">
      <nav className="bg-transparent flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://media.discordapp.net/attachments/1164497786964803585/1204018439929335879/logo2d-removebg-preview.png?ex=65d3348d&is=65c0bf8d&hm=9416987d5ea968092b9456dc7bbee5fd500f536b3f159fb5473d5f6ab2e8fec5&=&format=webp&quality=lossless&width=621&height=627"
            alt="uniHub Logo"
            className="h-20 filter"
          />
          <h1 className="text-purple-200 drop-shadow-md  text-3xl font-bold">UniHub</h1>
        </div>
        <div>
          <Link to="/login" className="text-white text-xl font-semibold mr-4">
            Login
          </Link>
          <Link to="/signup" className="text-white text-xl mr-2 font-semibold">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="bg-cover  bg-center h-screen flex items-center  mx-auto justify-around bg-image">
        <div className="container text-center mx-auto basis-[55vh]">
          <h2 className="text-white text-5xl font-bold mb-4">
            {isTyping ? (
              <span className="drop-shadow-md">
                {tagline}
                <span className="animate-blink cursor-1">|</span>
              </span>
            ) : (
              <span className="drop-shadow-md">{tagline}</span>
            )}
          </h2>
          <p className="text-white text-xl italic font-medium">
            Access all your college resources ,
          </p>
          <p className="text-white font-medium text-xl mb-8 italic">
            chat with other students, and connect with the community.
          </p>
          <Link
            to="/home"
            className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-purple-400 hover:text-white transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
        <div className="basis-[45vw] ">
          <img
            src="https://media.discordapp.net/attachments/1164497786964803585/1204018439929335879/logo2d-removebg-preview.png?ex=65d3348d&is=65c0bf8d&hm=9416987d5ea968092b9456dc7bbee5fd500f536b3f159fb5473d5f6ab2e8fec5&=&format=webp&quality=lossless&width=621&height=627"
            alt="UniHub Logo"
            className="drop-shadow-2xl shadow-white backdrop-blur-lg w-[40vw]"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto pb-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164840153123143733/education-logo-open-book-dictionary-textbook-or-notebook-with-graduation-hat-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-free-vector.png?ex=6544acee&is=653237ee&hm=3d0375be2b9543c9769b86a23cb9d81d725fef39392f02a9e6e09505cab36a04&=&width=589&height=589"
                alt="Item 1"
                class="w-full  object-cover rounded-lg mb-2 h-80 "
              ></img>
              <p className="text-xl font-semibold">Academics</p>
              <p className="text-gray-600"></p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164841383723536474/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.png?ex=6544ae13&is=65323913&hm=a1066cf3b5f50fb991443e49b7e028dcbab8a9ede1405c4345488ce4f387b7bf&=&width=706&height=589 "
                alt="Item 2"
                class="w-full object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Chill Zone</p>
              <p className="text-gray-600"></p>
            </div>
            <div className="hover:scale-110 bg-white p-4 shadow-lg rounded-lg h-96  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164838610558787627/man-looking-data-of-new-candidate.png?ex=6544ab7e&is=6532367e&hm=a33f23fb5d98cbdcd38a65e5e65b56751ad3ab15eb257641016a4d671da01c00&=&width=708&height=589"
                alt="Item 3"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Alumini</p>
              <p className="text-gray-600"></p>
            </div>
            <div class="bg-white p-4 hover:scale-110  shadow-lg rounded-lg h-96 hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164842388280315974/College-Societies.png?ex=6544af03&is=65323a03&hm=8a5ca454314f9c216cdaaa9b558f85a34e27948bb77f299c4586cabf1d096eb0&=&width=1057&height=589"
                alt="Item 4"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Clubs</p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto mt-8 h-80 bg-gradient-to-r from-purple-600 to-purple-300  ">
        <div className="w-full pb-8 flex h-80 bg-gradient-to-r from-purple-600 to-purple-300 ">
          <img
            class="w-1/2 h-80 rounded-lg hover:scale-200"
            src="https://media.discordapp.net/attachments/1164497786964803585/1164624042582622249/books.png?ex=6543e3a9&is=65316ea9&hm=ad79fdfdf388131686776ca72ef98260df4799d24e2f0e09f6e2ec0b7b481177&=&width=885&height=589"
            alt="Image"
          ></img>

          <div className="w-1/2 m-4 place-self-center">
            <h1 className="text-4xl my-8">Academic Zone</h1>
            <p className="text-lg self-center ">
              Our Academic Zone is a hub of knowledge, where the community can
              contribute and access a wide range of academic resources, making
              learning more accessible and collaborative.
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-purple-600 to-purple-300  place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Alumini Network</h1>
            We bridge the gap between students and alumni, making it easy for
            current students to seek advice and insights from those who've
            walked the same path before.
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1164630053427097701/Untitled-design-34.png?ex=6543e942&is=65317442&hm=5f9272198e280472cb2b1785b6f4d5d1ef1033e2db7ec87694b17ca9a6f91d58&=&width=979&height=589"
              alt="Image"
            ></img>
          </div>
        </div>
        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-purple-600 to-purple-300  place-self-center  ">
          <img
            class="w-1/2 self-center h-80 mt-8 rounded-lg "
            src="https://media.discordapp.net/attachments/1164497786964803585/1164633003927011450/maxresdefault.png?ex=6543ec01&is=65317701&hm=6f7e505ddc4c09b77a4dbddac4cee1ae76a0aaf2f1dfeb5d576810b5c75b3c4c&=&width=1048&height=589"
            alt="Image"
          ></img>

          <div className="w-1/2 p-4 place-self-center">
            <h1 className="text-4xl my-8">Chill Zone</h1>
            <p className="text-lg self-center ">
              In the Chill Zone, students can form groups, engage in lively
              chats, connect with new peers, and explore various societies. It's
              a space where you can balance your academic and social life
              effortlessly.
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-purple-600 to-purple-300  place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Clubs/Societies</h1>
            We bridge the gap between students and alumni, making it easy for
            current students to seek advice and insights from those who've
            walked the same path before.
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1164635105462071356/8471bb4825047bbe437682e85769ad08.png?ex=6543edf7&is=653178f7&hm=7f34748644ce7e62449299ac20e06132e484b77f08a327af89919c94979098d0&=&width=1048&height=589"
              alt="Image"
            ></img>
          </div>
        </div>
    </div>
              <Footer/>
    </div>
  );
}

export default Index;
