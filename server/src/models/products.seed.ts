import { ProductSchema } from "./product";
import { Types } from "mongoose";

const productSeeds = (owner: Types.ObjectId): ProductSchema[] => {
    return [
        {
            name: "infinity gauntlet",
            category: "accessories",
            price: 10,
            description: "infinity gauntlet for kids",
            image: `/img/1.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy ms marvel",
            category: "accessories",
            price: 12,
            description: "toy ms marvel for kids",
            image: `/img/2.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy flash",
            category: "accessories",
            price: 8,
            description: "toy flash for kid",
            image: `/img/3.png`,
            onSale: true,
            owner,
        },
        {
            name: "clothes marvel",
            category: "clothes",
            price: 18,
            description: "article of clothing",
            image: `/img/4.png`,
            onSale: true,
            owner,
        },
        {
            name: "skullred tumbler",
            category: "accessories",
            price: 10,
            description: "skullred tumbler for kids",
            image: `/img/5.png`,
            onSale: true,
            owner,
        },
        {
            name: "american captain shield",
            category: "accessories",
            price: 12,
            description: "american captain shield for kids",
            image: `/img/6.png`,
            onSale: true,
            owner,
        },
        {
            name: "marvel jacket",
            category: "clothes",
            price: 12,
            description: "marvel jacket for kids",
            image: `/img/7.png`,
            onSale: true,
            owner,
        },
        {
            name: "clothes thor",
            category: "clothes",
            price: 18,
            description: "clothes thor of clothing",
            image: `/img/8.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy marvel captain",
            category: "accessories",
            price: 10,
            description: "toy marvel captain for kids",
            image: `/img/9.png`,
            onSale: true,
            owner,
        },
        {
            name: "cup dr Stranger",
            category: "accessories",
            price: 12,
            description: "cup dr Stranger for kids",
            image: `/img/10.png`,
            onSale: true,
            owner,
        },
        {
            name: "cup black pather",
            category: "accessories",
            price: 8,
            description: "cup black pather for kid",
            image: `/img/11.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy love thor",
            category: "clothes",
            price: 18,
            description: "toy love thor for kid",
            image: `/img/12.png`,
            onSale: true,
            owner,
        },
        {
            name: "infinity gauntlet",
            category: "accessories",
            price: 10,
            description: "infinity gauntlet for kids",
            image: `/img/13.png`,
            onSale: true,
            owner,
        },
        {
            name: "shoes avengers",
            category: "shoes",
            price: 12,
            description: "shoes avengers for kids",
            image: `/img/14.png`,
            onSale: true,
            owner,
        },
        {
            name: "shoes comic",
            category: "shoes",
            price: 8,
            description: "shoes comic for kid",
            image: `/img/15.png`,
            onSale: true,
            owner,
        },
        {
            name: "clothes american captain",
            category: "clothes",
            price: 18,
            description: "article of clothing",
            image: `/img/16.png`,
            onSale: true,
            owner,
        },
        {
            name: "shoes american captain",
            category: "shoes",
            price: 10,
            description: "infinity gauntlet for kids",
            image: `/img/17.png`,
            onSale: true,
            owner,
        },
        {
            name: "shield american captain",
            category: "accessories",
            price: 12,
            description: "shield american captain for kids",
            image: `/img/18.png`,
            onSale: true,
            owner,
        },
        {
            name: "mask iron man",
            category: "accessories",
            price: 8,
            description: "mask iron man for kid",
            image: `/img/19.png`,
            onSale: true,
            owner,
        },
        {
            name: "shoes avenger",
            category: "clothes",
            price: 18,
            description: "shoes avenger for kid",
            image: `/img/20.png`,
            onSale: true,
            owner,
        },
        {
            name: "infinity gauntlet",
            category: "accessories",
            price: 10,
            description: "infinity gauntlet for kids",
            image: `/img/1.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy ms marvel",
            category: "accessories",
            price: 12,
            description: "toy ms marvel for kids",
            image: `/img/2.png`,
            onSale: true,
            owner,
        },
        {
            name: "toy flash",
            category: "accessories",
            price: 8,
            description: "toy flash for kid",
            image: `/img/3.png`,
            onSale: true,
            owner,
        },
        {
            name: "clothes marvel",
            category: "clothes",
            price: 18,
            description: "article of clothing",
            image: `/img/4.png`,
            onSale: true,
            owner,
        },
    ];
};
export default productSeeds;
