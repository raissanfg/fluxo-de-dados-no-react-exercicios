import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";


const ProfileMenu = ( {nome, bio, imageURL, menu, setMenu}) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={imageURL} alt="Profile Image" />
      <ProfileName>{nome}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;


//"https://picsum.photos/200"