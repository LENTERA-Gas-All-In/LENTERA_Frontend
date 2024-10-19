/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: 'true',
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				blue: {
					20: '#101737',
					10: '#080C1C',
					30: '#192352',
					40: '#212F6E',
					50: '#596392',
					60: '#9097B7',
					70: '#C7CBDB',
				},
				brown: {
					10: '#1D130B',
					20: '#392515',
					30: '#392515',
					40: '#392515',
					50: '#96775F',
					60: '#B9A595',
					70: '#DCD2CA',
				},
				gold: {
					10: '#342907',
					20: '#68520D',
					30: '#9C7C14',
					40: '#D0A51B',
					50: '#DCBC54',
					60: '#E8D28D',
					70: '#F3E8C6',
				},
				yellow: {
					10: '#3F3602',
					20: '#7D6C03',
					30: '#BBA205',
					40: '#FAD807',
					50: '#FBE245',
					60: '#FDEC83',
					70: '#FEF5C1',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
		width: {
		  '128': '32rem',
		},
		height: {
		  '128': '32rem',
		  '150': '39rem',
		  '1/12': '8.333333%',
		  '2/12': '16.666667%',
		  '3/12': '25%',
		  '4/12': '33.333333%',
		  '5/12': '41.666667%',
		  '6/12': '50%',
		  '7/12': '58.333333%',
		  '8/12': '66.666667%',
		  '9/12': '75%',
		  '10/12': '83.333333%',
		  '11/12': '91.666667%',
		}
		}
	},
	plugins: [require("tailwindcss-animate")],
}