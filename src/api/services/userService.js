import { userAxiosInstance } from "../axios";

//? ================================================ Contact ================================================

export const contactMessage = (values) => {
  return userAxiosInstance.post("/add-contact-form/", values);
};
