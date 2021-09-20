"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumber = void 0;
var jimp_1 = __importDefault(require("jimp"));
var ImageParams = {
    digit0: { x: 145, y: 35, src: '../imgs/dig_0.png' },
    digit1: { x: 185, y: 35, src: '../imgs/dig_1.png' },
    digit2: { x: 225, y: 35, src: '../imgs/dig_2.png' },
    digit3: { x: 265, y: 35, src: '../imgs/dig_3.png' },
    digit4: { x: 305, y: 35, src: '../imgs/dig_4.png' },
    serie: { x_ini: 375, x_end: 400, y_ini: 55, y_end: 85 },
};
var ImageFiles = {
    digit0: '../imgs/dig_0.png',
    digit1: '../imgs/dig_1.png',
    digit2: '../imgs/dig_2.png',
    digit3: '../imgs/dig_3.png',
    digit4: '../imgs/dig_4.png',
    digit5: '../imgs/dig_5.png',
    digit6: '../imgs/dig_6.png',
    digit7: '../imgs/dig_7.png',
    digit8: '../imgs/dig_8.png',
    digit9: '../imgs/dig_9.png',
};
var addNumber = function (_a) {
    var numbers = _a.numbers, serie = _a.serie, fraction = _a.fraction, price = _a.price;
    return __awaiter(void 0, void 0, void 0, function () {
        var font, callback, digitsImgs, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, jimp_1.default.loadFont(jimp_1.default.FONT_SANS_32_BLACK)];
                case 1:
                    font = _c.sent();
                    callback = function () { };
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit0)];
                case 2:
                    _b = [
                        _c.sent()
                    ];
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit1)];
                case 3:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit2)];
                case 4:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit3)];
                case 5:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit4)];
                case 6:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit5)];
                case 7:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit6)];
                case 8:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit7)];
                case 9:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit8)];
                case 10:
                    _b = _b.concat([
                        _c.sent()
                    ]);
                    return [4 /*yield*/, jimp_1.default.read(ImageFiles.digit9)];
                case 11:
                    digitsImgs = _b.concat([
                        _c.sent()
                    ]);
                    //remove bombo
                    jimp_1.default.read('../imgs/template_loteria.jpg')
                        .then(function (image) {
                        var w = image.bitmap.width;
                        var h = image.bitmap.height;
                        var byteColorSerie = 0xff;
                        // image.bitmap.data[ImageParams.serie.y_ini * w * 4 + ImageParams.serie.x_ini];
                        for (var y = 0; y < h; y++) {
                            for (var x = 0; x < w * 4; x++) {
                                //Números
                                if (x > 140 * 4 && x < 350 * 4 && y > 32 && y < 85) {
                                    image.bitmap.data[y * w * 4 + x] = 0xff;
                                }
                                //Serie
                                if (x > ImageParams.serie.x_ini * 4 &&
                                    x < ImageParams.serie.x_end * 4 &&
                                    y > ImageParams.serie.y_ini &&
                                    y < ImageParams.serie.y_end) {
                                    if (byteColorSerie == 0xff) {
                                        byteColorSerie = image.bitmap.data[y * w * 4 + x];
                                        console.log("bytecolor: " + byteColorSerie);
                                        console.log("image.bitmap.data[y * w * 4 + x]: " + image.bitmap.data[y * w * 4 + x]);
                                    }
                                    image.bitmap.data[y * w * 4 + x] = byteColorSerie;
                                }
                                //Fracción
                                if (x > 375 * 4 && x < 400 * 4 && y > 110 && y < 130) {
                                    var byte = image.bitmap.data[y * w * 4 + x];
                                    image.bitmap.data[y * w * 4 + x] = 0xff;
                                }
                                //Precio
                                if (x > 375 * 4 && x < 400 * 4 && y > 165 && y < 190) {
                                    var byte = image.bitmap.data[y * w * 4 + x];
                                    image.bitmap.data[y * w * 4 + x] = 0xff;
                                }
                            }
                        }
                        //print serie
                        // image.print(font, 375, 55, serie);
                        var values = numbers.split('');
                        for (var i = 0; i < values.length; i++) {
                            var key = 'digit' + i;
                            image.blit(digitsImgs[parseInt(values[i])], ImageParams[key].x, ImageParams[key].y, callback);
                        }
                        image.write('img/output.jpg');
                    })
                        .catch(function (err) {
                        console.log("error:" + { err: err });
                    });
                    return [2 /*return*/];
            }
        });
    });
};
exports.addNumber = addNumber;
