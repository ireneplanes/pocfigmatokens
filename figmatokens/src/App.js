import './App.css';

export const App = () => {

  const inputRef = useRef();

  const onClick = () => {
      inputRef.current.firstChild.focus();
  }

  return (
      <>
      <Typography
          variant="h3"
      >FocusScreen</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Input
              ref={inputRef}
              type="text"
              placeholder="Ingrese su nombre"
              sx={{ mt:3, width:200 }}
              />
          <Button
              variant="contained" 
              sx={{ mt: 3, width:100 }}
              onClick={onClick}
          >Focus</Button>
      </Box>
    </>
  )
}
