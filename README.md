The CoffeeScript "code parody"
==============================

This silly project does not want to offend the CoffeeScript creator neither any CoffeeScript user, hoping both have sense of humor :{D

![da logo](http://www.3site.eu/coffeeshit.png)

        ... because script happens!


About
-----

Every cult movie has one or more parodies ... well, every cult technology as well (or at least it should)!

When I have first read about [CoffeeScript](http://jashkenas.github.com/coffee-script/) I was extremely sceptic.
As a **pure JS developer** I could not stand in front of such "*monstrosity*" ... my favorite programming language denatured like that? *No fucking way!*

At that time I have been trying to understand why developers were so excited about it and I could not came out with a proper answer except: "*ooooh come on, all this fuss just for some sugar?* ... *I don't even like coffee with sugar!*"


About The Name
--------------
You can check the library by yourself and realize I have used all worst possible practices in order to simulate a different syntax within the one allowed by JavaScript.
Such *pile of shit* **I wrote** to mimic an excellent project as CoffeeScript is could not have a better name, imo.



Aim
---

**None**, except demonstrate how evil could be the *JavaScript* nature. This script was standing in some folder I forgot existed.
Today I have accidentally found again this funny code and since I was laughing by myself like an idiot I decided to let other developers have a laugh too.
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


License
-------

The CoffeeShit logo, the chaotic crazy script, and the rest of the project is under Mit Style License

    Copyright (C) 2011 by Andrea Giammarchi, @WebReflection

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

