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
		categories: categories,
		templates: [
			{name: 'templates 1'},
			{name: 'templates 2'},
			{name: 'templates 3'}
		],
		landing: [
			{name: 'landing 1'},
			{name: 'landing 2'},
			{name: 'landing 3'},
		],		
		restaurant: [
			{name: 'restaurant 1', img: "https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500"},
			{name: 'restaurant 2', img: "https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500"},
			{name: 'restaurant 3', img: "https://images.pexels.com/photos/958373/pexels-photo-958373.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=500&w=500"}
		],
		resume: [
			{name: 'resume 1'},
			{name: 'resume 2'},
			{name: 'resume 3'}
		],
		lessons: [
			{name: 'lessons 1'},
			{name: 'lessons 2'},
			{name: 'lessons 3'}
		],
		fitness: [
			{name: 'fitness 1', img: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			{name: 'fitness 2', img: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			{name: 'fitness 3', img: 'https://as1.ftcdn.net/jpg/00/99/47/92/500_F_99479281_oJ0gapW7neDbLeOEhdjmP1fHr9KrDQkr.jpg'},
			
		],
		realtor: [
			{name: 'realtor 1'},
			{name: 'realtor 2'},
			{name: 'realtor 3'}
		],

	}
	//>

	templates[selected] = sampleTemplates
	data['preloaded'] = JSON.stringify({
		selected: selected,
		templates: templates
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
