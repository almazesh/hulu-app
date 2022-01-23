import React from 'react';

function HeaderItem({title , AiOutlineHome}) {
  return (
      <div className='headerItemList'>
          <AiOutlineHome className="icons"/>
          <p className='headerItemTitle'>{title}</p>
      </div>
  )
}

export default HeaderItem;
