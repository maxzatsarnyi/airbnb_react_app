import React, { FC, useState } from 'react';
import './Card.scss';

type Props = {
  src: string;
  title: string;
  description: string;
  price: string;
};

export const Card: FC<Props> = ({ src, title, description, price }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='card'>
      <img src={src} alt={title} />
      <div className='card__info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};
