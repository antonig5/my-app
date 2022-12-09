import {
  UserOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import {
  Button,
  Layout,
  Menu,
  Avatar,
  Space,
  Card,
  Affix,
  Modal,
  Form,
  Input,
  Typography,
  message,
} from "antd";
import userContext from "../context/User/UserContext";
import { useState, useContext } from "react";
import { useEffect } from "react";

const { Header, Content, Footer } = Layout;
export default function Novedad() {
  const { Meta } = Card;

  const [valores, setValores] = useState({ asunto: "", descripcion: "" });
  const [container, setContainer] = useState(null);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  ///abrir modal de editar
  const showModalEdit = () => {
    setEdit(true);
  };
  const handleOkey = () => {
    setEdit(false);
  };
  ///abrir modal de crear
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  ///// Mostrar novedades.
  const { novedades, getNovedades } = useContext(userContext);
  useEffect(() => {
    getNovedades();
  }, []);
  ///agregar una nueva novedad

  const [valoresEdit, setValoresedit] = useState({
    asunto: "",
    descripcion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3040/novedad/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        novedad: valores.descripcion,
        asunto: valores.asunto,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.iderror == 1) {
          message.error(data.messaje);
        } else {
          message.success(data.messaje);
          getNovedades();
        }
      });
  };
  const handleDelete = (id) => {
    fetch("http://localhost:3040/novedad/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if ((data.iderror = 2)) {
          message.success(data.message);
          getNovedades();
        } else {
          message.error(data.message);
        }
      });
  };
  const handleUpdate = (id) => {
    fetch("http://localhost:3040/novedad/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asunto: valoresEdit.asunto,
        novedad: valoresEdit.descripcion,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if ((data.iderror = 2)) {
          message.error(data.message);
          getNovedades();
        } else {
          message.success(data.message);
        }
      });
  };

  //// Filtro Novedades
  const GetNovedad = (id) => {
    fetch("http://localhost:3040/novedades/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEdit({
          asunto: data.asunto,
          descripcion: data.novedad,
        });
      });
  };

  ///Cerrar modal de editar
  const handleCancelEdit = () => {
    setEdit(false);
  };
  ///Cerar modal de crear
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Layout
        className="layout"
        style={{
          overflow: "auto",
        }}
      >
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            items={new Array(1).fill(null).map((_, index) => {
              const key = index + 1;

              return {
                key,
                label: <Avatar size="default" icon={<UserOutlined />} />,
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Space size={[8, 16]} wrap>
            {novedades.map((novedad) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card
                style={{
                  marginTop: 30,
                  width: 300,
                }}
                actions={[
                  <Button
                    shape="circle"
                    onClick={() => handleDelete(novedad.idNove)}
                    icon={<DeleteOutlined />}
                  />,
                  <Button
                    shape="circle"
                    icon={<EditOutlined key="edit" />}
                    onClick={showModalEdit}
                  />,
                ]}
              >
                <Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={`${novedad.asunto}`}
                  description={`${novedad.novedad}`}
                />
              </Card>
            ))}
          </Space>
          <div className="scrollable-container" ref={setContainer}>
            <div className="background">
              <Affix target={() => container}>
                <Button
                  style={{ marginTop: 15 }}
                  type="primary"
                  onClick={showModal}
                  icon={<PlusOutlined />}
                >
                  Nueva Novedad
                </Button>
              </Affix>
            </div>
          </div>
        </Content>
        ////Editar novedad
        <Modal
          onOk={handleOkey}
          open={edit}
          title="Actualizar novedad"
          onCancel={handleCancelEdit}
          footer={[]}
        >
          <Typography level={2}> Novedad</Typography>
          <Form
            onSubmitCapture={() => console.log(novedades.idNove)}
            initialValues={valoresEdit}
          >
            <Form.Item
              name="Asunto"
              rules={[
                {
                  require: true,
                  message: "Por favor poner un asunto",
                },
              ]}
            >
              <Input placeholder="Asunto" />
            </Form.Item>
            <Form.Item
              name="Descripcion"
              rules={[
                {
                  required: true,
                  message: "Por favor poner una descripcion",
                },
              ]}
            >
              <Input.TextArea
                showCount
                maxLength={100}
                placeholder="Descripcion de la novedad"
              />
            </Form.Item>
            <Form.Item>
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                onClick={handleOkey}
              >
                Actualizar
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        /// Crear nueva novedad
        <Modal
          onOk={handleOk}
          open={open}
          title="Nueva novedad"
          onCancel={handleCancel}
          footer={[]}
        >
          <Typography level={2}> Novedad</Typography>
          <Form onSubmitCapture={handleSubmit} autoComplete="off">
            <Form.Item
              name="Asunto"
              rules={[
                {
                  require: true,
                  message: "Por favor poner un asunto",
                },
              ]}
            >
              <Input
                placeholder="Asunto"
                value={valores.asunto}
                onChange={(e) =>
                  setValores({ ...valores, asunto: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              name="Descripcion"
              rules={[
                {
                  required: true,
                  message: "Por favor poner una descripcion",
                },
              ]}
            >
              <Input.TextArea
                showCount
                maxLength={100}
                placeholder="Descripcion de la novedad"
                value={valores.descripcion}
                onChange={(e) =>
                  setValores({ ...valores, descripcion: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                onClick={handleOk}
              >
                Crear
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Created by OnlyCode
        </Footer>
      </Layout>
    </>
  );
}
