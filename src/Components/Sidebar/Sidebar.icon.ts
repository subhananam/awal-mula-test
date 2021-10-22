import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

interface ISidebarIcon {
    id: number;
    name?: string;
    icon: React.ElementType<SvgIconProps>
}

const SidebarIcon : Array<ISidebarIcon> = [
    {
        id: 41,
        name: "Kategori Produk",
        icon: CategoryIcon
    },
    {
        id: 113,
        name: "Food & Beverages",
        icon: FastfoodIcon
    },
    {
        id: 43,
        name: "Minuman",
        icon: LocalBarIcon
    },
    {
        id: 54,
        name: "Superdrink",
        icon: LocalBarIcon
    },
    {
        id: 56,
        name: "Tea & Coffee",
        icon: EmojiFoodBeverageIcon
    },
    {
        id: 69,
        name: "Traditional Drink",
        icon: LocalCafeIcon
    },
    {
        id: 75,
        name: "Tea & Coffee",
        icon: LocalCafeIcon
    },
    {
        id: 135,
        name: "Nectar & Juice",
        icon: LocalBarIcon
    },
];
export default SidebarIcon