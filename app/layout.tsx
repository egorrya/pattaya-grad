import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
	title: 'Паттайя Град',
	description: 'Недвижимость в Тайланде',
};

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQXBZRH8');`;

const GTAG_SNIPPET = `
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-NGB2DFNV50');
	gtag('config', 'AW-11426015134');
`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<head>
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-NGB2DFNV50'
					strategy='afterInteractive'
				/>
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=AW-11426015134'
					strategy='afterInteractive'
				/>
				<Script id='gtag-init' strategy='afterInteractive'>
					{GTAG_SNIPPET}
				</Script>
				<Script id='gtm-bootstrap' strategy='afterInteractive'>
					{GTM_SNIPPET}
				</Script>
			</head>
			<body suppressHydrationWarning className='antialiased font-sans'>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-PQXBZRH8'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{children}
			</body>
		</html>
	);
}
