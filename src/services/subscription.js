import toast from "react-hot-toast";
import subscriptionApi from "../api/subscriptionApi";

const subscriptionRequest = async (email) => {
  try {
    const emailData = { "email": email };
    const jsonData = JSON.stringify(emailData);
    const response = await subscriptionApi.subscribe(jsonData);
    if (response?.error) {
      return toast.error("Invalid email address");
    } else if (response?.data?.success) {
      return toast.success("Thank you for subscribing!");
    } else {
      return toast.error("Unexpected response from the server");
    }
  } catch (error) {
    console.error("Error during subscription request");
  }

}

export default subscriptionRequest;