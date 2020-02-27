import React, { useState } from "react";

const TeamMembersForm = props => {
  console.log("props", props);
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    console.log(member);
   
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role:"" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="member">Role</label>
      <textarea
        id="role"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamMembersForm;
