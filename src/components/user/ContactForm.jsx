import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { hideLoading, showLoading } from "../../redux/alertSlice";
import { contactMessage } from "../../api/services/userService";
import { SendOutlined } from "@ant-design/icons";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await contactMessage(values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-2xl mx-auto px-4">
      <h1 className="my-10 text-center text-white text-4xl font-bold">
        Contact Us
      </h1>
      <p className="text-gray-500 mb-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you need
        assistance, have feedback, or anything else, feel free to reach out to
        us using the contact form. We&apos;re here to help!
      </p>
      <Form name="contact-form" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Your Name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input className="py-2 h-12" placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
            {
              required: true,
              message: "Please enter your email address!",
            },
          ]}
        >
          <Input className="py-2 h-12" placeholder="Email Address" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
            {
              pattern: /^[0-9]{10}$/, // Adjust regex based on your needs
              message: "Please enter a valid 10-digit phone number!",
            },
          ]}
        >
          <Input className="py-2 h-12" placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Your Message"
          rules={[
            {
              required: true,
              message: "Please enter your message!",
            },
          ]}
        >
          <Input.TextArea placeholder="Your Message" rows={6} />
        </Form.Item>
        <Form.Item className="flex justify-end items-end">
          <Button
            className="flex justify-center items-center"
            size="large"
            style={{ color: "white" }}
            htmlType="submit"
            icon={<SendOutlined />}
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
