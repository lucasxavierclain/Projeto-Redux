const ESTADO_INICIAL = { 
    roupa: {},
    feed: [
        {
            id: 1,
            color: "Azul",
            tamanho: "M",
            preco: "14,99"
        },
        {
            id: 2,
            color: "Cinza",
            tamanho: "P",
            preco: "17,99"
        },
        {
            id: 3,
            color: "Vermelha",
            tamanho: "G",
            preco: "22,99"
        },
    ],
};

export default function roupas(state= ESTADO_INICIAL, action){
if(action.type === "ADICIONAR_CARRINHO"){
    console.log(action)
    return {
        ...state,
        roupa: action.roupas,
    };
}
    return state;
}
