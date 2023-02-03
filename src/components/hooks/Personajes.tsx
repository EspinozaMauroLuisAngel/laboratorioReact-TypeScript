import Tarjeta from './Tarjeta';
import useCharacter from './useCharacter';

const Personajes = () => {

    const {characters, next, before } = useCharacter();

    console.log(characters);

    return (
        <>
        <div className='row bg-dark'>
            {
                characters.map(character => <div className='col-sm-3'>
                        <Tarjeta key={character.id} {...character} /> </div>
                    )
            }
        </div>
        {}
            <button className='btn btn-outline-primary text-dark text-center' onClick={() => next()}>Siguiente</button>
            <button className='btn btn-outline-danger text-white m-2 text-center' onClick={() => before()}>Anterior</button>
        </>
    );
}

export default Personajes