import { React, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../index.css";
import { Button, Input, Form, message } from "antd";
import userContext from "../../context/User/UserContext";
import { Navigate } from "react-router-dom";
const ResetPassword = () => {
  const UserContext = useContext(userContext);
  const [valores, setValores] = useState({});

  const hola = (values) => {
    setValores(values);
  };

  if (UserContext.selectEmail.token) {
    return <Navigate to="/reset/verify" />;
  } else {
    message.error("Este correo no esta asociado");
  }
  ///if (!UserContext.selectEmail.correo)
  return (
    <div className="site-input-group-wrapper">
      <br />
      <Form onFinish={hola} autoComplete="off">
        <Form.Item
          label="E-mail"
          name="correo"
          rules={[
            {
              type: "email",
              required: true,
              message: "Email no valido",
            },
          ]}
        >
          <Input id="correo" style={{ width: 170 }} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={UserContext.reset(valores.correo)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default ResetPassword;
