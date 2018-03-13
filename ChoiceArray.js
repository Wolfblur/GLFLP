var choices = {
Start: {
        text: "A red sun hangs low in the sky, echoing of Dying Earth. You are sitting on the Front Porch, your wrinkled old brain pumping under your wrinkled brow as the shadows start to get long. Lost in reverie, floating memories of the days you've left behind like a bubble juggler. The wind carries a melody over the ocean of time personified as the pond your cabin faces in the sparkle of a wind chime. It tugs on you like an insistent child on your hand where you've paused like this before, caught in a reflection through a carnival, or along a wooded path, or on the walk to your seat at a wedding. The sun is falling into the pond by your garden. The temperature is falling pleasantly after the heat of the day.",
        choice1: "Continue sitting and let the reverie carry you.",
        choice2: "You've been sitting too long and the day was too hot. Go inside.",
        choice3: "Clean your beers off the front porch and walk to the pond",
        mp3: "<source src=\"./music/Intro.mp3\" type=\"audio/mpeg\">",
        nextChoice: ['Sloaks1', 'AftertheHeat2', 'FrontPorch3']
    },
Sloaks1: {
          text: "The wind chimes chortle a tinny tamber, and like a crystal refracts light in a band, carry you out over the sea to the estuary, then the bayou, then to 25. The climate was just starting to rebel, and the revels still stormed the streets every February. Up until your first time in New Orleans, you were terrified of February and what it means. . . . . . . . . . . . . Years later you would find your fear again and treat every month like February. But those years of Mardi Gras tradition, the street corner jam bands and flitting alleyways, still leave a mark on your heart. Here, now, you cross paths with so few people, but there, in New Orleans, the talking and laughing came easy. Now those memories are just the rise and fall of voices, directional and stripped of meaning against some dollar store wind chimes you ordered years ago. . . . . . . . . . . . . . . Your body was a tumult of conflicting chemical signals. Desparate, alive, and more awake than a rushing rhino, you covered miles, processing booze and drugs, always seeking a home in someone else, or rather some body of elses. You didn't expect to remember it, but nights from that time still crystalize in your mind. Unaided by implants, your brain still conjurs up Eryka and Rob and their students, integrated into the marching band stoplights, so natural in their adopted city, blowing the loudest brass at the belly of the interstate, echoing across the drunk crowd like screaming in a tunnel. And you, the outsider, saw the party through their eyes. Men and women dressed and robes mingled with the spirits of Februaries past, glistening in the Southern Live Oaks. You were drunk, high, and sorting it out.",
          choice1: "Remember your travels",
          choice2: "Remember your hangovers", 
          choice3: "Remember your ghosts",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD11', 'AftertheHeat12', 'Vespers13']
},
SOLD11: {
          text: "Back before it became so common place, before getting to the other side of the planet wasn't an afternoon excursion, and Mars a long weekend... no, back when newness had its own merit, when exploration still meant something to your young body and mind, 21 years pouring out of your head, you thought you only had 45 left and the newness of place sustained you. You are approaching the end of those 45, and you've been a busy bee: most of AmEryka in a dilapidated van, most of Europe on couches and favors called in. The companions shift and blur together, but the freedom still sings its swan song to you.",
          choice1: "You are free as a bird",
          choice2: "You have never been free",
          choice3: "No, you were free, once",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds111', 'Gravel112', 'DOS113']
},
Birds111: {
          text: "So ironic that it was praying to the computer gods that first got you acquainted with New Orleans, and the free spirit of Frances that kept you there. She, so ignorant to the history of the place, navigated its dives and dungeons with a confidence and aloofness that still makes you smile. How could someone so free become so tethered? How could she fall for those old men's tricks: the illusion of fenced in yard, the safety of a three bedroom home, the slack in an ankle chain? In those days, you found your home away from home, and when she became imprisoned by the plastic veneer of security, you kept coming back, loosening your bonds to industry and holding your own flag. Those days were utter freedom, sleepless nights and early morning vomit, the fastidiousness of warm bodies and loose stockings, and you two were deverishes whirling across the desert.",
          choice1: "Should you have stayed locked yourself in?",
          choice2: "Did you make the right choice?",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch1111', 'DOS1112']
},
FrontPorch1111: {
          text: "There was no way you could have stayed. You will live your days in opposition to the curtain that has fallen. In the misery following the line you drew in the sand, you knew expression was the only hope humanity had. Automation was well along its unwavering march to autotomaton efficiency. You backed out and fell in with a troubadour band of miscreants. You refused age for as long as your body could support itself on that lifestyle. Doesn't matter how beautiful she looked any of those nights. The bottle's taste, a disaster you don't want, so the long road, the band of refusers. The sun is still warm as it sets, you are carried forward in a younger body.",
          choice1: "Remember how long it lasted",
          choice2: "Shake yourself out of it. Go drink some water.",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS11111', 'AftertheHeat11112']
},
DOS11111: {
          text: "A year after tour, summer is back again. You are crushed by the realization that these are indeed your formative years and you're already spending days trying to recapture feelings of comradarie that have passed. You're a year too old to party like you used to (oh how your bones will really creak in the future, how they will inhale the cold of the day and remind you of cracked crystal). Martha's eyes, by pattern either so warm and comprehensive or blurred and focused on a far off space, are closed. The day was spent in the sun, getting to know new and old friends in a sun kissed backyard. The undoing of the world looms like winter in the occasional gust of wind carrying through the backyard. The rest of the world fell into its crystal cave, and you're still here, staying up and keeping watch, looking for the funny way to say that it's nothing but another day. That cruel joke...",
          choice1: "The punchline?",
          choice2: "The joke?",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers111111', 'Cassini111112']
},
Vespers111111: {
          text: "It's always another day until it's not. No tethering to the land, to youth, to hope, changes that. This long life, flirting with the punchline, has had its rewards. You still find ways to laugh, even when you hack up a lung when you do. You remember Tyler, your boyhood best friend, the puddle behind his house where you used to catch frogs. His father, younger than you are now, but so terrifying in his white briefs watching Walker Texas Ranger with a shotgun over his distended belly. You were 8 when you left the sleepy town on your long approach to the city. His mother, not a day older than when she last cooked you TV dinners, after the accient, a year after he as put in the ground. She spoke of him like he was still there, but his father's bearded face and dead eyes conveyed none of the same hope. Behind his oxygen mask (funny how you never remember him smoking, but the flower pot full of butts, feels familiar as you approach the door). Funny how much you look like him now, with your vaporizer asthma pen that you keep in your shirt pocket, your beard unbridled and challenging the hair removal of the youth. The stark contrast of his family's acres replaced by pits of gravel when they lost the means to keep the green green were such a potent metaphor. It is what death feels like to you. You are at Tyler's childhood home, a year late to the wake, giving condolences however you can.",
          choice1: "Walk the grounds of Tyler's home, without him",
          choice2: "Walk the grounds of Tyler's home, with him",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel1111111', 'Cassini1111112']
},
Gravel1111111: {
          text: "You offer your last condolences and hug to his parents. They are happy to have seen you, you think. You ask if you can walk  the woods where the two of you used to play. You are seeking a yellow bus, overgrown with underbrush. You step through the quarry that have taken over most of the land and push your way through the path that you cannot believe you still remember. You feel a strange pull in your heart, both light and heavy. Like you got away from something dark that you both stared into together. If you can just find the bus, you'll be able to release all of this pent up fury at missing his last call, at not understanding what he meant when he found you on the internet in its infancy, begging for conversation. You follow the path, but like the yard, the clearing where the abandoned bus used to rest is empty.",
          choice1: "Drive back to the city",
          choice2: "Get up off the front porch",
          choice3: "Go get a drink",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['AftertheHeat11111111', 'Cassini11111112', 'Poly11111113']
},
AftertheHeat11111111: {
          text: "The long miles pass beneath the wheels of your gas powered car. You force yourself into a parking lot that is too small and step into your apartment that is equally so. Kids on the corner are leaning up against warehouse brick. The secrets beat against their sins. You are sure they are mourning their own losses, cuts much fresher than your own. You are fortunate: even in your youth you can blend in and out of crowds and groups without much thought.",
          choice1: "Settle in for a drink",
          choice2: "YOu gave up drinking long ago",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly11111111', 'Poly11111111']
},
Poly11111111: {
          text: "Now the truth is known. There are no stories not told. Your biometrics are read by an AI and pills are piped in to your home, no matter how far away you are. Your kids make fun of you for complaining about the incursion, about your legacy as the last the analog generation. They might be able to recall every memory with precision, but they'll never know the rush of letting each memory pop and explode. Choices mattered to the individual, once. Your choices drove her away, then drove her back to you. Martha crawls out of bed and comes to check on you. Baby, what are you doing? Nothing, you say, kissing her cheek, like you have so many thousands of times. Just watching the stars come out.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini 11111111']
},
Cassini11111111: {
          text: "The sun has set now. What have you been doing? The pond frogs begin their mating song and the satellites mix in with the stars. You hold her hand and wait for another night to come, ignoring the patches of pollution from the south, burning holes through the ozone. This life you've built together, even as the rest of humanity marches on, takes its own breath, takes its own time. You'll never get bored of this view as the lights flicker on.",
          choice1: "END" 
},
AftertheHeat12: {
          text: "You raise creaky bones off of your chair, and in the rush of blood to your head and down your cracked legs, some of the light goes out of the sunset-lit pond vista. There is a dry hum of machinery mixed in with the calls of the frogs and buzz of insects. Even 40 years later, you can't move between rooms without looking over your shoulder for the bomb to take the horizon or the city to dump throngs on your doorstep. You weren't part of the problem, so you left the city to sink itself. 40 years later and somehow the grand experiment continues. It will pass on without you. It's been a while since you met your match in a bottle. You've learned a lot over the years. Maybe it's time to hit the bottle again.",
          choice1: "Go walk the grounds",
          choice2: "Wiping a bead of sweat off your forehead, you go inside",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel121', 'DOS122']
},
Gravel121: {
          text: "No, it's not time to give in yet. You will survey your kingdom. You've become a relative hermit. You pass the garden, its tomatoes starting to peek through the soil, down the path to the pond. The surface of the pond is flitting with gnats and the calls of the frogs carry you. You've gone through loss too many times to count by now and the process feels still. You continue walking outside, glad to be rid of alcohol.",
          choice1: "Continue...",
          nextChoice: ['PoliSci121']
},
PoliSci121: {
          text: "In your mind's eye, you're still 30. You relive each of your worst moments in a loop. You've never been able to accept the right thing. Life stacked up a series of hurdles that you met or fell over, how can anyone do anything but the easiest thing? Even now you wonder what she's doing, where she is, if she's even still alive. Then, she was so full of life while you were already buckling under the weight of it. The only way to cope was the hole in your stomach. So many That thirty year old still shocked when she told you she was leaving, that you bring her down. You made it through the next 25 fine, surface level relationships that were devoid of meaning. Nothing ever overwhelmed those heavy steps into the bar and the conversation you couldn't control that drove her away from you. An accumulation of little mistakes that you couldn't undo. The bravery of youth, the belief that she would forgive you perpetually. Life proved otherwise. You left her in that bar, unable to pick the right words out of the air to fix what was in front of you, and you became alone. You remained alone for 25 years. You look at the plants, look at nature. It will continue without you, just like she did.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers121']
},
Vespers121: {
          text: "Loss stacks, and you must always to choose to feel or to flee. If you flee, you build up walls that protect you from it. You've been building the walls since the first war hero was a fake. You were blessed with full emotional capacity and it led you down a path of openness that became conceited by expectation. You were dragged through the mud until the skin was totally caked with it, a mud bath against emotion. When you finally found a person to open up to again, your habits overwhelmed the sancitity of the thing. Patterns of avoidance and coping caught up with you and you were left in a lurch. That final nail in the coffin. How is it that death hurts the same as losing a person who's still alive? The human reaction to loss is so petty. Like your own feelings and your own life. Eventually the light will go out and you will look asleep until the body decomposes.",
          choice1: "Could you have done anything different?",
          choice2: "Of course not",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS1211', 'Cassini1212']
},
DOS1211: {
          text: "She's fast asleep on the couch, color filtering in through the cabin windows. Wrinkled cheeks hold the glow, and she is the same girl you fell in love with 40 years ago. Life together has been bumpy. When you were young, you made it bumpy. As age and experience came, you learned that life makes its own bumps. By 50 you's finally learned the ride, and steadiness. Those early days, binging on Klonopin and booze until you vomited, rolling out of bed and doing it again. You took turns watching and leading, cleaning and preening. You still stay up watching her, but you've learned to just shut up. There's comedy in everything..",
          choice1: "Continue...",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch1211']
},
FrontPorch1211: {
          text: "Touring was amazing and lit up all the pathways that you had let die down to christmas lights. Even at 26 you recognized you were living in an age beyond rock and roll, an imitation age of cheap plastic. But somewhere as the miles passed underneath you, you grew to accept that life imitates art. The next 40 drove that point home with a vengeance. You have to fake it til you make it, keep thinking your actions have meaning. It was easier in the dark ages before cyberization really took off. Once you had all the information at your fingertips the only careers left were in archeology. Still, you created and created even as you got old and the audience dried up like your throat, like your new ideas. You lived an uncompromising life of individuality and now in your old age realize that even that individuality was predefined. Whoever is in charge left a road open for you. You took that path and were destined to be alone here.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD1211']
},
SOLD1211: {
          text: "A lightness fills you. Your sanctuary has been your own for many years and you are comfortable. But that light reminds you of being young. You have a yearning to see something new. Your legacy will be whatever it is. The benefit of not having kids, your body of work. You pull the 60 years of snippets and colors on the viewport and the sanctuary is turned into a narrative filled with people and realizations you've accumulated in your life. Maybe there's nothing new here, but there are some great clarities that helped you through a lot of troubling parts, like losing her. She was faster and more aware of what the populace wanted. You leave it up to the next generation of archeologists to vindicate your works, find merit in. At best you'll make it into a collage on the one of the indie feeds. Good enough. You pull up the general library registration page, scan your eye, and hit submit. Your life's work is uploaded to the hive. Enough regrets. Enough questioning. You are quite content with the things you've seen. No reason to keep going.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds1211']
},
Birds1211: {
          text: "You were part of a global movement of controllers, trading your energy for clickbait and processed food. Life was a matrix of choices: safety or freedom. The office life promised shelter, consistent food, sex with pixels or with persons of the same class. You couldn't think much of the tons of wiring and mining that went into creating your techno paradise. You wore blinders on the walk to the subway, commenting plithily on the neighborhoods changing, polite to your neighbors, who were polite back because the police batons beat those manners into them. You raged at your cubicle letting the patriarchs make belittling comments at the girl you thought you loved. You didn't do it, you weren't part of the problem. But slowly your neighbors were replaced by drones, coffee shops overtaking boedgas, vintage clothing shops growing out of the thrift stores. Where did those people go? You don't think it was internment camps, but eventually, your job done, your area gentrified, your money made, you retired to keep trading clicks for clickbait in the woods, leaving the city to its own solace. Your message will hopefully vindicate your cowardice. Future generations will learn from the wide body of work of the last generation to exist in analog, the last generation to sit with tape decks tuned into radio transmitters waiting to pirate songs when the jockeys chose to play them, giving the middle finger for no reason. You appraoch your wall monitor and rip out the wiring. The house begins shutting down, the air filters whir to silent stillness, and the artificial pumps in your heart stop squeezing. You feel your heart sputter, suddenly needing to provide its own power for the first time in over 20 years. You reel and lean back against the wall as the lights go out.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini1211']
},
Cassini1211: {
          text: "Your eyelids flicker, then close. As you've aged, you've grown dull as an old tube computer. Certain maxims and equations have plasticized in your brain like text burned into a monitor. Certain phenomena still excite you, like a passing satellite in between advertisements reflecting against your eyes. You dream of being an astral body. So much more has been discovered and in your dreams the discoveries come one after another like pieces of sand through a sieve. You are the astral body, plummeting through the atmosphere of Saturn, countless near misses with meteors in the ring's orbit. The heat rises around your metal frame, gears and screws and transmitters reaching their melting point. Layer after layer of alien atmosphere envelops you. You are the inquiring eye of humanity's curiosity. You are alone but you are everyone. You knew you could be that eye when you were young and in your dream you are outside of time. You crash onto the surface displacing alien dust. A solitary flag rises from your frame, a divining rod for all of Earth. Around you cities grow, then plants in a matter of teraoforming seconds, then atmosphere, and a bustling ecology grows out of nothing, the wake of all of human kind's mistakes made better here, as if saying 'our advancement undoes the sins of the past.'",
          choice1: "END",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">"
},
Cassini1212: {
          text: "These periods always pass. There have been hundreds of turning points that you, as a human, were unable overcome. Radical acceptance and mindfullness are things you learned years ago. Things constantly happen which are beyond your understanding. Your hormones will always beat against your skull, but you can learn to channel that beating into something else. Play a game. Call your kids. Watch the stars come out and let the yearning pull you wherever it wants to. You are lucky to have had the spectrum of emotional resonance you've enjoyed in your life. The thoughts still emerge and pass the way they did when you were younger, but you hold them less like a security blanket, wear them more like the flannel you pull over your shoulder. Universal income taught you to be a painter, to keep singing your songs of truth even as your throat dried up. Contentment in loss. Security in human achievement. You go out on your walk through the garden, the pines, and wait.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS1212']
},
DOS1212: {
          text: "When you were young, everything you tried to grow shriveled brown. Now your garden is vibrant, your lawn clipped to perfection. You've grown to nest, roosting while your progeny relive the activity of your younger years. Your cat nuzzles you, the dogs bark, and you have lost yourself in routine. The calm that comes with the loss is all you've known for years. You finish your stroll, enter the cabin, head straight to the viewport. You pull up a history feed, like in your youth you pulled up porn, and let the digital revery carry you back to being 26 and in love, before you had the perspective you have now. Life is a marathon and you've almost reached the end.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD 1.2.1.2']
},
SOLD1212: {
          text: "Back before it became so common place, before getting to the other side of the planet wasn't an afternoon excursion, and Mars a long weekend... no, back when newness had its own merit, when exploration still meant something to your young body and mind, 21 years pouring out of your head, you thought you only had 45 left and the newness of place sustained you. You are approaching the end of those 45, and you've been a busy bee: most of AmEryka in a dilapidated van, most of Europe on couches and favors called in. The companions shift and blur together, but the freedom still sings its swan song to you.",
          choice1: "Return to the Front Porch, let the sun set",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch1212']
},
FrontPorch1212: {
          text: "It's getting cold out, but you sit, and let the revelry carry you. You are 26 again and your bones melt back into pliance, strength. You have taken over Colin and Pete's porch. (what are they doing these days? You should probably check up on them) Beer cans and 711 cups are scattered agains thin wooden boards. Many of the cans sport squished brown butts peeking out of their mouths. Sean and Andrew finish a shirtless wrestling match. Half the gang is going to get gas and you get a moment alone on your first tour. How did you get back to Boston? You swore you'd never be coming back here, not after Frances. At 26 you can't imagine the depth of grit that can cake onto something, the sheer number of times you can paint over the same wall with new color. At 26, even after beating cancer the first time, your body simply doesn't break. You can sleep on floors, you can watch Crispy pump an air mattress with a bike pump, you can drink 100 beers and still scream your lungs out to the deity of punk rock. At 26, Frances still casts a Caesar's bestridden shadow over the thin, twisting Boston alley ways. That shadow is cut from the last intimate moment the two of you shared: her in a black dress, rouged, coquettish femme, turning around periodically to flash that smile made of engineer's schematics and tarot card readings. She won: your consolation prize a trash heap of shot sets and late nights, mind versus body in a titan's tumble of sleep seeking and distraction builds. You remember she won't decline for those type of guys and promised to avoid those rebel streets. Yet here you are, with a new crew and a new worldview. You'll be with Martha for a long time, the polar opposite of Frances, a tapestry with different secrets hidden behind it.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds1212']
},
Birds1212: {
          text: "A low flock of starlings flits in and out of the pines over the lake, which aches with its own quiet power in opposition to the technarchy that has blanketed the land in its wires. You got out when you could and watched the food riots and the eventual settling that accomponied then. How many cities destroyed, how many fields undone? And still, in the end, your own tiny world took precedence over all. It's been a good ride and you are content to watch from the safety of your home the world turn over. The birds flock the way the birds will flock and you sit in radical acceptance.",
          choice1: "END" ,
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">"
},
DOS122: {
          text: "She's fast asleep on the couch, color filtering in through the cabin windows. Wrinkled cheeks hold the glow, and she is the same girl you fell in love with 40 years ago. Life together has been bumpy. When you were young, you made it bumpy. As age and experience came, you learned that life makes its own bumps. By 50 you's finally learned the ride, and steadiness. Those early days, binging on Klonopin and booze until you vomited, rolling out of bed and doing it again. You took turns watching and leading, cleaning and preening. You still stay up watching her, but you've learned to just shut up. There's comedy in everything. You still want to kill her sometimes.",
          choice1: "Let her sleep",
          choice2: "Wake her up",
          choice3: "Kill her",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD1221', 'FrontPorch1222', 'Gravel1223']
},
SOLD1221: {
          text: "You watch the light change for a few more minutes before keying in dinner on the display pad hidden next to the fire place. You order the chore robots in sequence: silent vaccuum first, laminate spray on the counter tops, wood shine. The wood shine will finish with dinner, and she'll wake up to the smell of fresh pine and warm food. The chorebots move with silent efficiency. You could die in this room and no trace of skin or DNA would be left over as the robots do their job. This life is simple. You've accomplished more than half the goals you set in the early twenties, and even a dozen more. But the ritual is what's important. You would not still be here if you and she hadn't learn to embrace the ritual. Watching each other die young lost its appeal quickly. Quickly, over the years, the tasks that gave structure to older generations were taken over by computers. Without the ritual, you would languish, hooked up 12 hours a day to a monitor pumping you full of twitch signals to buy more useless colors to shine deeper in your eyes. The cabin has minimal aid, and peace. You are free to let your mind wander while the chores complete themselves.",
          choice1: "Wander down to the pond",
          choice2: "Check the newsfeed",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini12211', 'Gravel12212']
},
Cassini12211: {
          text: "You turn back outside and walk the beaten path to the pond. Jets are crisscrossing above with their quiet roar, undermining the call of the wildlife. A preserved area, with minimal human intrusion, here. Slackjawed as a teenager, you turn your head skyward, watch the stars and satellites blink into view. The three columns of light pollution to the south are to your back. You wonder for a moment what comes after this loose stack of moments you've accumulated over your life, whether there is some final tallying of the amount of life you put into the game. Then you let that thought fall, and you rise, reaching out to the timber, to the pond, to the sound of the frogs in their neverending mating dance. Your species has risen so far in such a relatively short time, somehow undoing all the sins of your parents generation.",
          choice1: "Investigate the frogs",
          choice2: "Poly Sci",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers122111', 'Poly122112']
},
Vespers122111: {
          text: "You wander down to the pond, keeping a sharp eye out for frogs peeking out of the water in the shallows. You are reminded of being 8 years old, and suddenly you are again. You and Tyler will live forever, as well as you know, and you are masters of the puddle. Each summer, hours are spent lying in perfect stillness, waiting for a frog's head to break the surface; then the soft stalk, the poise, and the sudden rush to grab. You keep your captured prey in a bucket near the edge of the water, and each summer, your prise, the 8 inch bull frog, gets caught at least once. These summers are imprinted in you, and you can't say why they always play so vividly. And the one day when his dog got into the bucket, undermining your altruism, emerging with the bullfrog dangling from its jaws. You both run over and you've never wished to hurt an animal before. Your days catch hop with moblike intensity back to the pond, even the bloodied bull frog. Summers past this one, you'll find her/him floating with a scarred eye, and the guilt of your failures stays your hand. Tyler died young in a haze of drug recovery and Lovecraftian horrors, a dogs jaw that pulled him up and away. You didn't make it quickly enough to pull the jaws apart, leading him back to the pond.",
          choice1: "Front Porch",
          choice2: "Gravel Pit",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch1221111', 'Gravel1221112']
},
FrontPorch1221111: {
          text: "Time passed, and looking back it was a blink of an eye, a fork in the path that means everything to your current state. Loss and failure seeped into yoru cubicle, freely passing your data to the miners with every refresh. You languished, fell in and out of a petty love, but the ghost of your dead or lost friends followed you down every alleyway. You swore away from Boston and sank into your cushioned office chair. Until you realized that freedom trumped security. You turned in your notice and took to the road, stopping where you could to ply your trade. Soon your wights cheered you on, lauding your free expression escape compared to the drug den escape they had found. The office still loomed, and the love you'd left behind peering out at you like Rapunzel with binoculars. Eyes to the road, you flipped the bird and held your priveleges tight. They languished and were trapped in the tower. None of them escaped the city, while here you are, enjoying the freedom of open air. And somehow, she stayed with you all those years. She wakes up when you brush her hair back and you are grateful for the moments you've had together.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly1221111']
},
Poly1221111: {
          text: "Transitions aren't easy. The blustery wind of freedom knocked you into too many bar basements. You adjusted, solace in the inevitability of everything. Blowing a goodbye to the old life, you embraced freedom while the rest of the world shackled itself. Your companion, still asleep on the couch, pulled you down from the pulpit to your knees. There you stayed, letting the years wash over you, middle fingers held up to the buses carting people to their cubes.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel1221111']
},
Gravel1221111: {
          text: "..........................................................................................................................................................................................................................................",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds1221111']
},
Birds1221111: {
          text: "Baby, dinner's done. It smells great in here. The gang's all here. The satellites beam down on you and you smile to yourself, giving them the finger. The city is far behind you, you gave nothing up but your anxieties. How many more days like this? Probably, the answer doesn't matter. You are free to head inside, eat your meal, maybe make love, and see tomorrow.",
          choice1: "END",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">"
},
Gravel1221112: {
          text: "Too many friends, cut down too soon. You always dreamed you would be among them, before resetting your life and seeking simplicity. If they just could have hung on a little longer for the improvements to medical technology that keep you alive: the nanobots, the smart bacteria, the organ chia pets. In your minds eye, you walk through the huge piles of gravel, analogs for graves of the friends who didn't make it to 40 and missed out on the advancements.",
          choice1: "END",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
},
Vespers13: {
          text: "Melody over the sea, before the sea riposted and all the coastal towns were lost. The US body fell apart, leaving a mess for the next generations to inherit. Those festivals, steeped in the tradition of feast and famine, life and death, were a shaman's rebuttal to the ravages of time. They were a pole stuck into the ground, defying weather to tear it down. A strong challenge, sure, but time wins, always. New Orleans, Mobile, half of Florida are underwater now. New York is surrounded by water walls, manned by AI, and still buildings are knocked over in the rainy season every year. . . . . . . . . . . . The chimes sing their time song. A wind is coming up over the pond and you shiver. Hot one minute, shivering the next, this is your life now. How did you get so old when so many others didn't make it? We were supposed to live forever by now, not just live under more digital fascism and a new world of underground railroads. We gave up choice for comfort and now the verdant fields are just gravel pits. This place, the place you wish to die in, is one of last hold outs to the waves buoyed by methane and carbon emissions, the same wave of apathy that gave way to a police state. You shake your head. Out of the corner of your eye, you see movement.",
          choice1: "It's nothing. Settle in for another night.",
          choice2: "Investigate your Front Porch",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['AftertheHeat131', 'FrontPorch132']
},
AftertheHeat131: {
          text: "You blink. It was nothing. Things are the way they are. The sun has almost settled into its bed over the trees. You are old, so you try less. Since time memorial, it's always been that way. You stumble into your cabin, cracking another can, and set the chorebots to work. They tidy up your little messes while you undress. This is the ease your parents' generation prayed for, the life boat of automation that your peers built while you crisscrossed the country, selling your art to a disinterested audience, watching the decay settle in. Night comes, and the sun will rise tomorrow. You slam your beer and settle in to wait.",
          choice1: "Crack another beer",
          choice2: "Go for a night walk",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly1311', 'Cassini1312']
},
Cassini1312: {
          text: "The beer is slammed in silence. As you sip through muddled thoughts, something like Miles Davis sings to you. You move to put a record on, before remembering you don't have any recordings anymore. You invested too much in streaming and lost all your physical copies. Better to go walk outside. . . . . . . . . . . . You take a flannel from its place above the door achingly walk down.  step out past your carefully tended garden and trimmed grass down to the beaten path to the pond. Jets are crisscrossing above with their quiet roar, undermining the call of the wildlife. A preserved area, with minimal human intrusion, here. Slackjawed as a teenager, you turn your head skyward, watch the stars and satellites blink into view. The three columns of light pollution to the south are to your back. . . . . . . . . . . . . . .  You wonder for a moment what comes after this loose stack of moments you've accumulated over your life, whether there is some final tallying of the amount of life you put into the game. Then you let that thought fall, and you rise, reaching out to the timber, to the pond, to the sound of the frogs in their neverending mating dance. Your species has risen so far in such a relatively short time, somehow undoing all the sins of your parents generation. . . . . . . . . . . . . The sun has set now. What have you been doing? The pond frogs begin their mating song and the satellites mix in with the stars. The chill is real as your pacemaker starts singing to you with its steady rhythm. They don't install these anymore. Better go inside, though.",
          choice1: "Go inside",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS1312']
},
DOS1312: {
          text: "Back inside, you pop a microwavable into the box and hit start. You pop a heart pill and pour a small glass of brandy. You call out to your system to cycle a random arrangement of 1950's cartoons, 1970's art house, and observational videos of liver surgery at 5 minute intervals while you wait. As the system springs to life and dims the lights, you notice a message flashing on a panel. Your first thought is that your spam filter must be broken: You haven't had a message that wasn't about switching heart monitoring services or discount life insurance in as long as you can remember. A cute dormouse runs past your feet and into a corner, nibbling on a loose crumb. Must be a sign. Something in the air is changing. You remember a Murakami line from somewhere deep in your memory: 'There is only ever one reality'... well this must be the one where someone got a wrong number. The microwave rings a chime. You pull the plastic off the top and let the steam wash over your wrinnkled nose: you can almost smell what's in there. You settle down on your ergonomic in the middle of the room, sip the brandy, and play the message. The random images pause and an old face you haven't seen in years floats a comfortable distance from your face. Stacy has aged well, remarkably well, even. She looks younger than the day she gave you condolences at Martha's funeral. You know you look a good 20 years older. The countryside is supposed to help this kind of shit, you can't imagine how she has stayed so fresh down in that cesspool of the city. 'I know you want to be left alone, but one of your old pieces has been dug up in an art school archaeology class. I don't know if you've seen the feeds, but your work is suddenly a cultural landmark. I need you to come to the City and update all the paperwork. Also, give a lecture or too. I know you want to be left alone, but after this, you won't have to worry about anything for the rest of your life. No more microwavables unless you want them. Can you be here by tomorrow?'",
          choice1: "Come down off the mountain",
          choice2: "Say Fuck It. Your past is your past and you want nothing to do with it anymore",
          mp3:  "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch1312', 'Start']
},
Poly1312: {
          text: "Back in the city, it's hard to place yourself. Many of the streets have been rerouted and almost no prewar buildings still stand. The style is all refractive glass and you can almost feel the bleed of the scanners tracking you and reading your vitals. When you were young, you weaved in and out of the crowds, cursing every old person taking up too much sidewalk space with canes and slow gaits. Now you are the hunched old man, but still you walk faster than these young idlers and the AIs (so polite they make you sick). You light a cigarette and weave, and for a moment you almost feel like you're in the city you remember. The signs are LED, not neon, but you're sure your grandfather felt just as stange when the wood signs changed to neon. The juice bars and boutique clothing stores have been replaced by vape shops and recharge blocks, but the vibration of millions of feet stomping thousands of miles of pavement is still the same, even if some of those feet are elevated. People still stop to gawk, people still beg in corners, and people still havne't learned how to walk. . . . . . . . . . . . . You have an hour before you are to meet your editor and pull into a bar for a shot and a beer. The shape of the room looks familiar to you, and you realize this was the last bar where you and Kate went together for your last talk before the end of everything. You huddled close under the electric lamp, holding each other with eveyrthing you had left in your tank, two shivering birds on a dead branch in winter. . . . . . . . . . . . . You would have kept shivering there forever, waiting for a spring that never could have sprung. She left and you died a little bit, changed your life around and shot down the path to self sufficiency. So strange to be back here. You take your shot, let the burn place you back 45 years, and move to the back yard. Cigarettes have long been outlawed, but you're too old to give a damn. Besides, the young kids only use backyards in the summertime. They wouldn't be caught dead out here in the cold. You pick a seat across the courtyard from the bench the two of you shared all those years ago and sip beer. . . . . . . . . . . . . . . . . . . . . . . . . How many goodbyes like that have you had? You're sure the number is in the dozens at this point. Each one molded you slightly differently, taking a slightly different piece of you into the seats you sat in to say your goodbyes; the biggest, of course, was Martha, but too many were taken too soon. It's like losing pitch frequencies. Each hum as it goes out is totally unique, but in the end you end up in the same place: deaf.",
          choice1: "Go meet Sid",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD1312']
},
SOLD1312: {
          text: "You finish your beer and head out the bar. The city is still similar enough. You pick your way through the streets and end up at her building. It is all black glass and silver. Short for the neighborhood, it only goes up 60 stories. You try the door, but it is locked. You find a panel with a hand print reader on it. You put your hand up to it and a bulging eyeball pops out. It asks your name and who you are here to see while scanning your retina and pricking your hand in 3 spots for blood samples. Seems like a lot of security for a publicists office, but maybe this is just standard for the City. Apparently you pass the requisite checks: the eyeball recedes into its panel and the door opens. Lights line a walkway cut into reflective black tiles towards an elevator. You step in, fumbling with change while the elevator rises slowly, so slowly you can't register its motion, towards the 37th floor. The elevator arrives at its location without any change and the door slides open. You are greeted by a sleek AI receptionist, who welcomes you and offers coffee. She ushers you in to Sid's officee"
},
//>> She asks if you have any new work. You say you don't, but your robot does. Does it count as your work or the robot's? Is it yours? Or is he your son's?
Poly1311: {
          text: "You indicate to the air and pull up your timeline. You flick through the photographs from your life at 8x speed. These photographs, taken by people who are now mostly strangers, are more real than the memories themselves when the photo was snapped. As the years progress, they bleed into the third dimension: your first show, your first tour, the first bass you caught, your first child being bored, the laugh lines on Martha's face dampening, the fascist protest, your time lapse of you at the Mardi Gras. The frequency slows down as you age. You picked your own path the whole way to the bank until you and Martha, satisfied with the Venn Diagram of your influence, picked your own final nest. It's so lonely here without her. You flick off the timeline and clear your head until your own memories overwrite the stream you just dived into.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS1311']
},
DOS1311: {
          text: "A year after tour, summer is back again. You are stopped by the realization that these are indeed your formative years and you're already spending days trying to recapture old feelings that have burnt out, replaced by sizzling acceptance. You have a quiet epiphane that all fires have to burn alive to live and that motion always moves to stillness, heat always to cold. You're a year too old to party like you used to (oh how your bones will really creak in the future, how they will inhale the cold of the day and remind you of cracked crystal). Martha's eyes, by pattern either so warm and comprehensive or blurred and focused on a far off space, are closed. The day was spent in the sun, getting to know new and old friends in a sun kissed backyard. The undoing of the world looms like winter in the occasional gust of wind carrying through the backyard. You've spent the day peppering everyone around you and in this moment, know you will recreate 21 and stay up until sunrise. She sleeps it off after two incredible rallies. The memory of burning settles into your still strong arms; most of everyone you know is still alive. You are surrounded by city, and nameless others have lived out the same last chance day in the sun that you have. The sun is setting and you know you will remember the orange cut of atmosphere settling into peaceful night, even here in the third most crowded city on earth, long into your reclusive future.",
          choice1: "Zip forward",
          choice2: "Zip back",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD13111', 'FrontPorch13112']
},
SOLD13111: {
          text: "It's strange how getting married insulates you. You need all your energy to pass your genes along and make sure the kids don't die. You and Martha never learned to embrace the ritual and soon the day in and day out of watching the kids took over everything. Who could have known that repeating themes could be so exhausting. You kept your bad habits as the stress levels rose, and before your youngest was out of the house Martha succumbed to a cancer that would be cured within 5 years of her passing. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Watching her die young wasn't fun. it took years to move past it, but you grew more comfortable alone. And alone you remain, though her echoes still bounce off her things which you've left up as a shrine in the cabin. Still, you can mostly stomach weddings, now, even if you need to step away for a cigar once or twice before the ceremony wraps up. These days, weddings and funerals are some of the few times anyone bothers to get together in person anymore. Young lovers on the other side of the planet from each other plug into simulations and kiss in their minds until the sun comes up. Physical laborers are always plugged into newsfeeds, sitting in armored exoskeletons with plugs directly into the pleasure centers of their brains. Immersive films where you are the star, running through the action on a conveyer belt in your own living room are enough exercise for most. You don't bother too much with simulation, but you can't blame the people around you for following the path of least resistance, for sinking into delights and stimulus. Still, it gets lonely, and you go to every wedding you are invited to, every funeral you are notified of.",
          choice1: "Every once in a while, you remember her like she's still ther beside you",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel131111']
},
Gravel131111: {
          text: "Watching her perform, watching people love her as much as you did, getting close, fading out, getting close again, the minutae of the relationship, the different ways you each held chopsticks or a toothbrush, the mush you'd make for her that no replicator could ever do justice, the specific pressure that only her hands could put on the the back of your neck, the weight of her arm draped around your shoulder, the signs of affections that didn't change as you aged, the weight you both put on in the face and the paunch, then the weight she lost so shockingly quickly, the color that was there as the flesh still formed but disappeared with such rapidity as decay settle in. Putting her in the ground was the last straw. You sold most of your belongings and became the bearded monk. Your biggest regret in life is how you weren't able to be there for your kids, the friends you fell out with. Everything reminded you of her, every hole looked like her hole. Middle aged, you took step after step to get closer to the grave. A 5 year binge around the world, until you had nothing left except enough for a down payment on this cabin. You slowly opened up to your family, but it was always at a distance. You were never the same.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds131111']
},
Birds131111: {
          text: "You are 25 years old and sitting on the Front Porch of your cabin. You are holding a key in your hand, a tie around your neck. If you walk inside you will immediately age, fuck through a series of boring trysts and high stress friendships. Martha is beckoning you to follow her out to the pond. A hundred people are waiting down by the pond, grilling, drinking, and painting. Everyone is equal now, the patriarchy replaced by technarchy. A hundred paths move off of them like heat off of pavement, evaporating into end points. You go inside and wash your hands, the hundred aging before you. Martha, 30 now, starts walking over to the barbecue, 45 and her glamorous actualized self by the time you get there. In the minutes it takes you to wash your hands, you are deathbed age and the party has mostly broken up by the time you reach the pond.",
          choice1: "Sit and wait",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch131111']
},
FrontPorch131111: {
          text: "You key into your handheld a vibrant punk song you remember from youth. You are unstuck in time and for a few brief minutes, the age leaves you. You are dancing a violent mosh, alone. You are sure some satelite monitor is laughing at this old person swinging shriveled arms and legs in their backyard, ignoring the stabs of pain in your old joints. You allow yourself to feel alone and young, to ignore consequences. The song carries you until it runs out and you collapse on the grass, exhausted. You watch the stars and satellites come on, wondering if you'll ever get up again.",
          FrontPorch: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini131111']
},
Cassini131111: {
          text: "................................................................................................................................................................................................................................................................................................................................................................................................",
          choice1: "END",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">"
},
FrontPorch13112: {
          text: "You are 26 again and your bones melt back into pliance, strength. You have taken over Colin and Pete's porch. (what are they doing these days? You should probably check up on them) Beer cans and 711 cups are scattered agains thin wooden boards. Many of the cans sport squished brown butts peeking out of their mouths. Sean and Andrew finish a shirtless wrestling match. Half the gang is going to get gas and you get a moment alone on your first tour. How did you get back to Boston? You swore you'd never be coming back here, not after Frances. At 26 you can't imagine the depth of grit that can cake onto something, the sheer number of times you can paint over the same wall with new color. At 26, even after beating cancer the first time, your body simply doesn't break. You can sleep on floors, you can watch Crispy pump an air mattress with a bike pump, you can drink 100 beers and still scream your lungs out to the deity of punk rock. At 26, Frances still casts a Caesar's bestridden shadow over the thin, twisting Boston alley ways. That shadow is cut from the last intimate moment the two of you shared: her in a black dress, rouged, coquettish femme, turning around periodically to flash that smile made of engineer's schematics and tarot card readings. She won. Your consolation prize was a trash heap of shot sets and late nights, mind versus body in a titan's tumble of sleep seeking and distraction builds. You remember she won't decline for those type of guys and promised to avoid those rebel streets. Yet here you are, with a new crew and a new worldview. You'll be with Martha for a long time, the polar opposite of Frances, a tapestry with different secrets hidden behind it.",
          choice1: "",
          mp3:  "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['']
},
FrontPorch132: {
          text: "You rise from your chair, creakily, and walk to the edge of your porch. There is another flash of something flitting around the house, about the size of a rabbit. You pull down the shotgun from its rack and move carefully around the corner of the house the way you used to watch John Wayne do. The chimes sound again, but they grate your nerves this time. Turning the corner, another flash, then the sound of your back door slamming. You run as quickly as your locked knees carry you and try the door. It's locked. You feel in your pockets but you left your keys inside. You try a window. It's also locked. You peer into the main room but see no one, see nothing but your furniture and decorations.",
          choice1: "Break the window, climb inside.",
          choice2: "Continue looking.",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel1321', 'SOLD1322']
},
//Consider adding a "return to save point" here, where you go back to Adventure1
Gravel1321: {
          text: "You smash the window with the butt of your shotgun, sweeping the broken glass away. Still, heaving your old meat through the window, you manage to slice a huge gash into your arm. You curse under your breath and call out a warning to whoever is in. You hear a sound from the liquor cabinet and turn to see an impish creature tossing a bottle of good rye. It is disturbing to look at, something out of a deep dungeon sim. It has a snout is shaped like a coyote's, but it's teeth protrude at odd angles around and through the muzzle. It has long ears, leathery skin, and a distended belly, to which its sticklike arms and legs are attached. The bottle is almost the same size as the creature, and its is nearly empty. How could it have swallowed so much? Where could the liquid even go? The creature smacks its lips and puts the bottle down and notices you, and yips loudly in surprise.",
          choice1: "Shoot the creature",
          choice2: "Run!",
          mp3: "<source src=\"./music/LongBuild.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Adventure1','Adventure2'],
          game: "Yes"
},
Adventure1: {
          text: "The creature sees you and you see the creature, and though it is utterly alien, you recognize intent in its eyes, just as it recognizes the intent behind yours. You cock the shotgun and point it at the creature, but before you can pull the trigger, a stabbing pain screams from your ankles. Tiny but strong hands pull the legs out from under you and you go down on your back, cutting your forehead on broken glass as you fall. Two more creatures are biting and scratching you, making the same unintelligible high pitched yips of the drinking imp. It appears in the broken frame of your window, pointing with its claws and your bottle of rye. It leaps onto your chest, its sneer inches from your face, and smashes your head with the bottle. You lose consciousness with a dull think.",
          choice1: "Wake Up...",
          nextChoice: ['Adventure3']
},
Adventure2: {
          text: "Whatever you had been execting, this goblin was not it. You turn around and run as fast as your old legs can carry you. Before you even get down the front steps, tiny but strong hands grab at your ankles and you fall to the ground. More of the creatures swarm you, overwhelming you with their strength. Before you know it, you are tied up and being dragged up the steps. The creatures pull back the throw rug and reveal a trap door that you've never seen before. It is pulled open with a creak, descending to a basement you never knew you had. What is happening? you think to yourself as your head smacks against the top step, knocking you out.",
          choice1: "Wake Up...",
          nextChoice: ['Adventure3']
},
Adventure3: {
          text: "Your vision comes back slowly. Everything around you is red. You realize it's because there is blood in your eyes. You wipe it away. You are in a small storage closet. There is an exit to the North.",
          choice1: "North",
          choice2: "Inspect the Room",
          nextChoice: ['Adventure4', 'Adventure5']
},
Adventure4: {
          text: "The door is locked. No amount of pulling on the door will open it.",
          choice1: "Inspect the Room",
          choice2: "Get into the fetal position, saying there's no place like home",
          nextChoice: ['Adventure5', 'Adventure6']
},
Adventure5: {
          text: "You are in what appears to be an empty storage closet. Somehow you know once this was for storing grain years and years ago, but no grain has been left here in quite a long time. The walls here are cut stone and very damp, the ground dirt. The door is a heavy oak with a latch on the outside. You are surprised to know this exists under your house. As far as you knew, the cabin was relatively new, no more than 30 years old. But this feels like a 18th century grain storage basement. Strange. Your body is covered in bruises from being dragged along the floor and your head aches something fierce. The room is lit by a gas lamp hung from a nail near the door.",
          choice1: "Get on your knees and play in the dirt",
          choice2: "Get Lamp",
          choice3: "Feel around for a loose stone",
          nextChoice: ['Adventure6','Adventure7','Adventure8']
},
Adventure6: {
          text: "You lay on the floor in the method you've described, babbling to yourself like a scared child, digging symbols into the floor. Eventually, the door opens and the creatures appear, dragging you into the hallway. Despite your screams of pain and fear, they drag you through the darkness chittering loudly.",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure7: {
          text: "Lamp taken. The shadows changes as you move around the room.",
          choice1: "Get on your knees and play in the dirt",
          choice2: "Feel around for a loose stone",
          choice3: "Throw the lamp",
          nextChoice: ['Adventure6','Adventure9','Adventure10']
},
Adventure8: {
          text: "You run your hands along the stone wall, prying desparately at the rocks stcked there, but they are all solidly in place. Eventually you are able to find a stone slightly looser than the rest. With enough pulling you are able to pry it off of the wall. It is a good sized stone, about the size of a football, and very heavy.",
          choice1: "Smash the door handle with the rock",
          choice2: "Smash your skull with the rock",
          choice3: "Get lamp",
          nextChoice: ['Adventure13','Adventure12','Adventure11']
},
Adventure9: {
          text: "You run your hands along the stone wall, prying desparately at the rocks stcked there, but they are all solidly in place. Eventually you are able to find a stone slightly looser than the rest. With enough pulling you are able to pry it off of the wall. It is a good sized stone, about the size of a football, and very heavy.",
          choice1: "Smash the door handle with the rock",
          choice2: "Smash your skull with the rock",
          nextChoice: ['Adventure14','Adventure12']
},
Adventure10: {
          text: "You hurl the lamp with all your might at the door. It smashes brilliantly in a cloud of broken glass and flame. Then the light goes out. You are blind as a bat. Fumbling around the storage closet, you cut your hands on broken glass. Eventually, the lock on the door slides open and you feel hands all around you, dragging you through the tunnels",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure11: {
          text: "Lamp taken. The shadows changes as you move around the room.",
          choice1: "Smash the door handle with the rock",
          choice2: "Smash your skull with the rock",
          choice3: "Throw the lamp",
          nextChoice: ['Adventure14','Adventure12','Adventure10']
},
Adventure12: {
          text: "You do not fully comprehend how you got here but you are resolved to leave on your own terms, not on the terms of those awful impish creatures who brought you here. You set your feet and take the rock in both hands, which are shaking quite badly now. You've never been a person of action, but this will be your defining moment. With a moment of pure resolve, you take the rock and smash it into your head. Apparently not hard enough to end it all, because you wake up being dragged across a long dirt floor.",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure13: {
          text: "You take the rock in both hands and run at the door like a valkyrie, yelling a battle song, and bring the stone onto the door handle with all the strength you can muster. The handle is loosened from the door, disconnecting it from the bolt outside. It falls to the ground. By throwing all your weight at the door, you are able to push it open. There is an exit to the north.",
          choice1: "Get lamp",
          choice2: "North",
          nextChoice: ['Adventure15','Adventure16']
},
Adventure15: {
          text: "Lamp taken. The shadows change as you move around the room.",
          choice1: "North",
          nextChoice: ['Adventure17']
},
Adventure14: {
          text: "You take the rock in both hands and run at the door like a valkyrie, yelling a battle song, and bring the stone onto the door handle with all the strength you can muster. The handle is loosened from the door, disconnecting it from the bolt outside. It falls to the ground. By throwing all your weight at the door, you are able to push it open. There is an exit to the north.",
          choice1: "North",
          nextChoice: ['Adventure17']
},
Adventure16: {
          text: "You are in a pitch black hallway. Passages seem to continue to the East and West.",
          choice1: "East",
          choice2: "West",
          choice3: "South",
          nextChoice: ['Adventure18','Adventure19','Adventure20']
},
Adventure17: {
          text: "You are standing in what seems to be a dirt tunnel. Your light extends a good 20 feet into the darkness. The passages continue to the east and the west. There is a storage closet to the south.",
          choice1: "East",
          choice2: "West",
          choice3: "South",
          nextChoice: ['Adventure24','Adventure25','Adventure23']
},
Adventure18: {
          text: "You move down the passageway to the east, dragging your hand along the wall for balance in the darkness. The path continues for a while, how much time passes you can't tell. You get the distinct impression you are being followed, an the heavy breath you suddenly feel behind your neck confirms your suspicions, too late. You have been eaten by a grue.",
          choice1: "END"
},
Adventure23: {
          text: "A storage closet. There is an exit to the north.",
          choice1: "North",
          nextChoice: ['Adventure17']
},
Adventure24: {
          text: "You move down the passageway to the east, through the same featureless dirt tunnel. There are small holes in near the floor of the walls, but they are too small for you to crawl through. Perhaps they are rat holes, but if they are, they are no rats you would ever wish to meet. After walking for 15 minutes, you come to a dead end.",
          choice1: "West",
          nextChoice: ['Adventure17']
},
Adventure25: {
          text: "You move down the passageway to the west. The tunnels snake south and north, but move in a generally westward direction. Eventually, you hear the sounds of high pitched voices engaged in some hellish discourse. You see a dim light ahead of you.",
          choice1: "Continue...",
          choice2: "Turn off the lamp and investigate",
          nextChoice: ['Adventure26','Adventure27']
},
Adventure26: {
          text: "There is an alcove to the south and the passageway continuing west. You hold your lamp out as you poke your head around the corner, to see what's in the alcove. The three impish creatures are roasting rat carcasses over an open fire, which seems to be fed off of raw sulfur. The smell is almost unbearable. The big green one is laughing while the other two fight for scraps. They are truly horrible little creatures. As soon as they see your light, however, the big one poitns and lets out a blood curdling scream. You try to run but they are faster. You feel the familiar vice grip of their tiny hands as they pull you to the floor, and you are being dragged again futher west.",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure27: {
          text: "You gingerly turn down the oil on the lamp and poke your head around the corner of the alcove to the south. The three impish creatures are roasting rat carcasses over an open fire, which seems to be fed off of raw sulfur. The smell is almost unbearable. The big green one is laughing while the other two fight for scraps. They are truly horrible little creatures. So far they do not seem to notice you.",
          choice1: "Continue West",
          choice2: "Throw your stone and run for it",
          nextChoice: ['Adventure28','Adventure29']
},
Adventure28: {
          text: "You hug the wall to the north and try to sneak by the creatures. You do your best to become one with the shadows but you are out of practice in the twilight arts. The small purple one looks up from its meal of rat and points a long finger at you, letting out a high pitched yip. The three jump into action ad you try to run for it, pulling you to the ground. They begin dragging you through the passageway in the direction you were already moving.",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure29: {
          text: "You take aim at the biggest imp and hurl the stone with all of your might. It catches him square in the back of the head and he falls unconscious into the flames, scattering the rat meat. The other two waste no time, rushing his body. You can't tell if they are trying to help him or finish the job, but you sprint past with all the speed your old bones have in them. You rush headlong down the path for an interminable amount of time, your footsteps echoing through the passageway. Eventually, you stop to catch your breath. It does not sound like you've been pursued.",
          choice1: "Continue West",
          choice2: "Turn on lamp",
          nextChoice: ['Adventure30','Adventure31']
},
Adventure30: {
          text: "You continue to plod along the tunnel, holding onto the wall for support. Suddenly, there is no more ground beneath your feet. You are falling, 5, 10 feet, and land heavily on more dirt. Before you can get your bearings, you hear the heavy breathing of a creature you'd only encountered in your nightmares. You never thought, in all those years playing adventure games, you would actually die as a meal for a hungry grue.",
          choice1: "END"
},
Adventure31: {
          text: "You turn the gas back up on your oil lamp. Its light is a welcome reprieve from the darkness. You are in an identical passageway.",
          choice1: "Continue West",
          choice2: "East",
          nextChoice: ['Adventure32','Adventure33']
},
Adventure33: {
          text: "The imps are back there! You just barely escaped with your life! What's wrong with you?",
          choice1: "Continue West",
          nextChoice: ['Adventure32']
},
Adventure32: {
          text: "You continue down the passageway until you finally come across a set of stairs. You let out a huge sigh of relief and plod up them. You push open the trap door and are back in the living room of your cabin, the smashed bottle of whiskey still literred on the floor. You drag the heaviest object in your house over the trap and fall to the ground, crying. You don't know what you did to deserve it, but you are grateful to be alive. After the sobbing stops, you realize you can't stay here anymore. You need to warn someone, but you must collect your thoughts first. You book a room in a local hotel and leave your cabin to the devil.",
          choice1: "Cope the only way you know how...",
          nextChoice: ['Cassini2222']
},
Adventure19: {
          text: "You move down the passageway to the west, dragging your hand along the wall for balance in the darkness. In the darkness, your hearing gradually becomes more precise. Eventually, you hear the sounds of high pitched voices. You move cautiously down the hallway. A dim light gradually comes into vision around a corner. You sneak up to the turn in the passageway quietly, as if your life depends on it. The three impish creatures are roasting rat carcasses over an open fire, which seems to be fed off of raw sulfur. The smell is almost unbearable. The big green one is laughing while the other two fight for scraps. They are truly horrible little creatures.",
          choice1: "Continue West",
          choice2: "East",
          choice3: "Throw your stone and run for it",
          nextChoice: ['Adventure21','Adventure16','Adventure22']
},
Adventure20: {
          text: "A storage closet. There is an oil lamp here and an exit to the north.",
          choice1: "North",
          choice2: "Get lamp",
          nextChoice: ['Adventure16','Adventure15']
},
Adventure21: {
          text: "You decide they are too concerned with their rat meat to pay you any mind, but as soon as you continue down the passageway, they all pause, then scream a blood curdling scream. You try to run but they are faster. You feel the familiar vice grip of their tiny hands as they pull you to the floor, and you are being dragged again futher west.",
          choice1: "Continue...",
          nextChoice: ['Death']
},
Adventure22: {
          text: "You take aim at the biggest imp and hurl the stone with all of your might. It catches him square in the back of the head and he falls unconscious into the flames, scattering the rat meat. The other two waste no time, rushing his body. You can't tell if they are trying to help him or finish the job, but you sprint past with all the speed your old bones have in them. You rush headlong down the path for an interminable amount of time, your footsteps echoing through the passageway. Suddenly, there is no more ground beneath your feet. You are falling, 5, 10 feet, and land heavily on more dirt. Before you can get your bearings, you hear the heavy breathing of a creature you'd only encountered in your nightmares. You never thought, in all those years playing adventure games, you would actually die as a meal for a hungry grue.",
          choice1: "END"
},
Death: {
          text: "The imps shriek in delight as they approach a big hole in the passageway. They heave you over the side and you tumble down 10 feet into a pit. Their shrieking and whooping recedes down the passageway, back the way they came, to the east. You feel a dull pain in your side as you realize at least a rib or two is broken, and maybe a shoulder is dislocated. You struggle to stand and are accutely aware of another presence in the pit with you. You wave your hands, trying to ward off whatever it is, but in the pitch darkness, you see nothing. You hurl your stone and hear it connect with the dirt of the pit. Knifelike teeth sink into you. You have been eaten by a grue."
},
SOLD1322: {
          text: "You keep your eyes peeled to the window, jumping at shadows. You notice movement again near the kitchen unit. To your amazement, a tiny green imp stumbles from around your counter holding a bottle of rye nearly as big as yourself to its mouth. Half of the rye is gone and you feel a flush of anger. Another creature, this one pink comes running down the stairs tossing clothes as it does. Another, blue, appears to be eating through one of your couch cushions. They meet in the middle of the big room passing the bottle back and forth and making horrific gestures. You're supposed to be starting dinner on. This is ridiculous. In your frustration, you drop the gun, which slams against the wall.",
          choice2: "Move away from the window and hide",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini13221', 'DOS13222']
},
DOS13222: {
          text: "You snap your head away from the window, and not a moment to soon. The imps' heads were twisting uncannily to look at the source of the noise. What is even happening. Four more tiny hand grab you and you feel youself get pulled to the wooden beams of your front porch. Their faces are full of tiny teeth, their eyes full of malice. You are bound before you know it, being dragged along the floor into your house, througha  trap door in the middle of your living room you never knew about. You hit your head on the way down.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Adventure3']
},
AftertheHeat2: {
          text: "An hour has passed since you finished your garden work and took your seat.  The day is still and hot. In the twilight of your life, the big thoughts of youth have been thought and catalogued, put away somewhere in the back of your brain. Is there something you'd rather be doing than sitting and waiting for another meal? You could call one of your brothers, sisters, nieces, nephews. But why? They don't care what you have to say, and frankly, you don't care either. You could call your ex-spouse, but she doesn't remember who you are. It was a good morning but by night the world weight coats your skin like a film. You are sluggish, and by rote, you enter your cabin through the back door.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch2']
},
FrontPorch2: {
          text: "Your small cabin is tidy and spartan. An unused guest room and a bedroom, an economical Hub unit with low quality hologramming, a kitchen and 3 or 4 chorebots. You wash a dish, a fork, a knife from the pile in the sink. You start dinner. You set the chorebot to its task and put on a backround meditation. The sunlight flits in through the open window, broken occasionally by birds rising and falling in the dying day. You go about your tasks with practiced precision. You've grown accustomed to this path and your hands and feet move with experience. Your head is still abuzz with half remembered tones of the voices of the people you knew, the words forgotten, the tones coagulated into an rotating orb of noise that rattles around in your old brain. Life isn't too exciting anymore, a steady march towards an end you won't know. You live in comfort, but that's it.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers2']
},
Vespers2: {
          text: "A bell rings, your food is done. You take it out of the dispenser and set it to table. You attach the vapor plugs to your nostrils, inhaling the scents of cooked meat, salt, gravy. Eating in silence, your eyes fall on the shelf of work awards you collected in your 30 years laboring in the City. Each is jauntily cut from glass to look like crystal, boasting accolades like 'Team Leader' and 'Highest Seller.' Retired now, you have no connection to the achievements that earned you these plaques but a dim hum that is supposed to represent pride fills you when you look at them. You droned through work the way you drone through retirement. The food loses taste in your mouth and nose as the catalog of little injustices opens itself in front of your face. Your old back, stooped in the shoulders; old head, hanging just inches from the table. You had a choice once, to be free, but the security of petty achievements in a cubicle guaranteed food and shelter. You turned down the tour, the bird in your head throwing itself against its cage bars, but the bars held and the lock stayed unpicked. The bird was a barometer; you learned to perpetually ignore any impulses that flared when its wings flapped. You rose to senior Vice President at a respected firm, stored a nest egg, and retired here, alone. You descend from the mountain once a year for Thanksgiving at a brother's house. Gift giving was outlawed years ago, and with it died Christmas. You remember one of your brothers asking why you wouldn't buy an AI to raise as your own. You remember laughing at him,. 'I've gone this far already. I'm fine with my little life and proud of my achievements.'' I don't need another plug to feed. Looking up over your microwavable at the awards, you feel the bird flapping against you.",
          choice1: "Polish the awards",
          choice2: "Listen to the bird",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds21', 'DOS22']
},
Birds21: {
          text: "You put your fork down and move to the shelf. You pick up the awards one after another, polishing them with great care. It is one of the few chores that you perform without the help of a bot. You feel the weight of each, carrying you back through the milestones of employment that earned you each one and the things around you these milestones helped you buy. You'd have nothing if you hand't worked so hard. Your team helped bring some of the early bots to market, you negotiated trade disputes that brought down labor costs by one cent a unit. One cent per unit! You personally saved the company three million dollars with that deal, and the CEO thanked you personally. Each award glistens with its own special refraction, its crystal surface reinforcing your own merit and uniqueness in your field. You go to tell the story of the one cent to someone and realize that no one is there. No matter. You continue polishing the awards while flocks of birds flit across your window.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Sloaks21']
},
Sloaks21: {
          text: "You finish polishing and turn to flash through your holodeck. The lights in your cabin automatically dim to perfect viewing dimness as the tweets flit by you in rapid fashion. A new nation was founded, another dictatorship toppled, another new drug growing in pigs. Modern humanity has conquered the planet and shaped it in its image. A perfect grid of progress. Your sparkling vision of humanity is smeared though, as the air quality alarm goes off. You quickly grab the mask out of the closet and put it on. When you were young, the air was clean enough to breath all the time. Progress overwhelmed the planet. It's not your fault. You just did the best you could, got the biggest piece you could, and holed up far away from the fault line. But nature has been biting back recently. You switch to some digital porn, deposit into wall unit, and sit down, exhausted. You check out the window. A black cloud is rising from the south, followed by a rush of sound that rattles your windows...",
          choice1: "Continue...",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel21']
},
Gravel21: {
          text: "And knocks your awards to the floor. Many of them fall off their cheap plastic bases. The cutlery shakes in its drawer, which falls out and also scatters on the floor. The chorebots are overturned and a hundred or so different warning messages start beepign from various corners of your spartan house. Outside, the black cloud overtakes the birds and they fall to the ground sounding like pellets of hail when they hit the ground. The feed cuts, then the power goes out. You run over to start the back up generator, but the doors have auto locked and can't be opened. You slam against them for a while, feeling the build up of age with each push. Your shoulder will bruise and stay bruised for a while. You can't even print a pain killer. The ground starts to shake. The pond starts to roil.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS21']
},
DOS21: {
          text: "You slide down against the locked door, feeling powerless. You have been sleeping for 40 years, isolated in your corporate tower. You had a choice, years ago, like everyone did. There was an easy and exploitative path and you took it, building up all sorts of explanations and diversions for why it wasn't a problem. But if you had chosen the slightly harder path, not seeking relaxation and ease, it's possible you could have changed a few more minds, consumed a little less, made the problems less obvious. The empire was already in decline and you feasted on bread and circuses, turned away from the starving hands and news reports. Always someone else's problem. But it's your problem now. You don't know what is going on outside, but you know you had something to do with it, somewhere along the way.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD21']
},
SOLD21: {
          text: "The house shakes again and you DRAG YOURSELF UP, hobble to the window. The roar of jet engines screams overhead. A formation of unidentified ships pass overhead and rattle everything. They are heading south, to Boston, you imagine. 10 minutes later, another crash and another black cloud. A few of your robots actually explode. A loose piece of shrapnel embeds itself in your arm, others shatter the windows and the cabinets, your cutlery smashing everywhere. An EMP, the doomsday device you'd been warned of for over 40 years, finally went off. Back to the dark ages, if you can find some way to staunch the flow of blood coming from your arm.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly21']
},
Poly21: {
          text: "You rush to the bathroom, the only room not locked. You turn the faucet, but no water comes out. Your face is hideous behind the mask. You notice that the battery meter on your mask is at 5%. 2 hours left. Your mind is rushing again, violently trying to find answers the contradictions of an animal about to die. There is no one to call, no one to ask for help. You are old and living on your own at the end of the world. The house is oddly quiet. No whirring machinary, no feeds blurting out updates on the world you escpaed from years ago. In the sudden silence, you are alone with your thoughts. Your mind wanders everywhere you wouldn't let it for all these years. Things you've done mix in with things you thought mix in with stories you've told yourself and shows you've watched, a half formed tapestry of life that really doesn't add up to too much in the face of an EMP. Across the country, the bots you'd helped built would all shut down, mid task. Some of the cheaper models would probably explode, wounding many. Automated hospital automation would simultaneously shut down, nuclear power plants that dot this great nation would enter  et,down, planes would fall out of the sky, the great air filters of the Cities would fail and millions would suddenly asphyxiate: a real book of revelation on display. Even the AI gatekeepers, self sufficient and self contained, must be falling down dead, circuitry overloaded, new souls escaping into whatever great matrix in the sky they file themselves in after death. Server and tape storage is becoming corrupted, the magnets going dead. The entirity of recorded history in this country, the self proclaimed custodians of collected memory, will go blank. Those who survive will have a generation or two of technical memory, but your niece and nephews' grandchildren will be fashioning tools out of rocks and be hunted through the caves of collapsed buildings. You came in and got what you could. Your life was fine, you suppose. Not worth having regrets now, at the end of the world.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini21']
},
Cassini21: {
          text: "........................................................................................................................................................ ........................................................................................................................................................",
          choice1: "END",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">" 
},
DOS22: {
          text: "The realization that you have earned none of these awards overwhelms you. They stare back at you, mocking your life's work like a head full of hair mocks a bald person. Images from news broadcast and infomatics flash in your vision: the childless human AI couples, the never rise beds other middle aged people plug themselves into and never leave, the sweatshops you visited, where humans and AI alike were literally shackled to workbenches, coding night and day to produce the easy life that you profited from. A life time of taking the safe path at the expense of others shatters like the glass of the cheap plaques as you smash them onto on your faux laminate wood floors. The sound of the smashing resonates through the cabin, mixed with the melody of your barbarian scream. The thousands of hours devoted to raising less deserving people higher on a pyramid to divert their energy to what? Building even bigger ant hills and lining fatter pockets. Nothing in the cabin is safe. You think of your friends from your twenties, who all decided to eschew safety and follow their dreams, and the ambivalence of pride and self-pity at their televized successes stacked on. You are tired of sitting on a meaningless plot of land, reviewing your meaningless achievements, stewing in your redundancy while people born into a less fortunate tube of the system languish, choke, and die. It's never too late to change your path. You pull up global search and book a ticket to New New Orleans. ",
          choice1: "Continue...",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD22']
},
SOLD22: {
          text: "Your flight leaves in 3 hours. You'll land in your new life at 10:00 tonight. You key in for a robot car to pick you up and quickly stuff a rucksack with seasonally appropriate clothes. There's not much to bring with you: your digital reader, ID box, a locket, a plastic toy. You climb into the attic, almost losing your footing on the ladder and dig through 40 years of accumulated nothing to the very back corner of the attic. There it is, untouched for years, your old acoustic guitar. You open its case and painfully make a chord shape. The instrument rings our a pure tone, years falling away from you. It is an expensive instrument, handmade to withstand the ravages of time and human neglect. You don't know how much time you have left, but you will turn as many stones as you can get your hands on before the cold seeps in. Headlights shine in through your front windows and the whole house beeps a welcome. You sling your sack, put the guitar back in its case. You leave the front door open, the chorebots diligently wiping down the floors and gathering the broken pieces of glass and plastic.",
          choice1: "Get in the cab and fly to New New Orleans",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Sloaks22']
},
Sloaks22: {
          text: "Three years pass and it's another Mardi Gras. You find yourself in a quiet moment walking along a still green pathway under southern live oaks, the drugs humming in your head. A year of stronger experiences than the accumulation of 40 years in a cubicle and already you don't recognize yourself. The city may have relocated, but the spirit is the same as you remembered when you were 18. Even the police state couldn't beat Mardi Gras. The city rejected automation but gratefully accepted the 40 foot gulf walls, safe from hurricane waves and oil spills now. Three years back in it, you are aleady an experienced bacchanal. This year, you followed Sirens all the way down BBBB, fell into the french quarter street at Barkus and overwhelemed by dogs dressed up as fairy tale monsters, and even fought down a group of college girls for a high heel at Muses. You were the clear winner as you pulled yourself out of the fray to the cheers and beads of many onlookers. Now, though, you walk along the XXLKNDF, lost in thought, the drugs humming in your head. You pass one of your locals and see Carly in a plumed two piece blowing smoke into the face of a tourist, screaming at him about something meaningless. It was so easy to fall in with the good people; all it took was accepting who you are, a musician through and through. You are preparing to go on tour next week, the tour you always promised yourself when you were in your twenties. In the meantime, amidst the crazy rotation of the world, you are walking alone, feeling the happy flutter of wings through your whole body, not just that one hole in your heart. Even addled by drugs and alcohol, your memory has never been better. Never have you felt more alive. Your vision is occluded by an unknown call.",
          choice1: "Answer the call",
          choice2: "Ignore the call",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch221', 'Gravel222']
},
Gravel222: {
          text: "You signal decline and your vision vision clears, the call forgotten, your walk abandoned. You cross the street and hit your local. Connie squeels and embraces you, before calling on you to teach the tourist a lesson. You gladly oblige to a brawl and are caught up in the whirlwind of Mardi Gras again. You gallantly present Connie your Muses heel after dusting off, and she screams, pulls you in for a wet, wet kiss and disppears back into the bar, jumping up and down, waving the shoe around to the general whoops of the assembled. You light a cigarette with Jimmy and Dante, go back to shooting the shit and shooting up. The week passes turbently and more than once you wake up in a ditch with strangers picking at you. You turned off your biometrics the day you moved here. You party so hard you miss the first show. You are informed that the tour has been cancelled, which is no big matter. You keep drinking, keep partying until you run out of money and then run on credit. You are visited at night by the type of old man you don't see anymore, one hooked up to an oxygen mask waiting for the end. He can't be any older than you, but feels so much older. You speak but can't remember what he says in the mornings. You ache in a way you never knew you could, a dull pulse coming from your liver or your lungs.",
          choice1: "Go see a doctor",
          choice2: "You're not seeing any more doctors, it's a waste of time might as well let it grow in you.",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly2221', 'Cassini2222']
},
Poly2221: {
          text: "There's not much that can be done for a 66 year old with a busted liver and spotted lungs, the doctor says. Your liver is blocked and your lungs are accumulating liquid. He demonstrates with cotton swabs what it is you've done in three years with undiagnosed diabetes and a 23 year old's lifestyle. The cotton is a deep black with globules spotting its shrunken surface. You should get your affairs in order and try to enjoy your last few months on earth. He prescribes you some pills and urges you to come back tomorrow to set up a treatment. You leave and the ache fills your brain, too. After all this time, your body wasn't ready for the lifestyle you know you needed the whole time. You did so much in so little, yu were so close. Nothing to do know but go out with a bang. You call your agent and arrange one last show up north. You buy another ticket and fly home. It's exactly as you left it, but draftier with the door left open for 3 years.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['FrontPorch2221']
},
FrontPorch2221: {
          text: "You seclude yourself in the cabin, recording your swan song record. In it, you uncover chord changes left behind in the 14th century, introduce and invert themes with exquisite freshness. You derail the establishment, examine and inject pop sensibility with poetic structures, encourage human connectivity here in your seclusion. The ache in your liver gets brighter as the days pass, the liquid in your lungs boils up nearly to the top. You send the mixes out and set a date for the show. You mass ping everyone from the old days, all the people you left behind when you went full corporate. Many are dead or do not respond. You put your remaining cash into digital promotion, hire eloquent AIs to write reviews, generate all the hype an irrelevant sixty plus person with impending liver failure and lung cancer can generate. You call the record An Apology, for your part in the crystalization in corporate interest. Your bird flaps weakly. One last show to show that in the end, you never stopped resisting.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Cassini221']
},
Cassini2221: {
          text: "..........................................................................................................................................................................................................................................",
          choice1: "END",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">"
},
Cassini2222: {
          text: "Within a month, your liver fails. They pump your stomach, thinking it's just simple alcohol poisoning, and keep you in the hospital for a week. Even with a national provider plan, the bills are too expensive for you to keep up with. Your new friends, mostly so much younger than you, come around less and less. There's not much to fun to be had with a 66 year old with liver problems. You aren't bothered by it. You've done more living in the past 18 months than the entirety of your career. The body is a vessel and your mind is awake. When you fall into sleep under a valium haze, you fly through the atmosphere, a parcel of light dancing with other parcels of light to eternity. You don't even notice the moment your body finally gives up. In that moment of weightlessness, you see the totality of your choices, a sweeping path echoing back to the moment you first rolled screaming into this world.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds2222']
},
Birds2222: {
          text: "You are 25 years old and sitting on the Front Porch of your cabin. You are holding a key in your hand, a tie around your neck. If you walk inside you will immediately age, fuck through a series of boring trysts and high stress friendships. Martha is beckoning you to follow her out to the pond. A hundred people are waiting down by the pond, grilling, drinking, and painting. Everyone is equal now, the patriarchy replaced by technarchy. A hundred paths move off of them like heat off of pavement, evaporating into end points. You go inside and wash your hands, the hundred aging before you. Martha, 30 now, starts walking over to the barbecue, 45 and her glamorous actualized self by the time you get there. In the minutes it takes you to wash your hands, you are deathbed age and the party has mostly broken up by the time you reach the pond.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly2222']
},
Poly2222: {
          text: "There is a drink in your hand, and the day is hot. The surface of the pond is practically boiling with the heat. You listen your tie and look into the surface. You see the friends you left at 25 and the new friends of 65 looking back at you, waiting for you. You take a long savoring sip of your drink. They look at you like you are a circumstance, that they've missed you this whole time. The noon sun reflects like broken glass, each one a broken memory, popped and exploded. There's still time for one more swim. You loosen your tie, take off your shirt, and cannonball in.",
          choice1: "END",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
},
FrontPorch3: {
          text: "You stoop to gather the cans you've tossed around the porch. You are 26 again and your bones melt back into pliance and strength. You have taken over Colin and Pete's porch. (what are they doing these days? You should probably check up on them) Beer cans and 711 cups are scattered against thin wooden boards. Many of the cans sport squished brown butts peeking out of their mouths. Sean and Andrew finish a shirtless wrestling match while the gang cheers on. Half the gang is going to get gas and you get a moment alone in the middle of your first tour. How did you get back to Boston? You swore you'd never be coming back here, not after Frances. At 26, you can't imagine how much grit that can cake onto something, the sheer number of times you can paint over the same wall with new color. At 26, even after seeing cancer the first time, your body simply won't break. You can sleep on floors, you can watch Crispy pump an air mattress with a bike pump, you can drink 100 beers and still scream your lungs out at the deity of punk rock. At 26, Frances still casts a Caesar's bestridden shadow over the thin, twisting Boston alley ways.  That shadow is cut from the last intimate moment the two of you shared: her in a black dress, rouged, coquettish femme, turning around periodically to flash that smile made of engineer's schematics and tarot card readings. She won. Your consolation prize was a trash heap of shot sets and late nights, mind versus body in a titan's tumble of sleep seeking and distraction builds. You remember she won't decline for those type of guys and promised to avoid those rebel streets. Yet here you are, with a new crew and a new worldview. You'll be with Martha for a long time, the polar opposite of Frances, a tapestry with different secrets hidden behind it.",
          choice1: "Go find Martha",
          choice2: "Reflect on loss and reclamation",
          choice3: "Think more about Frances",
          mp3: "<source src=\"./music/FrontPorch.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS31', 'Vespers32', 'Birds33']
},
DOS31: {
          text: "A year after tour, summer is back again. You are stopped by the realization that these are indeed your formative years and you're already spending days trying to recapture old feelings that have burnt out, replaced by sizzling acceptance. You have a quiet epiphane that all fires have to burn alive to live and that motion always moves to stillness, heat always to cold. You're a year too old to party like you used to (oh how your bones will really creak in the future, how they will inhale the cold of the day and remind you of cracked crystal). Martha's eyes, by pattern either so warm and comprehensive or blurred and focused on a far off space, are closed. The day was spent in the sun, getting to know new and old friends in a sun kissed backyard. The undoing of the world looms like winter in the occasional gust of wind carrying through the backyard. You've spent the day peppering everyone around you and in this moment, know you will recreate 21 and stay up until sunrise. She sleeps it off after two incredible rallies. The memory of burning settles into your still strong arms; most of everyone you know is still alive. You are surrounded by city, and nameless others have lived out the same last chance day in the sun that you have. The sun is setting and you know you will remember the orange cut of atmosphere settling into peaceful night, even here in the third most crowded city on earth, long into your reclusive future.",
          choice1: "Wait for the heat to dissipate across Bushwick",
          choice2: "Remember your last trip to New Orleans, and realizing how in love you are",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['AftertheHeat311', 'Sloaks313']
},
AftertheHeat311: {
          text: "That day you went out for fish and cocktails after rallying. As night fell, you passed the graffiti adorned warehouses, passing the few remaining Puerto Rican flags, knowing your complicity in their departure. You realized you had to get out of there to make more room, but that thought dissipated with another drunk and the fellowship of others. Someone shittier would just take your place, you might as well enjoy it. On the walk home you caught eyes with a group of young girls who stared back in defiance. You braved a smile and the leader spat back at your face. It's not my fault, you wanted to say, but you knew that wasn't true. You wonder what happened to her. The sun set on the city and rose to a new dawn for the 8 million people sardined in there.",
          choice1: "LOCAL GIRL'S STORY",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['']
},
Sloaks313: {
          text: "You could have settled somewhere that never got cold, a place where once you thought you could never be alone. You can't believe you were ever so destroyed by February, but New Orleans breathed life into the month that seemed devoted to destoying you. It was a city built on the slime of fry grease, confection oven breeze, mosquitoes and cholera, alternating currents of slavery and freedom; all danced wildly back and forth on the whims of time. There is so much you've forgotten, but that first long walk through the Southern Lives Oaks after a carnival, when you realized, truly, you could feel at home anywhere. The precipitation of memories calcifies your life. Unlike a stalagmite, however, those memories are tethered to the bedrock of your body, not the ground of a cave. Your memory will not remain consistent, but the echoes of what you've felt, those opaque moments that become photographs of memory, and the people who sang those songs back to you, they will return again and again. You get snagged by cultural history and memory, and where do those two meet? They diverge like paths through a park in New Orleans, where you can easily pretend to be a local, seeped in tradtion.  Someone on the path stops me to say that I look well, and I say that I'm melody and I'm carried over the sea. Martha's at home but she feels like she's sitting right next to you, in New Hampshire and in New Orleans. You are not lost. You have a cigarette in mouth, a phone in your pocket. You've been here before and have a dim recollection. It's still Mardi Gras and the city takes care of itself. There's a path in front of you and you can easily follow...",
          choice1: "Cough. You are old and the cigarettes have finally caught up to you.",
          choice2: "The party ended long ago for you, just like Mardi Gras will end in your memory. Tomorrow the city workers will push broom dozens of tons of plastic to a landfill.",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers3131', 'AftertheHeat3132']
},
Vespers3131: {
          text: "You break down in a coughing fit, catching blood in your hand. You went home the next day and came back as a tourist, every year fo a few days. Always an outsider, even at home, sinking into your seat deeper and deeper, walls coated in yellow, beard a deeper hue. You could have stayed. You could have stayed and remade yourself. Picked up painting, given up smoking, become a busker, joined a krewe, learned to step, married a southern girl, settled in for life, not decay. Here you are, alone in cabin in New Hampshire, not even a dog to keep you company, coughing up blood with no one to talk to. What would that life have looked like? . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . More than a year passes and it's another Mardi Gras. You find yourself in a quiet moment walking along a still green pathway under southern live oaks, the drugs humming in your head. A year of stronger experiences than the accumulation of 40 years in a cubicle and already you don't recognize yourself. The city may have relocated, but the spirit is the same as you remembered when you were 18. Even the police state couldn't beat Mardi Gras. You are aleady an experienced reveller. You pass one of your locals and see Carly in a plumed two piece blowing smoke into the face of a tourist, screaming at him about something meaningless. It was so easy to fall in with the good people; all it took was accepting who you are, a musician through and through. You are preparing to go on tour next week, the tour you always promised yourself when you were in your twenties. In the meantime, amidst the crazy rotation of the world, you are walking alone, feeling the happy flutter of wings through your whole body, not just that one hole in your heart. Even addled by drugs and alcohol, your memory has never been better.",
          choice1: "What that life really would have looked like?",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel222']
},
AftertheHeat3132: {
          text: "You remember watching those people loping after the floats and Eryka's statistics about the tonnage that follows the floats. She is still clutching the shoe that she fought so hard for in the crowd. The crowd thins out and teens eye police on horseback, reticent. When the horses lope off they engage in a street fight in the abandoned lot under the overpass. Their yelps and rustles echo beneath the overpass, framed against the way the marching band's horns bounced off the concrete during the parade. The memory settles, like the shape of the city settled while the youths prepared for their disturbances in Brooklyn, the same as New Orleans. It's always been that way. You raise yourself creekily off of the rocking chair and head inside to your cluttered cabin. Beer cans jumbled in the bin, a bottle of rye on your counter: the vices of your dad, but in your experience the best chance you'll ever have to find sleep. You think of tidying up but lay on the couch. Strange, how even in this reclusive parcel of woods, you still think of the people you knew in cities across the world, the languages you overheard and never understood. You settle in, waiting.",
          choice1: "Settle in, Decay",
          choice2: "Settle, in Decay",
          choice3: "Settle in Decay.",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers31321', 'Cassini31322', 'Poly31323']
},
Vespers31321: {
          text: "Your eyelids flicker, then close.",
          choice1: "END",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">"
},
Cassini31322: {
          text: "Your eyelids flicker, then close. As you've aged, you've grown dull as an old tube computer. Certain maxims and equations have plasticized in your brain like text burned into a monitor. Certain phenomena still excite you, like a passing satellite between advertisements reflected against your eyes. You dream of being an astral body, tethered to nothing. So much more has been discovered and in your dreams the discoveries come one after another like pieces of sand through a sieve. You are the astral body, plummeting through the atmosphere of Saturn, countless near misses with meteors in the ring's orbit. The heat rises around your metal frame, gears and screws and transmitters reaching their melting point. Layer after layer of alien atmosphere envelops you. You are the inquiring eye of humanity's curiosity. You are alone but you are everyone. You knew you could be that eye when you were young and in your dream you are outside of time. You crash onto the surface displacing alien dust. A solitary flag rises from your frame, a divining rod for all of Earth. Around you cities grow, then plants in a matter of teraoforming seconds, then atmosphere, and a bustling ecology grows out of nothing, the wake of all of human kind's mistakes made better here, as if saying 'our advancement undoes the sins of the past.' The dream fades and you begin to feel your old, physical body again. A figure is floating in front of your blurry eyes.",
          choice1: "Wake up. Get a drink.",
          choice2: "Talk to a ghost.",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly313222', 'Vespers313223']
},
Vespers313223: {
          text: "You call out 'who are you?' The figure is white and opaque, between form and formlessness. It speaks to you in words you can't understand, gestures with half made hands. You try to sit up and get a better look. As soon as you do, the form dissipates and the emptiness of the house alights on your shoulders, weighing you down. When's the last time you left this house? You've turned into an Aomame, but what exactly are you hiding out from? What exactly are you waiting for? It's strange how crystalized your early memories are and how muddled things got later. You still taste the bag of marshmallows full of sand at the beach when you were eight, your parents lounging in the sun. You still feel the sweat of your first solo in a community theater play. The first time your microphone fed back and cut through the ears of the small crowd. The way your mother looked at you when she said goodbye after the drive out to college the first time. Any memory you've made since digitization doesn't come without the help of a view port. The computer remembers for you; all you have are dim metadata triggers to relive the memory. You key in for coffee and watch the machines stir to life. They have more personality than you do anymore. What were you waiting for? You key in deaths to the directory and see a sprawling web diagram of everyone who didn't make it, the lengths of their strings relating to how long they lived and who else they were connected to. This is the entirety of your relationships, mapped out over years, centered on you. You spend some hours reliving chat histories and video evidence of your fellowships and wonder where they all went. So many fewer strands are connected to you now. To your surprise, Martha is still rather close to you. Does the computer know something you don't?",
          choice1: "Look up Martha",
          choice2: "Don't look up Martha",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds3132231', 'Poly3132232']
},
Birds3132231: {
          text: "You pull up Matha's profile, a collection of shared memories and public posts from the past 40 years. You watch the rise and fall of her stardom as her songs play through your speaker set. You reread your chat history and laugh at the way you used to talk to one another, the way young lovers did. Veiled queries, forgotten pop culture references, innuendo and desparate earnestness. A photo from that day in the summer pulls you back in. You think back to an old Tom Waits song, 'Operator, number please, it's been so many years.' She is still an active musician. A quick scan of her later reviews shows that reception is mixed, as it always is with the old. You can never underestimate the youth. The sounds of wisdom don't have enough hip shake and rhythm; they always demonize the aging artist until the day after the funeral. She has a gig coming up 2 hours away by plane, and some bent of nostalgia pulls up a plane ticket. You buy it before you can second guess and get ready to go.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly3132231']
},
Poly3132231: {
          text: "An automated car pulls up. You tell Garfield to protiect the house, not to use too much oil paint or rearrange any furniture. It runs up and gives you a hug, saying it will do it's best, and to take care, and can we play scrabble when you get back? You hop into the waiting auto, a smile overwhelming your face. The miles pass quickly as the grid does it work, and before you know it you are flashing your retinaes at TSA bots and having the juices sucked out of you for transport. The bird grumbles and catapaults into the air, and for a moment you are weightless. t the peak of the parabola, the truth of your impulse decision settles in. Old man, you haven't left your house in over 20 years and now you're showing up uninvited to an old flame's twilight performance? Maybe there was a good reason why you ended up so utterly alone. The last time you spoke to her, you were wasted, begging her not to go on the tour that would catapault her away from you. Disgusted, she left: you, the City, the community for the world. If you had acted differently, maybe you could have come along, too, on the next ride around the sun. Isn't it too late to hitch a ride? Her tain is already slowing down. The plane lands and you almost don't get off. But a flicker of wings against the bars of your cage gets you out of the seat, onto a tram, and into another one, in a small theater on the Upper West Side. The crowd is diverse in age and aesthetic: shaved heads and mohawks mingling with AI prim and old money pram: a far cry from the basements you used to coat with sweat and alcohol. The lights dim and a lone spotlight appears on the stage. Martha is lain atop a piano bench, dressed a light reflective leotard. The player piano begins to play, a 30 piece AI orchestra begins to play along to the light and projector show that plays off of her voice. The perofmance ends to mixed applause. She thanks the crowd and says she'll be by the merch table in the back for Q&A on her new record.",
               choice1: "Go talk to Martha at the merch table",
               choice2: "Go home",
               mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
               nextChoice: ['Gravel31322311', 'SOLD31322312']
},
Gravel31322311: {
          text: "",
          choice1: "",
          mp3: "",
          nextChoice: ['']
},
SOLD31322312: {
          text: "You stand with the ovators and clap with gusto. Something in you knows this is the last live music event you'll see before your life sorts itself out. There is a moment where the emotional response of the people in the crowd is authentic and legitimate as you scan them, ducking eyes whenever someone happens to look back at you. By the time the crowd shuffles its way out to the grand foyer of the prewar concerthouse, everyone is glued back to their portables. Whatever magic they'd all agreed to be a part of is sucked back into the hivemind, a deposit on the stalagtite of their society. You steal a quick glance at the merch table, where Martha is posing for pictures and doling out tweets, but the magic of the performance is gone. All that is left is the spectacle. Whatever shared consciouness or mutual felt understanding or shared meditation is now disconnected, like a dream upon waking: maybe irrevocably changed, but no longer changing. Back to plastering the experience on a wall, just to be covered up in next weeks' spectacle. You recognize Martha all too well, now. She is the same poser for photographs and peddler of cheap jokes you always felt in the pit of your stomach when you were out together. That which is required of fame, that which you could never stomach, as natural a defense as it is to the rotating plastic carousel that society developed into. You duck out without a wave, no way she could recognize you. You thumb a cab and pull up your portable, connecting to a battle chess stream that you like to watch sometimes. You don't flip the stream off until you're back in your cottage, seated on the couch. The show, a distant dream, and the streamer's expert casting and strategy, a meditation that can follow you anywhere and replace anything. You fall asleep with the 25 year old recluse whispering tactics into your earset.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel31322312']
},
Gravel31322312: {
          text: "The seasons change over your little neck of the woods. Garfield picks up battle chess, too, and you have challenging bouts that you know he dumbs himself down for in between streams. You branch out to other games, too, whenever your favorite streamers do a paid promotion and the game seems well designed or mildly challenging. You join an online community where you play competitive battle chess. Birds come and go, occasionally you go to the local bar. The chore bots come in and out, the delivery drones bring food once a week. The garden grows wild and you continue recycling your cans. You get to top 10% in the world amateur league. You talk on the phone, you receive credit deposits, and eventually slip out of this world, the same way you came in.",
          choice1: "END.",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">"
},
Poly3132232: {
          text: "The last time you saw her, you were wasted, begging her not to go. You knew how important it was for her to take this trip. You followed her for a while and couldn't bear to see how well she was doing as she became a celebrity. You were on that path together, there was some way you could have made it work. But you were petty and cold about her success and asked her to stop. Of course she said no; you were everything to her and this trip was important. At 28, you couldn't conceive of 6 more months of waiting. Now you've been waiting for 40 years, knowing you'll never find what you were waiting for. But you're not going to change now. You close the directory and slam your coffee before going back out to the garden.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel3132232']
},
Gravel3132232: {
          text: "Waiting made you tough, even if you forgot what you were waiting for. The act of waiting itself, pushing off indulgences, turning the land to reflect your will. People have never been consistent. You prefer the company of robots, of nature, of the written word. Surveying the land, you are content with your efforts. You wearily walk back up the front porch and find a message blinking in your directory.",
          choice1: "View the message",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds3132232']
},
Birds3132232: {
          text: "Somehow, it's a message from Martha. It's been so many years. You still remember her old voice while you fight the tears. She's thought about you often, wondered how you were, what you've been doing. Looking back, you don't know if you have anything close to a story to tell and definitely have not kept up with yourself the same way she has. Your eyes are sharp with cynicism and your back doesn't straighten all the way. You don't know if your body will work the way you want it to when you see her. Still, she offers the invitation to come to her animal sanctuary where she retired. It's only a 2 hour flight. You could make it in time for dinner, which she invites you to. You are suddenly aware that this is what you've been waiting for these 40 years. You key in your acceptance and order a transport...",
          choice1: "Give in your plane ticket",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD3132232']
},
SOLD3132232: {
          text: "It's been a long time since you've been on a plane, despite how cheap they are to fly in. You settle into your ergonomic seat, still in disbelief that leg room hasn't improved at all. You avoided your friends, unable to watch them die young, but life hasn't been much better in your hermitage. You realize that you've been indulging non stop for 40 years as your reach for cigarettes and remember you can't smoke in this hermetic cocoon. You don't like who you've become and you're going out for dinner but you're also making up for lost time. The plane takes off and you think you can see your cabin cut out of the forest. Martha's been waiting for you, too. It's time for the waiting to end.",
          choice1: "END",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">"
},
Poly313222: {
          text: "You flash awake out of your dream in your cabin. The sun is gone now and the frogs are starting to sing their mating songs. Where is Martha? The first thought you think before you remember. Too much has happened, too much time is passed. Details are blurry, no better than circumstance, and you've learned how to make them blurrier. You used to need company to throw them back, but you've learned better in age. Your shaking hands struggle with the whiskey to pour yourself a finger from the bottle. You count your blessings: you have thousands of memories to pop and explode and new ones are being made every day. You still have stories to tell yourself. The questions don't gnaw at yourself the way they used to. Martha will be back soon enough. More friends are gone than you can count, but like the birds, something of them is still fluttering through the evening sky. They'll be leaving in a few weeks, but they'll be back next spring. .",
          choice1: "Listen for owls",
          choice2: "Listen for planes",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds3132221', 'SOLD3132222']
},
SOLD3132222: {
          text: "You're not tied here either. The plane ticket sits on your coffee table. The ground's never quite the same when you're looking down at it, no. You don't know what parts of you people will rememember. But you know you have to leave your grandkids something. The excitement of seeing them replaces the excitement you used to feel visiting places. Places are meaningless without the people. You're thankful you've made it this far, this long.",
          choice1: "Remember the folks who didn't make it.",
          choice2: "Remember how you lasted this long.",
          mp3: "<source src=\"./music/Sold.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers31322221', 'Birds31322222']
},
Birds31322222: {
          text: "You don't look forward to the TSA bots who will scan your retinaes and take a blood sample. Somehow, even through their robotic visors, they still look down on you with superiority. How did beaurocracy win? Your cabin is one of the last places in the world where freedom still exists. You can't stand sitting next to another old white man, another demon who has been crippled but not beaten. You rarely succumb to their mandates and bullshit anymore, but it's inevitable. The gift of flight still coems at the cost. Before you quit the gentry, you faced it every day: the reports, the placating, the two-facedness. You want to broadcast, get out of there. The freedom is scary, but it's so much better to face fear on your own wings..",
          choice1: "But freedom unravels",
          choice2: "But industry corrupts",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers313222221', 'Gravel313222222']
},
Gravel313222222: {
          text: "And with that, the inevitability of it all sits heavy on your eyes. A life of protest did little to change the cycles. Minor variations on a theme, ceaseless activity that so often resembles itself. There is a peace in the repition, but you had hoped to have changed more in what turned out to be the brief time you'd been alive. You hold the beauty and let the distaste go, a dirge punctuated by another repitition, a final repition. The moon has risen over the pond, and suddenly drawing breath is work. You see the gravel pit looming, rooted in so many other bodies. Your head goes light, you smell burning toast, bof fri fleu, and you're on the floor.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers3132222221']
},
Vespers3132222221: {
          text: "It hurts so much, but so much less than you thought. You've been preparing for this moment your whole life, seen it coming like so many train rides down a tunnel you can't see the end to. At least you went out without a breathing mask, able to hold yourself up until you couldn't. End of the line, following in the footsteps of the hundreds you've known and billions you haven't who have ridden to the end of the line. Time unfolds like a flat circle and you are lost in its ride. This is the end of the line. This is ego death",
          choice1: "END",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">"
},
Vespers32: {
          text: "You flit back through time and are picking up the last crushed can of beer. This has become a daily ritual for you, to slam a sixer in summer evenings, turning off from the day. You'll do this until you won't anymore, you suppose. You glance up and notice a dead cardinal laying belly up beneath the bird feeder. He probably thought tomorrow would be like today. . . . . . . . . . . . . . . . . . . . . . It's always another day until it's not. . . . . . . . . . . . . . . . . . . . . . .  No tethering to the land, to youth, to hope, changes that. This long life, flirting with the punchline, has had its rewards. You still find ways to laugh, even when you hack up a lung when you do. You light a cigarette, increasingly hard to get these past few years and remember Tyler, your boyhood best friend. Your hands full of beer cans, you remember the puddle behind his house where you used to catch frogs in the sumemrtime. His father, younger than you are now, but so terrifying in his white briefs, watching Walker Texas Ranger with a shotgun over his distended belly. . . . . . . . . . . . . . . . . . . . . . . You were 8 when you left the sleepy town on your long approach to the City and didn't come back until a year after he died. His mother, not a day older than when she last cooked you TV dinners, after the accient, a year after he as put in the ground. She spoke of him like he was still there, but his father's bearded face and dead eyes conveyed none of the same hope from behind his oxygen mask. (funny how you never remember him smoking, but so vividly the flower pot full of butts, feels familiar as you approach the door) Funny how much you look like him now, with your vaporizer asthma pen that you keep in your shirt pocket, your beard unbridled and challenging the hair removal of the youth. The stark contrast of his family's acres replaced by pits of gravel when they lost the means to keep the green green were such a potent metaphor. It is what death feels like to you. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  When you came back the first time, years later, the acres of green land and trailers was overrun with gravel pits and machinery. They'd sold most of their land to afford whatever, they never told you. They lived the remainder of their lives in the trailer in the back corner of the land that used to be theirs, waking up morning after morning to dump trucks piling the slate higher and higher until it blocked out the sun, waiting to meet their son again.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel32']
},
Gravel32: {
          text: "You throw the cans into the recycling bin. A monitor on the device indicates that the recycling is almost full. You press a button and the machine begins its work, crushing the cans into raw blocks of metal which a drone will pick up from the porch later, depositing a recycling payment into your account. Any number of automatic processes will trigger from this, a workflow assembly that will ultimately return some of this metal back to your growing belly before you know it. You take off towards the garden, leaving the hum of your automatic cabin behind. You try to remember how it used to be for the elderly, but you had no vision of your own future when you were young. . . . . . . . . . . . . . . . . . . . . . . You are still 27, wandering the grounds that used to be gardens and automobile graveyards. A life cut too short, and in the ensuing years you realized you didn't want your life to be stripped of meaning the way his family's land was stripped of its own life. You wander through the woods and so much of what you remembered was pulled out. Where did it go? And how could a company exploit such a greiving family?",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['AftertheHeat32']
},
AftertheHeat32: {
          text: "Melody over the sea, before the sea riposted and all the coastal towns were lost. The US body fell apart, leaving a mess for the next generations to inherit. Those festivals, steeped in the tradition of feast and famine, life and death, were a shaman's rebuttal to the ravages of time. They were a pole stuck into the ground, defying weather to tear it down. A strong challenge, sure, but time wins, always. New Orleans, Mobile, half of Florida are underwater now. New York is surrounded by water walls, manned by AI, and still buildings are knocked over in the rainy season every year. . . . . . . . . . . . The chimes sing their time song. A wind is coming up over the pond and you shiver. Hot one minute, shivering the next, this is your life now. How did you get so old when so many others didn't make it? We were supposed to live forever by now, not just live under more digital fascism and a new world of underground railroads. We gave up choice for comfort and now the verdant fields are just gravel pits. This place, the place you wish to die in, is one of last hold outs to the waves buoyed by methane and carbon emissions, the same wave of apathy that gave way to a police state. You shake your head. Out of the corner of your eye, you see movement.",
          choice1: "It's nothing. Settle in for another night.",
          choice2: "Investigate your Front Porch",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['SOLD321', 'DOS322']
},
SOLD321: {
          text: "You blink. It was nothing. Things are the way they are. The sun has almost settled into its bed over the trees. You are old, so you try less. Since time memorial, it's always been that way. You stumble into your cabin, cracking another can, and set the chorebots to work. They tidy up your little messes while you undress. This is the ease your parents' generation prayed for, the life boat of automation that your peers built while you crisscrossed the country, selling your art to a disinterested audience, watching the decay settle in. Night comes, and the sun will rise tomorrow. You slam your beer and settle in to wait.",
          choice1: "Crack another beer",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly321']
},
Poly321: {
         text: "You indicate to the air and pull up your timeline. You flick through the photographs from your life at 8x speed. These photographs, taken by people who are now mostly strangers, are more real than the memories themselves when the photo was snapped. As the years progress, they bleed into the third dimension: your first show, your first tour, the first bass you caught, your first child being bored, the laugh lines on Martha's face dampening, the fascist protest, your time lapse of you at the Mardi Gras. The frequency slows down as you age. You picked your own path the whole way to the bank until you and Martha, satisfied with the Venn Diagram of your influence, picked your own final nest. It's so lonely here without her. You flick off the timeline and clear your head until your own memories overwrite the stream you just dived into.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['DOS321'],
},
DOS321: {
          text: "A year after tour, summer is back again. You are stopped by the realization that these are indeed your formative years and you're already spending days trying to recapture old feelings that have burnt out, replaced by sizzling acceptance. You have a quiet epiphane that all fires have to burn alive to live and that motion always moves to stillness, heat always to cold. You're a year too old to party like you used to (oh how your bones will really creak in the future, how they will inhale the cold of the day and remind you of cracked crystal). Martha's eyes, by pattern either so warm and comprehensive or blurred and focused on a far off space, are closed. The day was spent in the sun, getting to know new and old friends in a sun kissed backyard. The undoing of the world looms like winter in the occasional gust of wind carrying through the backyard. You've spent the day peppering everyone around you and in this moment, know you will recreate 21 and stay up until sunrise. She sleeps it off after two incredible rallies. The memory of burning settles into your still strong arms; most of everyone you know is still alive. You are surrounded by city, and nameless others have lived out the same last chance day in the sun that you have. The sun is setting and you know you will remember the orange cut of atmosphere settling into peaceful night, even here in the third most crowded city on earth, long into your reclusive future.",
          choice1: "Continue remembering.",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Birds321']
},
Birds321: {
          text: "It's strange how getting married insulates you. You need all your energy to pass your genes along and make sure the kids don't die. You and Martha never learned to embrace the ritual and soon the day in and day out of watching the kids took over everything. Who could have known that repeating themes could be so exhausting. You kept your bad habits as the stress levels rose, and before your youngest was out of the house Martha succumbed to a cancer that would be cured within 5 years of her passing. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Watching her die young wasn't fun. it took years to move past it, but you grew more comfortable alone. And alone you remain, though her echoes still bounce off her things which you've left up as a shrine in the cabin. Still, you can mostly stomach weddings, now, even if you need to step away for a cigar once or twice before the ceremony wraps up. These days, weddings and funerals are some of the few times anyone bothers to get together in person anymore. Young lovers on the other side of the planet from each other plug into simulations and kiss in their minds until the sun comes up. Physical laborers are always plugged into newsfeeds, sitting in armored exoskeletons with plugs directly into the pleasure centers of their brains. Immersive films where you are the star, running through the action on a conveyer belt in your own living room are enough exercise for most. You don't bother too much with simulation, but you can't blame the people around you for following the path of least resistance, for sinking into delights and stimulus. Still, it gets lonely, and you go to every wedding you are invited to, every funeral you are notified of.",
          choice1: "Every once in a while, you remember her like she's still ther beside you",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoie: ['Cassini321']
},
Cassini321: {
          text: "You are 25 years old and sitting on the Front Porch of your cabin. You are holding a key in your hand, a tie around your neck. If you walk inside you will immediately age, fuck through a series of boring trysts and high stress friendships. Martha is beckoning you to follow her out to the pond. A hundred people are waiting down by the pond, grilling, drinking, and painting. Everyone is equal now, the patriarchy replaced by technarchy. A hundred paths move off of them like heat off of pavement, evaporating into end points. You go inside and wash your hands, the hundred aging before you. Martha, 30 now, starts walking over to the barbecue, 45 and her glamorous actualized self by the time you get there. In the minutes it takes you to wash your hands, you are deathbed age and the party has mostly broken up by the time you reach the pond. You sit down beside it, crack another beer, and shoot the shit with whoever is still around. Martha is talking to another friend, and it's still the good times, when you were the partnership that held the world together. The world decays around you, but you probably won't stick around long enough to watch the final fall. That suits you just fine.",
          choice1: "END",
          mp3: "<source src=\"./music/Cassini.mp3\" type=\"audio/mpeg\">",
},
DOS322: {
          text: "The movement seems to have rushed up on the front porch. Maybe it's a rabbit you could kill for dinner. It's been ages since you've had real meat, meat that wasn't packaged in a can, grown in a labratory. You look around for a tool, but can't find one. Your bare hands should be enough. You crouch low to the ground and sneak up to the front porch. Little flashes of movement draw your eye, and like a stalking wolf, you take the first, the second, the third stair silently. As you put your weight on the last stair, the old porch creaks and you finally get site of the thing you've been stalking. It is a three foot tall impish creature, totally green, with knives for teeth and upturned bloodshot eyes. It snakes its long neck toward you, and before you can run away, you feel tiny hands grabbing your ankles and hear the high pitched laughter of the creature as you fall to the ground and hit your head. You lose consciousness being dragged into the house.",
          choice1: "Wake up",
          mp3: "<source src=\"./music/DOS.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Adventure3']
},
Birds33: {
          text: "You were part of a global movement of controllers, trading your energy for clickbait and processed food. Life was a matrix of choices: safety or freedom. The office life promised shelter, consistent food, sex with pixels or with persons of the same class. You couldn't think much of the tons of wiring and mining that went into creating your techno paradise. You wore blinders on the walk to the subway, commenting plithily on the neighborhoods changing, polite to your neighbors, who were polite back because the police batons beat those manners into them. You raged at your cubicle letting the patriarchs make belittling comments at the girl you thought you loved. You didn't do it, you weren't part of the problem. But slowly your neighbors were replaced by drones, coffee shops overtaking boedgas, vintage clothing shops growing out of the thrift stores. Where did those people go? You don't think it was internment camps, but eventually, your job done, your area gentrified, your money made, you retired to keep trading clicks for clickbait in the woods, leaving the city to its own solace.",
          choice1: "Where they went",
          mp3: "<source src=\"./music/Birds.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Vespers331']
},
Vespers331: {
          text: "When the white folks started moving in, things got better. That's what your grandma said. You remember the crack houses on the street? They're gone. You can walk from the subway to your house fearing only the occasional cat call, not an abduction. You've been trained since you were a young girl to walk eyes cast to the street. Keep your head down. But you walked a little looser at first. But then more white folks moved in, and more of your friends moved out. Rent rose like a cake that you were born to serve, not eat, and that fact weighed on you like the weight of the world, slumping your shoulders. In your teenage years, you sought the projects because it was the only place people like you still hung out, and somehow, those places were more dangerous than your crack house street used to be. You haven't been to a block party in years. The building blocks are for white kids in their little strollers.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Vespers.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['AftertheHeat331']
},
AftertheHeat331: {
          text: "You exhale the blunt. People move like weather, like smoke from the tip of the blunt. The heat follows the rich, keeping them warm and burning anybody who gets too close. You keep a notebook of your high thoughts before you get ready to ride. Moving in and not staying is part of the problem. Getting by without praying is part of the problem. Not knowing where your meals are made is part of the problem. Tracking everybody's sins is part of the problem. It's another hot day, hotter'n Satan's asshole your granddad used to say, the day after his funeral. You're 25 and you can't drive a car without being pulled over. You pack your heat, because fuck consequences. You weren't born to be a slave. Real recognize real. You ride or you die.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/AftertheHeat.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Gravel331']
},
Gravel331: {
          text: "You wait for the sun to go down and roll out of the projects. You seek vengeance for a slew of crimes you can't attach to an individual. You seek part of the problem. Usually it's based on a color someone chooses, since you can't pick the color of skin you're gunning for. Your grandad used to say gunning for never called for guns when he used to run around. Grandad doesn't get how things have changed. He went blind before the streets got washed white. Your crew stumbles on a stumble drunk white couple, carrying bags and smiling to each other. They tense up when they see you, the guy leading the girl across the street, playing bull to a pack of lionesses. You would have walked by them, maybe yelled boo, but something about the way they move, like you're a tumor, like you are power, emboldens you. You make the signal and cross the street, too. They're really scared now, the man standing in front, forcing the woman to cower. They make themselves small, like jello against a brick wall, and you all move as one. You smash his teeth with the butt of your piece, pull out her pretty hair, rip her phone out of her hand, piss on the remains, and run. You recognize yourself in her eyes but punch them closed. You split before anyone sees you.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/Gravel.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Sloaks331']
},
Sloaks331: {
          text: "You desparately spark the blunt, fingers a mess, ignoring the visions of her terrified eyes looking into yours. It's a cat's trick, you tell yourself. An animal pretending it's like you to get your sympathy. She's just one brick in a tower that you can pull down one brick at a time. Your friends are laughing, passing the blunt, but everyone is on an edge that no amount of tokes will knock them off of. You just wanted to go to the block party. What happened to those.",
          choice1: "Continue...",
          mp3: "<source src=\"./music/SouthernLiveOaks.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['Poly331']
},
Poly331: {
          text: "Someone snapped a photo of the aftermath and posted it to a fighting group. Two of your friends get IDed and suddenly they're upstate, not around anymore. What other outcome could be expected? You were brown and girls",
          choice1: "",
          mp3: "<source src=\"./music/PolySci.mp3\" type=\"audio/mpeg\">",
          nextChoice: ['']
  }
}
doChoice("Start");

function doChoice(userChoice) {
    Placeholder = [choices[userChoice].text];
    var choicetext1 = [choices[userChoice].choice1];
    $("#choice1").html(choicetext1);
    var choicetext2 = [choices[userChoice].choice2];
    $("#choice2").html(choicetext2);
    var choicetext3 = [choices[userChoice].choice3];
    $("#choice3").html(choicetext3);
    nextChoiceOption = choices[userChoice].nextChoice;
    //var audio = document.querySelector("audio");
    //audio.src = [choices[userChoice].mp3];
    //audio.load();
    //audio.play();
    $("#song").html([choices[userChoice].mp3]);
};