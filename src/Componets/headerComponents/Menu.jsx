import React from 'react'
import { menuListItems } from '../ListComponent/MenuItems'

const Menu = () => {
    return (
        <section className="list-menu-items">
            <ul className="list_menu">
                {menuListItems.map((item) => (
                    <li className="list_items" id={item.id} key={item.id}>{item.title}</li>
                ))}
            </ul>
        </section>
    )
}

export default Menu