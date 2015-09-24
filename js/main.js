// Audió vezérlő.
var audioHandler = function( audio_selector ) {
    
    // Audió elem kiválasztása és mentése.
    this.audio = document.querySelector( audio_selector );
    
    // Lejátszás.
    this.play = function() {
        this.audio.play();
    };
    
    // Megállítás.
    this.pause = function() {
        this.audio.pause();
    };
    
    // Némítás.
    this.mute = function() {
        this.audio.muted = true;
    };
    
    // Némítás váltása.
    this.toggleMute = function() {
        this.audio.muted = !this.audio.muted;
    };
    
};

var audio1 = new audioHandler( ".audio1" );
var audio2 = new audioHandler( ".audio2" );