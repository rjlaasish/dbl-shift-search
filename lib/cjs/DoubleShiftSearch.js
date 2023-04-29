"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./styles.css");
function DoubleShiftSearch(_a) {
    var _this = this;
    var onBlur = _a.onBlur, onChange = _a.onChange, inputStylingProps = _a.inputStylingProps, _b = _a.closeOnESCPress, closeOnESCPress = _b === void 0 ? true : _b, _c = _a.isInputActive, isInputActive = _c === void 0 ? false : _c, _d = _a.textPosition, textPosition = _d === void 0 ? "right" : _d, _e = _a.placeholder, placeholder = _e === void 0 ? "Search" : _e, _f = _a.helperText, helperText = _f === void 0 ? "Press Double Shift Key To Search Menu" : _f;
    var _g = (0, react_1.useState)(isInputActive), isActive = _g[0], setIsActive = _g[1];
    var inputRef = react_1.default.useRef(null);
    var keyPressCount = 0;
    var setKeyPressCount = function (value) {
        keyPressCount = value;
    };
    var clearCount = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setKeyPressCount(0);
            return [2 /*return*/];
        });
    }); };
    var clearKeyPressCount = function () { return setTimeout(function () { return clearCount(); }, 300); };
    var toggleSearchComponent = function () {
        inputRef.current && inputRef.current.focus();
        setIsActive(true);
    };
    var handleDropdownBlur = function () {
        onBlur && onBlur();
        setIsActive(false);
    };
    var handleKeyPress = function (event) {
        var keyCount = keyPressCount;
        if (event.keyCode === 16) {
            // ON SHIFT KEY PRESS
            if (!keyCount || keyCount === 2) {
                keyCount += 1;
                setKeyPressCount(keyCount);
                clearKeyPressCount();
            }
            else if (keyCount === 1) {
                keyCount += 1;
                setKeyPressCount(keyCount);
                toggleSearchComponent();
                clearKeyPressCount();
            }
            else if (keyCount === 3) {
                // blurSearchComponents();
                clearCount();
            }
        }
        else if (closeOnESCPress && event.keyCode === 27) {
            // ESCAPE KEY PRESS
            onBlur && onBlur();
            handleDropdownBlur();
            inputRef.current && inputRef.current.blur();
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener("keydown", handleKeyPress);
        return function () {
            document.removeEventListener("keydown", handleKeyPress);
            clearTimeout(clearKeyPressCount());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var leftHelperTextPosition = textPosition === "left";
    var rightHelperTextPosition = textPosition === "right";
    return (react_1.default.createElement("div", { id: "dbl-shift-search-wrapper", "data-testid": "test-dbl-shift-search-wrapper", className: "".concat(isActive ? "container-active" : "", " double-shift-wrapper") },
        leftHelperTextPosition && (react_1.default.createElement("span", { "aria-hidden": "false", "aria-label": "left-search-input-label" }, helperText)),
        react_1.default.createElement("input", { id: "dbl-shift-search-input", "data-testid": "test-dbl-shift-search-input", ref: inputRef, type: "search", "aria-label": "double-shift-search-input", style: inputStylingProps, className: isActive ? "active" : "", placeholder: isActive ? placeholder : "", onChange: onChange, onBlur: handleDropdownBlur }),
        rightHelperTextPosition && (react_1.default.createElement("span", { "aria-hidden": "false", "aria-label": "right-search-input-label" }, helperText))));
}
exports.default = DoubleShiftSearch;
