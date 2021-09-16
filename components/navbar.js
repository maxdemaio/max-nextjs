
// Layout for my website navbar
export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Maxwell DeMaio</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li className="mr-6">
                    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </li>
            </ul>
        </nav>
    );
}