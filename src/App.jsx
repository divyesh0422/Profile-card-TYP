import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import profiles from "./data/data";

export default function App() {
  const [filterRole, setFilterRole] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [activeProfile, setActiveProfile] = useState(null);

  // Filter profiles based on role, location, and skills
  const filteredProfiles = profiles.filter((profile) => {
    return (
      (filterRole ? profile.role.toLowerCase().includes(filterRole.toLowerCase()) : true) &&
      (filterLocation ? profile.location.toLowerCase().includes(filterLocation.toLowerCase()) : true) &&
      (filterSkill ? profile.skills.some((skill) => skill.toLowerCase().includes(filterSkill.toLowerCase())) : true)
    );
  });

  return (
    <div className="min-h-screen p-10 bg-black">
      <Navbar
        filterRole={filterRole}
        setFilterRole={setFilterRole}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
        filterSkill={filterSkill}
        setFilterSkill={setFilterSkill}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            activeProfile={activeProfile}
            setActiveProfile={setActiveProfile}
          />
        ))}
      </div>
    </div>
  );
}
