import React, { useState } from 'react';
import Modal from '../utils/Modal';

// Images
import IEEE from '../images/brands/ieeejmi.png';
import GDSC from '../images/brands/gdscjmi.jpg';
import Hashes from '../images/brands/hashes.png';
import Logo from "../images/logo.png";
function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
		<section className="relative">
			{/* Illustration behind hero content */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
				aria-hidden="true">

				<svg
					width="1360"
					height="578"
					viewBox="0 0 1360 578"
					xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient
							x1="50%"
							y1="0%"
							x2="50%"
							y2="100%"
							id="illustration-01">
							<stop stopColor="#F8B05C" offset="0%" />
							<stop stopColor="#F8B05C" offset="77.402%" />
							<stop stopColor="#F9931C" offset="100%" />
						</linearGradient>
					</defs>
					<g fill="url(#illustration-01)" fillRule="evenodd">
						<circle cx="1232" cy="128" r="128" />
						<circle cx="155" cy="443" r="64" />
					</g>
				</svg>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Hero content */}
				<div className="pt-32 pb-12 md:pt-40 md:pb-20">
					{/* Section header */}
					<div className="text-center pb-12 md:pb-16">
						<h1
							className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
							data-aos="zoom-y-out">
							<span className="text-orange-500">#ACK</span>
							<span className="text-gray-900 ml-4">JMI</span>
						</h1>
						<div className="max-w-3xl mx-auto">
						
							<p
								className="text-xl text-gray-600 mb-8"
								data-aos="zoom-y-out"
								data-aos-delay="150">
								Hybrid Mode | 48 Hour Hackathon | 28th - 29th January 2023
							</p>
							<div
								className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center sm:items-center"
								data-aos="zoom-y-out"
								data-aos-delay="300">
								<div>
									<a
										className="btn 
										font-semibold w-full sm:w-auto sm:ml-4 self-center hover:bg-orange-400 bg-orange-600 text-white"
										href="#register">
										Register
									</a>
								</div>
								<div>
									<a
										className="btn 
										font-semibold w-full sm:w-auto sm:ml-4 self-center hover:bg-gray-200"
										href="#">
										Sponsor Us
									</a>
								</div>
							</div>
						</div>
						<img src={Logo} alt="Logo" className="w-80 m-auto "  />
						<div className="max-w-3xl mx-auto flex flex-col">
							<p className="text-gray-600 mt-36 text-sm">
								in Collaboration with
							</p>
							<div className="flex justify-center flex-wrap items-center gap-4">
								<img src={IEEE} className="w-32 h-32" />
								<img src={GDSC} className="w-32 h-32" />
								<img src={Hashes} className="w-32 h-32 scale-50" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroHome;