"use strict";
exports.__esModule = true;
exports.Content = void 0;
var Content = /** @class */ (function () {
    function Content(content) {
        var isContentLengthValid = this.validateContentLength(content);
        if (!isContentLengthValid) {
            throw new Error('Content Length Error.');
        }
        this.content = content;
    }
    Object.defineProperty(Content.prototype, "value", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    Content.prototype.validateContentLength = function (content) {
        return content.length >= 5 && content.length <= 240;
    };
    return Content;
}());
exports.Content = Content;
