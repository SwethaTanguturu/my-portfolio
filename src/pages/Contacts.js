import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form ]= Form.useForm();

  const onFinish = (values) => {
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    emailjs.send(
      "service_7qruins",    
      "template_gsjzo87",   
      templateParams,
      "-awx1MlMNYs7E6cni"     
    )
    .then((response) => {
      console.log('Success', response);
      message.success("Message sent successfully!");
      form.resetFields();
      setLoading(false);
    })
    .catch((error) => {
      console.log('Failure', error);
      message.error("Failed to send message. Please try again.");
      setLoading(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Card style={{ width: 400 }}>
        <h2>Contact Me</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: "email", message: "Enter a valid email!" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter your message!" }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>Send</Button>
        </Form>
      </Card>
    </motion.div>
  );
};

export default Contact;
