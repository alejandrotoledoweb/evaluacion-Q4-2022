import React, { useState } from "react";
import { Gif } from "../../../utils/interfaces/gif.interface";
import "./GifCard.scss";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { Button } from "../../atoms/button/Button";
import classNames from "classnames";

interface GifProps {
  gif: Gif;
  onDelete?(): void;
}

export const GifCard: React.FC<GifProps> = ({ gif, onDelete }) => {
  const [showDelete, setShowDelete] = useState(false);
  const handleShow = () => {
    setShowDelete(!showDelete);
  };
  return (
    <div className={classNames({ gifCard: true })}>
      <img
        src={gif.url}
        alt={gif.url}
        className={classNames({ gifCard__image: true, "gifCard--modal": showDelete })}
      />
      <div onClick={handleShow}>
        <img className={classNames({ gifCard__icon: true })} src={DeleteIcon} alt="Delete icon" />
      </div>
      {showDelete && (
        <div className="gifCard__modal">
          <p>Deseas eliminar este GIF?</p>
          <Button testId="delete__button__2" className="gifCard__eliminar" onClick={onDelete}>
            Elimiar
          </Button>
          <div className="gifCard__div"></div>
          <Button className="gifCard__cancelar" onClick={handleShow}>
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
};
