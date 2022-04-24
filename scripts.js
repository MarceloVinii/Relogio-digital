const hoursHand = document.getElementById('hours')
const minutesHand = document.getElementById('minutes')
const secondsHand = document.getElementById('seconds')

const clock = setInterval(function time() {
  let dateToday = new Date()
  let handleHours = dateToday.getHours()
  let handleMinutes = dateToday.getMinutes()
  let handleSeconds = dateToday.getSeconds()

  if (handleHours < 10) handleHours = '0' + handleHours
  if (handleMinutes < 10) handleMinutes = '0' + handleMinutes
  if (handleSeconds < 10) handleSeconds = '0' + handleSeconds

  hoursHand.textContent = handleHours
  minutesHand.textContent = handleMinutes
  secondsHand.textContent = handleSeconds
})
