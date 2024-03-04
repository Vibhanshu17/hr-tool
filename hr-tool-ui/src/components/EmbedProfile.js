import React from 'react'
import {
    LinkedinCompanyProfile,
    LinkedinFollowCompany,
    LinkedinLogin,
    LinkedinAddProfile,
    LinkedinProfile,
    LinkedinShare,
  
    TwitterButton,
    TwitterTweet
  } from 'react-social-plugins';

function EmbedProfile() {
  return (
    <div>
      <LinkedinProfile
  lang="en_US"
  profileUrl="https://www.linkedin.com/in/vibhanshu-gupta/"
  format="inline" // Or "hover"
  text="Praveenkumar K" // text to show in "hover" format
/>
    </div>
  )
}

export default EmbedProfile
