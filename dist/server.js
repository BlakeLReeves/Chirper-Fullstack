/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar connection = mysql.createConnection({\n    user: 'chirprapp',\n    password: 'blahblah',\n    host: 'localhost',\n    database: 'chirpr'\n});\nvar getAllChirps = function () {\n    var query = \"\\n        SELECT c.*, u.name FROM chirps c JOIN users u ON u.id = c.userid ORDER BY _created DESC;\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.getAllChirps = getAllChirps;\nvar getOneChirp = function (id) {\n    var query = \"\\n        SELECT c.*, u.name FROM chirps c JOIN users u ON u.id = c.userid WHERE c.id = \" + id + \";\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.getOneChirp = getOneChirp;\nvar deleteChirp = function (id) {\n    var query = \"\\n        DELETE FROM chirps WHERE id = \" + id + \";\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.deleteChirp = deleteChirp;\nvar postChirp = function (userid, chirp) {\n    var query = \"\\n        INSERT INTO chirps (userid, chirp) VALUES (\" + userid + \", '\" + chirp + \"');\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.postChirp = postChirp;\nvar updateChirp = function (id, chirp) {\n    var query = \"\\n        UPDATE chirps SET chirp = \\\"\" + chirp + \"\\\" WHERE id = \" + id + \";\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.updateChirp = updateChirp;\nvar getAllUsers = function () {\n    var query = \"\\n        SELECT * FROM users;\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.getAllUsers = getAllUsers;\nvar getOneUser = function (id) {\n    var query = \"\\n        SELECT * FROM users WHERE id = \" + id + \";\\n    \";\n    return new Promise(function (resolve, reject) {\n        connection.query(query, function (err, results, fields) {\n            if (err)\n                reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.getOneUser = getOneUser;\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/chirps.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/api/chirps.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nrouter.get('/:id?', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var id, chirp, chirps;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                if (!id) return [3 /*break*/, 2];\n                return [4 /*yield*/, db_1.getOneChirp(id)];\n            case 1:\n                chirp = _a.sent();\n                res.send(chirp);\n                return [3 /*break*/, 4];\n            case 2: return [4 /*yield*/, db_1.getAllChirps()];\n            case 3:\n                chirps = _a.sent();\n                res.send(chirps);\n                _a.label = 4;\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete('/:id', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var id, chirp;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                return [4 /*yield*/, db_1.deleteChirp(id)];\n            case 1:\n                chirp = _a.sent();\n                res.send(chirp);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post('/', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var userid, chirp, newChirp, err_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                userid = req.body.userid;\n                chirp = req.body.chirp;\n                return [4 /*yield*/, db_1.postChirp(userid, chirp)];\n            case 1:\n                newChirp = _a.sent();\n                res.send(newChirp);\n                return [3 /*break*/, 3];\n            case 2:\n                err_1 = _a.sent();\n                if (err_1)\n                    console.log(err_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put('/:id', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var id, userid, chirp, newChirp, err_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = req.params.id;\n                userid = req.body.userid;\n                chirp = req.body.chirp;\n                return [4 /*yield*/, db_1.updateChirp(id, chirp)];\n            case 1:\n                newChirp = _a.sent();\n                res.send(newChirp);\n                return [3 /*break*/, 3];\n            case 2:\n                err_2 = _a.sent();\n                if (err_2)\n                    console.log(err_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n// router.post('/', (req, res, next) => {\n//     let chirp = req.body;\n//     Chirps.CreateChirp(chirp);\n//     res.sendStatus(200);\n// });\n// router.put('/:id', (req, res, next) => {\n//     let id = req.params.id;\n//     let chirp = req.body;\n//     Chirps.UpdateChirp(id, chirp);\n//     res.sendStatus(200);\n// });\n// router.delete('/:id', (req, res, next) => {\n//     let id = req.params.id\n//     Chirps.DeleteChirp(id);\n//     res.sendStatus(200);\n// });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/api/chirps.ts\");\nvar users_1 = __webpack_require__(/*! ./users */ \"./src/server/routes/api/users.ts\");\nvar router = express.Router();\nrouter.use('/chirps', chirps_1.default);\nrouter.use('/users', users_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/users.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/users.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar _this = this;\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nrouter.get('/:id?', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\n    var id, user, users;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = req.params.id;\n                if (!id) return [3 /*break*/, 2];\n                return [4 /*yield*/, db_1.getOneUser(id)];\n            case 1:\n                user = _a.sent();\n                res.send(user);\n                return [3 /*break*/, 4];\n            case 2: return [4 /*yield*/, db_1.getAllUsers()];\n            case 3:\n                users = _a.sent();\n                res.send(users);\n                _a.label = 4;\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/users.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\nvar router = express.Router();\nrouter.use('/api', api_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar path = __webpack_require__(/*! path */ \"path\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\nvar p = path.join(__dirname, '../public');\nconsole.log(p);\napp.use(express.static(p));\napp.use(express.json());\napp.use(routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () {\n    console.log(\"Server listening on port: \" + port);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });