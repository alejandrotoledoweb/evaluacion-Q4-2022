import React, { FC, useState } from "react";

interface GifCardProps {
  image: string;
  gifAlt: string;
  description: string;
  onDelete?: React.MouseEventHandler<HTMLElement>;
}

const GifCard: FC<GifCardProps> = ({ image, gifAlt, onDelete }) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const handleShow = () => {
    setShowDelete(!showDelete);
  };
  return (
    <div className="gif-card-container">
      <img src={image} alt={gifAlt} />
      <div className="delete-icon-container" onClick={handleShow}>
        <img src={"iconurl"} alt={"delete-icon"} />
      </div>
      {showDelete && (
        <div>
          <button type="button" onClick={onDelete}>
            Eliminar
          </button>
          <button type="button">Cancelar</button>
        </div>
      )}
    </div>
  );
};

export default GifCard;
