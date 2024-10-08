window.AudioContext = window.webkitAudioContext || window.AudioContext;
let audioCtx = new AudioContext();

document.querySelector( '#btn1' ).addEventListener( 'click', () => {
    let oscNode = audioCtx.createOscillator();
    oscNode.connect( audioCtx.destination );

    oscNode.start();
    oscNode.stop( audioCtx.currentTime + 1 );
});