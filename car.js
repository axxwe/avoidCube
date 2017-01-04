function Car(player) {

    this.player = player;
    this.color = 234;
    this.x = 0;
    this.y = 0;
    this.width = 98;
    this.height = 54;
    this.gravity = 1;
    this.carImg = loadImage('opponent.png');


    if(this.player == true) {
        this.gravity = 0;
        this.color = 11;
        this.x = 0;
        this.y = canvasHeight - 65;
        this.width = 98;
        this.height = 50;
        this.carImg = loadImage('player.png');
    }

    this.applyForce = function ( force ) {
        if(force != 0) {
            this.y += force;
        }

    }

    this.checkedIfCrashed = function (xPlayer, yPlayer, x, y) {

        if( xPlayer == x ) {
            if( yPlayer < y + this.height) {
               return true;
            }
        }
    }

    this.show = function () {
        if( !player && this.y > canvasHeight) {
                this.y = 0;
            var randomNumber = Math.random() >= 0.5;
           if( randomNumber )
               this.x = 0;
           else
                this.x = 100;

            if(speed > 1){
                score += 4;
            } else {
                score += 1;
            }

            updateScore(score);


        }
        fill(this.color);
        // background(this.carImg);
        rect(this.x, this.y , this.width, this.height);
        // image(this.carImg, this.y, this.x, this.width, this.height)
    }

    this.changePosition = function (position) {
        if( position === 'left' ) {
            this.x = 0;
        } else {
            this.x = 100;
        }
    }


}