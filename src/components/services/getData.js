import axios from 'axios'
const urlStorage = {
    'items': 'https://627fc595be1ccb0a4664a105.mockapi.io/items',
    'bagItems': 'https://627fc595be1ccb0a4664a105.mockapi.io/bagItems',
    'favorites': 'https://627fc595be1ccb0a4664a105.mockapi.io/favorites',
}
async function getData(adress){
    const {data} = await axios.get(urlStorage[adress])
    // const result = await fetch(urlStorage[adress])
    return data
}
async function postData(card, adress){
    const {data} = await axios.post(urlStorage[adress], card)
    return(data)
}

async function deleteData(adress, id){
    console.log(`${urlStorage[adress]}${id}`)
    const res = await axios.delete(`${urlStorage[adress]}/${id}`)
}
async function updateData(adress, id){
    await fetch(`${urlStorage[adress]}${id}`, {
        method: 'PUT',
    })
}
export {
    getData,
    postData,
    deleteData,
    updateData,
}