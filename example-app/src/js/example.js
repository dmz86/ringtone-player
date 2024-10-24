import { Ringotone } from 'ringtone-controller';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Ringotone.echo({ value: inputValue })
}
