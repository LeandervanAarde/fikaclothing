export interface IFooterInformation {
    heading: string, 
    content: string | string[]
}

export interface ISocials {
    platform: string, 
    handle: string, 
    icon: React.ReactNode
};

export interface ISupport {
    location: string, 
    link? : string, 
}