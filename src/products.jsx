import React from 'react'
import style from './table.module.css'

const products = [
    {
        id: 1,
        name: "MacBook",
        price: 100000,
        left: 31,
        image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
        id: 2,
        name: "Galaxy",
        price: 35999,
        left: 11,
        image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
        id: 3,
        name: "Скутер",
        price: 65500,
        left: 0,
        image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
        id: 4,
        name: "Монитор Samsung",
        price: 12000,
        left: 7,
        image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
        id: 5,
        name: "Респераторная маска",
        price: 500,
        left: 24,
        image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
        id: 6,
        name: "Стиральная машина",
        price: 100000,
        left: 0,
        image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
    {
        id: 7,
        name: "Белый холодильник",
        price: 43100,
        left: 18,
        image: "http://intocode.ru/d/react-project-1/images/7.jpg",
    },
    {
        id: 8,
        name: "Колонка",
        price: 3000,
        left: 1,
        image: "http://intocode.ru/d/react-project-1/images/8.jpg",
    },
    {
        id: 9,
        name: "Наушники",
        price: 1500,
        left: 5,
        image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    },
];
function Products() {
    return (
        <table className={style.table} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Left</th>
                    <th>Image</th>
                </tr>

            </thead>

            <tbody>
                    {products.map((item)=>{
                        return (
                            <tr key={products.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.left}</td>
                                <td><img src={item.image} alt={item.name} /></td>
                            </tr>
                        )
                    })}

            </tbody>



        </table>
    )

}





export default Products