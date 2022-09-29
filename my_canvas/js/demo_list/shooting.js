// canvas 子弹发射原理
const ctx = canvas.getContext('2d')

export default class Shooting {
  constructor() {
    this.bullet_list = [] // 需要渲染的子弹列表
    this.num = 0 // 记录渲染的帧数
    this.idx = 0
    ctx.fillStyle = '#ffffff'
    ctx.font = '20px Arial'
    this.bindLoop = this.loop.bind(this)
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.render()
    this.aniId = window.requestAnimationFrame(
      this.bindLoop,
      canvas
    )
  }
  render() {
    this.num++
    // 每50帧向子弹列表中添加一个子弹
    if (this.num === 50) {
      this.num = 0
      this.bullet_list.push({
        text: this.idx++,
        x: window.innerWidth / 2,
        y: window.innerHeight
      })
    }
    // 过滤已经超出屏幕显示返回的子弹
    this.bullet_list = this.bullet_list.filter((item) => {
      return item.y > -5
    })
    // 渲染子弹
    this.bullet_list.forEach((item) => {
      ctx.fillText(
        item.text,
        item.x,
        item.y -= 6 // 下一帧向上移动6
      )
    })
  }
}