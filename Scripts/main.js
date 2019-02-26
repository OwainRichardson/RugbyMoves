class MoveGenerator {
	constructor(element) {
		this.pitch = element
		
		this.moves = {
			'32 Short': {
				'players': {
					'1': {
						'250': ['25px', '300px'],
					},
					'2': {
						'250': ['125px', '300px', '0ms'],
						'1000': ['50px', '480px', '750ms'],
						'1750': ['125px', '480px', '250ms']
						
					},
					'3': {
						'250': ['225px', '300px', '0ms'],
						'1000': ['125px', '500px', '750ms']
					},
					'4': {
						'250': ['325px', '300px', ''],
						'1000': ['200px', '350px', '750ms'],
						'2000': ['150px', '700px', '1000ms']
					},
					'5': {
						'250': ['425px', '300px'],
					},
					'6': {
						'250': ['525px', '300px'],
					},
					
					'7': {
						'250': ['25px', '700px']
					},
					'8': {
						'250': ['125px', '700px'],
						'1000': ['50px', '580px', '750ms'],
					},
					'9': {
						'250': ['225px', '700px'],
						'1000': ['125px', '530px', '750ms']					
					},
					'10': {
						'250': ['325px', '700px'],
					},
					
					'11': {
						'250': ['425px', '700px'],
					},
					'12': {
						'250': ['525px', '700px'],
					},
					'ball': {
						'250': ['225px', '325px', '0ms'],
						'1000': ['125px', '525px', '750ms'],
						'1750': ['125px', '500px', '1ms'],
						'2100': ['185px', '499px', '250ms'],
						'2350': ['150px', '725px', '650ms']
					}
				},
				'description': `<ul>
									<li>Mid drags his opposite mid out wide</li>
									<li>Link mirrors the line to drags his opposite link out too</li>
									<li>When the touch on the mid is imminentm the link goes to half</li>
									<li>The other attacking mid runs a short line through the hole left by the mid</li>
								</ul>`
			},
			'32 Short with loop': {
				'players': {
					'1': {
						'250': ['25px', '300px'],
					},
					'2': {
						'250': ['125px', '300px', '0ms'],
						'1000': ['50px', '480px', '750ms'],
						'1750': ['125px', '480px', '250ms'],
						'2500': ['250px', '595px', '500ms'],
						'3000': ['260px', '800px', '500ms']
					},
					'3': {
						'250': ['225px', '300px', '0ms'],
						'1000': ['125px', '500px', '750ms'],
					},
					'4': {
						'250': ['325px', '300px', ''],
						'1000': ['200px', '350px', '750ms'],
						'2000': ['150px', '700px', '1000ms']
					},
					'5': {
						'250': ['425px', '300px'],
					},
					'6': {
						'250': ['525px', '300px'],
					},
					
					'7': {
						'250': ['25px', '700px']
					},
					'8': {
						'250': ['125px', '700px'],
						'1000': ['50px', '580px', '750ms'],
					},
					'9': {
						'250': ['225px', '700px'],
						'1000': ['125px', '530px', '750ms']					
					},
					'10': {
						'1750': ['325px', '700px'],
						'2250': ['175px', '700px', '500ms'],
					},
					
					'11': {
						'250': ['425px', '700px'],
					},
					'12': {
						'250': ['525px', '700px'],
					},
					'ball': {
						'250': ['225px', '325px', '0ms'],
						'1000': ['125px', '525px', '750ms'],
						'1750': ['125px', '500px', '1ms'],
						'2100': ['185px', '499px', '250ms'],
						'2350': ['150px', '725px', '650ms'],
						'2700': ['250px', '620px', '300ms'],
						'3000': ['260px', '825px', '500ms']
					}
				},
				'description': `<ul>
									<li>Mid drags his opposite mid out wide</li>
									<li>Link mirrors the line to drags his opposite link out too</li>
									<li>When the touch on the mid is imminentm the link goes to half</li>
									<li>The other attacking mid runs a short line through the hole left by the mid</li>
									<li>The link runs a loop around the short line mid</li>
									<li><strong>If</strong> the opposing mid shuts the gap the mid passes to the link running the loop line</li>
								</ul>`
			},
			'Sweep': {
				'players': {
					'1': {
						'250': ['25px', '300px'],
					},
					'2': {
						'250': ['125px', '300px', '0ms'],
						'1600': ['350px', '475px', '1000ms'],
						'2600': ['360px', '550px', '300ms'],
						'2900': ['360px', '750px', '750ms'],
					},
					'3': {
						'250': ['225px', '300px', '0ms'],
						'500': ['175px', '400px', '500ms'],
						'1000': ['150px', '500px', '500ms'],
						'1500': ['260px', '575px', '800ms']
					},
					'4': {
						'250': ['325px', '300px', ''],
						'1000': ['280px', '475px', '600ms'],
						'1600': ['260px', '600px', '500ms']
					},
					'5': {
						'250': ['425px', '300px'],
						'2000': ['460px', '700px', '1750ms'],
						'3750': ['460px', '900px', '600ms'],
					},
					'6': {
						'250': ['525px', '300px'],
					},
					
					'7': {
						'250': ['25px', '700px']
					},
					'8': {
						'250': ['125px', '700px'],
					},
					'9': {
						'250': ['225px', '700px'],
						'500': ['175px', '570px', '750ms']
					},
					'10': {
						'250': ['325px', '700px'],
						'1600': ['260px', '630px', '500ms']
					},
					
					'11': {
						'250': ['425px', '700px'],
						'2900': ['375px', '800px', '500ms'],
					},
					'12': {
						'250': ['525px', '700px'],
					},
					'ball': {
						'250': ['225px', '325px', '0ms'],
						'500': ['175px', '425px', '500ms'],
						'1000': ['150px', '525px', '500ms'],
						'1400': ['290px', '490px', '200ms'],
						'1600': ['260px', '625px', '500ms'],
						'2100': ['260px', '600px', '1ms'],
						'2600': ['360px', '575px', '300ms'],
						'2900': ['360px', '775px', '750ms'],
						'3550': ['460px', '725px', '200ms'],
						'3750': ['460px', '925px', '600ms'],
					}
				},
				'description': `<ul>
									<li>Mid drags his opposite mid out wide</li>
									<li>Other mid hits a line inbetween the 2 opposing mids, receives the ball and takes the touch</li>
									<li>The first mid goes to half and passes to the link running a sweet line</li>
									<li>This creates a 3-on-2 on the outside and passes through the hands should be enough</li>
								</ul>`
			}
		}
		
		this.bindEvents()
	}
	
	bindEvents() {
		document.querySelectorAll('.move-selector').forEach((el) => {
			el.addEventListener('change', (event) => {
				this.resetPitch()
				this.changeDescription(event.target.value)
				this.renderPlayers(event.target.value)
			})
		})

		document.querySelectorAll('.play').forEach((el) => {
			el.addEventListener('click', () => {

				var move = $('.move-selector').val()

				this.resetPitch()
				this.changeDescription(move)
				this.renderPlayers(move)
			})
		})
	}	
	
	resetPitch() {
		this.pitch.innerHTML = ''
	}
	
	renderPlayers(event) {
		const players = this.moves[event].players
		
		Object.keys(players).forEach(key => {
			const player = document.createElement('div')
            player.className = key == 'ball' ? 'ball' : key <= 6 ? 'player attack' : 'player defence'
			player.innerHTML = key == 'ball' ? '' : this.getPlayerText(key)
			this.pitch.appendChild(player)
			
			player.style.top = players[key][Object.keys(players[key])[0]][0]
			player.style.left = players[key][Object.keys(players[key])[0]][1]
			player.style.transition = 'all ' + players[key][Object.keys(players[key])[0]][2] + ' linear'
			
			this.startAnimation(players[key], player)
		})
	}

	changeDescription(event) {
		const description = this.moves[event].description
		
		$('.description').html(description);
	}
	
	startAnimation(moves, player) {
		Object.keys(moves).forEach(move => {
			setTimeout(() => {
				player.style.top = moves[move][0]
                player.style.left = moves[move][1],
                player.style.transition = 'all ' + moves[move][2] + ' linear'
			}, move)
		})
    }
    
    getPlayerText(key) {
        switch (key) {
            case '1':
            case '6':
            case '7':
            case '12':
                return 'W';
            case '2':
            case '5':
            case '8':
            case '11':
                return 'L';
            case '3':
            case '4':
            case '9':
            case '10':
                return 'M';
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new MoveGenerator(document.querySelector('.pitch'))
})