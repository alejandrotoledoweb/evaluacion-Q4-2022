import React, { FC } from "react";
import GifCard from "../../molecules/GifCard/GifCard";

interface GifCardProps {
  images: {
    id?: number;
    url: string;
    author_id: number;
  }[];
}

const GridCards: FC<GifCardProps> = ({ images }) => {
  return (
    <div className="grid-cards-container">
      {images?.map(image => (
        <div key={image?.id}>
          <GifCard image={image?.url} gifAlt={image?.url} description={image?.url} />
        </div>
      ))}
    </div>
  );
};

export default GridCards;
