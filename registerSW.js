window.addEventListener('beforeinstallprompt', function (e) {
	e.userChoice.then(function (choiceResult) {
		if (choiceResult.outcome === 'dismissed') {
			console.log('用户取消安装应用')
		} else {
			console.log('用户安装了应用')
		}
	})
})

const version = '2.6.0'
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register(`/sw.js?v=${version}`)
		.catch(function (err) {
			console.log('ServiceWorker registration failed: ', err)
		})
}
