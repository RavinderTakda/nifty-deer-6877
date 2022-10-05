import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? children : navigate("/login");
};
