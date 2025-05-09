 import React, { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import ProfileDetails from "./ProfileDetails";

const ProfileCard = ({ profile, activeProfile, setActiveProfile }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetailsClick = () => {
    if (activeProfile === profile.id) {
      setShowDetails(!showDetails);
    } else {
      setActiveProfile(profile.id);
      setShowDetails(true);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 w-full max-w-sm text-white transition transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_#ffffff33]">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-20 h-20 object-cover rounded-xl border-2 border-white/20 shadow"
        />
        <div>
          <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full font-semibold">
            {profile.role}
          </span>
          <div className="flex items-center gap-1 mt-1 text-lg font-semibold text-white">
            {profile.name}
            <BsFillPatchCheckFill className="text-white/60" />
          </div>
          <p className="text-sm text-white/60">{profile.rate}</p>
          <div className="flex items-center text-sm text-white/50">
            <FaLocationDot className="mr-1" />
            {profile.location}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {profile.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleViewDetailsClick}
          className="text-sm text-white/70 hover:text-black transition duration-300"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1 rounded-full transition duration-300 transform hover:scale-110">
          Invite
        </button>
      </div>

      {showDetails && <ProfileDetails profile={profile} />}
    </div>
  );
};

export default ProfileCard;
