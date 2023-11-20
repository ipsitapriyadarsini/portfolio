import React from 'react'
import { menuListItems } from '../ListComponent/MenuItems'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <section className="list-menu-items">
            <ul className="list_menu">
                {menuListItems.map((item) => (
                    < li className="list_items" id={item.id} key={item.id} >
                        <Link to={`#${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </section >
    )
}

export default Menu