module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				start: 'url("./components/assets/astrological-bg.png")',
				home: 'url("./components/assets/night.png")',
				navbar: 'url("./components/assets/sol-nav.png")',
			},

			fontFamily: {
				anton: ["Anton", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				jonquil: "#ebc30e",
				moss: "#97aa52",
				ash: "#b0cdaf",
				pine: "#2e3424",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "1025px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],
};
