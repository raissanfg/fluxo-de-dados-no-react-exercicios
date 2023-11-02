import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";


function ProfileScreen( {nome, setNome, bio, setBio, imageURL, setImageURL, menu, setMenu}) {
  

  return (
    <ScreenContainer>
      <ProfileMenu nome={nome} bio={bio} imageURL={imageURL} menu={menu}/>

      <ProfileForm 
      nome={nome} setNome={setNome} 
      bio={bio} setBio={setBio}
      imageURL={imageURL} setImageURL={setImageURL}
      menu={menu} setMenu={setMenu}
      
      />

    </ScreenContainer>
  );
}

export default ProfileScreen;