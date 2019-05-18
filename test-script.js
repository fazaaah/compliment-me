// const allCompliments = [
//     {
//     strength: 1,
//     devMode: false,
//     compliment: `${usersName}, you're smart`, 
//     },
//     {
//         strength: 1,
//         devMode: false,
//         compliment: `${usersName}, you're funny`
//     },
//     {
//         strength: 1,
//         devMode: false,
//         compliment: `${usersName}, you're kind`
//     }
// ]


const getCompliment = (strength, devMode) => {
    const usersName = $('#name').val();
    console.log(strength, devMode);
    const allCompliments = [
        {
            strength: 1,
            devMode: false,
            compliment: `${usersName}, you're smart`,
        },
        {
            strength: 1,
            devMode: false,
            compliment: `${usersName}, you're funny`
        },
        {
            strength: 1,
            devMode: true,
            compliment: `${usersName}, you're kind`
        }
    ]
    console.log(allCompliments);

    const matchingCompliments = allCompliments.filter(compliment => {
        return compliment.strength === parseInt(strength) && compliment.devMode === devMode
    })

    console.log(matchingCompliments)

    console.log(typeof parseInt(strength))
    // const matchingCompliments = []


    // const complimentsArray = [
        
    //     `${usersName}, you're smart`, 
    //     
    // ];

    // const mediumCompliments = [
    //     `${usersName}, you're so smart`,
    //     `${usersName}, you're so funny`,
    //     `${usersName}, you're so kind`
    // ];

    // const strongCompliments = [
    //     `${usersName}, you're the smartest`,
    //     `${usersName}, you're the funniest`,
    //     `${usersName}, you're the kindest`
    // ];

    // const devCompliments = [
    //     `Your CSS is so well-indented!`,
    //     `You never forget your setup snippet!`,
    //     `I see those ARIA labels!`,
    // ];

    const randomNumber = Math.floor((Math.random() * matchingCompliments.length));

    const randomCompliment = matchingCompliments[randomNumber];
    // const mediumRandomCompliment = mediumCompliments[randomNumber];
    // const strongRandomCompliment = strongCompliments[randomNumber];

    $('.output').text(randomCompliment.compliment);
    
};

// capturing user's preference for compliment strength

// const complimentStrength = $('#strength').val();

// capturing user's preference for Dev mode

// const devMode = $('input[type=checkbox]:checked').val();
// if 

const findCompliment = () => {

}

$(function() {
    $('.button').on('click', function (event) {
        event.preventDefault();
        const strength = $('#strength').val();
        const devMode = $('#dev-checkbox').prop("checked");
        // if (devMode === 
        getCompliment(strength, devMode);
    });
});