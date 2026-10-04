import { useState, useEffect } from "react";
import { TextField, Button, Snackbar, Typography } from "@mui/material";

const ABTesting = () => {
  const [variant, setVariant] = useState(null);

  const handleAClick = () => {
    console.log("testing");
  };

  const handleBClick = () => {
    console.log("testing");
  };

  useEffect(() => {
    // Crear un A/B Testing
    const newVariant = Math.random() < 0.5 ? "A" : "B";
    setVariant(newVariant);
    console.log(`Setting new variante ${newVariant}`);
  }, []);

  return (
    <>
      <Typography>
        A/B Testing permite realizar pruebas A/B para comparar dos versiones de
        una página o funcionalidad
      </Typography>
      {variant === "A" && (
        <Button onClick={handleAClick} color="primary" variant="contained">
          Haz tu compra ahora
        </Button>
      )}
      {variant === "B" && (
        <Button onClick={handleAClick} color="secondary" variant="outlined">
          Haz tu compra ahora
        </Button>
      )}
    </>
  );
};

export default ABTesting;
