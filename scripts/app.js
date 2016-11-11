var state = {
	questArray: [],
	curQuestion: 0,
	numCorrect: 0
};

state.questArray = [
{
	question: "The order of sharps as they appear for scales is:",
	answers: ['FCGDAEB', 'GDEACFB', 'BEADFCG', 'EADBCGF'],
	correctIndex: 0
	]
}, {
	question: "The short extensions of the staff used to represent notes that are above, below, or in the notes of the treble and bass clefs are called:",
	answers: ['Ledger Lines', 'Octave Lines', 'Crescendo Lines', 'Expansion Lines'],
	correctIndex: 0
}, {
	question: "The musical interval F ascending to C is a:",
	answers: ['Major Second', 'Major Fifth', 'Perfect Fourth', 'Perfect Fifth'],
	correctIndex: 3
}, {
	question: "Using whole steps(W) and half steps(H), what is the step pattern for a major scale?",
	answers: ['W H W W H W W', 'W W W H W W H', 'W W H W W H W', 'W W H W W W H'],
	correctIndex: 3
}, {
	question: "The whole rest can receive:",
	answers: ['Three beats in 3/4 time', 'Four beats in 4/4 time', 'Two beats in cut time', 'All of the above'],
	correctIndex: 3
}, {
	question: "How many letters are in the musical alphabet?",
	answers: ['26', '8', '7', '6'],
	correctIndex: 2
}, {
	question: "A cadence that moves from a dominant chord to a tonic chord is known as a(n):",
	answers: ['Half Cadence', 'Authentic Cadence', 'Plagal Cadence', 'Dominant Cadence'],
	correctIndex: 1
}, {
	question: "Which term indicates a slow tempo?",
	answers: ['Dolce', 'Andante', 'Adagio', 'Piacere'],
	correctIndex: 2
}, {
	question: "A melodic and/or harmonic configuration at the end of a phrase, section, or piece of music:",
	answers: ['Time Signature', 'Clef', 'Meter', 'Cadence'],
	correctIndex: 3
}, {
	question: "A dot added to the side of a note:",
	answers: ['Tells you to play staccato', 'Gives it twice as much value', 'Adds half the value of the note', 'Tells you to play legato'],
	correctIndex: 2
}, {
	question: "A musical scale containing five notes is a:",
	answers: ['Major Scale', 'Pentatonic Scale', 'Minor Scale', 'Diminished Scale']
	correctIndex: 1
}, {
	question: "When 'a tempo' is indicated on the music page the performer:",
	answers: ['speeds up the tempo', 'ignores indicated tempo', 'returns to orignal tempo', 'determines the tempo']
	correctIndex:
}, {
	question: "The following is an example of which type of scale: A B C D E F G# A",
	answers: ['Major', 'Natural Minor', 'Dorian', 'Harmonic Minor']
	correctIndex: 3
}, {
	question: "Which one of the following is NOT a form of minor scale:",
	answers: ['Melodic Minor', 'Harmonic Minor', 'Chromatic Minor', 'Natural Minor']
	correctIndex: 2
}, {
	question: "The quality of a chord built on the third degree of a major scale is:",
	answers: ['Diminished', 'Major', 'Minor', 'Augmented']
	correctIndex: 2
}, {
	question: "D.C. al Fine means to:",
	answers: ['End the song immediately', 'Return to the beginning and end at Fine', 'Return to Fine and play to the end', 'None of the above']
	correctIndex: 1
}, {
	question: "Which of the following tempos means 'walking speed'?",
	answers: ['Moderato', 'Andante', 'Allegro', 'Largo']
	correctIndex: 1
}, {
	question: "Which of the following terms means to play sweetly?",
	answers: ['Allargando', 'Rubato', 'Dolce', 'Andante']
	correctIndex: 2
}, {
	question: "Which of the following terms means solemn and slow?",
	answers: ['Allegro', 'Andante', 'Dolce', 'Grave']
	correctIndex: 3
}, {
	question: "Cut time is the same as:",
	answers: ['4/4 Time', '2/4 Time', '2/2 Time', 'None of the Above']
	correctIndex: 2
}, {
	question: "Which one of the following is NOT a tempo marking?",
	answers: ['Andante', 'Tenuto', 'Allegro', 'Moderato']
	correctIndex: 1
}, {
	question: "The term "ritardando" means to:",
	answers: ['Gradually speed up', 'Gradually slow down', 'Gradually get louder', 'Gradually get softer']
	correctIndex: 1
}, {
	question: "The term "crescendo" indicates that the music should become gradually:",
	answers: ['Softer', 'Harsher', 'Faster', 'Louder']
	correctIndex: 3
}, {
	question: "What note serves as the unit of beat in 3/2 time?",
	answers: ['Whole', 'Half', 'Quarter', 'Eighth']
	correctIndex: 1
}, {
	question: "Please select the dynamic symbol associated with fortissimo:",
	answers: ['f', 'mf', 'ff', 'mp']
	correctIndex: 2
}, {
	question: "Playing a series of notes separated or detached is known as:",
	answers: ['Stucco', 'Stanza', 'Stretto', 'Staccato']
	correctIndex:
}
];

//Event listeners
$(document).ready() {
	state.questArray=shuffle(state.questArray); 
	state.questArray=state.questArray.slice(0,5);
	displayQuestion(state.questArray, state.curQuestion);



	$(.submitButton).click{
		
	}
};



//Not yet implemented
function shuffle(arr) {
	return arr;
};

function displayQuestion(questArray, curQuestion) {

};

