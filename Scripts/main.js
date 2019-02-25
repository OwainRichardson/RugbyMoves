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