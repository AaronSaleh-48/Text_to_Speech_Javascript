var available_Voices = window.speechSynthesis.getVoices();

var rangeRate = document.getElementById('rate');
var rangePitch = document.getElementById('pitch');
var rangeVolume = document.getElementById('volume');
var selectVoices = document.getElementById('voices');
var textArea = document.getElementById('text');

function init() {
    speechSynthesis.addEventListener("voiceschanged", () => {
        available_Voices = speechSynthesis.getVoices()
        console.log(available_Voices);

        for (var i = 0; i != available_Voices.length; i++) {
            var opt = document.createElement('option');
            opt.value = available_Voices[i].lang;
            opt.innerHTML = available_Voices[i].lang;
            selectVoices.appendChild(opt);
        }
    });
}

function speak() {
    var speech = new SpeechSynthesisUtterance();
    speech.text = textArea.value;
    speech.lang = selectVoices.value;
    speech.rate = rangeRate.value;
    speech.pitch = rangePitch.value;
    speech.volume = rangeVolume.value;

    window.speechSynthesis.speak(speech);
}