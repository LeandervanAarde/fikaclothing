interface ISocials {
    platform: string, 
    handle: string, 
    icon: React.ReactNode
};

interface ISupport {
    location: string, 
    link? : string, 
}

export interface IAddress {
    number: string, 
    street: string, 
    unit: string, 
    province: string, 
    postalCode: string, 
}

export interface ICartProduct {
    description: string, 
    quantity: string, 
    color: string,
    size: string, 
    price: string, 
    discount: string
}

export type FooterInformation = ISocials | ISupport;