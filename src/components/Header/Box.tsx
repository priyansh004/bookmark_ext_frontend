import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Category {
  name: string;
  icon: IconDefinition;
}

interface BoxProps {
  categories: Category[];
}

const Box: React.FC<BoxProps> = ({ categories }) => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="flex flex-row gap-2 items-center border-[1px] p-2 rounded-sm border-black">
          <FontAwesomeIcon icon={category.icon} />
          <p>{category.name}</p>
        </div>
      ))}
    </>
  );
}

export default Box;
