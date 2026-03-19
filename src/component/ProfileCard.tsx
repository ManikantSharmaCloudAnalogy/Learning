import React from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  name: string;
  title: string;
  location: string;
  email: string;
  avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  location,
  email,
  avatarUrl,
}) => {
  return (
    <div className="card">
      <img className="avatar" src={avatarUrl} alt={name} />

      <div className="info">
        <h2>{name}</h2>
        <p className="title">{title}</p>
      </div>

      <div className="details">
        <p>{location}</p>
        <p>{email}</p>
      </div>

      <button className="btn">Contact</button>
    </div>
  );
};

export default ProfileCard;