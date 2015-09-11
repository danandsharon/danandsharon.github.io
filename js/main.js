$(function () {
  var today = Date.now()
  var weddingDate = Date.UTC(2015, 08, 19)
  var msUntil = weddingDate - today
  var daysUntil = Math.ceil(msUntil / (24 * 60 * 60 * 1000))

  $('.days')[0].innerText = daysUntil
})
