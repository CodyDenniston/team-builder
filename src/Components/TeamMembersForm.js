import React, { useState } from "react";

const TeamMembersForm = props => {

    const [member, setMember] = useState([ 'Tom', 'Jerry', 'Cody', 'Bob'])

    return(

        <form>
            <label htmlfor="title">Team Member</label>
            <input id="title" type="text"/>
        </form>
    )
}


export default TeamMembersForm;