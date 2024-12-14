import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const PinkButton = () => <Button className="button-pink" text="Reproducir" />;
export const InfoButton = () => <Button className="button-pink" text="Más Información" />;
