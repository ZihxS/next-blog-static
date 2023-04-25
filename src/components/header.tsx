import Link from "next/link"

const Header = () => {
    return (
        <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
            <Link href="/">
                <h1 className="text-3xl text-blue-500 font-bold">ZihxS's Blog</h1>
            </Link>
            <p className="text-slate-300">Welcome to my tech blog</p>
        </header>
    )
}

export default Header