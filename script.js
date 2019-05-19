// Storing info in arrays

// const complimentsArray = {
//     mild: [
//         'You smart',
//         'You funny',
//         'You kind',
//     ],
//     medium: [
//         'You very smart',
//         'You very funny',
//         'You very kind'
//     ],
//     hot: [
//         'You the smartest',
//         'You the funniest',
//         'You the kindest'
//     ]
// };

const complimentsArray = [
    'You smart',
    'You funny',
    'You kind'
]

const devComplimentsArray = [
    'Your CSS is so well-indented!',
    'You never forget your setup snippet!',
    'I see those ARIA labels!',
];

// Doc ready

// $(function(){

// })

// Input Name & Template Literal

// const name = 

const customCompliment = (`${name}, ${complimentsArray[i]}.`)

// Compliments Array & Randomizing the Output

// })

function randomCompliment (randomArray){
    const index = Math.floor(Math.random() * complimentsArray.length);
    return randomArray[index];
}

const compliment = randomCompliment(complimentsArray);

console.log(compliment);

// Generate Button

// Needs to: grab the input name, input it into the template literal, 

// $('.generate-button').click(function(event){
//     event.preventDefault();
//     const username = 
// }) 

$('.generate-button').on('click', function(event){
    event.preventDefault();
    const strength = $('input[name=mild]:selected').val();
})

complimentsArray[i]

// Finally, call the function
// function getCompliment(){

// }
