//// Try to build out the function methods WITHOUT using the .forEach and others

let myEach = function(collection, callback) {
    // return Object.values(collection).forEach(value => callback(value)), collection
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

let myMap = function(collection, callback) {
    // return Object.values(collection).map(value => callback(value))
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    let mapedValues = []
    for(let i = 0; i < newCollection.length; i++){
        mapedValues.push(callback(newCollection[i]))
    }
    return mapedValues
}


let myReduce = function(collection, callback, acc) {
    // return Object.values(collection).reduce(((total, value) => callback(total, value)))
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    let counter = 0
    while(counter < newCollection.length) {
        acc = callback(acc, newCollection[counter], newCollection)
        counter++
    }
    return acc
}

let myFind = function(collection, predicate) {
    // return Object.values(collection).find(value => predicate(value))
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    let counter = 0
    while (counter < newCollection.length) {
        let num = newCollection[counter]
        if (predicate(num)) {
            return newCollection[counter]
        }
        counter++
    }
    return undefined
}

let myFilter = function(collection, predicate) {
    // return Object.values(collection).filter(value => predicate(value))
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    let counter = 0
    let filteredArr = []
    while (counter < newCollection.length) {
        let num = newCollection[counter]
        if (predicate(num)) {
            filteredArr.push(num)
        } 
        counter++
    }
    return filteredArr

}

let mySize = function(collection) {
    // return Object.values(collection).length
    let newCollection = []
    if (Array.isArray(collection)) {
        newCollection = collection
    } else {
        newCollection = Object.values(collection)
    }
    return newCollection.length

}

let myFirst = function(array, n = false) {
    return (n) ? array.slice(0, n) : array[0];
}

let myLast = function(array, n = false) {
    return (n) ? array.slice(array.length-n,) : array[array.length-1]
}

let myKeys = function(object) {
    return Object.keys(object)
}

let myValues = function(object) {
    return Object.values(object)
}