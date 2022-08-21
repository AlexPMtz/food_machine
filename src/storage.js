function setItem(key, value) {
    try {
        value = JSON.stringify(value)
        localStorage.setItem(key, value)
    } catch(e) {
        localStorage.setItem(key, value)
    }
}

function getItem(key) {

    let value = localStorage.getItem(key)

    try {
        return JSON.parse(value)
    } catch(e) {
        return value
    }
}

function deleteItem(key) {
    localStorage.removeItem(key)
}

export default {
    setItem,
    getItem,
    deleteItem
}