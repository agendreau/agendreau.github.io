var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../libs/core/enums.d.ts"/>
//import * as WebRequest from 'web-request';
var sensor = '';
//namespace pxsim.sensorsStore {
//import axios from '../node_modules/axios';
//var request = require('web-request')
//% weight = 90
//% blockId=tempF block="Temperature"
//export async function tempFAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.current_observation.temp_f);
    //board().updateView();
    var h =  parseFloat(json.current_observation.temp_f);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#temp_text").text(h);
    d3.select("#temp_text").attr("y",200-h);
    d3.select("#temp").attr("cy",200-h);
    console.log("past update");*/
//}
//% weight = 85
//% blockId=humid block="Humidity"
//export async function humidityAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

const json = await response.json();

console.log(json.current_observation.relative_humidity.replace('%',''));
//board().updateView();
var h =  parseFloat(json.current_observation.relative_humidity.replace('%',''));
console.log("in update function");
//var svg = d3.select("humid").transform.attr("cy",50);
d3.select("#humid_text").text(h);
d3.select("#humid_text").attr("y",200-h);
d3.select("#humid").attr("cy",200-h);
console.log("past update");*/
//}
/* fetch('http://www.google.com/').then(function(response) {
     console.log(stringify(response)})*/
/*var result = await request.get('http://www.google.com/');
console.log(result.content);*/
//% weight = 80
//% blockId=pressure block="Pressure"
// export async function pressureAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.current_observation.pressure_in);
    //board().updateView();
    var h =  parseFloat(json.current_observation.pressure_in);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#pressure_text").text(h);
    d3.select("#pressure_text").attr("y",200-h);
    d3.select("#pressure").attr("cy",200-h);
    console.log("past update");*/
//}
//% weight = 75
//% blockId=pressure block="Pressure"
//export async function altitudeAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.observation_location.elevation);
    //board().updateView();
    var h =  parseFloat(json.observation_location.relative_humidity);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#altitude_text").text(h);
    d3.select("#altitude_text").attr("y",200-h);
    d3.select("#altitude").attr("cy",200-h);
    console.log("past update");*/
// }
//% weight = 75
//% blockId=tvoc block="TVOC"
/*export async function tvocAsync(){
    const response = await fetch('https://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')
    
        const json = await response.json();
    
        console.log(json.current_observation.relative_humidity);
        //board().updateView();
        var h =  parseFloat(json.current_observation.relative_humidity);
        console.log("in update function");
        //var svg = d3.select("humid").transform.attr("cy",50);
        d3.select("#humid_text").text(h);
        d3.select("#humid_text").attr("y",200-h);
        d3.select("#humid").attr("cy",200-h);
        console.log("past update");

}*/
//% weight = 70
//% blockId=co2 block="CO2"
/*export async function co2Async(){
    const response = await fetch('https://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')
    
        const json = await response.json();
    
        console.log(json.current_observation.relative_humidity);
        //board().updateView();
        var h =  parseFloat(json.current_observation.relative_humidity);
        console.log("in update function");
        //var svg = d3.select("humid").transform.attr("cy",50);
        d3.select("#humid_text").text(h);
        d3.select("#humid_text").attr("y",200-h);
        d3.select("#humid").attr("cy",200-h);
        console.log("past update");

}*/
//}
var pxsim;
//namespace pxsim.sensorsStore {
//import axios from '../node_modules/axios';
//var request = require('web-request')
//% weight = 90
//% blockId=tempF block="Temperature"
//export async function tempFAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.current_observation.temp_f);
    //board().updateView();
    var h =  parseFloat(json.current_observation.temp_f);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#temp_text").text(h);
    d3.select("#temp_text").attr("y",200-h);
    d3.select("#temp").attr("cy",200-h);
    console.log("past update");*/
//}
//% weight = 85
//% blockId=humid block="Humidity"
//export async function humidityAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

const json = await response.json();

console.log(json.current_observation.relative_humidity.replace('%',''));
//board().updateView();
var h =  parseFloat(json.current_observation.relative_humidity.replace('%',''));
console.log("in update function");
//var svg = d3.select("humid").transform.attr("cy",50);
d3.select("#humid_text").text(h);
d3.select("#humid_text").attr("y",200-h);
d3.select("#humid").attr("cy",200-h);
console.log("past update");*/
//}
/* fetch('http://www.google.com/').then(function(response) {
     console.log(stringify(response)})*/
/*var result = await request.get('http://www.google.com/');
console.log(result.content);*/
//% weight = 80
//% blockId=pressure block="Pressure"
// export async function pressureAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.current_observation.pressure_in);
    //board().updateView();
    var h =  parseFloat(json.current_observation.pressure_in);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#pressure_text").text(h);
    d3.select("#pressure_text").attr("y",200-h);
    d3.select("#pressure").attr("cy",200-h);
    console.log("past update");*/
//}
//% weight = 75
//% blockId=pressure block="Pressure"
//export async function altitudeAsync(){
/*const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')

    const json = await response.json();

    console.log(json.observation_location.elevation);
    //board().updateView();
    var h =  parseFloat(json.observation_location.relative_humidity);
    console.log("in update function");
    //var svg = d3.select("humid").transform.attr("cy",50);
    d3.select("#altitude_text").text(h);
    d3.select("#altitude_text").attr("y",200-h);
    d3.select("#altitude").attr("cy",200-h);
    console.log("past update");*/
// }
//% weight = 75
//% blockId=tvoc block="TVOC"
/*export async function tvocAsync(){
    const response = await fetch('https://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')
    
        const json = await response.json();
    
        console.log(json.current_observation.relative_humidity);
        //board().updateView();
        var h =  parseFloat(json.current_observation.relative_humidity);
        console.log("in update function");
        //var svg = d3.select("humid").transform.attr("cy",50);
        d3.select("#humid_text").text(h);
        d3.select("#humid_text").attr("y",200-h);
        d3.select("#humid").attr("cy",200-h);
        console.log("past update");

}*/
//% weight = 70
//% blockId=co2 block="CO2"
/*export async function co2Async(){
    const response = await fetch('https://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')
    
        const json = await response.json();
    
        console.log(json.current_observation.relative_humidity);
        //board().updateView();
        var h =  parseFloat(json.current_observation.relative_humidity);
        console.log("in update function");
        //var svg = d3.select("humid").transform.attr("cy",50);
        d3.select("#humid_text").text(h);
        d3.select("#humid_text").attr("y",200-h);
        d3.select("#humid").attr("cy",200-h);
        console.log("past update");

}*/
//}
(function (pxsim) {
    var Sensors;
    (function (Sensors) {
        //% weight = 90
        //% blockId=humidity1 block="Humidity"
        function humidityAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var response, json, re, h;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pxsim.console.log(sensor);
                            return [4 /*yield*/, fetch('https://api.wunderground.com/api/' + sensor + '/conditions/q/CO/Denver.json')];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _a.sent();
                            re = /%/gi;
                            pxsim.console.log(json.current_observation.relative_humidity);
                            pxsim.console.log(json.current_observation.relative_humidity.replace(re, ''));
                            h = parseFloat(json.current_observation.relative_humidity.replace(re, ''));
                            pxsim.console.log("in update function");
                            //var svg = d3.select("humid").transform.attr("cy",50);
                            d3.select("#humid_text").text("Humid: \n" + h);
                            /*d3.select("#humid_text").attr("y",200-h);
                            d3.select("#humid").attr("cy",200-h);*/
                            pxsim.console.log("past update");
                            return [2 /*return*/, h];
                    }
                });
            });
        }
        Sensors.humidityAsync = humidityAsync;
        //% weight = 85
        //% blockId=tempF1 block="Temperature"
        function tempFAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var response, json, t;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pxsim.console.log(sensor);
                            return [4 /*yield*/, fetch('https://api.wunderground.com/api/' + sensor + '/conditions/q/CO/Denver.json')];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _a.sent();
                            pxsim.console.log(json.current_observation.temp_f);
                            t = parseFloat(json.current_observation.temp_f);
                            pxsim.console.log("in update function");
                            //var svg = d3.select("humid").transform.attr("cy",50);
                            d3.select("#temp_text").text("Temp: \n" + t);
                            /*d3.select("#temp_text").attr("y",200-t);
                            d3.select("#temp").attr("cy",200-t);*/
                            pxsim.console.log("past update");
                            return [2 /*return*/, t];
                    }
                });
            });
        }
        Sensors.tempFAsync = tempFAsync;
        //% weight = 80
        //% blockId=pressure1 block="Pressure"
        /*export function pressure(){
            return 1;
        }*/
    })(Sensors = pxsim.Sensors || (pxsim.Sensors = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var SensorSystem;
    (function (SensorSystem) {
        /*enum SenSys {
            
            "Panda" = 1,
            
            "Tiger" = 2,
            "Dolphin" = 3,
            "Gorilla" = 4,
        
          };*/
        //% weight = 90
        //% blockId=connect block="Sensor System %name"
        function connect(name) {
            switch (name) {
                case 0 /* Panda */:
                    sensor = "02fb20304a73bce1";
                    break;
                case 1 /* Tiger */:
                    sensor = "434d63a333987665";
                    break;
                case 2 /* Dolphin */:
                    sensor = "fc51f1c83be0df29";
                    break;
                case 3 /* Gorilla */:
                    sensor = "b379867083543cc0";
                    break;
            }
        }
        SensorSystem.connect = connect;
        //% weight = 85
        //% blockId=sample_rate block="Sample Rate %Rate (sec)"
        /*export function sample_rate(rate: number){
    
        }*/
        //% weight = 85
        //% blockId=upload block="Upload %filename"
        function upload(filename) {
        }
        SensorSystem.upload = upload;
        //% weight = 84
        //% blockId=dataFile block="DataFile %filename"
        /*export function dataFile(filename: string){
    
        }*/
        //% weight 80
        //% blockId=totalSamples block="Total Samples %total"
        /*export function totalSamples(total: number){
    
        }*/
        //% weight 75
        //% blockId=writeValue block="Store Value %total"
        function writeValue(reading) {
        }
        SensorSystem.writeValue = writeValue;
    })(SensorSystem = pxsim.SensorSystem || (pxsim.SensorSystem = {}));
})(pxsim || (pxsim = {}));
/*namespace pxsim.Data {
    
    //%blockId="led" block="light LED %color"
    export function lightLED(color: string){

    }

     //%blockId="sound" block="Make Noise %howloud"
     export function makeNoise(howLoud: number){

    }
}*/
//namespace pxsim.hare {
/**
 * This is hop
 */
//% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
//% hop.fieldEditor="gridPicker"
/*export function hop(hop: Hop, color: number) {

}*/
//% blockId=sampleOnLand block="on land"
//% optionalVariableArgs
/*export function onLand(handler: (height: number, more: number, most: number) => void) {

}*/
//}
//namespace pxsim.turtle {
/**
 * Moves the sprite forward
 * @param steps number of steps to move, eg: 1
 */
//% weight=90
//% blockId=sampleForward block="forward %steps"
/*export function forwardAsync(steps: number) {
    return board().sprite.forwardAsync(steps)
}*/
/**
 * Moves the sprite forward
 * @param direction the direction to turn, eg: Direction.Left
 * @param angle degrees to turn, eg:90
 */
//% weight=85
//% blockId=sampleTurn block="turn %direction|by %angle degrees"
//% angle.min=-180 angle.max=180
/* export function turnAsync(direction: Direction, angle: number) {
     let b = board();

     if (direction == Direction.Left)
         b.sprite.angle -= angle;
     else
         b.sprite.angle += angle;
     return Promise.delay(400)
 }*/
/**
 * Triggers when the turtle bumps a wall
 * @param handler
 */
//% blockId=onBump block="on bump"
/*export function onBump(handler: RefAction) {
    let b = board();

    b.bus.listen("Turtle", "Bump", handler);
}*/
//}
(function (pxsim) {
    var loops;
    (function (loops) {
        /**
         * Repeats the code forever in the background. On each iteration, allows other code to run.
         * @param body the code to repeat
         */
        //% help=functions/forever weight=55 blockGap=8
        //% blockId=device_forever block="forever" 
        /*export function forever(body: RefAction): void {
            thread.forever(body)
        }*/
        /**
         * Pause for the specified time in milliseconds
         * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
         */
        //% help=functions/pause weight=54
        //% block="pause (ms) %pause" blockId=device_pause
        function pauseAsync(ms) {
            return Promise.delay(ms);
        }
        loops.pauseAsync = pauseAsync;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
function logMsg(m) { console.log(m); }
(function (pxsim) {
    var console;
    (function (console) {
        /**
         * Print out message
         */
        //% 
        function log(msg) {
            logMsg("CONSOLE: " + msg);
            // why doesn't that work?
            pxsim.board().writeSerial(msg + "\n");
        }
        console.log = log;
    })(console = pxsim.console || (pxsim.console = {}));
})(pxsim || (pxsim = {}));
/*namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
//% blockId="sampleCreate" block="createSprite"
/*export function createSprite(pos_x:number,pos_y:number): Sprite {
    return new Sprite(pos_x,pos_y);
}
}*/ 
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        // public tempF : Sprite;
        //public humidity : Sprite;
        function Board() {
            var _this = _super.call(this) || this;
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            return _this;
            /*this.element = <SVGSVGElement><any>document.getElementById('svgcanvas');
            this.spriteTempF = <SVGCircleElement>this.element.getElementById('svgsprite');
            this.spriteHumidity = <SVGCircleElement>this.element.getElementById('svgsprite2');*/
            /*this.tempF = new Sprite(this.spriteTempF.cx.baseVal.value,
                this.spriteTempF.cy.baseVal.value)
            this.humidity = new Sprite(this.spriteHumidity.cx.baseVal.value,
                this.spriteHumidity.cy.baseVal.value)*/
        }
        Board.prototype.initAsync = function (msg) {
            document.body.innerHTML = ''; // clear children
            //document.body.appendChild(this.element);
            //Circle Data Set
            var circleData = [
                { "cx": 75, "cy": 150, "radius": 50, "color": "green", "id": "humid" },
                { "cx": 200, "cy": 150, "radius": 50, "color": "purple", "id": "temp" },
            ];
            //Create the SVG Viewport
            var svgContainer = d3.select("body").append("svg")
                .attr("width", 300)
                .attr("height", 300);
            //Add circles to the svgContainer
            var circles = svgContainer.selectAll("circle").data(circleData).enter().append("circle");
            //Add the circle attributes
            var circleAttributes = circles
                .attr("cx", function (d) { return d.cx; })
                .attr("cy", function (d) { return d.cy; })
                .attr("r", function (d) { return d.radius; })
                .style("fill", function (d) { return d.color; })
                .attr("id", function (d) { return d.id; });
            //Add the SVG Text Element to the svgContainer
            var text = svgContainer.selectAll("text").data(circleData).enter().append("text");
            //Add SVG Text Element Attributes
            var textLabels = text
                .attr("x", function (d) { return d.cx; })
                .attr("y", function (d) { return d.cy; })
                .text(function (d) { return ""; })
                .attr("id", function (d) { return d.id + "_text"; })
                .attr("font-family", "sans-serif")
                .attr("font-size", "20px")
                .attr("fill", "black")
                .style("text-anchor", "middle");
            return Promise.resolve();
        };
        Board.prototype.updateView = function () {
            pxsim.console.log("in update function");
            //var svg = d3.select("humid").transform.attr("cy",50);
            d3.select("#humid_text").attr('fill', "white");
            pxsim.console.log("past update");
            /* var circleData = [
                 { "cx": 20, "cy": 50, "radius": 20, "color" : "green" },
                 { "cx": 70, "cy": 50, "radius": 20, "color" : "purple" },
                 { "cx": 120, "cy": 50, "radius": 20, "color" : "blue" },
                 { "cx": 170, "cy": 50, "radius": 20, "color" : "red" }];
             svg.selectAll("circle")
                 .data(circleData)
                 .enter().append("circle")
                   .attr("cx", function(d) { return d.cx; })
                   .attr("cy", function(d) { return d.cy; })
                   .attr("r", 20);*/
            //d3.select("circle").transition().text(function (d) {return "13"});
            /*var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return d.cx; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black")
                 .style("text-anchor", "middle");*/
            /*this.spriteTempF.cx.baseVal.value = this.tempF.x;
            this.spriteTempF.cy.baseVal.value = this.tempF.y;
            this.spriteHumidity.cx.baseVal.value = this.humidity.x;
            this.spriteHumidity.cy.baseVal.value = this.humidity.y;*/
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
