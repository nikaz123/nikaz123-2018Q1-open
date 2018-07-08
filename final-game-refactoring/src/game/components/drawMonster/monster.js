class DrawMonster {

    constructor(canvas) {


        this.health = 100;

        this.redraw = this.redraw.bind(this);
        this.updateBlink = this.updateBlink.bind(this);
        this.updateBreath = this.updateBreath.bind(this);
        this.blink = this.blink.bind(this);
        this.drawEllipse = this.drawEllipse.bind(this);

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.images = {};
        this.totalResources = 6;
        this.numResourcesLoaded = 0;
        this.fps = 30;
        this.charX = 10;
        this.charY = 100;
        this.x = this.charX;
        this.y = this.charY;
        this.breathInc = 0.1;
        this.breathDir = 1;
        this.breathAmt = 0;
        this.breathMax = 2;
        this.breathInterval = setInterval(this.updateBreath, 1000 / this.fps);
        this.maxEyeHeight = 14;
        this.curEyeHeight = this.maxEyeHeight;
        this.eyeOpenTime = 0;
        this.timeBtwBlinks = 4000;
        this.blinkUpdateTime = 200;
        this.blinkTimer = setInterval(this.updateBlink, this.blinkUpdateTime);
        this.initMonster();
    }


    initMonster() {
        this.createName();
        this.face = this.randomInteger(0, 3);
        this.torso = this.randomInteger(0, 3);
        this.leftArm = this.randomInteger(0, 3);
        this.rightArm = this.randomInteger(0, 3);
        this.legs = this.randomInteger(0, 3);
        this.weapon = this.randomInteger(0, 3);
        this.loadImage("larm", DrawMonster.larms[this.leftArm]);
        this.loadImage("legs", DrawMonster.legs[this.legs]);
        this.loadImage("torso", DrawMonster.torsos[this.torso]);
        this.loadImage("rarm", DrawMonster.rarms [this.rightArm]);
        this.loadImage("face", DrawMonster.faces[this.face]);
        this.loadImage("weapon", DrawMonster.weapons[this.weapon]);
    }


    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    createName() {
        let firstNameMonster = ['Большой', 'Круглый', 'Огромный', 'Злобный', 'Абыкакой'],
            secondNameMonster = ['Липкий', 'Мятный', 'Вкусный', 'Ледяной', 'Ментоловый'],
            thirdNameMonster = ['Дворецкий', 'Карачун', 'Бурзун', 'Ликвач', 'Мордач'];
        this.monsterName = firstNameMonster[this.randomInteger(0, 4)] + ' ' + secondNameMonster[this.randomInteger(0, 4)] + ' ' + thirdNameMonster[this.randomInteger(0, 4)];
        let elementMonsterName = document.getElementById('hMonsterName');
        elementMonsterName.innerText = this.monsterName;
    }


    loadImage(name, img) {
        this.images[name] = new Image();
        this.images[name].onload = () => {
            this.resourceLoaded();
        };
        this.images[name].src = img;
    }


    resourceLoaded() {
        let obj = this;
        this.numResourcesLoaded += 1;
        if (this.numResourcesLoaded === this.totalResources) {
            setInterval(this.redraw, 1000 / this.fps);
        }
    }


    redraw() {

        canvasForMonster.width = canvasForMonster.width;

        this.context.drawImage(this.images["larm"], this.x + 0, this.y - 42 - this.breathAmt);
        this.context.drawImage(this.images["legs"], this.x, this.y - 60);
        this.context.drawImage(this.images["torso"], this.x, this.y - 50);
        this.context.drawImage(this.images["face"], this.x - 10, this.y - 70 - this.breathAmt);
        this.context.drawImage(this.images["weapon"], this.x - 0, this.y - 50 - this.breathAmt);
        this.context.drawImage(this.images["rarm"], this.x + 10, this.y - 42 - this.breathAmt);

        this.drawEllipse(this.x + 110, this.y + 75 - this.breathAmt, 8, this.curEyeHeight);
        this.drawEllipse(this.x + 199, this.y + 75 - this.breathAmt, 8, this.curEyeHeight);


    }


    drawEllipse(centerX, centerY, width, height) {

        this.context.beginPath();

        this.context.moveTo(centerX, centerY - height / 2);

        this.context.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2);

        this.context.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2);

        this.context.fillStyle = "black";
        this.context.fill();
        this.context.closePath();
    }


    updateBreath() {


        if (this.breathDir === 1) {  // breath in
            this.breathAmt -= this.breathInc;
            if (this.breathAmt < -this.breathMax) {
                this.breathDir = -1;
            }
        } else {  // breath out
            this.breathAmt += this.breathInc;
            if (this.breathAmt > this.breathMax) {
                this.breathDir = 1;
            }
        }
    }


    updateBlink() {


        this.eyeOpenTime += this.blinkUpdateTime;

        if (this.eyeOpenTime >= this.timeBtwBlinks) {

            this.blink();
        }
    }

    blink() {


        this.curEyeHeight -= 1;
        if (this.curEyeHeight <= 0) {
            this.eyeOpenTime = 0;
            this.curEyeHeight = this.maxEyeHeight;
        } else {
            setTimeout(this.blink, 10);
        }
    }
}

export default DrawMonster;