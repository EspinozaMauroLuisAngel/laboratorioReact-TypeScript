import React from 'react'
import Contador from './Contador'
import ContadorConCustomHook from './ContadorConCustomHook.tsx'
import Personajes from './Personajes'

const MainHooks = () => {
    return (
        <>
            <h1>Welcome to Hook</h1>
            <hr />
            <Contador />
            <ContadorConCustomHook />
            <Personajes />
        </>
    )
}

export default MainHooks