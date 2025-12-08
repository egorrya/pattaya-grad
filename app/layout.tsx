import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Паттайя Град',
	description: 'Недвижимость в Тайланде',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<head>
				<link rel='preload' href='/assets/images/image.webp' as='image' />
				<link rel='preload' href='/assets/images/logo.webp' as='image' />
			</head>
			<body suppressHydrationWarning className='antialiased font-sans'>
				{children}
			</body>
		</html>
	);
}
