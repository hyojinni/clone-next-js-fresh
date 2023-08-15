"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './globals.css';
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
	title: 'Next.js 초급과정 학습',
	description: 'Next.js 초급과정 학습',
}
export default function RootLayout({ children }) {
	const currentRoute = usePathname();
	return (
		<html lang="ko">
			<head />
			<body>
				<div className="wrapper">
					<nav className="navbar">
						<Link key="home" href="/" className={currentRoute === "/" ? "active" : ""}>Home</Link>
						<Link key="list" href="/list" className={currentRoute === "/list" ? "active" : ""}>List</Link>
						<Link key="cart" href="/cart" className={currentRoute === "/cart" ? "active" : ""}>Cart</Link>
					</nav>
					<div className="container">
						{children}
					</div>
				</div>
			</body>
		</html>
	)
} 