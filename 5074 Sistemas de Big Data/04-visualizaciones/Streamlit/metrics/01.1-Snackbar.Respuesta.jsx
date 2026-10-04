import { TextField, Button, Snackbar } from "@mui/material";

const FeedbackInput = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <TextField
        label="¿Qué aspecto de tu experiencia te resultó más frustrante?"
        multiline
        rows={3}
        variant="outlined"
        fullWidth
      />

      <Button onClick={handleClick} color="primary">
        Send Feedback
      </Button>

      <Snackbar
        open={true}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
        message="Thanks for your message!"
      />
    </>
  );
};

export default FeedbackInput;
