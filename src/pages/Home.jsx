import React, { useEffect, useState } from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import About from "../partials/About";
import Tracks from "../partials/Tracks";
import Footer from "../partials/Footer";
import Schedule from "../partials/Schedule";
import Sponsors from "../partials/Sponsors";
import Register from "../partials/Register";
import FAQ from "../partials/Faq";

import JMI from "../images/brands/jmi.png";
import JMIwhite from "../images/brands/jmiwhite.png";
import Insta from "../images/brands/instagram.png"
import Instawhite from "../images/brands/instagramwhite.png"
import Discord from "../images/brands/discord.png";
import Discordwhite from "../images/brands/discordwhite.png"
import CountdownTimer from "../partials/CountdownTimer";

export const DarkThemeContext = React.createContext({
	isDarkTheme: false,
});

function Home() {
	const [isDarkTheme, setIsDarkTheme] = useState();

	return (
		<DarkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
			<div
				className="b-color transition-all flex flex-col min-h-screen overflow-hidden"
				id="">
				{/*  Site header */}
				<Header UpdateTheme={() => setIsDarkTheme(!isDarkTheme)} />

				{/*  Page content */}
				<main className="flex-grow">
					{/*  Page sections */}
					<HeroHome theme={isDarkTheme} />
					<CountdownTimer />
					<About />
					<Tracks />
					<Schedule />
					<Sponsors />
					<Register />
					<FAQ />
					{/* < />  */}
				</main>

				{/*  Site footer */}
				{/* <Footer /> */}
				<div className="b-color p-5 flex flex-col md:flex-row gap-2 justify-between items-center mt-16 border-t-2 ">
					<p className="theme-text">HACK JMI</p>

					<p className="theme-text flex justify-center">
						Made with ❤️ by
						<span className="text-orange-500 ml-2">HACK JMI Team</span>
					</p>
					{!isDarkTheme ?(
					<p className="items-center flex gap-4">
						<a href="https://www.instagram.com/hackjmi/">
							<img src={Insta} className="w-8.5" />
						</a>
						<a href="https://discord.gg/KEA8uHxC">
							<img src={Discord} className="w-8.5" />
						</a>
						<a href="https://jmi.ac.in">
							<img src={JMI} className="w-10" />
						</a>
					</p>
					):(
					<p className="items-center flex gap-4">
						<a href="https://www.instagram.com/hackjmi/">
							<img src={Instawhite} className="w-7" />
						</a>
						<a href="https://discord.gg/KEA8uHxC">
							<img src={Discordwhite} className="w-8" />
						</a>
						<a href="https://jmi.ac.in">
							<img src={JMIwhite} className="w-10" />
						</a>
					</p>
					)}
				</div>
			</div>
		</DarkThemeContext.Provider>
	);
}

export default Home;
