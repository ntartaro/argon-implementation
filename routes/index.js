// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const templates = require('../seed/templates.json')

const categories = ['landing', 'resume', 'restaurant', 'fitness', 'realtor', 'lessons']

router.get('/', (req, res) => {
	const selected = categories[0]
	const data = {
		categories: categories,
		templates: {
			landing:[
				{
					name: 'landing 1', 
					image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg', 
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla at neque bibendum aliquet. Maecenas ut nisl in est pulvinar auctor elementum id odio.',
					"slug": "landing-template-90347a",       
					"sample_one_text": "Friends",
					"sample_one_value": 22,
					"sample_two_text": "Photos",
					"sample_two_value": 10,
					"sample_three_text": "Comments",
					"sample_three_value": 89
				},
				{					
					name: 'landing 1', 
					image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg', 
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla at neque bibendum aliquet. Maecenas ut nisl in est pulvinar auctor elementum id odio.',      
					"slug": "landing-template-90347a",
					"sample_one_text": "Friends",
					"sample_one_value": 22,
					"sample_two_text": "Photos",
					"sample_two_value": 10,
					"sample_three_text": "Comments",
					"sample_three_value": 89
				},
				{					
					name: 'landing 1', 
					image: 'https://t3.ftcdn.net/jpg/02/18/15/36/500_F_218153661_z6JUvkVhMazhDhtQ61N7ZAl6hSrO4eVt.jpg', 
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla at neque bibendum aliquet. Maecenas ut nisl in est pulvinar auctor elementum id odio.',       
					"slug": "landing-template-90347a",
					"sample_one_text": "Friends",
					"sample_one_value": 22,
					"sample_two_text": "Photos",
					"sample_two_value": 10,
					"sample_three_text": "Comments",
					"sample_three_value": 89},
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
