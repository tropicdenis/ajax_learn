/*function getImagesOld(pageNumber) {

    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise
}*/

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5341143`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 5341143,
        title: title
    });
    return promise.then((response) => {
        return response.data
    });
}