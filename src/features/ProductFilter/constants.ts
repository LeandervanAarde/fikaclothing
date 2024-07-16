import { IFilter } from "./IFilter";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from "@mui/icons-material";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


export const filters : IFilter[] = [
    {
        title: "Price: Low to High",
        icon: ArrowUpwardIcon

    },
    {
        title: "Price: High to Low",
        icon: ArrowDownward
    }, 
    {
        title: "Alphabetical : A-Z",
        icon: SortByAlphaIcon
    },
    {
        title: "Alphabetical : Z-A",
        icon: SortByAlphaIcon
    }

]