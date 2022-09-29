// 子弹发射
const ctx = canvas.getContext('2d')

export default class Shooting {
  constructor() {
    this.touched = false
    this.xx = 200
    this.yy = 300
    this.curren_x = 200
    this.curren_y = 300
    this.aa = true
    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'
    this.bindLoop = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()
      const x = e.touches[0].clientX
      const y = e.touches[0].clientY
      this.x = x
      this.y = y
      this.curren_x = this.xx
      this.curren_y = this.yy
      this.touched = true
    }))

    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()
      this.aa = false
      const x = e.touches[0].clientX
      const y = e.touches[0].clientY
      const target_x = x - this.x
      const target_y = y - this.y
      this.xx = this.curren_x + target_x
      this.yy = this.curren_y + target_y
      if (this.xx <= 0) {
        this.xx = 0
      }
      if (this.xx >= window.innerWidth - 42) {
        this.xx = window.innerWidth - 42
      }
      if (this.yy <= 20) {
        this.yy = 20
      }
      if (this.yy >= window.innerHeight - 20) {
        this.yy = window.innerHeight - 20
      }
    }))

    canvas.addEventListener('touchend', ((e) => {
      e.preventDefault()
      this.aa = true
      this.touched = false
    }))

  }
  loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillText(
      '目标',
      this.xx,
      this.yy
    )
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
}