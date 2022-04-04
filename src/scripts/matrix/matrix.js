export default class Matrix {
  constructor (canvasId) {
    this.cnv = document.querySelector(`#${canvasId}`)
    this.ctx = this.cnv.getContext('2d')

    // Framerate settings
    this.lastTime = 0
    this.fps = 30
    this.nextFrame = 1000/this.fps
    this.timer = 0

    //Effect settings
    this.fontSize = 25
    this.symbols = []
    this.coef = 0.98; // Coeficient for random appear symbols column

    (window.onresize = () => {
      this.initialize()
    })
    this.initialize()
    this.drawAnimation()
  }

  initialize() {
    this.cnv.width  = innerWidth * devicePixelRatio;
    this.cnv.height = innerHeight * devicePixelRatio;
    this.ctx.scale(devicePixelRatio, devicePixelRatio)

    this.columns = this.cnv.width/this.fontSize
    this.symbols = []

    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.cnv.height, this.coef)
    }
  }

  drawAnimation () {
    this.ctx.fillStyle = 'rgba(0,0,0,.05)'
    this.ctx.textAlign = 'center'
    this.ctx.fillRect(0, 0, this.cnv.width, this.cnv.height)
    this.ctx.font = this.fontSize + 'px Yomogi';
    this.symbols.forEach(symbol => symbol.draw(this.ctx))

    requestAnimationFrame(() => this.drawAnimation())
  }
}

class Symbol {
  constructor (x, y, fontSize, canvasHeight, coef) {
    this.characters = 'ろぬふあうえおやゆよわほへたていすかんなにらせむけれりねるめものまみこくきひそはしさつとちむabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.x = x
    this.y = y
    this.fontSize = fontSize
    this.text = ''
    this.canvasHeight = canvasHeight
    this.coef = coef
  }
  draw (context) {
    this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length))
    context.fillStyle = '#0aff0a'
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > this.coef) {
      this.y = 0
    } else {
      this.y += 1;
    }
  }
}
