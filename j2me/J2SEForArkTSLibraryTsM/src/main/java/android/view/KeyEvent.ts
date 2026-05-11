import ArkTsKeyEvent from '@ohos.multimodalInput.keyEvent';

//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
//https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
/*actual*/ export class KeyEvent
{

    public static KEYCODE_UNKNOWN: number = -1;

    // "Numpad4" ("ArrowLeft")	0x25 (37)
    public static KEYCODE_SOFT_LEFT: number = 37;
    // "Numpad6" ("ArrowRight")	0x27 (39)
    public static KEYCODE_SOFT_RIGHT: number = 38;
    public static KEYCODE_HOME: number = 36;
    public static KEYCODE_BACK: number = 8;
    public static KEYCODE_CALL: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_ENDCALL: number = KeyEvent.KEYCODE_UNKNOWN;

    public static KEYCODE_0: number = 48; //7

    public static KEYCODE_1: number = 49; //8

    public static KEYCODE_2: number = 50; //9

    public static KEYCODE_3: number = 51; //10

    public static KEYCODE_4: number = 52; //11

    public static KEYCODE_5: number = 53; //12

    public static KEYCODE_6: number = 54; //13

    public static KEYCODE_7: number = 55; //14

    public static KEYCODE_8: number = 56; //15

    public static KEYCODE_9: number = 57; //16

    public static KEYCODE_STAR: number = 170;
    public static KEYCODE_POUND: number = 163;

    public static KEYCODE_DPAD_UP: number = 38;
    public static KEYCODE_DPAD_DOWN: number = 40;
    public static KEYCODE_DPAD_LEFT: number = 37;
    public static KEYCODE_DPAD_RIGHT: number = 39;

    // "Numpad5"	0x0C (12)
    public static KEYCODE_DPAD_CENTER: number = 12;
    public static KEYCODE_VOLUME_UP: number = 183;
    public static KEYCODE_VOLUME_DOWN: number = 182;
    public static KEYCODE_POWER: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_CAMERA: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_CLEAR: number = 12;
    public static KEYCODE_A: number = 65;
    public static KEYCODE_B: number = 66;
    public static KEYCODE_C: number = 67;
    public static KEYCODE_D: number = 68;
    public static KEYCODE_E: number = 69;
    public static KEYCODE_F: number = 70;
    public static KEYCODE_G: number = 71;
    public static KEYCODE_H: number = 72;
    public static KEYCODE_I: number = 73;
    public static KEYCODE_J: number = 74;
    public static KEYCODE_K: number = 75;
    public static KEYCODE_L: number = 76;
    public static KEYCODE_M: number = 77;
    public static KEYCODE_N: number = 78;
    public static KEYCODE_O: number = 79;
    public static KEYCODE_P: number = 80;
    public static KEYCODE_Q: number = 81;
    public static KEYCODE_R: number = 82;
    public static KEYCODE_S: number = 83;
    public static KEYCODE_T: number = 84;
    public static KEYCODE_U: number = 85;
    public static KEYCODE_V: number = 86;
    public static KEYCODE_W: number = 87;
    public static KEYCODE_X: number = 88;
    public static KEYCODE_Y: number = 89;
    public static KEYCODE_Z: number = 90;

    public static KEYCODE_COMMA: number = 188;
    public static KEYCODE_PERIOD: number = 190;
    public static KEYCODE_ALT_LEFT: number = 18;
    public static KEYCODE_ALT_RIGHT: number = 18;
    public static KEYCODE_SHIFT_LEFT: number = 16;
    public static KEYCODE_SHIFT_RIGHT: number = 16;
    public static KEYCODE_TAB: number = 9;
    public static KEYCODE_SPACE: number = 32;
    public static KEYCODE_SYM: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_EXPLORER: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_ENVELOPE: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_ENTER: number = 13;
    public static KEYCODE_DEL: number = 46;
    public static KEYCODE_GRAVE: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_MINUS: number = 189;
    public static KEYCODE_EQUALS: number = 187;
    public static KEYCODE_LEFT_BRACKET: number = 219;
    public static KEYCODE_RIGHT_BRACKET: number = 221;
    public static KEYCODE_BACKSLASH: number = 220;
    public static KEYCODE_SEMICOLON: number = 186;
    public static KEYCODE_APOSTROPHE: number = 122;
    public static KEYCODE_SLASH: number = 191;
    public static KEYCODE_AT: number = 65;
    public static KEYCODE_NUM: number = 144;
    public static KEYCODE_HEADSETHOOK: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_FOCUS: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_PLUS: number = 171;
    public static KEYCODE_MENU: number = 93;
    public static KEYCODE_NOTIFICATION: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_SEARCH: number = KeyEvent.KEYCODE_UNKNOWN;

    public static KEYCODE_BUTTON_L1: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_R1: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_THUMBR: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_THUMBL: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_START: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_MODE: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_B: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_A: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_X: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_Y: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_L2: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_R2: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_SELECT: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_C: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_Z: number = KeyEvent.KEYCODE_UNKNOWN;

    public static KEYCODE_BUTTON_1: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_10: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_11: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_12: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_13: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_14: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_15: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_16: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_2: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_3: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_4: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_5: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_6: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_7: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_8: number = KeyEvent.KEYCODE_UNKNOWN;
    public static KEYCODE_BUTTON_9: number = KeyEvent.KEYCODE_UNKNOWN;

    // "Digit1"	0x31 (49)
    // "Digit2"	0x32 (50)
    // "Digit3"	0x33 (51)
    // "Digit4"	0x34 (52)
    // "Digit5"	0x35 (53)
    // "Digit6"	0x36 (54)
    // "Digit7"	0x37 (55)
    // "Digit8"	0x38 (56)
    // "Digit9"	0x39 (57)
    // "Digit0"	0x30 (48)
    // "KeyA"	0x41 (65)
    // "KeyB"	0x42 (66)
    // "KeyC"	0x43 (67)
    // "KeyD"	0x44 (68)
    // "KeyE"	0x45 (69)
    // "KeyF"	0x46 (70)
    // "KeyG"	0x47 (71)
    // "KeyH"	0x48 (72)
    // "KeyI"	0x49 (73)
    // "KeyJ"	0x4A (74)
    // "KeyK"	0x4B (75)
    // "KeyL"	0x4C (76)
    // "KeyM"	0x4D (77)
    // "KeyN"	0x4E (78)
    // "KeyO"	0x4F (79)
    // "KeyP"	0x50 (80)
    // KeyboardEvent.code	IE 11	Google Chrome 34	Chromium 34	Safari 7	Gecko 29
    // Windows	Windows	Mac (10.9)	Linux (Ubuntu 14.04)	Mac (10.9)	Windows	Mac (10.9)	Linux (Ubuntu 14.04)
    // US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek	US	Japanese	Greek
    // "KeyQ"	0x51 (81)	0x51 (81)	0x51 (81)	0x51 (81)	0xBA (186)warning	0x51 (81)	0x51 (81)	0xBA (186)warning	0x51 (81)	0x51 (81)	0xBA (186)warning	0x51 (81)	0x51 (81)	0x51 (81)	0xBA (186)warning	0x51 (81)
    // "KeyR"	0x52 (82)
    // "KeyS"	0x53 (83)
    // "KeyT"	0x54 (84)
    // "KeyU"	0x55 (85)
    // "KeyV"	0x56 (86)
    // "KeyW"	0x57 (87)
    // "KeyX"	0x58 (88)
    // "KeyY"	0x59 (89)
    // "KeyZ"	0x5A (90)
    //
    //
    // "ContextMenu"	0x5D (93)	0x5D (93)	0x00 (0)warning [1]	0x5D (93)	0x00 (0)warning [1]	0x5D (93)	0x5D (93)	0x5D (93)
    // "Enter"	0x0D (13)
    // "Space"	0x20 (32)
    // "Tab"	0x09 (9)
    // "Delete"	0x2E (46)
    // "End"	0x23 (35)
    // "Help"	NA N/A	NA N/A	0x2D (45)
    // warning [2]	0x2F (47)
    // warning [3]	0x2D (45)
    // warning [2]	NA N/A	0x2D (45)
    // warning [2]	0x06 (6)
    // warning [3]
    // "Home"	0x24 (36)
    // "Insert"	0x2D (45)
    // "PageDown"	0x22 (34)
    // "PageUp"	0x21 (33)
    // "ArrowDown"	0x28 (40)
    // "ArrowLeft"	0x25 (37)
    // "ArrowRight"	0x27 (39)
    // "ArrowUp"	0x26 (38)
    // "Escape"	0x1B (27)
    // "PrintScreen"	0x2C (44) [4]	0x2C (44) [4]	0x7C (124)
    // warning [5]	0x2A (42)warning	0x7C (124)
    // warning [5]	0x2C (44) [4]	0x2C (44)	0x2A (42)warning
    // "ScrollLock"	0x91 (145)	0x91 (145)	0x7D (125)
    // warning [5]	0x91 (145)	0x7D (125)
    // warning [5]	0x91 (145)	0x91 (145)	0x91 (145)
    // "Pause"	0x13 (19) [6]	0x13 (19) [6]	0x7E (126)
    // warning [5]	0x13 (19)	0x7E (126)
    // warning [5]	0x13 (19) [6]	0x13 (19)	0x13 (19)
    //
    // "F1"	0x70 (112)
    // "F2"	0x71 (113)
    // "F3"	0x72 (114)
    // "F4"	0x73 (115)
    // "F5"	0x74 (116)
    // "F6"	0x75 (117)
    // "F7"	0x76 (118)
    // "F8"	0x77 (119)
    // "F9"	0x78 (120)
    // "F10"	0x79 (121)
    // "F11"	0x7A (122)
    // "F12"	0x7B (123)
    // "F13"	0x7C (124)	0x7C (124)	0x7C (124)	0x7C (124) [1]	0x7C (124)	0x7C (124)	0x2C (44) warning [2]	0x00 (0)warning [3]
    // "F14"	0x7D (125)	0x7D (125)	0x7D (125)	0x7D (125) [1]	0x7D (125)	0x7D (125)	0x91 (145) warning [2]	0x00 (0)warning [3]
    // "F15"	0x7E (126)	0x7E (126)	0x7E (126)	0x7E (126) [1]	0x7E (126)	0x7E (126)	0x13 (19) warning [2]	0x00 (0)warning [3]
    // "F16"	0x7F (127)	0x7F (127)	0x7F (127)	0x7F (127) [1]	0x7F (127)	0x7F (127)	0x7F (127)	0x00 (0)warning [3]
    // "F17"	0x80 (128)	0x80 (128)	0x80 (128)	0x80 (128) [1]	0x80 (128)	0x80 (128)	0x80 (128)	0x00 (0)warning [3]
    // "F18"	0x81 (129)	0x81 (129)	0x81 (129)	0x81 (129) [1]	0x81 (129)	0x81 (129)	0x81 (129)	0x00 (0)warning [3]
    // "F19"	0x82 (130)	0x82 (130)	0x82 (130)	NA N/A [4]	0x82 (130)	0x82 (130)	0x82 (130)	0x00 (0)warning [3]
    // "F20"	0x83 (131)	0x83 (131)	0x83 (131)	NA N/A [4]	0xE5 (229)warning [5]	0x83 (131)	0x00 (0)warning	NA N/A [6]
    // "F21"	0x84 (132)	0x84 (132)	0x00 (0)warning [7]	NA N/A [4]	0x00 (0)warning [7]	0x84 (132)	NA N/A [8]	NA N/A [6]
    // "F22"	0x85 (133)	0x85 (133)	0x00 (0)warning [7]	NA N/A [4]	0x00 (0)warning [7]	0x85 (133)	NA N/A [8]	NA N/A [6]
    // "F23"	0x86 (134)	0x86 (134)	0x00 (0)warning [7]	NA N/A [4]	0x00 (0)warning [7]	0x86 (134)	NA N/A [8]	NA N/A [6]
    // "F24"	0x87 (135)	0x87 (135)	0x00 (0)warning [7]	NA N/A [4]	0x00 (0)warning [7]	0x87 (135)	NA N/A [8]	0x00 (0)warning [3]

    // "NumLock"	0x90 (144)	0x90 (144)	0x0C (12)warning [1]	0x90 (144)	0x0C (12)warning [1]	0x90 (144)	0x0C (12)warning [1]	0x90 (144)
    // "Numpad0"	0x60 (96)
    // "Numpad1"	0x61 (97)
    // "Numpad2"	0x62 (98)
    // "Numpad3"	0x63 (99)
    // "Numpad4"	0x64 (100)
    // "Numpad5"	0x65 (101)
    // "Numpad6"	0x66 (102)
    // "Numpad7"	0x67 (103)
    // "Numpad8"	0x68 (104)
    // "Numpad9"	0x69 (105)
    // "NumpadAdd"	0x6B (107)
    // "NumpadComma" inputting ","	0xC2 (194)	0xC2 (194)	0xBC (188)warning	NA Always inputs "."	0xBC (188)warning	0xC2 (194)	0x6C (108)warning	NA Always inputs "."
    // "NumpadComma" inputting "." or empty string	0xC2 (194)	0xC2 (194)	0xBE (190)warning	0x6E (110)warning	0xBE (190)warning	0xC2 (194)	0x6C (108)warning	0x6E (110)warning
    // "NumpadDecimal" inputting "."	0x6E (110)	0x6E (110)	0x6E (110)	0x6E (110)	0x6E (110)	0x6E (110)	0x6E (110)	0x6E (110)
    // "NumpadDecimal" inputting ","	0x6E (110)	0x6E (110)	0x6E (110)	0x6C (108)warning	0x6E (110)	0x6E (110)	0x6E (110)	0x6C (108)warning
    // "NumpadDivide"	0x6F (111)
    // "NumpadEnter"	0x0D (13)
    // "NumpadEqual"	0x0C (12)	0x0C (12)	0xBB (187)warning	0xBB (187)warning	0xBB (187)warning	0x0C (12)	0x3D (61)warning	0x3D (61)warning
    // "NumpadMultiply"	0x6A (106)
    // "NumpadSubtract"	0x6D (109)
    //
    // "Numpad0" ("Insert")	0x2D (45)
    // "Numpad1" ("End")	0x23 (35)
    // "Numpad2" ("ArrowDown")	0x28 (40)
    // "Numpad3" ("PageDown")	0x22 (34)
    // "Numpad4" ("ArrowLeft")	0x25 (37)
    // "Numpad5"	0x0C (12)	0x0C (12)
    // "Numpad6" ("ArrowRight")	0x27 (39)
    // "Numpad7" ("Home")	0x24 (36)
    // "Numpad8" ("ArrowUp")	0x26 (38)
    // "Numpad9" ("PageUp")	0x21 (33)
    // "NumpadDecimal" ("Delete")	0x2E (46)

    // "Comma"	0xBC (188)
    // "Comma" with Shift
    // "Period"	0xBE (190)
    // "Semicolon"	0xBA (186)	0xBB (187)warning	0xBA (186)	0xBA (186)	0xBB (187)warning	0xBA (186)	0xBA (186)	0xBA (186) [1]	0xE5 (229)warning [2]	0xBA (186)	0xBA (186)	0xE5 (229)warning [3]	0xBA (186)	0xBA (186) [1]	0xE5 (229)warning [2]	0x3B (59)	0x3B (59)	0x00 (0)warning	0x3B (59)	0x3B (59) [1]	0x00 (0)warning	0x3B (59)	0x3B (59)	0x00 (0)warning
    // "Semicolon" with Shift	0xBB (187)warning [1]	0xBB (187)warning	0xBB (187)warning [1]
    // "Quote"	0xDE (222)	0xBA (186)warning	0xDE (222)	0xDE (222)	0xBA (186)warning	0xDE (222)	0xDE (222)	0xBA (186)warning [1]	0xDE (222)	0xDE (222)	0xBA (186)warning	0xDE (222)	0xDE (222)	0xBA (186)warning [1]	0xDE (222)	0xDE (222)	0x3A (58)warning	0xDE (222)	0xDE (222)	0x3A (58)warning [1]	0xDE (222)	0xDE (222)	0x3A (58)warning	0xDE (222)
    // "Quote" with Shift	0xDE (222)warning [1]	0x38 (56)warning	0xDE (222)warning [1]
    // "BracketLeft"	0xDB (219)	0xC0(192)warning	0xDB (219)	0xDB (219)	0xC0(192)warning	0xDB (219)	0xDB (219)	0xDB (219) [1]	0xDB (219)	0xDB (219)	0x32 (50)warning	0xDB (219)	0xDB (219)	0xDB (219) [1]	0xDB (219)	0xDB (219)	0x40 (64)warning	0xDB (219)	0xDB (219)	0x40 (64)warning [1]	0xDB (219)	0xDB (219)	0x40 (64)warning	0xDB (219)
    // "BracketLeft" with Shift	0xC0 (192)warning [1]	0xC0 (192)warning	0xC0 (192)warning [1]
    // "BracketRight"	0xDD (221)	0xDB (219)warning	0xDD (221)	0xDD (221)	0xDB (219)warning	0xDD (221)	0xDD (221)	0xDB (219)warning [1]	0xDD (221)	0xDD (221)	0xDB (219)warning	0xDD (221)	0xDD (221)	0xDB (219)warning [1]	0xDD (221)	0xDD (221)	0xDB (219)warning	0xDD (221)	0xDD (221)	0xDB (219)warning [1]	0xDD (221)	0xDD (221)	0xDB (219)warning	0xDD (221)
    // "BracketRight" with Shift
    // "Backquote"	0xC0 (192)	NA N/A	0xC0 (192)	0xC0 (192)	NA N/A	0xC0 (192)	0xC0 (192)	0xC0 (192)	0xF4 (244)warning	0xC0 (192)	0xC0 (192)	0xC0 (192)	NA N/A	0xC0 (192)	0xC0 (192)	0xC0 (192)	0x00 (0)	0xC0 (192)
    // "Backquote" with Shift
    // "Backslash"	0xDC (220)	0xDD (221)warning	0xDC (220)	0xDC (220)	0xDD (221)warning	0xDC (220)	0xDC (220)	0xDC (220)	0xDD (221)warning	0xDC (220)	0xDC (220)	0xDC (220)	0xDD (221)warning	0xDC (220)	0xDC (220)	0xDC (220)	0xDD (221)warning	0xDC (220)
    // "Backslash" with Shift
    // "Minus"	0xBD (189)	0xBD (189)	0xBD (189)	0xBD (189) [1]	0xBD (189)	0xBD (189)	0xBD (189)	0xBD (189)	0xBD (189)	0xBD (189) [1]	0xBD (189)	0xAD (173)	0xAD (173)	0xAD (173) [1]	0xAD (173)	0xAD (173)
    // "Minus" with Shift	0xBB (187)warning [1]	0xBB (187)warning	0xBD (189)	0xBB (187)warning [1]	0xBD (189)
    // "Equal"	0xBB (187)	0xDE (222)warning	0xBB (187)	0xBB (187)	0xDE (222)warning	0xBB (187)	0xBB (187)	0xBB (187) [1]	0xBB (187)	0xBB (187)	0x36 (54)warning	0xBB (187)	0xBB (187)	0xBB (187) [1]	0xBB (187)	0x3D (61)	0xA0 (160)warning	0x3D (61)	0x3D (61)	0xA0 (160)warning [1]	0x3D (61)	0x3D (61)	0xA0 (160)warning	0x3D (61)
    // "Equal" with Shift	0xC0 (192)warning [1]	0xC0 (192)warning	0xBB (187)	0xC0 (192)warning [1]	0xBB (187)
    // "IntlRo"	0xC1 (193)	0xE2 (226)warning	0xC1 (193)	0xC1 (193)	0xE2 (226)warning	0xC1 (193)	0xBD (189)	0xBD (189)	0x00 (0)warning	[4]	0xDC (220)warning	[4]	0xBD (189)	0xBD (189)	0xE5 (229)warning [5]	0x00 (0)	0xDC (220)warning	0x00 (0)	0xA7 (167)	0xA7 (167)	0x00 (0)	0x00 (0)	0xDC (220)warning	0x00 (0)
    // "IntlRo" with Shift
    // "IntlYen"	0xFF (255)	0xDC (220)warning	0xFF (255)	0xFF (255)	0xDC (220)warning	0xFF (255)	0x00 (0)warning	0x00 (0)warning	0x00 (0)warning	[4]	0xDC (220)warning	[4]	0x00 (0)warning	0x00 (0)warning	0xE5 (229)warning [5]	0x00 (0)warning	0xDC (220)warning	0x00 (0)warning	0xDC (220)	0xDC (220)	0x00 (0)warning	0x00 (0)warning	0xDC (220)warning	0x00 (0)warning
    // "IntlYen" with Shift	0xDC (220)	0xDC (220)	0xBD (189)warning	0xDC (220)	0xDC (220)

    // "AltLeft"	0x12 (18)
    // "AltRight"	0x12 (18)
    // "AltRight" when it's "AltGraph" key	[1]	[1]	❌N/A	0xE1 (225)⚠️	❌ N/A	[1]	❌ N/A	0xE1 (225)⚠️
    // "CapsLock"	0x14 (20)
    // "ControlLeft"	0x11 (17)
    // "ControlRight"	0x11 (17)
    // "MetaLeft"	0x5B (91)
    // "MetaRight"	0x5C (92)
    // "ShiftLeft"	0x10 (16)
    // "ShiftRight"	0x10 (16)

    // DOM_VK_CANCEL	0x03 (3)	Cancel key.
    // DOM_VK_HELP	0x06 (6)	Help key.
    // DOM_VK_BACK_SPACE	0x08 (8)	Backspace key.
    // DOM_VK_TAB	0x09 (9)	Tab key.
    // DOM_VK_CLEAR	0x0C (12)	"5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.
    // DOM_VK_RETURN	0x0D (13)	Return/enter key on the main keyboard.
    // DOM_VK_ENTER	0x0E (14)	Reserved, but not used.  (Dropped, see Firefox bug 969247.)
    // DOM_VK_SHIFT	0x10 (16)	Shift key.
    // DOM_VK_CONTROL	0x11 (17)	Control key.
    // DOM_VK_ALT	0x12 (18)	Alt (Option on Mac) key.
    // DOM_VK_PAUSE	0x13 (19)	Pause key.
    // DOM_VK_CAPS_LOCK	0x14 (20)	Caps lock.
    // DOM_VK_KANA	0x15 (21)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_HANGUL	0x15 (21)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_EISU	0x 16 (22)	"英数" key on Japanese Mac keyboard.
    // DOM_VK_JUNJA	0x17 (23)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_FINAL	0x18 (24)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_HANJA	0x19 (25)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_KANJI	0x19 (25)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_ESCAPE	0x1B (27)	Escape key.
    // DOM_VK_CONVERT	0x1C (28)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_NONCONVERT	0x1D (29)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_ACCEPT	0x1E (30)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_MODECHANGE	0x1F (31)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_SPACE	0x20 (32)	Space bar.
    // DOM_VK_PAGE_UP	0x21 (33)	Page Up key.
    // DOM_VK_PAGE_DOWN	0x22 (34)	Page Down key.
    // DOM_VK_END	0x23 (35)	End key.
    // DOM_VK_HOME	0x24 (36)	Home key.
    // DOM_VK_LEFT	0x25 (37)	Left arrow.
    // DOM_VK_UP	0x26 (38)	Up arrow.
    // DOM_VK_RIGHT	0x27 (39)	Right arrow.
    // DOM_VK_DOWN	0x28 (40)	Down arrow.
    // DOM_VK_SELECT	0x29 (41)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_PRINT	0x2A (42)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_EXECUTE	0x2B (43)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_PRINTSCREEN	0x2C (44)	Print Screen key.
    // DOM_VK_INSERT	0x2D (45)	Ins(ert) key.
    // DOM_VK_DELETE	0x2E (46)	Del(ete) key.
    // DOM_VK_0	0x30 (48)	"0" key in standard key location.
    // DOM_VK_1	0x31 (49)	"1" key in standard key location.
    // DOM_VK_2	0x32 (50)	"2" key in standard key location.
    // DOM_VK_3	0x33 (51)	"3" key in standard key location.
    // DOM_VK_4	0x34 (52)	"4" key in standard key location.
    // DOM_VK_5	0x35 (53)	"5" key in standard key location.
    // DOM_VK_6	0x36 (54)	"6" key in standard key location.
    // DOM_VK_7	0x37 (55)	"7" key in standard key location.
    // DOM_VK_8	0x38 (56)	"8" key in standard key location.
    // DOM_VK_9	0x39 (57)	"9" key in standard key location.
    // DOM_VK_COLON	0x3A (58)	Colon (":") key.
    // DOM_VK_SEMICOLON	0x3B (59)	Semicolon (";") key.
    // DOM_VK_LESS_THAN	0x3C (60)	Less-than ("<") key.
    // DOM_VK_EQUALS	0x3D (61)	Equals ("=") key.
    // DOM_VK_GREATER_THAN	0x3E (62)	Greater-than (">") key.
    // DOM_VK_QUESTION_MARK	0x3F (63)	Question mark ("?") key.
    // DOM_VK_AT	0x40 (64)	At sign ("@") key.
    // DOM_VK_A	0x41 (65)	"A" key.
    // DOM_VK_B	0x42 (66)	"B" key.
    // DOM_VK_C	0x43 (67)	"C" key.
    // DOM_VK_D	0x44 (68)	"D" key.
    // DOM_VK_E	0x45 (69)	"E" key.
    // DOM_VK_F	0x46 (70)	"F" key.
    // DOM_VK_G	0x47 (71)	"G" key.
    // DOM_VK_H	0x48 (72)	"H" key.
    // DOM_VK_I	0x49 (73)	"I" key.
    // DOM_VK_J	0x4A (74)	"J" key.
    // DOM_VK_K	0x4B (75)	"K" key.
    // DOM_VK_L	0x4C (76)	"L" key.
    // DOM_VK_M	0x4D (77)	"M" key.
    // DOM_VK_N	0x4E (78)	"N" key.
    // DOM_VK_O	0x4F (79)	"O" key.
    // DOM_VK_P	0x50 (80)	"P" key.
    // DOM_VK_Q	0x51 (81)	"Q" key.
    // DOM_VK_R	0x52 (82)	"R" key.
    // DOM_VK_S	0x53 (83)	"S" key.
    // DOM_VK_T	0x54 (84)	"T" key.
    // DOM_VK_U	0x55 (85)	"U" key.
    // DOM_VK_V	0x56 (86)	"V" key.
    // DOM_VK_W	0x57 (87)	"W" key.
    // DOM_VK_X	0x58 (88)	"X" key.
    // DOM_VK_Y	0x59 (89)	"Y" key.
    // DOM_VK_Z	0x5A (90)	"Z" key.
    // DOM_VK_WIN	0x5B (91)	Windows logo key on Windows. Or Super or Hyper key on Linux.
    // DOM_VK_CONTEXT_MENU	0x5D (93)	Opening context menu key.
    // DOM_VK_SLEEP	0x5F (95)	Linux support for this keycode was added in Gecko 4.0.
    // DOM_VK_NUMPAD0	0x60 (96)	"0" on the numeric keypad.
    // DOM_VK_NUMPAD1	0x61 (97)	"1" on the numeric keypad.
    // DOM_VK_NUMPAD2	0x62 (98)	"2" on the numeric keypad.
    // DOM_VK_NUMPAD3	0x63 (99)	"3" on the numeric keypad.
    // DOM_VK_NUMPAD4	0x64 (100)	"4" on the numeric keypad.
    // DOM_VK_NUMPAD5	0x65 (101)	"5" on the numeric keypad.
    // DOM_VK_NUMPAD6	0x66 (102)	"6" on the numeric keypad.
    // DOM_VK_NUMPAD7	0x67 (103)	"7" on the numeric keypad.
    // DOM_VK_NUMPAD8	0x68 (104)	"8" on the numeric keypad.
    // DOM_VK_NUMPAD9	0x69 (105)	"9" on the numeric keypad.
    // DOM_VK_MULTIPLY	0x6A (106)	"*" on the numeric keypad.
    // DOM_VK_ADD	0x6B (107)	"+" on the numeric keypad.
    // DOM_VK_SEPARATOR	0x6C (108)
    // DOM_VK_SUBTRACT	0x6D (109)	"-" on the numeric keypad.
    // DOM_VK_DECIMAL	0x6E (110)	Decimal point on the numeric keypad.
    // DOM_VK_DIVIDE	0x6F (111)	"/" on the numeric keypad.
    // DOM_VK_F1	0x70 (112)	F1 key.
    // DOM_VK_F2	0x71 (113)	F2 key.
    // DOM_VK_F3	0x72 (114)	F3 key.
    // DOM_VK_F4	0x73 (115)	F4 key.
    // DOM_VK_F5	0x74 (116)	F5 key.
    // DOM_VK_F6	0x75 (117)	F6 key.
    // DOM_VK_F7	0x76 (118)	F7 key.
    // DOM_VK_F8	0x77 (119)	F8 key.
    // DOM_VK_F9	0x78 (120)	F9 key.
    // DOM_VK_F10	0x79 (121)	F10 key.
    // DOM_VK_F11	0x7A (122)	F11 key.
    // DOM_VK_F12	0x7B (123)	F12 key.
    // DOM_VK_F13	0x7C (124)	F13 key.
    // DOM_VK_F14	0x7D (125)	F14 key.
    // DOM_VK_F15	0x7E (126)	F15 key.
    // DOM_VK_F16	0x7F (127)	F16 key.
    // DOM_VK_F17	0x80 (128)	F17 key.
    // DOM_VK_F18	0x81 (129)	F18 key.
    // DOM_VK_F19	0x82 (130)	F19 key.
    // DOM_VK_F20	0x83 (131)	F20 key.
    // DOM_VK_F21	0x84 (132)	F21 key.
    // DOM_VK_F22	0x85 (133)	F22 key.
    // DOM_VK_F23	0x86 (134)	F23 key.
    // DOM_VK_F24	0x87 (135)	F24 key.
    // DOM_VK_NUM_LOCK	0x90 (144)	Num Lock key.
    // DOM_VK_SCROLL_LOCK	0x91 (145)	Scroll Lock key.
    // DOM_VK_WIN_OEM_FJ_JISHO	0x92 (146)	An OEM specific key on Windows. This was used for "Dictionary" key on Fujitsu OASYS.
    // DOM_VK_WIN_OEM_FJ_MASSHOU	0x93 (147)	An OEM specific key on Windows. This was used for "Unregister word" key on Fujitsu OASYS.
    // DOM_VK_WIN_OEM_FJ_TOUROKU	0x94 (148)	An OEM specific key on Windows. This was used for "Register word" key on Fujitsu OASYS.
    // DOM_VK_WIN_OEM_FJ_LOYA	0x95 (149)	An OEM specific key on Windows. This was used for "Left OYAYUBI" key on Fujitsu OASYS.
    // DOM_VK_WIN_OEM_FJ_ROYA	0x96 (150)	An OEM specific key on Windows. This was used for "Right OYAYUBI" key on Fujitsu OASYS.
    // DOM_VK_CIRCUMFLEX	0xA0 (160)	Circumflex ("^") key.
    // DOM_VK_EXCLAMATION	0xA1 (161)	Exclamation ("!") key.
    // DOM_VK_DOUBLE_QUOTE	0xA2 (162)	Double quote (""") key.
    // DOM_VK_HASH	0xA3 (163)	Hash ("#") key.
    // DOM_VK_DOLLAR	0xA4 (164)	Dollar sign ("$") key.
    // DOM_VK_PERCENT	0xA5 (165)	Percent ("%") key.
    // DOM_VK_AMPERSAND	0xA6 (166)	Ampersand ("&") key.
    // DOM_VK_UNDERSCORE	0xA7 (167)	Underscore ("_") key.
    // DOM_VK_OPEN_PAREN	0xA8 (168)	Open parenthesis ("(") key.
    // DOM_VK_CLOSE_PAREN	0xA9 (169)	Close parenthesis (")") key.
    // DOM_VK_ASTERISK	0xAA (170)	Asterisk ("*") key.
    // DOM_VK_PLUS	0xAB (171)	Plus ("+") key.
    // DOM_VK_PIPE	0xAC (172)	Pipe ("|") key.
    // DOM_VK_HYPHEN_MINUS	0xAD (173)	Hyphen-US/docs/Minus ("-") key.
    // DOM_VK_OPEN_CURLY_BRACKET	0xAE (174)	Open curly bracket ("{") key.
    // DOM_VK_CLOSE_CURLY_BRACKET	0xAF (175)	Close curly bracket ("}") key.
    // DOM_VK_TILDE	0xB0 (176)	Tilde ("~") key.
    // DOM_VK_VOLUME_MUTE	0xB5 (181)	Audio mute key.
    // DOM_VK_VOLUME_DOWN	0xB6 (182)	Audio volume down key
    // DOM_VK_VOLUME_UP	0xB7 (183)	Audio volume up key
    // DOM_VK_COMMA	0xBC (188)	Comma (",") key.
    // DOM_VK_PERIOD	0xBE (190)	Period (".") key.
    // DOM_VK_SLASH	0xBF (191)	Slash ("/") key.
    // DOM_VK_BACK_QUOTE	0xC0 (192)	Back tick ("`") key.
    // DOM_VK_OPEN_BRACKET	0xDB (219)	Open square bracket ("[") key.
    // DOM_VK_BACK_SLASH	0xDC (220)	Back slash ("\") key.
    // DOM_VK_CLOSE_BRACKET	0xDD (221)	Close square bracket ("]") key.
    // DOM_VK_QUOTE	0xDE (222)	Quote (''') key.
    // DOM_VK_META	0xE0 (224)	Meta key on Linux, Command key on Mac.
    // DOM_VK_ALTGR	0xE1 (225)	AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux.
    // DOM_VK_WIN_ICO_HELP	0xE3 (227)	An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.
    // DOM_VK_WIN_ICO_00	0xE4 (228)	An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.
    // DOM_VK_WIN_ICO_CLEAR	0xE6 (230)	An OEM specific key on Windows. This is (was?) used for Olivetti ICO keyboard.
    // DOM_VK_WIN_OEM_RESET	0xE9 (233)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_JUMP	0xEA (234)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_PA1	0xEB (235)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_PA2	0xEC (236)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_PA3	0xED (237)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_WSCTRL	0xEE (238)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_CUSEL	0xEF (239)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_ATTN	0xF0 (240)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_FINISH	0xF1 (241)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_COPY	0xF2 (242)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_AUTO	0xF3 (243)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_ENLW	0xF4 (244)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_WIN_OEM_BACKTAB	0xF5 (245)	An OEM specific key on Windows. This was used for Nokia/Ericsson's device.
    // DOM_VK_ATTN	0xF6 (246)	Attn (Attention) key of IBM midrange computers, e.g., AS/400.
    // DOM_VK_CRSEL	0xF7 (247)	CrSel (Cursor Selection) key of IBM 3270 keyboard layout.
    // DOM_VK_EXSEL	0xF8 (248)	ExSel (Extend Selection) key of IBM 3270 keyboard layout.
    // DOM_VK_EREOF	0xF9 (249)	Erase EOF key of IBM 3270 keyboard layout.
    // DOM_VK_PLAY	0xFA (250)	Play key of IBM 3270 keyboard layout.
    // DOM_VK_ZOOM	0xFB (251)	Zoom key.
    // DOM_VK_PA1	0xFD (253)	PA1 key of IBM 3270 keyboard layout.
    // DOM_VK_WIN_OEM_CLEAR	0xFE (254)	Clear key, but we're not sure the meaning difference from DOM_VK_CLEAR.
}

