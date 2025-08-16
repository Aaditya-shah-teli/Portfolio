import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Aaditya sah | Portofolio",

    description:
		"My name is Aaditya, I'm a web developer and I'm passionate about it. I'm currently studying at Arniko highschool",

    author: "Aaditya kumar sah",
    siteUrl: "Aadityasah",
    applicationName: "Aaditya",

    keywords: [
		"aaditya",
		"aaditya",
		"aaditya sah",
		"sah",
		"aaditya kumar sah",
		"aaditya sah nepal",
		"17 year old",
		"aaditya portfolio",
		"aaditya sah nepal",
	],

    openGraph: {
		type: "website",
		url: "https://www.aaditya.my.id",
		title: "Aaditya | Portofolio",
		site_name: "Aaditya | Portofolio",
		description: "My name is Aaditya, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.jpeg",
				alt: "Aaditya's Portofolio",
			},
		],
		site_name: "Aaditya | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
