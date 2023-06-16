import React from "react";
import { Paper, Button, FormControl, FilledInput, InputAdornment, Select } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./styles.css"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



function Title() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <div
      className="paper-doacoes"
      >
        <h3>Registro de Doações</h3>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            height: "40px",
            backgroundColor: "#5B69E8",
          }}
        >
          {" "}
          Novo{" "}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        

      >
        <Box className="modal" sx={{ ...style, width: 510, borderRadius:"8px", border:"#fff" }}>
          <h2 id="parent-modal-title">Nova Doação</h2>
          <div>
            <FormControl sx={{ m: 1, width: '10ch', }} variant="filled">
              <div style={{ display: "flex", marginBottom: "50px" }} >
                <div  >
                  <FilledInput
                    style={{ width: "150%" }}
                    id="filled-adornment-weight"
                    type="date"
                    position="end"
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                </div>
                <div>
                  <FilledInput
                    style={{ marginLeft: "130px", width: "120%" }}
                    id="filled-adornment-weight"
                    endAdornment={<InputAdornment position="end">ml</InputAdornment>}
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                </div>

              </div>
              <div>
                <Select style={{ width: "67vh" }} native defaultValue="" id="grouped-native-select" label="Grouping">
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </optgroup>
                </Select>
              </div>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{
                  marginTop: "40px",
                  height: "40px",

                  backgroundColor: "#5B69E8",
                }}
              >
                {" "}
                Salvar{" "}
              </Button>
            </FormControl>
          </div>

        </Box>
      </Modal>
    </div>
  );
};

export default Title;
