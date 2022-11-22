import { useContext, useEffect, useState } from "react";
import "./Me.css";
import AuthContext from "../context/AuthContext";
import { getToOrFromNameShoutouts } from "../services/shoutoutApiService";
import Shoutout from "../models/Shoutout";
import { useNavigate } from "react-router-dom";

const Me = () => {
  const { user } = useContext(AuthContext);
  const [shoutout, setShoutouts] = useState<Shoutout[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      getToOrFromNameShoutouts(user.displayName!).then((response) => {
        console.log(response);
        setShoutouts(response);
      });
    } else {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="Me">
      <ul>
        {shoutout.map((shoutout) => (
          <li key={shoutout._id}>
            <p>{shoutout.to}</p>
            <p>From: {shoutout.from}</p>
            <img src={shoutout.profilePic} alt={shoutout.from} />
            <p>{shoutout.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Me;
