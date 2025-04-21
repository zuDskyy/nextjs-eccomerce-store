export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;

}

export interface BreadCrumb {
    label?: string;
    href?: string;
}


export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
    [key: string]:unknown;

}

export interface Image {
    id: string;
    url: string;

}

export interface Size {
    id: string;
    value: string;
    name: string;
}
export interface Color {
    id: string;
    value: string;
    name: string;
}