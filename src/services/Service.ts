import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-andreia.herokuapp.com'
})

export const cadastroUsuario = async(url: any, dados:any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const logar = async(url: any, dados:any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}