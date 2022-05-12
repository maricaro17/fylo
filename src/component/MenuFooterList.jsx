import React from 'react'
import MenuFooterItem from './MenuFooterItem'


const MenuFooterList = ({items}) => {
  return (
    <div className='footer-text-addres-container'>
      {items.map((item)=>(
        <MenuFooterItem key={item.name} item={item.name}/>
      ))}
    </div>
  )
}

export default MenuFooterList