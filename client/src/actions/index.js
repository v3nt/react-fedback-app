// Actions
import axios from "axios";
import { FETCH_USER } from "./types";

// this is how we talk to the backend! Defined in parent server project.
const fetchUser = () => {
  axios.get("/api/current_user");
};
