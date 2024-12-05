import axios from 'axios'

export function get(url, ...paramsAndOptions) {
    return new Promise((resolve, reject) =>{
        axios.get(url, ...paramsAndOptions)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

export function post(url, ...paramsAndOptions) {
    return new Promise((resolve, reject) =>{
        axios.post(url, ...paramsAndOptions)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

export function put(url, ...paramsAndOptions) {
    return new Promise((resolve, reject) =>{
        axios.put(url, ...paramsAndOptions)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

export function remove(url, ...paramsAndOptions) {
    return new Promise((resolve, reject) =>{
        axios.delete(url, ...paramsAndOptions)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

export function patch(url, ...paramsAndOptions) {
    return new Promise((resolve, reject) =>{
        axios.patch(url, ...paramsAndOptions)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}