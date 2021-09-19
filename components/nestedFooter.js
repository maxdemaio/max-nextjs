import Link from 'next/link'

// Layout for my website footer
export default function NestedFooter() {
    return (
        <footer className="mt-4 prose dark:prose-dark prose-lg">
            <Link href="/">
                <a>← Back</a>
            </Link>
            <hr></hr>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                <span><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Maxwell DeMaio</span>
            </p>
        </footer>
    );
}