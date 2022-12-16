"use strict";
exports.__esModule = true;
exports.NotificationViewModel = void 0;
var NotificationViewModel = /** @class */ (function () {
    function NotificationViewModel() {
    }
    NotificationViewModel.toHttp = function (notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId
        };
    };
    return NotificationViewModel;
}());
exports.NotificationViewModel = NotificationViewModel;
