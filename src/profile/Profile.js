import React from 'react'

function Profile({fullName,children,bio,profession }) {
  return (
    <div>
        <h1 style={{backgroundColor:'#C3447A',border:'1px solid DarkMagenta', borderRadius:'50px'}}>{fullName}</h1>
        {children}
        <h2 style={{border:'4px solid DarkMagenta'}}>{bio}</h2>
        <h2 style={{border:'4px solid DarkMagenta'}}>{profession}</h2>

    </div>
  )
}

export default Profile