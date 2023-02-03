import React, { FC } from "react";

interface GifCardProps {
  image: string;
  gifAlt: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const GifCard: FC<GifCardProps> = ({ image, gifAlt, onClick }) => {
  return (
    <div className="gif-card-container">
      <img src={image} alt={gifAlt} />
      <div className="delete-icon-container" onClick={onClick}>
        <img src={"iconurl"} alt={"delete-icon"} />
      </div>
    </div>
  );
};

export default GifCard;
