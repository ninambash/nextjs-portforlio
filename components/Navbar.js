//import link from next 
import Link from 'next/link'

export default function Navbar(){
    return (
        <nav>
            <Link href="/">
          Home
            </Link>

            <Link href="/about">
           About Mee
            
            </Link>
            <a href="" target="_blank">
                see my github
            </a>

        </nav>
    )
}