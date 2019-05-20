const getCompliment = (strength, devMode) => {
    const usersName = $('#name').val();
    console.log(strength, devMode);
    const allCompliments = [
        {
            strength: 1,
            devMode: false,
            compliment:`${usersName}, I'd pick you first for my trivia team.`,
        },
        {
            strength: 1,
            devMode: false,
            compliment:`${usersName}, I like your shoes.`,
        },
        {
            strength: 1,
            devMode: false,
            compliment:`${usersName}, you should start a blog.`,
        },
        {
            strength: 1,
            devMode: false,
            compliment: `${usersName}, your hair is so shiny.`
        },
        {
            strength: 1,
            devMode: false,
            compliment: `${usersName}, you take great selfies.`
        },
        {
            strength: 1,
            devMode: false,
            compliment: `${usersName}, you always have the best facts.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, you bring a lot of light to other people's lives.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `Gordon Ramsey couldn't yell at you, ${usersName}.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, you're as sweet as a gumdrop butterfly.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, your plants never die.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, you have such important things to say.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, here's a gold star for you because you're a gold star person.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, you are more brave and resilient than you realize.`
        },
        {
            strength: 2,
            devMode: false,
            compliment: `${usersName}, you constantly uplift people.`
        },
        {
            strength: 3,
            devMode: false,
            compliment: `${usersName}, you are a perfect and wonderful angel of light and warmth.`
        },
        {
            strength: 3,
            devMode: false,
            compliment: `${usersName}, I could write a novel on how amazing you are!`
        },
        {
            strength: 3,
            devMode: false,
            compliment: `${usersName}, you have the kindest soul and the wisest brain in all the land.`
        },
        {
            strength: 3,
            devMode: false,
            compliment: `${usersName}, your hugs feel like a warm blanket on a cold day.`
        },
        {
            strength: 3,
            devMode: false,
            compliment: `${usersName}, dogs always want to become friends with you.`
        },
        {
            strength: 1,
            devMode: true,
            compliment: `${usersName}, your CSS is so well-indented!`
        },
        {
            strength: 1,
            devMode: true,
            compliment: `${usersName}, you never forget your setup snippets!`
        },
        {
            strength: 1,
            devMode: true,
            compliment: `${usersName}, we see those ARIA labels!`
        },
        {
            strength: 2,
            devMode: true,
            compliment: `${usersName}, your code is drier than week old toast without butter.`
        },
        {
            strength: 2,
            devMode: true,
            compliment: `${usersName}, you don't even know what a side scroll looks like.`
        },
        {
            strength: 2,
            devMode: true,
            compliment: `${usersName}, you make using floats look easy.`
        },
        {
            strength: 3,
            devMode: true,
            compliment: `${usersName}, you could've written Javascript in 8 days and got the weekend off.`
        },
    ]
    console.log(allCompliments);

    const matchingCompliments = allCompliments.filter(compliment => {
        return compliment.strength === parseInt(strength) && compliment.devMode === devMode
    })

    const randomNumber = Math.floor((Math.random() * matchingCompliments.length));

    const randomCompliment = matchingCompliments[randomNumber];

    $('.output').text(randomCompliment.compliment);
    
};

const findCompliment = () => {}

$(function() {
    $('#dev-checkbox').change(function () {
        if (this.checked) {
            $("body").addClass("body-dev");
            $("input").addClass("button-dev");
        } else {
            $("body").removeClass("body-dev");
        }
        });
    $('.button').on('click', function (event) {
        event.preventDefault();
        if ($('input[type=text]').val() === ''){
            // alert('Please enter your name');
            $('.output').text('Please enter your name.')
        } else {
            const strength = $('#strength').val();
            const devMode = $('#dev-checkbox').prop("checked");
            getCompliment(strength, devMode);
        }
    });
});