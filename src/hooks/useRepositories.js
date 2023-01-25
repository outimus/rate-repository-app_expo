import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

//usequery ei hae tietoja miksi?
const useRepositories = () => {
    const allRepositories = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
        }
    )
    
    const repositories = allRepositories.loading ? undefined : allRepositories.data.repositories
    const loading = allRepositories.loading;
    
    return { repositories, loading };
    };

export default useRepositories;