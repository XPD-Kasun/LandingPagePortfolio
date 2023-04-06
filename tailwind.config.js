/** @type {import('tailwindcss').Config} */

//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		"./src/pages/**/*.tsx",
		"./src/components/**/*.tsx"
	],
	theme: {
		extend: {
			colors: {
				'leaf': '#80b13b',
				'graybg': '#f9fafe',
				'avro': '#0065ff',
				'avrosub': '#464555',
				'avroalt': {
					DEFAULT: '#ff4b6a',
					600: '#cd2c47'
				},
				'meta': '#333',
				'metasub': '#f5ff80',
				'metaalt': '#31cb53'
			},
			fontFamily: {
				//sans: ['DMSans', ...defaultTheme.fontFamily.sans]				
				sans: ['DMSans'],
				dmsans: 'DMSans',
				clarendon: 'Clarendon',
				barlow: 'Barlow',
				inter: 'Inter'
			}
		},
	},
	plugins: [],
}
