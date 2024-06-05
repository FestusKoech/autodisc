'use client'

import { userValidation } from "@/lib/validations/user";
import { Form } from "../ui/form";
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form';
import { profile } from "console";

interface Props{
    user:{
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
          
    };

    btnTitle: string;
}


const AccountProfile =({user, btnTitle} : Props)=>{

    const form  = useForm({
        resolver: zodResolver(userValidation),
        defaultValues: {
            profile_photo:'',
            name: '',
            username: '',
            bio: '',
        }
    })

    return(
        <Form>
            
        </Form>
    )
}

export default AccountProfile;