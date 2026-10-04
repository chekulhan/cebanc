import { useState } from "react";
import { Slider, Typography, Button } from "@mui/material";

const marks = [
  {
    value: 1,
    label: "Muy insatisfecho/a",
  },
  {
    value: 2,
    label: "Insatisfecho/a",
  },
  {
    value: 3,
    label: "Neutral",
  },
  {
    value: 4,
    label: "Satisfecho/a",
  },
  {
    value: 5,
    label: "Muy satisfecho/a",
  },
];

const SliderInput = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Typography>
        ¿Cuál es tu nivel de satisfacción con esta interfaz?
      </Typography>

      <Slider defaultValue={3} step={5} marks={marks} min={1} max={5} />

      <Button onClick={handleClick} color="primary">
        Send Feedback
      </Button>
    </>
  );
};

export default SliderInput;
