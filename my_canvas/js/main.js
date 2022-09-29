const ctx = canvas.getContext('2d')

export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId = 0
    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'
    this.n = 50
    this.over = true

    canvas.addEventListener('touchstart', this.touchHandler.bind(this))
    this.bindLoop = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  loop() {
    if (this.n > window.innerHeight) {
      this.n = 0
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillText(
      '开始',
      200,
      300
    )
    ctx.fillText(
      '结束',
      300,
      300
    )
    ctx.fillText(
      '游戏结束',
      50,
      this.n
    )
    if (this.over) {
      return
    }
    this.n += 5
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  touchHandler(e) {
    const x = e.touches[0].clientX
    const y = e.touches[0].clientY
    if (y > 290 && y < 300) {
      if (x > 200 && x < 230) {
        this.over = false
        // 清除上一局的动画 不然多次点击开始速度会一直加快
        window.cancelAnimationFrame(this.aniId)
        this.aniId = window.requestAnimationFrame(
          this.bindLoop,
          canvas
        )

      }
      if (x > 300 && x < 330) {
        this.over = true
      }
    }
  }
}
