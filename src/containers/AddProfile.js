import React, { useState } from "react";
import Card from "../components/Card";


export default function Profiles(){
    const [profiles, setProfiles] = useState([]);
    const [profile, setProfile] = useState({ name: "", job: "", avatar: "" });

const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleSubmit = () => {
    setProfiles([...profiles, profile]);
    setProfile({ name: "", job: "", avatar: "" });
  };
  const handleDelete = () => {};

  return (
    <div 
         className="form-row"
          style={{ border: "3px solid black", padding: "20px" }}
      >
      { (
        <div
          className="form-row"
          style={{ border: "3px solid black", padding: "20px" }}
        >
          <form className="form-group">
            <h2>ajouter utilisateur</h2>
            <label className="form-control-label">Name</label>
            <input
              onChange={handleChange}
              value={profile.name}
              name="name"
              className="form-control"
            />
             <label className="form-control-label">job</label>
            <input
              onChange={handleChange}
              value={profile.job}
              name="job"
              className="form-control"
              />
              <label className="form-control-label">surname</label>
              <input
              onChange={handleChange}
              value={profile.surname}
              name="surname"
              className="form-control"
              />
            <label className="form-control-label">age</label>
            <input
              onChange={handleChange}
              value={profile.age}
              name="age"
              className="form-control"
            />
            <label className="form-control-label">avatar</label>
            <input
              onChange={handleChange}
              value={profile.avatar}
              name="avatar"
              className="form-control"
            />
            <br />
            <button type="button" className="btn-danger" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      )}
      <div className="profiles-container">
        {profiles.map((e, i) => (
          <Card
            key={i}
            profile={e}
            onDelete={() =>
              setProfiles(profiles.filter((profile) => e !== profile))
            }
          />
        ))}
      </div>
    </div>
  );
}

 