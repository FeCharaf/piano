 const pianoKeys = document.querySelectorAll('.piano-keys .key'); //selecionando todas keys juntas

 pianoKeys.forEach(key => {
   //chamando 
    console.log(key.dataset.key);
 })