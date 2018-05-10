$('.need-slideInDown').addClass("slideInDown")

function addParams (next_page, key, param) {
  if (location.href.indexOf('?') >= 0) {
    location.href = location.origin + '/' + next_page + location.search + '&' + key + '=' + param
  } else {
    location.href = location.origin + '/' + next_page + '?' + key + '=' + param
  }
}

function goResult () {
  location.href = location.origin + '/' + 'result.html' + location.search
}

function goBack() {
  history.go(-1)
}
