console.log('client')
;(async () => {
  if (!navigator.onLine) {
    console.log('start offline')
  }
  const reg = await navigator.serviceWorker.register('sw.js')
  reg.addEventListener('updatefound', e => {
    console.info('updatefound', e)
  })

  await navigator.serviceWorker.ready
  await reg.update()
  console.log('sw:ready')
})()
