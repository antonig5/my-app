import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import userContext from "../../context/User/UserContext";
import "../../components/css/antd.css";

const FormPass = () => {
  const [pass, setPass] = useState({ password1: "", password2: "" });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let loc = document.location.href;

    fetch("http://localhost:3040/users/update/" + loc.split("/")[5], {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clave: pass.password1,
        clave2: pass.password2,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.iderror == 2) {
          message.error(data.mensaje);
        } else if (data.id == loc.split("/")[5]) {
          <Navigate to="/sucessfull" />;
        }
      });
  };

  return (
    <Form
      name="basic"
      onSubmitCapture={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="verify-email-form "
    >
      <Form.Item
        name="password1"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Dijita tu nueva contraseña"
          value={pass.password1}
          onChange={(e) => setPass({ ...pass, password1: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        name="password2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Repite tu contraseña"
          value={pass.password2}
          onChange={(e) => setPass({ ...pass, password2: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: 200,
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormPass;
