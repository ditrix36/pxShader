/* global NaN */

// global vraiables            
//others
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (f) {
            return setTimeout(f, 1000 / 60)
        };
window.cancelAnimationFrame = window.cancelAnimationFrame
        || window.mozCancelAnimationFrame
        || function (requestID) {
            clearTimeout(requestID)
        };

var PI = Math.PI,
        E = Math.E;
WIDTH = null,
        HEIGHT = null,
        TRANS_STAT = [0, 0],
        SCALE_STAT = [1, 1]
ROT_STAT = 0,
        KEY_P = null,
        KEY_U = null,
        MP_X = null,
        MP_Y = null,
        CLICK = false,
        DB_CLICK = false;
document.INTERVAL = null;
document.TRANSFORMS = [ROT_STAT, TRANS_STAT, SCALE_STAT, 1];
document.TIME_STAT = {then: null, interval: null};
//colors
var COLORS = {
    INDIANRED: "#CD5C5C",
    LIGHTCORAL: "#F08080",
    SALMON: "#FA8072",
    DARKSALMON: "#E9967A",
    LIGHTSALMON: "#FFA07A",
    CRIMSON: "#DC143C",
    RED: "#FF0000",
    FIREBRICK: "#B22222",
    DARKRED: "#8B0000",
    PINK: "#FFC0CB",
    LIGHTPINK: "#FFB6C1",
    HOTPINK: "#FF69B4",
    DEEPPINK: "#FF1493",
    MEDIUMVIOLETRED: "#C71585",
    PALEVIOLETRED: "#DB7093",
    CORAL: "#FF7F50",
    TOMATO: "#FF6347",
    ORANGERED: "#FF4500",
    DARKORANGE: "#FF8C00",
    ORANGE: "#FFA500",
    GOLD: "#FFD700",
    YELLOW: "#FFFF00",
    LIGHTYELLOW: "#FFFFE0",
    LEMONCHIFFON: "#FFFACD",
    LIGHTGOLDENRODYELLOW: "#FAFAD2",
    PAPAYAWHIP: "#FFEFD5",
    MOCCASIN: "#FFE4B5",
    PEACHPUFF: "#FFDAB9",
    PALEGOLDENROD: "#EEE8AA",
    KHAKI: "#F0E68C",
    DARKKHAKI: "#BDB76B",
    LAVENDER: "#E6E6FA",
    THISTLE: "#D8BFD8",
    PLUM: "#DDA0DD",
    VIOLET: "#EE82EE",
    ORCHID: "#DA70D6",
    FUCHSIA: "#FF00FF",
    MAGENTA: "#FF00FF",
    MEDIUMORCHID: "#BA55D3",
    MEDIUMPURPLE: "#9370DB",
    REBECCAPURPLE: "#663399",
    BLUEVIOLET: "#8A2BE2",
    DARKVIOLET: "#9400D3",
    DARKORCHID: "#9932CC",
    DARKMAGENTA: "#8B008B",
    PURPLE: "#800080",
    INDIGO: "#4B0082",
    SLATEBLUE: "#6A5ACD",
    DARKSLATEBLUE: "#483D8B",
    MEDIUMSLATEBLUE: "#7B68EE",
    GREENYELLOW: "#ADFF2F",
    CHARTREUSE: "#7FFF00",
    LAWNGREEN: "#7CFC00",
    LIME: "#00FF00",
    LIMEGREEN: "#32CD32",
    PALEGREEN: "#98FB98",
    LIGHTGREEN: "#90EE90",
    MEDIUMSPRINGGREEN: "#00FA9A",
    SPRINGGREEN: "#00FF7F",
    MEDIUMSEAGREEN: "#3CB371",
    SEAGREEN: "#2E8B57",
    FORESTGREEN: "#228B22",
    GREEN: "#008000",
    DARKGREEN: "#006400",
    YELLOWGREEN: "#9ACD32",
    OLIVEDRAB: "#6B8E23",
    OLIVE: "#808000",
    DARKOLIVEGREEN: "#556B2F",
    MEDIUMAQUAMARINE: "#66CDAA",
    DARKSEAGREEN: "#8FBC8B",
    LIGHTSEAGREEN: "#20B2AA",
    DARKCYAN: "#008B8B",
    TEAL: "#008080",
    AQUA: "#00FFFF",
    CYAN: "#00FFFF",
    LIGHTCYAN: "#E0FFFF",
    PALETURQUOISE: "#AFEEEE",
    AQUAMARINE: "#7FFFD4",
    TURQUOISE: "#40E0D0",
    MEDIUMTURQUOISE: "#48D1CC",
    DARKTURQUOISE: "#00CED1",
    CADETBLUE: "#5F9EA0",
    STEELBLUE: "#4682B4",
    LIGHTSTEELBLUE: "#B0C4DE",
    POWDERBLUE: "#B0E0E6",
    LIGHTBLUE: "#ADD8E6",
    SKYBLUE: "#87CEEB",
    LIGHTSKYBLUE: "#87CEFA",
    DEEPSKYBLUE: "#00BFFF",
    DODGERBLUE: "#1E90FF",
    CORNFLOWERBLUE: "#6495ED",
    ROYALBLUE: "#4169E1",
    BLUE: "#0000FF",
    MEDIUMBLUE: "#0000CD",
    DARKBLUE: "#00008B",
    NAVY: "#000080",
    MIDNIGHTBLUE: "#191970",
    CORNSILK: "#FFF8DC",
    BLANCHEDALMOND: "#FFEBCD",
    BISQUE: "#FFE4C4",
    NAVAJOWHITE: "#FFDEAD",
    WHEAT: "#F5DEB3",
    BURLYWOOD: "#DEB887",
    TAN: "#D2B48C",
    ROSYBROWN: "#BC8F8F",
    SANDYBROWN: "#F4A460",
    GOLDENROD: "#DAA520",
    DARKGOLDENROD: "#B8860B",
    PERU: "#CD853F",
    CHOCOLATE: "#D2691E",
    SADDLEBROWN: "#8B4513",
    SIENNA: "#A0522D",
    BROWN: "#A52A2A",
    MAROON: "#800000",
    WHITE: "#FFFFFF",
    SNOW: "#FFFAFA",
    HONEYDEW: "#F0FFF0",
    MINTCREAM: "#F5FFFA",
    AZURE: "#F0FFFF",
    ALICEBLUE: "#F0F8FF",
    GHOSTWHITE: "#F8F8FF",
    WHITESMOKE: "#F5F5F5",
    SEASHELL: "#FFF5EE",
    BEIGE: "#F5F5DC",
    OLDLACE: "#FDF5E6",
    FLORALWHITE: "#FFFAF0",
    ANTIQUEWHITE: "#FAEBD7",
    LINEN: "#FAF0E6",
    LAVENDERBLUSH: "#FFF0F5",
    MISTYROSE: "#FFE4E1",
    GAINSBORO: "#DCDCDC",
    LIGHTGRAY: "#D3D3D3",
    SILVER: "#C0C0C0",
    DARKGRAY: "#A9A9A9",
    GRAY: "#808080",
    DIMGRAY: "#696969",
    LIGHTSLATEGRAY: "#778899",
    SLATEGRAY: "#708090",
    DARKSLATEGRAY: "#2F4F4F",
    BLACK: "#000000",
    length: 140,
    gradient: () => {

    }
};

function canvas2d(width, height, responsive, center) {
    var canvas = document.createElement("canvas");
    if (height === undefined) {
        canvas.height = 600;
    }
    if (width === undefined) {
        canvas.width = 600;
    } else {
        canvas.width = width,
                canvas.height = height;
    }
    WIDTH = canvas.width, HEIGHT = canvas.height;
    window.addEventListener("keydown", function (e) {
        KEY_P = e.key;
        KEY_U = null;
    });
    window.addEventListener("keyup", function (e) {
        KEY_U = e.key;
        KEY_P = null;
    });
    canvas.addEventListener("mousemove", function (e) {
        MP_X = e.clientX
        MP_Y = e.clientY;
    });
    canvas.addEventListener("mousedown", function (e) {
        CLICK = true;
        return;
    });
    canvas.addEventListener("dblclick", function (e) {
        DB_CLICK = true;
    });
    canvas.addEventListener("mouseup", function (e) {
        CLICK = false;
        DB_CLICK = false;
    });
    var game = {
        element: canvas,
        width: canvas.width,
        height: canvas.height,
        safeWidth: 1024,
        safeHeight: 720
    },
            resizeGame = function () {

                var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
                // Get the dimensions of the viewport
                viewport = {
                    width: window.innerWidth * 0.97,
                    height: window.innerHeight * 0.97
                };
                // Determine game size
                if (game.height / game.width > viewport.height / viewport.width) {
                    if (game.safeHeight / game.width > viewport.height / viewport.width) {
                        // A
                        newGameHeight = viewport.height * game.height / game.safeHeight;
                        newGameWidth = newGameHeight * game.width / game.height;
                    } else {
                        // B
                        newGameWidth = viewport.width;
                        newGameHeight = newGameWidth * game.height / game.width;
                    }
                } else {
                    if (game.height / game.safeWidth > viewport.height / viewport.width) {
                        // C
                        newGameHeight = viewport.height;
                        newGameWidth = newGameHeight * game.width / game.height;
                    } else {
                        // D
                        newGameWidth = viewport.width * game.width / game.safeWidth;
                        newGameHeight = newGameWidth * game.height / game.width;
                    }
                }

                game.element.style.width = newGameWidth + "px";
                game.element.style.height = newGameHeight + "px";
                newGameX = (viewport.width - newGameWidth) / 2;
                newGameY = (viewport.height - newGameHeight) / 2;
                // Set the new padding of the game so it will be centered
                if (center) {
                    game.element.style.margin = newGameY + "px " + newGameX + "px";
                }
            };
    if (responsive) {
        window.addEventListener("resize", resizeGame);
        resizeGame();
    }
    document.body.appendChild(canvas);
    document.canvas = canvas;
    background("#343a40")
    var ctx = canvas.getContext("2d");
    document.ctx = ctx;
    document.CONTEXT_SHAPES = [];
    return canvas;
}

function rotate(deg) {
    document.ctx.rotate(deg);
    ROT_STAT = deg;
}

function translate(x, y) {
    document.ctx.translate(x, y);
    TRANS_STAT = [x, y];
}

function transparency(val) {
    document.ctx.globalAlpha = val;
}

function background(color, element) {
    if (typeof (color) === "number") {
        color = COLORS[Object.keys(COLORS)[color]];
    }
    if (element === undefined) {
        element = document.canvas;
    }
    element.style.backgroundColor = color;
}

function save() {
    document.TRANSFORMS[0] = ROT_STAT;
    document.TRANSFORMS[1] = TRANS_STAT;
    document.TRANSFORMS[2] = SCALE_STAT;
    document.TRANSFORMS[3] = document.ctx.globalAlpha;
    document.ctx.save();
}

function restore() {
    document.ctx.restore();
    ROT_STAT = document.TRANSFORMS[0];
    TRANS_STAT = document.TRANSFORMS[1];
    SCALE_STAT = document.TRANSFORMS[2];
    document.ctx.globalAlpha = document.TRANSFORMS[3];
}

function scale(x, y) {
    document.ctx.scale(x, y);
    SCALE_STAT = [x, y];
}

function arc(param) {
    var obj = {};
    if (param.color === undefined) {
        param.color = "white";
    }
    if (param.deg === undefined) {
        param.deg = Math.PI * 2;
    }
    if (param.x === undefined || param.y === undefined) {
        throw new Error("cannot intialize Circle with x and y parameters");
    } else {
        obj = param;
        if (obj.stroke !== undefined && typeof (obj.stroke.color) === "number") {
            obj.stroke.color = COLORS[Object.keys(COLORS)[obj.stroke.color]];
        }
        if (obj.stroke === undefined) {
            obj.stroke = false;
        }
        obj.type = "objectShapeArc";
        obj.draw = function () {
            if (document.ctx === undefined) {
                throw new Error("No pre-Initialization: CreateCanvas function not triggered");
            }
            if (typeof (obj.color) === "number") {
                obj.color = COLORS[Object.keys(COLORS)[obj.color % COLORS.length]];
            }
            document.ctx.beginPath();
            if (typeof (obj.stroke) !== "object" || obj.stroke.coop) {
                document.ctx.fillStyle = obj.color;
            }
            if (typeof (obj.stroke) === "object" || obj.stroke.coop) {
                document.ctx.strokeStyle = obj.stroke.color;
                document.ctx.lineWidth = obj.stroke.width;
            }
            document.ctx.lineCap = obj.cap || "round";
            document.ctx.arc(obj.x, obj.y, obj.r, 0, obj.deg);
            if (obj.stroke.coop) {
                document.ctx.fill();
                document.ctx.stroke();
            } else if (typeof (obj.stroke) === "object") {
                document.ctx.stroke();
            } else {
                document.ctx.fill();
            }
            document.ctx.closePath();
        };
    }
    document.CONTEXT_SHAPES.push(obj);
    return obj;
}

function rec(param) {
    var obj = {};
    if (param.color === undefined) {
        param.color = "white";
    }
    if (param.x === undefined || param.y === undefined) {
        throw new Error("cannot intialize Rec with x and y parameters ");
    } else {
        obj = param;
        if (obj.stroke !== undefined && typeof (obj.stroke.color) === "number") {
            obj.stroke.color = COLORS[Object.keys(COLORS)[obj.stroke.color]];
        }
        if (obj.stroke === undefined) {
            obj.stroke = false;
        }
        obj.type = "objectShapeRect";
        obj.draw = function () {
            if (document.ctx === undefined) {
                throw new Error("No pre-Initialization: CreateCanvas function not triggered");
            }
            if (typeof (obj.color) === "number") {
                obj.color = COLORS[Object.keys(COLORS)[obj.color]];
            }
            document.ctx.beginPath();
            if (typeof (obj.stroke) !== "object" || obj.stroke.coop) {
                document.ctx.fillStyle = obj.color;
            }
            document.ctx.lineCap = obj.cap;
            if (typeof (obj.stroke) === "object" || obj.stroke.coop) {
                document.ctx.strokeStyle = obj.stroke.color;
                document.ctx.lineWidth = obj.stroke.width;
            }
            document.ctx.rect(obj.x, obj.y, obj.w, obj.h);
            if (obj.stroke.coop) {
                document.ctx.fill();
                document.ctx.stroke();
            } else if (typeof (obj.stroke) === "object") {
                document.ctx.stroke();
            } else {
                document.ctx.fill();
            }
        };
        document.CONTEXT_SHAPES.push(obj);
        return obj;
    }
}

function text(param) {
    var obj = {};
    if (param.x === undefined || param.y === undefined || param.txt === undefined) {
        throw new Error("cannot intialitialize txt without atleast 3 parameters");
    } else {
        if (param.font === undefined) {
            param.font = "30px arial";
        }
        if (param.color === undefined) {
            param.color = "white";
        }
        if (param.align === undefined) {
            param.align = "left";
        }
        obj = param;
        if (obj.stroke !== undefined && typeof (obj.stroke.color) === "number") {
            obj.stroke.color = COLORS[Object.keys(COLORS)[obj.stroke.color]];
        }
        if (obj.stroke === undefined) {
            obj.stroke = false;
        }
        if (param.stroke !== undefined) {
            obj.stroke = param.stroke;
        }
        document.ctx.font = obj.font;
        document.ctx.textAlign = obj.align;
        obj.type = "objectShapeText";
        obj.draw = function () {
            if (typeof (obj.color) === "number") {
                obj.color = COLORS[Object.keys(COLORS)[obj.color]];
            }
            if (document.ctx === undefined) {
                throw new Error("No pre-Initialization: CreateCanvas function not triggered");
            }
            if (typeof (obj.stroke) !== "object" || obj.stroke.coop) {
                document.ctx.fillStyle = obj.color;
                document.ctx.fillText(obj.txt, obj.x, obj.y);
            }
            if (typeof (obj.stroke) === "object" || obj.stroke.coop) {
                document.ctx.strokeStyle = obj.stroke.color;
                document.ctx.lineWidth = obj.stroke.width || "1px";
                document.ctx.strokeText(obj.txt, obj.x, obj.y);
            }

            document.ctx.closePath();
        };

        obj.toBox = () => {
            var font = Number(obj.font.split(" ")[0].replace("px", ""));
            var w = document.ctx.measureText(obj.txt);
            return {
                x: obj.x,
                y: obj.y - font / 1.2,
                h: font,
                w: w.width
            };
        };
    }
    document.CONTEXT_SHAPES.push(obj);
    return obj;
}

function line(param) {
    var obj = {};
    if (param.from === undefined) {
        throw new Error("cannot initialize line without start point in parameter's object");
    }
    if (param.to === undefined) {
        throw new Error("cannot initialize line without end point in parameter's object");
    } else {
        obj = param;
        if (typeof (obj.color) === "number") {
            obj.color = COLORS[Object.keys(COLORS)[obj.color]];
        }
        if (obj.stroke !== undefined && typeof (obj.stroke.color) === "number") {
            obj.stroke.color = COLORS[Object.keys(COLORS)[obj.stroke.color]];
        }
    }
    if (param.color === undefined) {
        obj.color = "white";
    }
    obj.type = "ObjectShapeLine";
    if (obj.bound) {
        updateBound(obj.bound, obj);
    }
    obj.grad = ((obj.to[1] - obj.from[1]) / (obj.to[0] - obj.from[0]));
    obj.draw = function () {
        obj.grad = ((obj.to[1] - obj.from[1]) / (obj.to[0] - obj.from[0]));
        if (typeof (obj.color) === "number") {
            obj.color = COLORS[Object.keys(COLORS)[obj.color]];
        }
        document.ctx.beginPath();
        document.ctx.strokeStyle = obj.color;
        document.ctx.lineWidth = obj.w;
        document.ctx.lineCap = obj.cap;
        document.ctx.moveTo(param.from[0], param.from[1]);
        document.ctx.lineTo(param.to[0], param.to[1]);
        document.ctx.stroke();
        document.ctx.closePath();
    };
    document.CONTEXT_SHAPES.push(obj);
    return obj;
}

function path(str) {
    var pts = [],
            actions = [],
            s, arrp = [],
            iscolor = false;
    var obj = {};
    obj.type = "ObjectShapePath";
    str = str.replace(/ /g, "").replace(/\./g, "").replace(/;/g, "").replace(/:/g, "");
    for (x = 0; x < str.length; x++) {
        if (str[x].toLocaleLowerCase() === "(") {
            s = "";
        } else if (str[x].toLocaleLowerCase() === ")") {
            iscolor = false;
            arrp.push(Number(s) || s);
            pts.push(arrp);
            arrp = [];
            s = null;
        } else if (Number(str[x]) + 1 || iscolor) {
            s += str[x];
        } else if (str[x] === ",") {
            arrp.push(Number(s) || s);
            s = "";
        } else if (str[x].toLocaleLowerCase() === "m") {
            actions.push("moveTo");
            iscolor = false;
        } else if (str[x].toLocaleLowerCase() === "l") {
            actions.push("lineTo");
            iscolor = false;
        } else if (str[x].toLocaleLowerCase() === "c") {
            actions.push("bezierCurveTo");
            iscolor = false;
        } else if (str[x].toLocaleLowerCase() === "q") {
            actions.push("quadraticCurveTo");
            iscolor = false;
        } else if (str[x].toLocaleLowerCase() === "b") {
            actions.push("beginPath");
            pts.push([])
            iscolor = false;
        } else if (str[x].toLocaleLowerCase() === "s") {
            iscolor = true;
            actions.push("stroke");
        } else if (str[x].toLocaleLowerCase() === "f") {
            actions.push("fill");
            iscolor = true;
        } else {
            throw Error("unexpected character:" + str[x] + " at index " + x);
        }
    }
    obj.points = pts;
    obj.acts = actions;
    document.CONTEXT_SHAPES.push(obj);
    obj.draw = function () {
        document.ctx.beginPath();
        for (i = 0; i < obj.points.length; i++) {
            if (obj.acts[i] === "fill" || obj.acts[i] === "stroke") {
                document.ctx[obj.acts[i] + "Style"] = obj.points[i];
                document.ctx[obj.acts[i]]();
            } else if (obj.acts[i] === "bezierCurveTo") {
                document.ctx[obj.acts[i]](obj.points[i][0], obj.points[i][1], obj.points[i][2], obj.points[i][3], obj.points[i][4], obj.points[i][5]);
            } else if (obj.acts[i] === "quadraticCurveTo") {
                document.ctx[obj.acts[i]](obj.points[i][0], obj.points[i][1], obj.points[i][2], obj.points[i][3]);
            } else {
                document.ctx[obj.acts[i]](obj.points[i][0], obj.points[i][1]);
            }
        }
        document.ctx.closePath();
    };
    return obj;
}

function objArray(arr) {
    var obj = {};
    obj.type = "objectShapeArray";
    obj.parts = arr;
    obj.x = arr[0].x;
    obj.y = arr[0].y;
    obj.prev = {
        x: arr[0].x,
        y: arr[0].y
    };
    arr.forEach((e) => {
        eraseShape(e);
    });
    document.CONTEXT_SHAPES.push(obj);
    obj.draw = function () {
        document.ctx.beginPath();
        var dx = obj.x - obj.prev.x,
                dy = obj.y - obj.prev.y;
        obj.prev = {
            x: obj.x,
            y: obj.y
        };
        for (i = 0; i < obj.parts.length; i++) {
            obj.parts[i].x += dx;
            obj.parts[i].y += dy;
            obj.parts[i].draw();
        }
        document.ctx.closePath();
    };
    return obj;
}

function img(param) {
    var path = param.src,
            y = param.y,
            x = param.x,
            w = param.w,
            h = param.h;
    var obj = {};
    obj.type = "objectShapeImage";
    obj.maps = [];
    obj.mode = 0;
    obj.limit = 0;
    obj.index = 0;
    obj.start = 0;
    if (w || h) {
        obj.w = w;
        obj.h = h;
    }
    if (path) {
        try {
            var img = new Image();
            img.src = path;
        } catch (e) {
            throw new Error("Sorry could not load Image Reference");
        }
    } else {
        throw new Error("No file reference for img");
    }
    if (x !== undefined && y !== undefined) {
        obj.x = x, obj.y = y, img.onload = function () {
            obj.data = img;
            if (!obj.w && !obj.h) {
                obj.w = obj.data.width;
                obj.h = obj.data.height;
            }
        };
    } else {
        throw new Error("Cannot initialze image without x or y paramters");
    }
    document.CONTEXT_SHAPES.push(obj);
    obj.draw = function (n) {
        document.ctx.beginPath();
        if (obj.data == undefined) {
            setTimeout(obj.draw, 2, n);
        } else {
            if (obj.mode === 0) {
                document.ctx.drawImage(obj.data, obj.x | 0, obj.y | 0, obj.w | 0, obj.h | 0);
            } else if (obj.mode === 1) {
                if (n) {
                    for (x = 0; x < obj.maps.length; x++) {
                        if (obj.maps[x].name === n) {
                            document.ctx.drawImage(obj.data, obj.maps[x].offset[0] | 0, obj.maps[x].offset[1] | 0, obj.maps[x].w | 0, obj.maps[x].h | 0, obj.x, obj.y, obj.maps[x].w * obj.maps[x].zoom, obj.maps[x].h * obj.maps[x].zoom);
                            break;
                        }
                    }
                }
            } else if (obj.mode === 2) {
                var x = obj.index;
                if (obj.start > obj.index) {
                    obj.index = obj.start;
                }
                if (obj.limit <= 0) {
                    obj.limit = obj.maps.length - 1;
                }
                document.ctx.drawImage(obj.data, obj.maps[x].offset[0] | 0, obj.maps[x].offset[1] | 0, obj.maps[x].w | 0, obj.maps[x].h | 0, obj.x, obj.y, obj.maps[x].w * obj.maps[x].zoom, obj.maps[x].h * obj.maps[x].zoom);
                obj.index++;
                if (obj.index > obj.limit) {
                    obj.index = obj.start;
                }
            }
        }
    }
    obj.map = function (name, offset, width, height, mag) {
        if (typeof (name) === "Object" && name[0]) {
            obj.maps.concat(name);
        } else if (typeof (name) === "string" && offset) {
            obj.maps.push({
                name: name,
                offset: offset,
                w: width || obj.w / 16 || 20,
                h: height || obj.w / 20 || 20,
                zoom: mag || 1
            });
        } else {
            throw error("Unkown mapping format");
        }
    }
    return obj;
}

function grid(interval) {
    for (i = 0; i < WIDTH; i += interval) {
        line({
            from: [i, HEIGHT],
            to: [i, 0]
        });
        draw();
        var txt = text({
            x: i,
            y: HEIGHT,
            txt: i / interval,
            font: (interval * 2 / 3 + "px arial")
        });
        txt.draw();
    }
    for (i = 0; i < HEIGHT; i += interval) {
        line({
            from: [WIDTH, i],
            to: [0, i]
        });
        draw();
        var txt = text({
            x: WIDTH - interval,
            y: i,
            txt: i / interval,
            font: (interval * 2 / 3 + "px arial")
        });
        txt.draw();
    }
}

function eraseShape(obj) {
    if (obj === undefined) {
        document.CONTEXT_SHAPES.length = 0;
    } else {
        document.CONTEXT_SHAPES.splice(document.CONTEXT_SHAPES.indexOf(obj), 1);
    }
}

function toPoints(obj, interval) {
    clear();
    interval = interval === undefined ? 7 : interval;
    obj.draw();
    var pts = [];
    var pix = getPixels();
    var ref = [pix[0], pix[1], pix[2], pix[3]];
    for (x = 0; x < WIDTH; x += interval) {
        for (y = 0; y < HEIGHT; y += interval) {
            index = (x + y * WIDTH) * 4 - 1;
            if (pix[index] === 255 && pix[index] === 255) {
                pts.push({
                    x: x,
                    y: y
                });
            }
        }
    }
    clear();
    eraseShape(obj);
    draw();
    return pts;
}
// math functions

function ceil(n1) {
    return Math.ceil(n1);
}

function floor(n1) {
    return Math.floor(n1);
}

function rand(min, max) {
    return ceil(Math.random() * max) % max + min;
}

function abs(num) {
    return Math.abs(num);
}

function max(n1, n2) {
    return Math.max(n1, n2);
}

function min(n1, n2) {
    return Math.min(n1, n2);
}

function sin(num) {
    return Math.sin(num);
}

function cos(num) {
    return Math.cos(num);
}

function tan(num) {
    return Math.tan(num);
}

function sinh(num) {
    return Math.sinh(num);
}

function cosh(num) {
    return Math.cosh(num);
}

function tanh(num) {
    return Math.tanh(num);
}

function asin(num) {
    return Math.asin(num);
}

function acos(num) {
    return Math.acos(num);
}

function atan(num) {
    return Math.atan(num);
}

function asinh(num) {
    return Math.asinh(num);
}

function acosh(num) {
    return Math.acosh(num);
}

function atanh(num) {
    return Math.atanh(num);
}

function sqrt(num) {
    return Math.sqrt(num);
}

function exp(num) {
    return Math.exp(num);
}

function ln(num) {
    return Math.log(num);
}

function pow(num, p) {
    return Math.pow(num, p);
}

function clear(param) {
    if (param === undefined) {
        document.ctx.clearRect(-TRANS_STAT[0], -TRANS_STAT[1], WIDTH, HEIGHT);
    } else {
        document.ctx.clearRect(param.x, param.y, param.width, param.height);
    }
}

function draw(arr) {
    if (arr !== undefined) {
        arr.forEach((e, i) => {
            try {
                e.draw();
            } catch (err) {
                throw err;
                stopAnim();
            }
        });
    } else {
        document.CONTEXT_SHAPES.forEach((e, i) => {
            e.draw();
        });
    }
}

function animate(func, t) {
    if (t !== undefined) {
        t = t <= 0 ? 1 : t;
        t = 1000 / t;
    }
    function exec() {
        clear();
        if (typeof (func) === "function") {
            try {
                func();
            } catch (e) {
                stopAnim();
                throw e;
            }
        }
        draw();
    }
    document.TIME_STAT.then = Date.now();
    document.TIME_STAT.interval = t;
    var loop = () => {
        if (document.TIME_STAT.interval) {
            if (Date.now() - document.TIME_STAT.then > document.TIME_STAT.interval) {
                exec();
                document.TIME_STAT.then = Date.now();
            }
        } else {
            exec();

        }
        if (document.INTERVAL) {
            document.INTERVAL = window.requestAnimationFrame(loop, t);
        }
    }
    document.INTERVAL = window.requestAnimationFrame(loop, t);
}

function update(func, t) {
    if (t === undefined) {
        t = 1000 / 60;
    } else {
        t = t <= 0 ? 1 : t;
        t = 1000 / t;
    }
    document.TIME_STAT.then = Date.now();
    document.TIME_STAT.interval = t;
    function exec() {
        if (typeof (func) === "function") {
            try {
                func();
            } catch (e) {
                stopAnim();
                throw e;
            }
        }
    }
    var loop = () => {
        if (Date.now() - document.TIME_STAT.then > document.TIME_STAT.interval) {
            exec();
            document.TIME_STAT.then = Date.now();
        } else {
            exec();
        }
        if (document.INTERVAL) {
            document.INTERVAL = window.requestAnimationFrame(loop, t);
        }
    }
    document.INTERVAL = window.requestAnimationFrame(loop, t);
}

function stopAnim() {
    window.cancelAnimationFrame(document.INTERVAL);
    document.INTERVAL = null;
}

function getPixels() {
    var ImgData = document.ctx.getImageData(0, 0, document.canvas.width, document.canvas.height);
    document.ImgData = ImgData;
    var pixel = ImgData.data;
    return pixel;
}

function setPixels() {
    document.ctx.putImageData(document.ImgData, 0, 0);
}
function intersect(objA, objB) {
    if (objA.type === undefined && !objB) {
        if (document.ctx.isPointInPath(objA[0], objA[1])) {
            return true;
            document.ctx.closePath();
        }
    }
    if (objA && objB) {
        if (objA.type === "objectShapeText" || objB.type === "objectShapeText") {
            if (objA.type === "objectShapeText") {
                objA = objA.toBox();
                objA.type = "objectShapeRect";
            }
            if (objB.type === "objectShapeText") {
                objB = objB.toBox();
                objB.type = "objectShapeRect";
            }
        } else if (objA.type === "objectShapeArc" && objB.type === "objectShapeArc") {
            if (dist(objA, objB) < (objA.r + objB.r)) {
                return true;
            }
        } else if (objA.type === "objectShapeArc" && objB.type === "objectShapeRect" || objB.type === "objectShapeArc" && objA.type === "objectShapeRect") {
            if (objA.type === "objectShapeRect") {
                var r = objA,
                        c = objB;
            } else {
                var r = objB,
                        c = objA;
            }
            var NearestX = max(r.x, min(c.x, r.x + r.w)),
                    NearestY = max(r.y, min(c.y, r.y + r.h)),
                    DeltaX = c.x - max(r.x, min(c.x, r.x + r.w)),
                    DeltaY = c.y - max(r.y, min(c.y, r.y + r.h));
            return (DeltaX * DeltaX + DeltaY * DeltaY) < (c.r * c.r);
        } else if (objA.type === "objectShapeRect" && objB.type === "objectShapeRect") {
            if (objA.x < objB.x + objB.w && objA.x + objA.w > objB.x && objA.y < objB.y + objB.h && objA.y + objA.h > objB.y) {
                return true;
            }
        } else if (objA.type === "objectShapeArray" && objB.type === "objectShapeArray") {
            var bool = false;
            for (i = 0; i < objA.parts.length; i++) {
                for (j = 0; j < objB.parts.length; j++) {
                    if (intersect(objA.parts[i], objB.parts[j])) {
                        bool = true;
                        break;
                    }
                }
            }
            return bool;
        } else if ((objA.type === "objectShapeArray" || objB.type === "objectShapeArray") && (objA.type !== "objectShapeArray" || objB.type !== "objectShapeArray")) {
            if (objA.type === "objectShapeArray") {
                var arr = objA;
            } else {
                var arr = objB;
            }
            var bool;
            for (x = 0; x < arr.parts.length; x++) {
                if (intersect(arr.parts[x], objB)) {
                    bool = true;
                    break;
                }
            }
            return bool;
        } else if (objA.type === "ObjectShapeLine" && objB.type === "ObjectShapeLine") {
            return lineline(objA.from[0], objA.from[1], objA.to[0], objA.to[1], objB.from[0], objB.from[1], objB.to[0], objB.to[1]);
        } else if (objA.type === "ObjectShapeLine" && objB.type === "objectShapeRect" || objB.type === "ObjectShapeLine" && objA.type === "objectShapeRect") {
            if (objA.type === "ObjectShapeLine") {
                var l = objA;
                var r = objB;
            } else {
                var r = objA;
                var l = objB;
            }
            var a = lineline(l.from[0], l.from[1], l.to[0], l.to[1], r.x, r.y, r.x + r.w, r.y);
            var b = lineline(l.from[0], l.from[1], l.to[0], l.to[1], r.x, r.y, r.x, r.y + r.h);
            var c = lineline(l.from[0], l.from[1], l.to[0], l.to[1], r.x + r.w, r.y, r.x, r.y + r.h);
            var d = lineline(l.from[0], l.from[1], objA.to[0], l.to[1], r.x + r.w, r.y + r.h, r.x, r.y + r.h);
            return a || b || c || d;
        } else if (objA.type === "objectShapeArc" && objB.type === "ObjectShapeLine" || objA.type === "ObjectShapeLine" && objB.type === "objectShapeArc") {
            if (objA.type === "ObjectShapeLine") {
                var l = objA;
                var c = objB;
            } else {
                var c = objA;
                var l = objB;
            }
            function formula(c, l) {
                var r = c.r, h = c.x, k = c.y, m = l.grad, b = ceil(l.from[1] - m * (l.from[0]));
                var d = (pow(m, 2) * (pow(r, 2) - pow(h, 2)) + 2 * m * h * (k - b) + (-pow(k, 2) + 2 * b * k - pow(b, 2) + pow(r, 2)));
                if (d > 0 && m !== Infinity) {
                    var x1 = ((h + m * k - m * b) + sqrt(d)) / (1 + m * m);
                    var y1 = m * x1;
                    var x2 = ((h + m * k - m * b) - sqrt(d)) / (1 + m * m);
                    var y2 = m * x2;
                    return [{x: x1, y: y1}, {x: x2, y: y2}];
                } else {
                    return false;
                }
            }

            var cord = formula(c, l);
            if (cord) {
                var mn = l.from[0] < l.to[0] ? l.from[0] : l.to[0];
                var mx = l.from[0] > l.to[0] ? l.from[0] : l.to[0];
                if (c.x >= mn && c.x <= mx)
                    return true;
            }
        }
    }
    function lineline(x1, y1, x2, y2, x3, y3, x4, y4) {
        let uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)),
                uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
            return true;
        }
    }
    return false;
}
function dist(objA, objB) {
    if (objB == null) {
        objB = new Object({
            x: 0,
            y: 0
        });
    }
    return sqrt(pow((objA.x - objB.x), 2) + pow((objA.y - objB.y), 2));
}

function copyObj(obj) {
    var copy = {};
    for (x in obj) {
        copy[x] = obj[x];
    }
    return copy;
}