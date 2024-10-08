import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex items-center justify-between header-bg">
            <Link className="text-primary text-3xl font-bold" href="">AUSTEA</Link>
            <Link href={''}>
                <Image src={'/images/austea_logo_2.svg'} width={100} height={24} alt={'Austea Logo'}/>
            </Link>
            <nav className="flex items-center gap-8 text-[#717171] font-bold">
                <Link href={''}>Store Locator</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>Rewards</Link>
                <Link href={''}>Contact</Link>
                <Link className="bg-primary rounded-full text-white px-8 py-2" href={''}>Login</Link>
            </nav>
        </header>
    );
}