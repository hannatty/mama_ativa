import React from "react";
import { Paper, Button } from "@mui/material";

const Title = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center', marginTop: '40px' }}>
      <Paper
        style={{
          width: "60%",
          backgroundColor: "#C7CBF3",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3>Registro de Doações</h3>
        <Button
          variant="contained"
          style={{
            height: "40px",
            backgroundColor: "#5B69E8",
          }}
        >
          {" "}
          Novo{" "}
        </Button>
      </Paper>
    </div>
  );
};

export default Title;
