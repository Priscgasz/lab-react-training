import React from "react";
import './idCard.css';

export default function IdCard({user}) {
  const image = user.picture; 
  const birthday = user.birth.toString().substring(0,15) || 'unknown';

  return (
    <div className = "id-card">;
    <img className="img" src={image} alt = {`$({user.fistName}'s profile`} />;
    <div className="infos">
          <p>
            <b>first name</b>: {user.firstName}
          </p>
          <p>
            <b>lastname</b>: {user.lastName}
          </p>
          <p>
            <b>birthdate</b>: {birthday}
          </p>
    </div>
    </div>
  );
}

