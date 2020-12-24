class Form {
    constructor() {
        this.input = createInput('Write your name')
        this.button = createButton('Submit');
        this.greating = createElement('h3');

    }
    display(){
        var title = createElement('h2');
        title.html('Car Racing');
        title.position(130,0);
         
        this.input.position(130,160)
        this.button.position(250,200);
    

        this.button.mousePressed( () =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1 ;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greating.html('hello '+ player.name);
            this.greating.position(130,150);
        })
    }
    hide(){
        this.input.hide();
        this.greating.hide();
        this.button.hide();
    }
}