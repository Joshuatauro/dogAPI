const DOG_BREED = 'https://dog.ceo/api/breeds/list/all'
const select = document.querySelector('select')
const rotate = document.querySelector('i')

fetch(DOG_BREED)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    const DOG_LIST = Object.keys(data.message)
    
    for(let i = 0; i < DOG_LIST.length ; i++){
      const option = document.createElement('option')

      option.innerText = DOG_LIST[i]

      select.appendChild(option)
    }
  })

select.addEventListener('change', changeDog )

function changeDog(){
  document.querySelector('img').src = ''
  rotate.classList.remove('disable')
  const dogName = select.value
  displayDog(dogName)
}

function displayDog(dogName){
  const DOG_IMAGE = `https://dog.ceo/api/breed/${dogName}/images/random`
  fetch(DOG_IMAGE)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      document.querySelector('img').src = data.message
      rotate.classList.add('disable')
    })
}

displayDog('husky')