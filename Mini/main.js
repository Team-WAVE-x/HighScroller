let timer, sw, scr

document.addEventListener('wheel', () => {
  scr++
  if (!sw) {
    timer = scr = 0
    setInterval(() => {
      document.getElementsByClassName('tg1')[0].innerHTML = (scr * 12) +  ' rpm'
      document.getElementsByClassName('tag')[0].style.color = 'rgb(255,' + (255 - scr * 5) + ',' + (255 - scr * 5) + ')'
      document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(52,58,' + (64 + scr * 5) + ')'
      scr = scr = 0
      timer += 1

      if (timer % 10 <= 0) {
        if (toastList[timer / 10 - 1]) toastList[timer / 10 - 1].show()
      }
    }, 500)
    sw = true
  }
})
