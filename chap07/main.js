let an;
let ctx;
document.querySelector( '#initButton' )
.addEventListener('click', () => {
    an = new Analyser();
    ctx = document.querySelector('#myCanvas').getContext('2d');
});

document.querySelector( '#showButton' )
.addEventListener('click', () => {
    //console.log( an.getByteTimeDomainData() );
    //console.log( an.getByteFrequencyData() );
    //let tdData = an.getByteTimeDomainData();
    let fftData = an.getByteFrequencyData();

    ctx.beginPath();
    ctx.moveTo( 0, 128 );
    for( let x=0; x<128; x++ ) {
        ctx.lineTo( x, 256 - fftData[x] );
    }
    ctx.stroke();
});

