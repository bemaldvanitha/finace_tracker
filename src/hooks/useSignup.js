import { useState } from 'react';
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, name) => {
        setError(null);
        setIsPending(true);

        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email,password);

            if(!res){
                throw new Error('could not signup');
            }

            await res.user.updateProfile({
                displayName: name
            });

            setIsPending(false);
            setError(null);

        } catch (err){
            setError(err.message);
            setIsPending(false);
        }
    }

    return { error, isPending, signup };
}