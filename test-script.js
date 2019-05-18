function getCompliment(){

    const usersName = $('#name').val();

    const complimentsArray = [
        `${usersName}, you're smart`, 
        `${usersName}, you're funny`, 
        `${usersName}, you're kind`
    ];

    const mediumCompliments = [
        `${usersName}, you're so smart`,
        `${usersName}, you're so funny`,
        `${usersName}, you're so kind`
    ];

    const strongCompliments = [
        `${usersName}, you're the smartest`,
        `${usersName}, you're the funniest`,
        `${usersName}, you're the kindest`
    ];

    const devCompliments = [
        `Your CSS is so well-indented!`,
        `You never forget your setup snippet!`,
        `I see those ARIA labels!`,
    ]

    const randomNumber = Math.floor((Math.random() * complimentsArray.length));
    const randomCompliment = complimentsArray[randomNumber];

    $('.output').text(randomCompliment);
    
};

$(function() {
    $('.button').on('click', function (event) {
        event.preventDefault();
        getCompliment();
    });
});