import axios from "axios";

const userRegister = form =>
  axios.post("/api/v1/user/register", form).then(res => res.data);

export { userRegister };
