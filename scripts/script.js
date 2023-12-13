 const pianoKeys = document.querySelectorAll(".piano-keys .key"); //selecionando todas keys juntas
 const volumeSlider = document.querySelector(".volume-slider input");
 let volumeNow = 0.5

 const playTune = (key) => {
  audio = new Audio(`tunes/${key}.wav`); // passando a key baseado na tecla pressionada
  audio.volume = volumeNow;
  audio.play();
 }

 pianoKeys.forEach(key => {
   //chamando a função playTune passando o valor da datakey como argumento
   key.addEventListener("click", () => playTune(key.dataset.key));
 });

 const handleVolume = (e) => {
    volumeNow = e.target.value;
 }

 const pressedKey = (e) => {
  playTune(e.key);
 }

 volumeSlider.addEventListener("input", handleVolume);
 document.addEventListener("keydown", pressedKey);