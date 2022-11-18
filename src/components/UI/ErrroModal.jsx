import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";

const ErrroModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>{props.message}</div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrroModal;
