import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import { Badge } from "./ui/badge";
import Image from "next/image";



export const revalidate = 0;
const Navbar = async () => {

    const categories = await getCategories();
    return (
        <div className="border-b flex flex-row items-center justify-between">
            <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1 rounded-2xl">
                <Image
                    src="/nike_logo.jpg"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded"
                />
                <span className="text-sm font-medium">Zudskyy Brand</span>
            </Badge>
            <Container >

                <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-x-10  ">

                    <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2 ">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>

            </Container>

        </div>
    );
}

export default Navbar;