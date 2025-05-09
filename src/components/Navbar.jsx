 
const Navbar = ({ filterRole, setFilterRole, filterLocation, setFilterLocation, filterSkill, setFilterSkill }) => {
  return (
    <nav className="flex justify-between items-center mb-10">
      <h1 className="text-4xl font-bold text-white">Team Profiles</h1>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Filter by Role"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Filter by Skill"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="p-2 rounded-md text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
