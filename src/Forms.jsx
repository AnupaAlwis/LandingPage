import React from 'react';
import {
  Button,
  Form,
  Input,
  Row,
  Col
} from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Forms = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{
        maxWidth: 1000,
      }}
      initialValues={{
        variant: 'filled',
      }}
    >
      <Form.Item>
        <h1 style={{ color: "white" }}>Sign up Your Company</h1>
        <h2 style={{ color: "#809599" }}>Tell Us About Your Company</h2>
      </Form.Item>

      <Form.Item>
        <Row gutter={225}>
          <Col span={12}>
            <Input style={{ width: '365px', height:'78px', backgroundColor:"#809599"}} placeholder="Registered Company Name" />
          </Col>
          <Col span={12}>
            <Input style={{ width: '365px', height:'78px', backgroundColor:"#809599"}} placeholder="Registered Company Name" />
          </Col>
        </Row>

      </Form.Item>

      <Form.Item

        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input style={{ width: '757px', height:'78px', backgroundColor:"#809599"}} placeholder="Registered Company Address" />
      </Form.Item>

      <Form.Item

        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input style={{ width: '757px', height:'78px', backgroundColor:"#809599"}} placeholder="Billing Address Address" />
      </Form.Item>
      <Form.Item>
      <Button type="primary" style={{ background: "#54C22D", width: '365px', height:'70px' }}>
        Next
      </Button>;
      </Form.Item>

      
    </Form>
  );
};
export default Forms;