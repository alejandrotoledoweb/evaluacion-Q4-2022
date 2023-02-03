import React, { FC } from "react";

interface GifCardProps {
  image: string;
  gifAlt: string;
  description: string;
}

const GifCard: FC<GifCardProps> = ({ image, gifAlt }) => {
  return (
    <>
      <img src={image} alt={gifAlt} />
    </>
  );
};

export default GifCard;
