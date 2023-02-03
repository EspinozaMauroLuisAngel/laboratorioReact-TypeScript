import React from 'react';


const FuncionSuma =() => {

    const suma =(a: any, b: any): any =>{
        return a+b;
    }
    return(
        <div>
            <h2> Mi funcion de la suma 2+2: <small>{ suma (2,2)}</small></h2>
        </div>
    )

}

export default FuncionSuma