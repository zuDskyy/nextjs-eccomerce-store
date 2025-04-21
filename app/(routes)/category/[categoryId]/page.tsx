
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-result";
import ProductCard from "@/components/product-card";
import MobileFilter from "./components/mobile-filter";
import { BreadcrumbCollapsed } from "@/components/breadcrumbs";

export const revalidate = 0;
interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}


const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    let sizes = await getSizes();
    let colors = await getColors();

    const category = await getCategory(params.categoryId);
    if (category.name == "shoes") {
        sizes = sizes.filter((size) => !isNaN(Number(size.name)));
    }else{
        sizes = sizes.filter((size) => isNaN(Number(size.name)));
    }
    console.log(sizes)
    const crumbs = [
        {
            label: "Home",
            href: " /"
        },
        {
            label: category.name,
        }
    ];

    return (

        <div className="bg-white py-5  ">
            <Container>
                <Billboard
                    data={category.billboard}
                />
                <div className="py-5 px-4 sm:px-6 lg:px-8 pb-24">
                    <BreadcrumbCollapsed crumbs={crumbs} />
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilter sizes={sizes} colors={colors} />
                        <div className="hidden lg:block ">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products?.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products?.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;