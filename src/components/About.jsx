import User from "./User.jsx"
import invertedCommas from "../assets/inverted-commas.png"
import swiggyJourney from "../assets/Swiggy-Journey.jpg"

const About = () => {
    return (
        <div className="pb-8 pt-35 max-h-full">
            <h1 className="text-4xl text-center font-bold font-montserrat pb-4">About Us</h1>
            <div className="bg-orange-600 h-110 px-30 pt-20">
                <img src={invertedCommas} />
                <p className="text-white text-3xl font-regular font-montserrat leading-10 tracking-wide">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
            </div>
            <h2 className="text-3xl text-center font-bold font-montserrat py-6">The Eatzo <b>Journey</b></h2>
            <img src={swiggyJourney} />
            <div><h2 className="text-3xl text-center font-bold font-montserrat pt-8 pb-2">What’s in store for the future?</h2>
            <p className="text-2xl text-center font-extralight font-montserrat px-70">Eatzo has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
            </div>
         </div>
    );
}

export default About;