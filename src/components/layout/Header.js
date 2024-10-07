import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-[#38b54a] text-2xl font-bold" href="">AUSTEA</Link>
            <nav className="flex items-center gap-8 text-[#717171] font-semibold">
                <Link href={''}>Store Locator</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>Rewards</Link>
                <Link href={''}>Contact</Link>
                <Link className="bg-primary rounded-full text-white px-8 py-2" href={''}>Login</Link>
            </nav>
        </header>
    );
}