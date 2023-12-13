 const pianoKeys = document.querySelectorAll('.piano-keys .key'); //selecionando todas keys juntas

 pianoKeys.forEach(key => {
   //chamando 
   key.addEventListener("click", () => playTune(key.dataset.key))
    console.log(key.dataset.key);
 })