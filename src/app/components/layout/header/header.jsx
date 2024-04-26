import Link from "next/link";

export default function Header(){
    return (
        <header className='flex items-center justify-between py-3'>
        <Link href={'/hom'} className='text-primary text-2xl font-semibold'>
        Karl's pizza
        </Link>
        <nav className='flex gap-6 text-gray-500 font-semibold  items-center'>
          <Link href=''>Home</Link>
          <Link href=''>Menu</Link>
          <Link href=''>About</Link>
          <Link href=''>Contact</Link>
        </nav>
        <nav className="flex gap-5 items-center ">
        <Link href={'/login'} className="text-gray-500 font-semibold">Login</Link>
        <Link href='/register' className='bg-primary text-white  px-8 py-2 rounded-full'>Register</Link>
        </nav>
      </header> 
    )
}