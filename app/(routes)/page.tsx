import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import BillboardCarousel from "@/components/main-billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const billboardImages = [
    "/nike_2.jpg",
    "/nike_3.jpg",
    "/nike_4.jpg",
];
const HomePage = async () => {

    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboards("acb2d53c-777a-4b00-9c3a-d7d039c89d15");
    
    return (
        <Container>
            <div className="container space-y-5 pb-5 py-5">
                <BillboardCarousel images={billboardImages} />
                {billboard && <Billboard data={billboard} />}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>);
}

export default HomePage;