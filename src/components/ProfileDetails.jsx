 import React from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div className="mt-4 bg-white/5 p-3 rounded-xl border border-white/10 text-sm text-white/80">
      <p className="mb-2">{profile.bio}</p>
      <p>📧 <span className="text-white">{profile.email}</span></p>
      <p className="mt-1">📞 <span className="text-white">{profile.phone}</span></p>
    </div>
  );
};

export default ProfileDetails;
