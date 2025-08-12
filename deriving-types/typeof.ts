console.log(typeof 'bunny') 

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['john', 'jane']
}

type Settings = typeof settings;

function loadData(setrings: Settings) {
    //
}

loadData(settings)