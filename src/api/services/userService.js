import { userAxiosInstance } from "../axios";

//? =============================================== Home Page ===============================================

export const listBanner = () => {
  // return userAxiosInstance.get("/list-banner");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: [
            {
              image: "https://via.placeholder.com/1200x500?text=Banner+1",
              title: "Welcome to Our Store",
              description: "Get the best products at unbeatable prices.",
              link: "#",
            },
            {
              image: "https://via.placeholder.com/1200x500?text=Banner+2",
              title: "Limited Time Offer",
              description: "Don't miss out on our exclusive deals.",
              link: "#",
            },
            {
              image: "https://via.placeholder.com/1200x500?text=Banner+3",
              title: "Shop with Confidence",
              description:
                "Quality products, fast delivery, and secure payments.",
              link: "#",
            },
          ],
        },
      });
    }, 1000); // Simulate network delay
  });
};

export const listProject = () => {
  return userAxiosInstance.get("/list-project");
};

//? ================================================ Service ================================================

export const listService = () => {
  return userAxiosInstance.get("/list-service");
};

//? ================================================ Contact ================================================

export const contactMessage = (values) => {
  return userAxiosInstance.post("/contact-message", values);
};

//? ================================================= About =================================================

export const getAbout = () => {
  return userAxiosInstance.get("/get-about");
};
