import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

const Nodemail = () => {
  return (
    <>
      {" "}
      <Result
        icon={<MailOutlined />}
        title="Genial, Por favor revisa tu correo"
      />
      ;
    </>
  );
};

export default Nodemail;
