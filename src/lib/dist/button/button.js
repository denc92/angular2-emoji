System.register(["@angular/core", "../util/util"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, util_1, EmojiButtonComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }
        ],
        execute: function () {
            EmojiButtonComponent = (function () {
                function EmojiButtonComponent() {
                    this.popupAnchor = 'top';
                    this.modelChange = new core_1.EventEmitter();
                    this.emojiUtil = new util_1.EmojiUtil();
                    this.popupOpen = false;
                }
                EmojiButtonComponent.prototype.ngOnInit = function () {
                    this.input = '';
                    this.filterEmojis = '';
                    this.allEmojis = this.emojiUtil.getAll();
                };
                EmojiButtonComponent.prototype.ngOnChanges = function () {
                    if (this.model !== this.input) {
                        this.input = this.model;
                    }
                };
                EmojiButtonComponent.prototype.togglePopup = function () {
                    var _this = this;
                    this.popupOpen = !this.popupOpen;
                    if (this.popupOpen) {
                        // Give ngIf a chance to render the <input>.
                        // Then set the focus, but do this outside the Angualar zone to be efficient.
                        setTimeout(function () {
                            _this.searchField.nativeElement.focus();
                        }, 0);
                    }
                };
                EmojiButtonComponent.prototype.getFilteredEmojis = function () {
                    var _this = this;
                    return this.allEmojis.filter(function (e) {
                        if (e.emoji === undefined) {
                            return false;
                        }
                        if (_this.filterEmojis === '') {
                            return true;
                        }
                        else {
                            for (var _i = 0, _a = e.aliases; _i < _a.length; _i++) {
                                var alias = _a[_i];
                                if (alias.includes(_this.filterEmojis)) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    });
                };
                EmojiButtonComponent.prototype.onEmojiClick = function (e) {
                    this.input = this.input + e;
                    this.modelChange.emit(this.input);
                    this.popupOpen = false;
                };
                EmojiButtonComponent.prototype.onChange = function (newValue) {
                    this.input = this.emojiUtil.emojify(newValue);
                    this.model = this.input;
                    this.modelChange.emit(this.input);
                };
                return EmojiButtonComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], EmojiButtonComponent.prototype, "popupAnchor", void 0);
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], EmojiButtonComponent.prototype, "model", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], EmojiButtonComponent.prototype, "modelChange", void 0);
            __decorate([
                core_1.ViewChild('searchField'),
                __metadata("design:type", core_1.ElementRef)
            ], EmojiButtonComponent.prototype, "searchField", void 0);
            EmojiButtonComponent = __decorate([
                core_1.Component({
                    selector: 'emoji-button',
                    templateUrl: './button.html',
                    styleUrls: ['./button.scss']
                })
            ], EmojiButtonComponent);
            exports_1("EmojiButtonComponent", EmojiButtonComponent);
        }
    };
});
//# sourceMappingURL=button.js.map