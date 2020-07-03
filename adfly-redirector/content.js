function getQueryParam(url, param) {
  const query = url.split('?')[1]
  const pairs = query.replace(/^\?/, '').split('&')

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
    if (pair[0] === param)
      return decodeURIComponent(pair[1] || '')
  }
}

const dest = getQueryParam(window.location.href, 'dest')
window.location = dest
