// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const templates = require('../seed/templates.json')


router.get('/template', (req, res) => {
	
	const category = req.query.category
	if (category == null){
		res.json({
			confirmation: 'fail',
			message: 'category parameter required'
		})
		return
	}

	const selectedTemplates = templates[category]
	if (selectedTemplates == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Category: ' + category
		})
		return
	}

	res.json({
		confirmation: 'success',
		data: selectedTemplates
	})
})


router.get('/:resource', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})


module.exports = router