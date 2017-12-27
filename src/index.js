
import Clipboard from 'clipboard'
import $ from 'jquery'

const clipboard = new Clipboard('.test', {
	text: 'hahahaha'
})

clipboard.on('success', function() {
	setTimeout(function() {
		clipboard.destroy()
	}, 1000)
})

clipboard.on('error', function(e) {
	console.log(e)
})

$('.test').trigger('click')

// clipboard.destroy()