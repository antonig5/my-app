import React from "react";
import { Button, Result } from "antd";
import { Link, Navigate } from "react-router-dom";
const Successfully = () => {
  return (
    <>
      {" "}
      <Result
        status="success"
        title="¡Genial! Tu contraseña a sido restablecida"
        extra={[<Link to="/">Inicia Sesion</Link>]}
      />
      ;
    </>
  );
};

export default Successfully;
