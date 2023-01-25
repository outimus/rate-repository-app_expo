import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';

//miten käytän authStoragea.
const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [ mutate, result ] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const data = await mutate({variables: {username, password }})
        
        return data

    };
    return [signIn, result];
};

export default useSignIn;