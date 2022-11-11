import { Button, Alert, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import userContext from "../../context/User/UserContext";
const FormPass = () => {
  const [pass, setPass] = useState({});
  const onFinish = (values) => {
    setPass(values);
    console.log(values);
  };

  const UserContext = useContext(userContext);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (UserContext.verify.status == 200) {
    <Navigate to="/" />;
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Contraseña"
        name="password1"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Repetir Contraseña"
        name="password2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
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
          onClick={UserContext.verify(pass.password1, pass.password2, "134")}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormPass;
