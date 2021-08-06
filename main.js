const deg = 6
const hr = document.getElementById('hr')
const mn = document.getElementById('mn')
const sc = document.getElementById('sc')

setInterval(() => {
  let now = new Date()
  let hh = now.getHours() * 30
  let mm = now.getMinutes() * deg
  let ss = (now.getSeconds() + 1) * deg

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  mn.style.transform = `rotateZ(${360 + mm}deg)`
  sc.style.transform = `rotateZ(${360 + ss}deg)`
  sc.style.setProperty("--r", ss / 360)
}, 1000);
