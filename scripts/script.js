 const pianoKeys = document.querySelectorAll(".piano-keys .key"); //selecionando todas keys juntas
 const volumeSlider = document.querySelector(".volume-slider input");
 const keyCheckbox = document.querySelector(".keys-checkbox input");
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

 const handleVolume = (e) => { // essa função muda o valor do volumeNow para o valor do input range
    volumeNow = e.target.value;
 }

 const pressedKey = (e) => {
  playTune(e.key);
 }

 const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
 }

 volumeSlider.addEventListener("input", handleVolume);
 keyCheckbox.addEventListener("click", showHideKeys);
 document.addEventListener("keydown", pressedKey);