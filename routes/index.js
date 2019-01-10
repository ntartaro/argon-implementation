// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const sampleTemplates = require('../seed/templates.json')

const landing = {}
const restaurant = {}
const resume = {}
const categories = ['landing', 'resume', 'restaurant', 'fitness', 'realtor', 'lessons']

router.get('/', (req, res) => {
	const selected = categories[0]
	const data = {
		categories: categories,
		templates: {
			landing:[
				{name: 'landing 1', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
				{name: 'landing 2', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
				{name: 'landing 3', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
			]
		}
	}

	// templates[selected] = sampleTemplates
	data['preloaded'] = JSON.stringify({
		selected: selected,
		templates: data.templates,
		categories: categories		
	})

	res.render('index', data)
})

router.get('/landing', (req, res) => {
	res.render('landing', null)
})


router.get('/profile', (req, res)=> {
	res.render('profile', null)
})

router.get('/tables', (req, res)=> {
	res.render('tables', null)
})

module.exports = router
