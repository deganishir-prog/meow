const imageElement = document.getElementById('chocho')

function handleClick() {
    alert("meow")
     const newParagraph = document.createElement('p')
    newParagraph.innerText = "Today is the day that I eat tuna!"
    document.body.appendChild(newParagraph)
}


function handleButton() {
   
}

imageElement.addEventListener('click', handleClick )
