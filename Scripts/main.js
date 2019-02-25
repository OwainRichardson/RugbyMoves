class MoveGenerator {
	constructor(element) {
		this.pitch = element
		
		this.moves = {
			'32 Short': {
				'1': {
					'250': ['25px', '0'],
				},
				'2': {
                    '250': ['125px', '0', '0ms'],
                    '1000': ['50px', '180px', '750ms'],
                    '1750': ['125px', '180px', '250ms']
                    
				},
				'3': {
                    '250': ['225px', '0', '0ms'],
                    '1000': ['125px', '200px', '750ms']
                },
                '4': {
                    '250': ['325px', '0', ''],
                    '1000': ['200px', '50px', '750ms'],
                    '2000': ['150px', '400px', '1000ms']
				},
				'5': {
					'250': ['425px', '0'],
				},
				'6': {
					'250': ['525px', '0'],
                },
                
                '7': {
                    '250': ['25px', '1000px']
                },
                '8': {
                    '250': ['125px', '1000px'],
                    
				},
				'9': {
                    '250': ['225px', '1000px'],
                },
                '10': {
                    '250': ['325px', '1000px'],
                },
                
				'11': {
					'250': ['425px', '1000px'],
				},
				'12': {
					'250': ['525px', '1000px'],
                },
                'ball': {
                    '250': ['225px', '25px', '0ms'],
                    '1000': ['125px', '225px', '750ms'],
                    '1750': ['125px', '200px', '1ms'],
                    '2100': ['185px', '199px', '250ms'],
                    '2350': ['150px', '425px', '650ms']
                }
			}
		}
		
		this.bindEvents()
	}
	
	bindEvents() {
		document.querySelectorAll('.controls button').forEach((el) => {
			el.addEventListener('click', (event) => {
				this.resetPitch()
				this.renderPlayers(event)
			})
		})
	}	
	
	resetPitch() {
		this.pitch.innerHTML = ''
	}
	
	renderPlayers(event) {
		const players = this.moves[event.target.getAttribute('data-id')]
		
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