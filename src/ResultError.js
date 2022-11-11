import { CloseCircleOutlined } from "@ant-design/icons";
import { Image, Typography } from "antd";
import Code from "./img/error404.jpg";
import React from "react";
import "./App.css";
const { Paragraph, Text } = Typography;
const ResultError = () => (
  <>
    <h1 className="title">404</h1>

    <img width={400} height={400} src={Code} className="figt-image" />

    <div className="desc"></div>
  </>
);
export default ResultError;
