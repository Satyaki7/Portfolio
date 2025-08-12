import React from "react"
import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard";
function Myid() {
  return (
    <div>
      <ProfileCard
  name="Satyaki Das"
  title="Software Engineer"
  handle="Satyaki7"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./src/assets/myLogo.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  mobileTiltSensitivity={5}
  onContactClick={() => console.log('Contact clicked')}
/>
    </div>
  );
}

export default Myid;
