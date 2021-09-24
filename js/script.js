let box = document.querySelectorAll('.box');

for (let index = 0; index < box.length; index += 1) {

  box[index].addEventListener('click', () => {

    let taskPrompt = prompt('Digite a tarefa');
    
    let task = document.createElement('span');
    task.classList.add('badge', 'rounded-pill', 'bg-primary');
    task.innerText = taskPrompt;
    box[index].append(task);

  });

}