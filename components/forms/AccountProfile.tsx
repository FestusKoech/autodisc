'use client'

interface Props{
  user:{
    id: string;
    objectId: string;
    name: string;
    bio: string;
    image: string;
  };

  btnTitle: string;

}

const AccountProfile=({user, btnTitle}: Props) =>{
  return(
    <div>
        
    </div>
  )
}

export default AccountProfile;