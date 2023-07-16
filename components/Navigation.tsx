"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href:"/",
        name:"Inicio",
    },
    {
        href:"/users",
        name:"Usuarios",
    },
]

const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center py-4">
            <ul className="flex gap-x-4 text-lg">
                {
                    navLinks.map(link => {
                        const isActive = link.href === "/"
                            ?   pathname === "/" 
                                ? true
                                : false
                            :   pathname.startsWith(link.href)

                        return (<li key={link.name}>
                            <Link 
                                className={isActive ? "text-blue-500 font-bold" : "text-white" } 
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>)
                    })
                }
            </ul>
        </nav>
    );
}

export default Navigation;