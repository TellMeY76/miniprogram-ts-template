"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../configs/api");
const app = getApp();
const payByPayActionForm = function({ payDataForm, sucFn, completeFn }) {
    var _a;
    (_a = app.fetchApi) === null || _a === void 0
        ? void 0
        : _a.fetch("POST", api_1.Apis.GET_PAY_INFO, payDataForm).then(res => {
              var _a;
              if (res) {
                  const payData = (_a = res) === null || _a === void 0 ? void 0 : _a.data;
                  callWXPay(payData, sucFn, completeFn);
              }
          });
};
exports.payByPayActionForm = payByPayActionForm;
const callWXPay = function(payData, sucFn, completeFn) {
    wx.requestPayment(
        Object.assign(Object.assign({}, payData), {
            success() {
                sucFn();
            },
            fail() {
                wx.showToast({
                    title: "支付已取消",
                    icon: "none"
                });
            },
            complete() {
                completeFn();
            }
        })
    );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtcGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid3gtcGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQXNDO0FBRXRDLE1BQU0sR0FBRyxHQUFlLE1BQU0sRUFBRSxDQUFDO0FBRWpDLE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQjs7SUFDbEYsTUFBQSxHQUFHLENBQUMsUUFBUSwwQ0FBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztRQUNyRSxJQUFJLEdBQUcsRUFBRTtZQUNMLE1BQU0sT0FBTyxHQUFHLE1BQVcsR0FBNkIsMENBQUUsSUFBSSxDQUFBO1lBQzlELFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQyxFQUFFO0FBQ1AsQ0FBQyxDQUFDO0FBb0JPLGdEQUFrQjtBQWxCM0IsTUFBTSxTQUFTLEdBQUcsVUFBVSxPQUFpQixFQUFFLEtBQVUsRUFBRSxVQUFlO0lBQ3RFLEVBQUUsQ0FBQyxjQUFjLGlDQUNWLE9BQU8sS0FDVixPQUFPO1lBQ0gsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsSUFBSTtZQUNBLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLE1BQU07YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsUUFBUTtZQUNKLFVBQVUsRUFBRSxDQUFDO1FBQ2pCLENBQUMsSUFDSCxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFwcE9wdGlvbiB9IGZyb20gXCIuLi8uLi90eXBpbmdzXCI7XHJcbmltcG9ydCB7IFBheUFjdGlvbkZvcm0sIFdYUGF5T2JqIH0gZnJvbSBcIi4uL21vZGVscy9wYXlcIjtcclxuaW1wb3J0IHsgcmVzdWx0RGF0YSB9IGZyb20gXCIuLi9tb2RlbHMvaHR0cFwiO1xyXG5pbXBvcnQgeyBBcGlzIH0gZnJvbSBcIi4uL2NvbmZpZ3MvYXBpXCI7XHJcblxyXG5jb25zdCBhcHAgPSA8SUFwcE9wdGlvbj5nZXRBcHAoKTtcclxuXHJcbmNvbnN0IHBheUJ5UGF5QWN0aW9uRm9ybSA9IGZ1bmN0aW9uICh7IHBheURhdGFGb3JtLCBzdWNGbiwgY29tcGxldGVGbiB9OiBQYXlBY3Rpb25Gb3JtKSB7XHJcbiAgICBhcHAuZmV0Y2hBcGk/LmZldGNoKFwiUE9TVFwiLCBBcGlzLkdFVF9QQVlfSU5GTywgcGF5RGF0YUZvcm0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGF5RGF0YSA9IDxXWFBheU9iaj4ocmVzIGFzIHVua25vd24gYXMgcmVzdWx0RGF0YSk/LmRhdGFcclxuICAgICAgICAgICAgY2FsbFdYUGF5KHBheURhdGEsIHN1Y0ZuLCBjb21wbGV0ZUZuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGxXWFBheSA9IGZ1bmN0aW9uIChwYXlEYXRhOiBXWFBheU9iaiwgc3VjRm46IGFueSwgY29tcGxldGVGbjogYW55KSB7XHJcbiAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgLi4ucGF5RGF0YSxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICBzdWNGbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaUr+S7mOW3suWPlua2iFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgY29tcGxldGVGbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcGF5QnlQYXlBY3Rpb25Gb3JtIH0iXX0=
