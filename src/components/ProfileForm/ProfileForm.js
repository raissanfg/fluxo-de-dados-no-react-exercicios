import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";


const ProfileForm = ({nome, setNome, bio, setBio, imageURL, setImageURL, menu, setMenu }) => {

const novoNome = (event) => {
  console.log(event.target.value)
  setNome(event.target.value)

}

const novaBio = (event) => {
  console.log(event.target.value)
  setBio(event.target.value)

}

const novoUrl = (event) => {
  console.log(event.target.value)
  setImageURL(event.target.value)

}

const atualizaMenu = (event) => {
 event.preventDefault();
 setMenu(imageURL);

}

  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form onSubmit={atualizaMenu}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={nome}
            onChange={novoNome}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={bio}
            onChange={novaBio}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={imageURL}
            onChange={novoUrl}
          />
        </InputWrapper>

        <Button onClick={atualizaMenu}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
