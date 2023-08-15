import Link from "next/link";
import './globals.css';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
	title: 'Next.js 초급과정 학습',
	description: 'Next.js 초급과정 학습',
}
export default function RootLayout({ children }) {
	return (
		<html lang="ko">
			<head />
			{/* <body className={inter.className}> */}
			<body>
				<div className="wrapper">
					<div className="navbar">
						<Link href="/">Home</Link>
						<Link href="/list">List</Link>
						<Link href="/cart">Cart</Link>
					</div>
					<div className="container">
						{children}
					</div>
				</div>
			</body>
		</html>
	)
} 