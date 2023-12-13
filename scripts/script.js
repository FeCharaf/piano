 const pianoKeys = document.querySelectorAll(".piano-keys .key"); //selecionando todas keys juntas

 const playTune = (key) => {
  let audio = new Audio(`tunes/${key}.wav`); // audio "a" por padrão
  audio.play();
 }

 pianoKeys.forEach(key => {
   //chamando a função playTune passando o valor da datakey como argumento
   key.addEventListener("click", () => playTune(key.dataset.key));
 });