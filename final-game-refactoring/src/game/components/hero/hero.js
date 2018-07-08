

class Hero {

    constructor(canvas, callback) {


        this.canvas = canvas;
        this.callback=callback;

        this.context = this.canvas.getContext("2d");

        this.pos = [0, 0];
        this.size = [40, 50];
        this.speed = 1;
        this.frames = [0, 1, 2, 3, 4, 5, 6, 7];
        this._index = 0;
        this.dir = 'horizontal';
        this.once = false;
        this.heroSprite = new Image();
        this.heroSprite.src = Hero.sprite;

        this.render = this.render.bind(this);
        this.update = this.update.bind(this);


        let run = setInterval(() => {this.update(1);
            this.render(this.context);
            if (this._index>40)
            {
                clearInterval(run);
                callback();
            }},100 )



    }

    initeHero () {

        this._index = 0;
        let run = setInterval(() => {this.update(1);
            this.render(this.context);
            if (this._index>40)
            {
                clearInterval(run);
                this.callback();
            }},100 )
    }


    update(dt) {
        this._index += this.speed * dt;
    }


    render(ctx) {
        let frame;
        this.canvas.width = this.canvas.width;



        if (this.speed > 0) {
            let max = this.frames.length;
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }


        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }


        ctx.drawImage(this.heroSprite,
            x, y,
            this.size[0], this.size[1],
            10+this._index*10, 200,
            this.size[0]*3, this.size[1]*3);
    }




}


export default Hero;





















