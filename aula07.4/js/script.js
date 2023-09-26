// const link1 = document.querySelector('li');

// console.log(link1.innerHTML);

// link1.innerHTML = '<button> Clique </button>';


let links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', event =>{
        event.preventDefault();
        document.body.innerHTML+='<p> Clicou </p>';
    })
});

