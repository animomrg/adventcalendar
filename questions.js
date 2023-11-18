export const questions = [
    [
        // DAY 1 - MOVIE - ELF
        {
            'question': "What movie is this?",
            'image': '/images/elf1.png',
            'answers': [
                { text: 'Home Alone', isCorrect: false },
                { text: 'The Grinch', isCorrect: false },
                { text: 'The Santa Clause', isCorrect: false },
                { text: 'Elf', isCorrect: true },
            ],
        },
        {
            'question': 'According to Buddy, which of the following is not a main food group?',
            'image': '/images/food.png',
            'answers': [
                { text: 'Chocolate', isCorrect: true },
                { text: 'Candy Corn', isCorrect: false },
                { text: 'Candy Canes', isCorrect: false },
                { text: 'SYRUP!', isCorrect: false },
            ],
        },
        {
            'question': 'What epithet does Buddy use to describe himself when he only makes 85 etch-a-sketches?',
            'image': './images/etch.png',
            'answers': [
                { text: 'Bumbling Stumbling Doofus', isCorrect: false },
                { text: 'Silly Sally Sanders', isCorrect: false },
                { text: 'Cotton Headed Ninnymuggins', isCorrect: true },
                { text: 'Nefarious Nincompoop', isCorrect: false },
            ],    
        },
        {
            'question': 'What is the final leg of Buddy\'s journey from the North Pole?',
            'image': './images/narwhal.png',
            'answers': [
                { text: 'The Sea of Swirly Twirly Gumdrops', isCorrect: false },
                { text: 'The Lincoln Tunnel', isCorrect: true },
                { text: 'The Candy Cane Forest', isCorrect: false },
                { text: 'The Empire State Bridge', isCorrect: false },
            ],
        },
        {
            'question': 'What Christmas Carol does the amassed crowd sing in order to power Santa\'s sleigh?',
            'image': './images/elfsanta.png',
            'answers': [
                { text: 'Rudolph The Red Nosed Reindeer', isCorrect: false },
                { text: 'Winter Wonderland', isCorrect: false },
                { text: 'Santa Claus Is Coming To Town', isCorrect: true },
                { text: 'Silent Night', isCorrect: false },
            ],
        }
    ],
    [
        // DAY 2 - LYRICS
        {
            'question': "You know Dasher and Dancer and Prancer and _____\nComet and Cupid and ______ and Blitzen\nBut do you recall\nThe most famous reindeer of all?",
            'image': '.images/rudolph.gif',
            'wrong answers': ['Dixon / Rona', 'Nixon / Fauna', 'Billy / Reginald'],
            'correct': 'Vixen / Donner',
        },
        {
            'question': "Once again, as in olden days\nHappy golden days of ____\nFaithful friends who are ____ to us\nWill be near to us once more",
            'image': '.images/frank.png',
            'wrong answers': ['Yours / Close', 'Snow / Good', 'Lore / Feared'],
            'correct': 'Yore / Dear',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 3 - LYRICS
        {
            'question': "In the meadow, we can build a snowman\mWe'll pretend that he is ______ Brown\nHe'll say, are you _______?\nWe'll say, no man\nBut you can do the job when you're in town",
            'image': '.images/winter.png',
            'wrong answers': ['Carson / Tired', 'Mister / Cranky', 'Jerry / Richard'],
            'correct': 'Parson / Married',
        },
        {
            'question': "Here comes Santa Claus, here comes Santa Claus, right down ________________\nHe's got a bag that's filled with toys for boys and girls again.\nHear those sleigh bells jingle jangle, oh what a beautiful _____\nSo jump in bed and cover your head, 'cause Santa Claus comes tonight",
            'image': '.images/santa.gif',
            'wrong answers': ['Candy Cane Lane / Night', 'Sugar Drop Lane / Day', 'The Opposite Lane / Light'],
            'correct': 'Santa Claus Lane / Sight',
        },        
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 4 - MOVIE - HOME ALONE
        {
            'question': "What movie is this?",
            'image': '/images/homealone.png',
            'wrong answers': ['Elf', 'The Grinch', 'The Santa Clause'],
            'correct': 'Home Alone',
        },
        {
            'question': 'What criminal nickname did Marv give himself and Harry?',
            'image': '/images/homealonebadguys.png',
            'wrong answers': ['The Sticky Bandits', 'The Goodfellas', 'Team Rocket'],
            'correct': 'The Wet Bandits',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }, 
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 5 - AROUND THE WORLD
        {
            'question': 'Which country starts every Christmas season by constructing a giant Yule goat?',
            'image': './images/gavlegoat.png',
            'wrong answers': ['Norway', 'Estonia', 'Denmark'],
            'correct': 'Sweden',
        },
        {
            'question': 'Which fast food restaurant is the go-to Christmas dinner destination for Japanese locals?',
            'image': './images/japan.png',
            'wrong answers': ['McDonalds', 'Wendy\'s', 'Burger King'],
            'correct': 'KFC',
        },
        {
            'question': 'In Iceland, what do naughty boys and girls receive instead of coal?',
            'image': './images/iceland.png',
            'wrong answers': ['Dog Poop', 'Rocks', 'Black Licorice'],
            'correct': 'A Rotten Potato',
        },
        {
            'question': 'In Finland, children hope to find what lucky object hidden in their breakfast rice porridge?',
            'image': './images/ricepudding.png',
            'wrong answers': ['Coin', 'Pumpkin Seed', 'Cookie'],
            'correct': 'Almond',
        },
        {
            'question': 'What is the local name for New Zealand\'s Christmas tree?',
            'image': './images/pohutukawa.png',
            'wrong answers': ['Red Bonsai', 'Cabbage Tree', 'Douglas Fir'],
            'correct': 'Pohutukawa',
        }
    ],
    [
        // DAY 6
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 7 - IS THAT A CHRISTMAS MOVIE?
        {
            'question': 'What movie is this?',
            'image': './images/mclane.png',
            'wrong answers': ['Lethal Weapon', 'The Fifth Element', '12 Monkeys'],
            'correct': 'Die Hard',
        },
        {
            'question': 'Die Hard\'s villain is played by Alan Rickman. What was his name?',
            'image': './images/gruber.png',
            'wrong answers': ['Severus Snape', 'Otto Becker', 'Frans Fischer'],
            'correct': 'Hans Gruber',
        },
        {
            'question': 'In which city does John McLane work as a police officer?',
            'image': './images/mclane2.png',
            'wrong answers': ['San Francisco', 'Boston', 'Chicago'],
            'correct': 'New York',
        },
        {
            'question': 'What was the limo driver\'s fashion-inspired name?',
            'image': './images/argyle.png',
            'wrong answers': ['Pinstripe', 'Paisley', 'Polka Dot'],
            'correct': 'Argyle',
        },
        {
            'question': 'Which fictional company does Holly Gennaro work for?',
            'image': './images/holly.png',
            'wrong answers': ['Fujitsu Corp', 'Ishikawa Inc', 'Kawakami Ltd'],
            'correct': 'Nakatomi Corp',
        }
    ],
    [
        // DAY 8
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 9
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 10 - AROUND THE WORLD
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 11
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 12
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 13
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 14
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 15
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 16
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 17
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 18
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 19
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 20
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 21
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 22
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 23
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ],
    [
        // DAY 24
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        },
        {
            'question': '',
            'image': '',
            'wrong answers': [],
            'correct': '',
        }
    ]
];