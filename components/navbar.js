import Link from "next/link"

// Layout for my website navbar
export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mr-6">
                    <Link href="/">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Maxwell DeMaio</a>
                    </Link>
                </li>
                <li className="mr-6">
                    <Link href="/posts">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Posts</a>
                    </Link>
                </li>
                <li className="mr-6">
                    <Link href="/software">
                        <a className="text-blue-500 hover:text-blue-800" href="#">Software</a>
                    </Link>
                </li>
                <li className="mr-6">
                    <a className="text-gray-400 cursor-not-allowed" href="#">Socials</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Light | Dark</a>
                </li>
            </ul>
        </nav>
    );
}