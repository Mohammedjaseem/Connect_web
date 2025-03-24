import UserLayout from "../../components/layout/UserLayout";
import ContactForm from "../../components/user/ContactForm";

function Contact() {
  return (
    <UserLayout>
      <div className="container mx-auto px-4">
        <div className="flex justify-center pt-20">
          <ContactForm />
        </div>
      </div>
    </UserLayout>
  );
}

export default Contact;
