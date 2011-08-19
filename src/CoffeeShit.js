!function (window, Object_prototype, String_prototype) {
    
    /*! CoffeeShit, the "code parody" by WebReflection - NoWay Style License
     * https://github.com/WebReflection/CoffeeShit
     */
    
    function execIfFunction(value) {
        return typeof value == "function" ? value() : value;
    }
    
    function evalIfStringReplacement(m) {
        return "'+" + m.slice(2, -1) + "+'";
    }
    
    function evalIfString(body) {
        if (typeof body == "string" && sVarRefs.test(body)) {
            body = "return '" + body.replace(/'/g, "\\'").replace(sVarRefs, evalIfStringReplacement) + "'";
        } else if(body instanceof Array) {
            for (var
                i = 0,
                length = body.length;
                i < length; ++i
            ) {
                body[i] = evalIfString(body[i]);
            }
            body[--i] = "return " + body[i];
            body = [body.join(";")];
        }
        return body;
    }
    
    function ifWasPrimitiveReConvertIt(value) {
        switch (true) {
            case value instanceof Boolean:
            case value instanceof Number:
            case value instanceof String:
                return value.valueOf();
            default:
                return value;
        }
    }
    
    // square = 'x'['->']('x*x')
    
    // fill = ['container', 'liquid = "coffee"']['->']('Filling the #{container} with #{liquid}...')
    
    /*
        outer = 1
        changeNumbers = $["->"]([
            'inner = -1',
            'outer = 10'
        ])
        inner = changeNumbers()
     */
     
     /*
        gold = silver = rest = "unknown"
        
        awardMedals = ['first', 'second', 'others...']['->']([
            'gold   = first',
            'silver = second',
            'rest   = others',
        ])
        
        contenders = [
            "Michael Phelps",
            "Liu Xiang",
            "Yao Ming",
            "Allyson Felix",
            "Shawn Johnson",
            "Roman Sebrle",
            "Guo Jingjing",
            "Tyson Gay",
            "Asafa Powell",
            "Usain Bolt"
        ]
        
        awardMedals('contenders...')
        
        alert("Gold: " + gold)
        alert("Silver: " + silver)
        alert("The Field: " + rest)
      */
    Object_prototype["->"] = function (fbody) {
        var self = this;
        switch (true) {
            case self == $:
                return eval("(function(){" + evalIfString(fbody) + "})");
            case self instanceof Array:
                for (var
                    i = 0,
                    length = self.length,
                    args = [],
                    body = [],
                    def,
                    cur;
                    i < length; ++i
                ) {
                    ~(def = (cur = self[i]).indexOf("=")) ?
                        body.push("if(" + (args[i] = cur.slice(0, def)) + "==null)" + cur + ";")
                        : (
                            ~(def = cur.indexOf("...")) ?
                                body.unshift((args[i] = cur.slice(0, def)) + "=[].slice.call(arguments," + i + ")")
                                :
                                args[i] = cur
                        )
                    ;
                }
                body.push(evalIfString(fbody));
                return createSplat(args, body.join("\n"));
            case self instanceof String:
                return createSplat(self, "return " + evalIfString(fbody));
        }
    };
    
    function createSplat(args, body) {
        var arg;
        if (args instanceof Array) {
            arg = args[0];
            args = args.join(",");
        } else {
            arg = args;
        }
        return eval("".concat(
            "(function ___(",
                args,
            "){",
                "if(typeof " + arg + "=='string'&&" + arg + ".slice(-3)=='...')",
                    "return ___.apply(this,eval(" + arg + ".slice(0, -3)));",
                body,
            "})"
        ));
    }
    
    /*
        greatlyImproved = {} // whatever ...
        singing = true
        
        mood = greatlyImproved.if(singing)
     */
     
    /*
        happy = true // set one of these false to test the else
        knowsIt = true
        
        clapsHands = $["->"]('alert("hand clapped")')
        chaChaCha = $["->"]('alert("cha cha cha")')
        showIt = $["->"]('alert("shake that")')
        
        $.if(happy).and(knowsIt)([
            'clapsHands()',
            'chaChaCha()'
        ]).else([
            'showIt()'
        ])
     */
    
    /*
        sue = "sue"
        jill = "jill"
        friday = true // set false to test jill

        date = $.if(friday).then(sue).else(jill)
     */
    Object_prototype["if"] = 
    Object_prototype["elif"] = function (condition) {
        return (passthrough = !!condition) ? ifWasPrimitiveReConvertIt(this) : $$;
    };
    Object_prototype["and"] = function (condition) {
        return passthrough ? ((passthrough = !!condition) ? ifWasPrimitiveReConvertIt(this) : $$) : $$;
    };
    Object_prototype["else"] = function (self) {
        var result = thenInvoked ? (passthrough ? ifWasPrimitiveReConvertIt(this) : self) : passthrough || $(self);
        passthrough = true;
        thenInvoked = false;
        return result;
    };
    Object_prototype["then"] = function (value) {
        thenInvoked = true;
        return value;
    };
    
    // "a".is("a")
    /*
        o = {}
        o.is(o)
     */
    Object_prototype["is"] = function (value) {
        return typeof ifWasPrimitiveReConvertIt(this) != "object" ?
            this.valueOf() === value :
            this === value
        ;
    };
    
    // "a".isnt("b")
    /*
        o = {}
        o.isnt({})
     */
    Object_prototype["isnt"] = function (value) {
        return typeof ifWasPrimitiveReConvertIt(this) != "object" ?
            this.valueOf() !== value :
            this !== value
        ;
    };
    
    function createWhileOrUntil(___) {
        return function (condition, after) {
            if (this instanceof Function) {
                if (this != $) {
                    while(eval(___ + "(" + condition + ")")) this();
                } else {
                    var result = [];
                    after = $(after);
                    while(eval(___ + "(" + condition + ")")) result.push(after());
                    return result;
                }
            } else if (this instanceof String) {
                while(eval(___ + "(" + condition + ")")) eval("(" + this + ")");
            } else {
                return this;
            }
        };
    }
    
    Object_prototype["until"] = createWhileOrUntil("!");
    Object_prototype["while"] = createWhileOrUntil("");
    
    // "options"["or="](defaults)
    String_prototype["or="] = function (def, ___) {
        return eval("typeof " + this + "=='undefined'") ?
            Function("___","return " + this + "=___")(def)
            :
            eval(this)
        ;
    };
    
    // 'eat(food)'['for']('food')['in'](['toast', 'cheese', 'wine'])
    String_prototype["for"] = function (___) {
        viafor = true;
        ___ = new String(___);
        ___.___ = this;
        ___.___fn = ("" + this) == ("" + ___);
        return ___;
    };
    
    String_prototype["in"] = function (___) {
        if (viafor) {
            viafor = false;
            if (___ instanceof Array) {
                if (this.___fn) {
                    return ___.slice();
                } else {
                    for (var
                        i = 0,
                        length = ___.length;
                        i < length; ++i
                    ) {
                        eval(this + "=___[i];" + this.___);
                    }
                }
            }
        } else {
            return eval("(" + this + ")['in'](___)");
        }
    };
    
    Object_prototype["in"] = function (___) {
        for (var
            comapre = ifWasPrimitiveReConvertIt(this),
            i = ___.length;
            i--;
        ) {
            if (comapre === ___[i]) return true;
        }
        return false;
    }
    
    String_prototype.asRange = function () {
        var
            range = this.split(".."),
            start = ~~range[0],
            end = ~~range[1],
            result = []
        ;
        if (start < end) {
            while (start <= end) result.push(start++);
        } else {
            while (end <= start) result.push(start--);
        }
        return result;
    };
    
    try {
        // "window"["?"] // true
        // "whatever"["?"] // false
        Object.defineProperty(String_prototype, "?", {
            get: function () {
                return eval("typeof " + this + "!='undefined'&&" + this + "!=null");
            }
        });
        String_prototype["?="] = function (value) {
            return this["?"] ? "" + this : window[this] = value;
        };
    } catch(_) {
    }

    var
        sVarRefs = /\#\{[\w_$-]+\}/g,
        passthrough = true,
        viafor = false,
        thenInvoked
    ;
    
    function $$(){
        return $;
    }
    
    function $(self) {
        switch (typeof self) {
            case "string":
                return eval("(function(){" + evalIfString(self) + "})");
            case "object":
                eval("(function(){" + self.join("\n") + "})()");
            default:
                return self;
        }
    }

    window.$ = $;
    
    window.yes = window.on = true;
    window.no = window.off = false;
    
}(this, Object.prototype, String.prototype);