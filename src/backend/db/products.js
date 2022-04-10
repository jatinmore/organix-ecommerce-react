import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
        _id: uuid(),
        id: "item1",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Organic Veggies",
        rating: 5,
        price: 200,
    },
    {
        _id: uuid(),
        id: "item2",
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        name: "Organic Apples",
        rating: 4,
        price: 150,
    },
    {
        _id: uuid(),
        id: "item3",
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        name: "Organic Orange Juice",
        rating: 3,
        price: 100,
    },

    {
        _id: uuid(),
        id: "item4",
        img: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWxtb25kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name: "Organic Almonds",
        rating: 2,
        price: 350,
    },
    {
        _id: uuid(),
        id: "item5",
        img: "https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9yZ2FuaWMlMjBtaWxrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name: "Organic Milk",
        rating: 3,
        price: 50,
    },
    {
        _id: uuid(),
        id: "item6",
        img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name: "Organic Strawberries",
        rating: 1,
        price: 200,
    },
];