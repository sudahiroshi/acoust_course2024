window.AudioContext = window.webkitAudioContext || window.AudioContext;
let audioCtx = new AudioContext();
let oscNode;
let gainNode = audioCtx.createGain();
console.log( gainNode.gain );

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    oscNode = audioCtx.createOscillator();

oscNode.connect( gainNode );
gainNode.connect( audioCtx.destination );
    oscNode.start();
});

document.querySelector( '#btn2' ).addEventListener( 'click', () => {
    oscNode.stop();
});

document.querySelector( '#gain1' ).addEventListener( 'input', ( event ) => {
    console.log(event.target.value);
    //gainNode.gain.setTargetAtTime( event.target.value / 100.0, audioCtx.currentTime, 0 );
    gainNode.gain.setValueAtTime( event.target.value / 100.0, audioCtx.currentTime );
});
