interface ISocials {
    platform: string, 
    handle: string, 
    icon: React.ReactNode
};

interface ISupport {
    location: string, 
    link? : string, 
}


export type FooterInformation = ISocials | ISupport;