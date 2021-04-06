const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const GetImagesButton = document.querySelector('#click-me');
const GetTasksButton = document.querySelector('#get-tasks');

GetImagesButton.addEventListener('click', () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived);
});

GetTasksButton.addEventListener('click', () => {
    const promise = getTasks();
    promise.then(onTasksReceived);
});

function onImagesReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}

createTask("learnJS").then((data)=> {
    console.log(data)
})

function onTasksReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        document.querySelector('#tasks-result').appendChild(li);
    });
}
