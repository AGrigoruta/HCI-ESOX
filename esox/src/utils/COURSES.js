export const COURSES = [{
    id: 1,
    name: 'Lolcode Beginner Course',
    description: 'Do you like cats, internet memes and code? If the answer is yes to all of these, get ready to dive in a fun esoteric programming language, inspired by one of the hottest topics from the internet: cats!',
    picture: 'http://www.lolcode.org/img/logo.png',
    started: true,
    hoursInvested: 12,
    progress: 40,
    category: 'Fun',
    difficulty: 'Beginner',
    friendsNumber: 6,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: false
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: false
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: false
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: false
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: false
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Lolcode Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: [{
        title: 'Which LOLCODE interpreter to use?',
        description: ' What I am asking, is which LOLCODE interpreter should I pick based on these criteria: 1) Works well and is up- to - date 2) Ease of install - I\'ve looked before and couldn\'t find one which I found easy to install. Please feel free to give your suggestions and opinions, I haven\'t looked in a number of months and am curious as to what people think, and I look forward to learning it.'
    }]
}, {
    id: 2,
    name: 'Brainfuck Beginner Course',
    description: 'We all have that one friend who goes like: "I know how to write code in Brainfuck". Well it\'s time to show that friend who is the boss, by taking this beginner Brainfuck course ',
    picture: 'https://ih0.redbubble.net/image.467953973.4106/flat,550x550,075,f.u1.jpg',
    started: true,
    hoursInvested: 6,
    progress: 20,
    category: 'Minimalistic',
    difficulty: 'Beginner',
    friendsNumber: 10,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: false
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: false
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: false
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Brainfuck Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: [{
        title: 'Print characters in brainfuck',
        description: 'I am new to this language and i am building brainfuck interpreter in scala i am facing one problem what should i print if the value at memory index is greater than 127 ? what a real brainfuck interpreter print if value is greater than 127? for eg memory[index]= 178 when "."(print command) is called what should a brainfuck iterpreter print?my compiled some codes on ideone.com but it showing runtime error .for follwing code: +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ [+.< -]'
    }]
}, {
    id: 3,
    name: 'Piet Beginner Course',
    description: 'Everybody has an inner artist. What does Picasso and code have in common? Well, the answer is one simple syllable: Piet. Take this beginner course to improve both your artistic and programming skills.',
    picture: 'https://images-na.ssl-images-amazon.com/images/I/51i4u5HvYIL._SX425_.jpg',
    started: true,
    hoursInvested: 21,
    progress: 75,
    category: 'Colors',
    difficulty: 'Beginner',
    friendsNumber: 4,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: false
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: false
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: false
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: false
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: false
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: false
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Piet Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: [{
        title: 'How do DP and CC change in Piet?',
        description: 'According to the specification, Black colour blocks and the edges of the program restrict program flow. If the Piet interpreter attempts to move into a black block or off an edge, it is stopped and the CC is toggled. The interpreter then attempts to move from its current block again. If it fails a second time, the DP is moved clockwise one step. These attempts are repeated, with the CC and DP being changed between alternate attempts. If after eight attempts the interpreter cannot leave its current colour block, there is no way out and the program terminates. Unless I\'m reading it incorrectly, this is at odds with the behaviour of the Fibonacci sequence example here: http://www.dangermouse.net/esoteric/piet/fibbig1.gif (from: http://www.dangermouse.net/esoteric/piet/samples.html). Specifically, why does the DP turn left at(0, 3) ((0, 0) being(top, left)) when it hits the left edge ? At this point, both DP and CC are LEFT, so, by my reading, the sequence should then be: 1) Attempt(and fail) to leave the block by going off the edge at(0, 4), 2) Toggle CC to RIGHT, 3) Attempt(and fail) to leave the block by going off the edge at(0, 2), 4) Rotate DP to UP, 5) Attempt(and succeed) to leave the block at(1, 2) by entering the white block at(1, 1)The behaviour indicated by the trace seems to be that DP gets rotated all the way, leaving CC at LEFT. What have I misunderstood ?'
    }]
}, {
    id: 4,
    name: 'Befunge Beginner Course',
    description: 'There\'s a famous lyric saying: "You spin me right round, baby, right round...". Check this Befunge beginner course to see what does direction, velocity and speed have to do with writing programs',
    picture: 'http://www.roland-illig.de/hanoi.befunge.png',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Minimalistic',
    difficulty: 'Beginner',
    friendsNumber: 12,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Befunge Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: [{
        title: 'Generating a random number in Befunge',
        description: 'I want to generate a random number in Befunge, from 0 to n, where n is an arbitrary number. How would I go about doing this?'
    }, {
        title: 'How to compile a program in Befunge-93?',
        description: 'How do I save and compile a program in Befunge-93? What file extension do I need to save the file as (like fileName.what)? Then how do I compile it?'
    }, {
        title: 'What happens in Befunge if the execution reaches the limits of the program?',
        description: 'I couldn\'t find an answer to this question...Is there a "periodic boundary condition"? I.e.does the execution continue on the opposite site? Or is it illegal that the execution leaves the program?'
    }]
}, {
    id: 5,
    name: 'Lolcode Intermediate Course',
    description: 'You already went through the basics, and now you can talk like a cat, am I right? It\'s time to take this to the next step, and learn not only to talk like one, but also be one!',
    picture: 'http://www.lolcode.org/img/logo.png',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Fun',
    difficulty: 'Intermediate',
    friendsNumber: 7,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Lolcode Pro',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: [{
        title: 'LOLCODE String Parsing',
        description: 'Suppose I have a string that takes the form "## ##" in stdin that I want to read in, e.g. "15 16". That\'s simple enough: I HAS A STRINGY; GIMMEH STRINGY; That grabs the whole line from stdin and stores it into the string—er, excuse me, YARN—called STRINGY. How would I go about extracting the two integers in the string? I want to be able to store 15 and 16 each as an integer(LULZ I MEANS NUMBR).'
    }, {
        title: 'What good is the NERFIN loop operation in LOLCODE?',
        description: 'My gripe with the spec is the combination of: 1) the lack of a loop variable initializer; 2) the fact it\'s temporary and local to the loop; As I understand it, this means it has to start at 0. While that\'s mostly ok for most uses of UPPIN, it\'s totally off for most(my) intended uses of NERFIN.My most common uses of a decrementing loop variable in other languages are the "repeat n times (n not re-used)" idiom and string operations, which wouldn\'t be a good idea in LOLCODE anyway. Is it possible to use NERFIN to get a loop decrement from n to 1 or 0 in a way that\'s less verbose than the equivalents with UPPIN or the operationless forms of looping?'
    }]
}, {
    id: 6,
    name: 'Piet Intermediate Course',
    description: 'Get your brush, get your paint, and your canvas, and get ready for the Intermediate Course for this artsy esoteric programming language, known as Piet',
    picture: 'https://images-na.ssl-images-amazon.com/images/I/51i4u5HvYIL._SX425_.jpg',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Colors',
    difficulty: 'Intermediate',
    friendsNumber: 8,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Piet Pro',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 7,
    name: 'Befunge Intermediate Course',
    description: 'It\'s all about physics in this one. You mastered the basics of them in the previous course, but put your seatbelt on for this one, because we\'re about to speed up',
    picture: 'http://www.roland-illig.de/hanoi.befunge.png',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Minimalistic',
    difficulty: 'Intermediate',
    friendsNumber: 1,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Befunge Pro',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 8,
    name: 'Befunge Advanced Course',
    description: 'You spinned around for so long, you didn\'t even realize how far you\'ve come into this esoteric language. Get ready for the final course, the Advanced Befunge Course',
    picture: 'http://www.roland-illig.de/hanoi.befunge.png',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Minimalistic',
    difficulty: 'Advanced',
    friendsNumber: 3,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Befunge Master',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 9,
    name: 'Piet Advanced Course',
    description: 'This one feels like renaissance all over again. We\'re not sure if we should call you by your name, or Piet Mondrian, because honestly we see no difference in style. Get ready to dive into this Advanced Course',
    picture: 'https://images-na.ssl-images-amazon.com/images/I/51i4u5HvYIL._SX425_.jpg',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Colors',
    difficulty: 'Advanced',
    friendsNumber: 2,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Piet Master',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 10,
    name: 'Shakespeare Beginner Course',
    description: 'Act I: The player\'s excitement and flattery. Scene I: The basics of Shakespeare. Enter The Beginner Course. Exeunt.',
    picture: 'https://cdn.instructables.com/F6V/XMMG/JV2R7JRA/F6VXMMGJV2R7JRA.LARGE.jpg',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Fun',
    difficulty: 'Beginner',
    friendsNumber: 9,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Shakespeare Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 11,
    name: 'Pikachu Beginner Course',
    description: 'Pika Pika Pi Pika Pi Pikachu. If you are intrigued by what that means according to this adorable esoteric programming language, start this Beginner Course',
    picture: 'https://pbs.twimg.com/profile_images/805448313680044033/rwf7mV_P.jpg',
    started: true,
    hoursInvested: 30,
    progress: 95,
    category: 'Fun',
    difficulty: 'Beginner',
    friendsNumber: 16,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: false
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: false
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: false
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: false
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: false
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: false
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Pikachu Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}, {
    id: 12,
    name: 'Malbolge Beginner Course',
    description: 'Malbolge is named after the eight circle of Hell from Dante\'s Inferno, and it lives up to it\'s name. Let\'s decipher this esoteric programming language in this Beginner Course',
    picture: 'https://cinemaelectronica.files.wordpress.com/2010/06/botticellismapofdantesinferno.jpg',
    started: false,
    hoursInvested: 0,
    progress: 0,
    category: 'Minimalistic',
    difficulty: 'Beginner',
    friendsNumber: 0,
    achievements: [{
        name: 'Import one library',
        picture: '/email.png',
        locked: true
    }, {
        name: 'Print something',
        picture: '/printer.png',
        locked: true
    }, {
        name: 'Finish your first program',
        picture: '/banner.png',
        locked: true
    }, {
        name: 'Dive in for 1 hour in this course',
        picture: '/one.png',
        locked: true
    }, {
        name: 'Spend 10 hours in this course',
        picture: '/ten.png',
        locked: true
    }, {
        name: 'Finish half of the course',
        picture: '/percent.png',
        locked: true
    }, {
        name: 'Invest 50 hours in this course',
        picture: '/fifty.png',
        locked: true
    }, {
        name: 'Malbolge Newbie',
        picture: '/trophy.png',
        locked: true
    }],
    activeQuestions: []
}]