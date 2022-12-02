import { React, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { Button, Input, Form, message, Typography } from "antd";
import userContext from "../../context/User/UserContext";
import { Navigate } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
const { Title } = Typography;
const ResetPassword = () => {
  const UserContext = useContext(userContext);
  const [valores, setValores] = useState({ correo: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3040/auth/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: valores.correo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.iderror == 2) {
          message.error(data.mensaje);
        } else {
          UserContext.reset(data);
        }
      });
  };

  if (UserContext.selectEmail.token) {
    return <Navigate to="/reset/verify" />;
  }

  return (
    <>
      <Title level={2} className="title-form-email">
        Recuperar Contraseña
      </Title>
      <Form
        onSubmitCapture={handleSubmit}
        autoComplete="off"
        className="verify-email-form"
      >
        <Form.Item
          className="verify-input-email"
          name="correo"
          rules={[
            {
              type: "email",
              required: true,
              message: "Email no valido",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Ingrese su direccion de correo electronico"
            value={valores.correo}
            onChange={(e) => setValores({ ...valores, correo: e.target.value })}
          />
        </Form.Item>
        <Button
          className="verify-button-email"
          type="primary"
          htmlType="submit"
        >
          Enviar correo de restablecer contraseña
        </Button>
      </Form>
    </>
  );
};
export default ResetPassword;
