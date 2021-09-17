import Link from 'next/link'

// Layout for my website footer
export default function NestedFooter() {
    return (
        <footer>
            <Link href="/">
                <a>← Back</a>
            </Link>
            <hr></hr>
        </footer>
    );
}