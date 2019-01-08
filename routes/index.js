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
		templates: [
			{name: 'templates 1'},
			{name: 'templates 2'},
			{name: 'templates 3'}
		],
		landing: [
			{name: 'landing 1', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
			{name: 'landing 2', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
			{name: 'landing 3', image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg'},
		],		
		restaurant: [
			{name: 'restaurant 1', image: 'https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500'},
			{name: 'restaurant 2', image: 'https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500'},
			{name: 'restaurant 3', image: 'https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500'}
		],
		resume: [
			{name: 'resume 1', image: 'https://as1.ftcdn.net/jpg/01/45/14/56/500_F_145145670_GhRcHARwCZ67Rar8GsnIuBU4l77GZOIg.jpg'},
			{name: 'resume 2', image: 'https://as1.ftcdn.net/jpg/01/45/14/56/500_F_145145670_GhRcHARwCZ67Rar8GsnIuBU4l77GZOIg.jpg'},
			{name: 'resume 3', image: 'https://as1.ftcdn.net/jpg/01/45/14/56/500_F_145145670_GhRcHARwCZ67Rar8GsnIuBU4l77GZOIg.jpg'}
		],
		lessons: [
			{name: 'lessons 1'},
			{name: 'lessons 2'},
			{name: 'lessons 3'}
		],
		fitness: [
			{name: 'fitness 1', image: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			{name: 'fitness 2', image: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			{name: 'fitness 3', image: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			
		],
		realtor: [
			{name: 'realtor 1'},
			{name: 'realtor 2'},
			{name: 'realtor 3'}
		],

	}

	// templates[selected] = sampleTemplates
	data['preloaded'] = JSON.stringify({
		selected: selected,
		landing: landing,
		restaurant: restaurant,
		resume: resume
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
