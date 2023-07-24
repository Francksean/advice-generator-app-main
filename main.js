const button= document.querySelector('button')

button.addEventListener('click', async()=>{
  // console.log('ok')
  let paragraph= document.querySelectorAll('p')

  let requete = `https://api.adviceslip.com/advice`

  let response = await fetch(requete)
  console.log(response)

  let advice = await response.json()
  console.log(advice)

  paragraph[0].textContent = "ADVICE #" + advice.slip.id 
  console.log(paragraph[0])
  paragraph[1].textContent="\" " +advice.slip.advice + " \""
  console.log(paragraph[1])
})