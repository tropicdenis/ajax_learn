/*function getImagesOld(pageNumber) {

    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise
}*/

import axios from "axios";

export function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

export function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=329158&count=30`);
    return promise.then((response) => {
        return response.data;
    });
}

export function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 329158,
        title: title
    });
    return promise.then((response) => {
        return response.data
    });
}

export function updateTask(title, id, done) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks/update`, {
        widgetId: 329158,
        title: title,
        taskId: id,
        done: done
    });
    return promise.then((response) => {
        return response.data
    });
}

export function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=329158&taskId=${id}`);
    return promise.then((response) => {
        return response.data
    });
}