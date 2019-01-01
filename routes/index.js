// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const sampleTemplates = require('../seed/templates.json')

const templates = {}
const categories = ['landing', 'resume', 'restaurant', 'fitness', 'realtor', 'lessons']

router.get('/', (req, res) => {
	const selected = categories[0]
	const data = {
		categories: categories
	}

	templates[selected] = sampleTemplates
	data['preloaded'] = JSON.stringify({
		selected: selected,
		templates: templates
	})

	res.render('index', data)

	// controllers.site.get({'template.status':'live', 'template.category':selected})
	// .then(sites => {
	// 	templates[selected] = sites
	// 	data['preloaded'] = JSON.stringify({
	// 		selected: selected,
	// 		templates: templates
	// 	})
	//
	// 	res.render('index', data)
	// })
	// .catch(err => {
	// 	res.json({
	// 		confirmation: 'fail',
	// 		message: err.message
	// 	})
	// })

})


module.exports = router
