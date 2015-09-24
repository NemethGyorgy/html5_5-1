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
    
    // Összes némítása.
    this.muteAll = function() {
      
        // Összes audio elem kiválasztása.
        var allAudio = document.querySelectorAll( "audio" );
        
        // Egyenként végigjárjuk az összes elemet és elnémítjuk őket.
        Array.prototype.forEach.call( allAudio, function( item ) {
            item.muted = true;    
        } );
        
    };
    
    // Audió léptetése.
    this.setTime = function( cTime ) {
        
        cTime = parseInt( cTime, 10 );
        if ( isNaN(cTime) ) {
            console.error( "A megadott értéknek számnak kell lennie!" );
            return;
        }
        
        // Megvizsgáljuk, hogy az audió fájl hosszánál ne legyen nagyobb a cTime.
        // Ha nagyobb, akkor a fájl végére lépünk.
        cTime = cTime < this.audio.duration ? cTime : this.audio.duration;
        
        // A pillanatnyi lejátszási hely beállítása.
        this.audio.currentTime = cTime;
        
    };
    
};

var audio1 = new audioHandler( ".audio1" );
var audio2 = new audioHandler( ".audio2" );










