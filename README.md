The CoffeeScript "code parody"
==============================

This silly project does not want to offend the CoffeeScript creator neither any CoffeeScript user, hoping both have sense of humor :{D

![da logo](http://fuckn.es/s/coffeeshit.png)


About
-----

Every cult movie has one or more parodies ... well, every cult technology as well (or at least it should)!

When I have first read about [CoffeeScript](http://jashkenas.github.com/coffee-script/) I was extremely sceptic.
As a **pure JS developer** I could not stand in front of such "*monstrosity*" ... my favorite programming language denatured like that? *No fucking way!*

At that time I have been trying to understand why developers were so excited about it and I could not came out with a proper answer except: "*ooooh come on, all this fuss just for some sugar?* ... *I don't even like coffee with sugar!*"


Aim
---

**None**, except demonstrate how evil could be the *JavaScript* nature. This script was standing in some folder I forgot existed.
Today I have accidentally found again this funny code and since I was laughing by myself like an idiot I decided to let other developers have a lough too.
To see how it works, launch *testShit.html* file and check out the source code.

**Do not** use *CoffeeShit* in any production environment!
It's just a "*stupid monster*" that's imitating CofeeScript possibilities and mainly/only as shown in the example page.


Examples
--------

How to create a function

    // CoffeeScript
    square = (x) -> x * x
    
    // CofeeShit
    square = 'x'['->']('x * x')


How to fill strings via function

    // CoffeeScript
    fill = (container, liquid = "coffee") -> "Filling the #{container} with #{liquid}..."
    
    // CofeeShit
    fill = ['container', 'liquid = "coffee"']['->']('Filling the #{container} with #{liquid}...')


How to use *if* and others

    // CofeeScript
    mood = greatlyImproved if singing
    
    if happy and knowsIt
        clapsHands()
        chaChaCha()
    else
        showIt()
    
    date = if friday then sue else jill
    
    
    // CoffeeShit
    mood = greatlyImproved.if(singing)
    
    $.if(happy).and(knowsIt)([
        'clapsHands()',
        'chaChaCha()'
    ]).else([
        'showIt()'
    ])
    
    date = $.if(friday).then(sue).else(jill)


How to loop through an array

    // CoffeeScript
    eat food for food in ['toast', 'cheese', 'wine']
    
    // CoffeeShit
    'eat(food)'.for('food').in(['toast', 'cheese', 'wine'])


Operators and Aliases

    // CoffeeScript
    ignition is on
    
    volume = 10 if band isnt SpinalTap
    
    winner = yes if pick in [47, 92, 13]
    
    
    // CoffeeShit
    ignition.is(on)
    
    volume = (10).if(band.isnt(SpinalTap))
    
    winner = yes.if(pick.in([47, 92, 13]))


The Existential Operator

    // CoffeeScript
    window ?
    
    notdefined ?
    
    speed ?= 75
    
    
    // CoffeeShit
    'window'['?']
    
    'notdefined'['?']
    
    'speed'['?='](75)

More inside the testShit.html file


Lesson
------

There are limits over syntax sugar good raw JavaScript cannot break. The usage of *eval* is massive and the replicated syntax too weak, slow, and messed up.
In any case JavaScript may be fun and this was indeed a really funny experiment.

*CoffeeScript* ? ... surely one of the most interesting projects JS related I know, together with [haxe](http://haxe.org/) ;-)
