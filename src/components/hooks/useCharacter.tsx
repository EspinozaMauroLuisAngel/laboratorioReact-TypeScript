import { useEffect, useState, useRef } from 'react'
import ReqRestApi from '../api/ReqRestApi';
import { ICharacter, IReqRestApiCharacters } from '../interfaces/IReqRestApiCharacters';

const DEFAULT_PAGE = 1;
export const useCharacter = () => {
 
    const [characters, setCharacters] = useState<ICharacter[]>([]);
  
    const currentPage = useRef(DEFAULT_PAGE);

    const getData = async () => {
        const response = await ReqRestApi.get<IReqRestApiCharacters>(
            '/character', { params: { page: currentPage.current } }).then(
                ({ data }) => data
  
            ).catch(console.log);
      
            console.log(response);
        response ? setCharacters(response.results) : setCharacters([]);
    }
 
    const next = () => {
        currentPage.current++;
        getData();
    }
    const before = () => {
        currentPage.current--;
        getData();
    }

    useEffect(() => { getData(); }, []);

    return {
        characters, next, before
    }
}
export default useCharacter