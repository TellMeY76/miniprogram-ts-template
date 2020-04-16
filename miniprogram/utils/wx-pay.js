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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtcGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid3gtcGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQXNDO0FBRXRDLE1BQU0sR0FBRyxHQUFlLE1BQU0sRUFBRSxDQUFDO0FBRWpDLE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFpQjs7SUFDbEYsTUFBQSxHQUFHLENBQUMsUUFBUSwwQ0FBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFOztRQUNyRSxJQUFJLEdBQUcsRUFBRTtZQUNMLE1BQU0sT0FBTyxHQUFHLE1BQVcsR0FBNkIsMENBQUUsSUFBSSxDQUFDO1lBQy9ELFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQyxFQUFFO0FBQ1AsQ0FBQyxDQUFDO0FBb0JPLGdEQUFrQjtBQWxCM0IsTUFBTSxTQUFTLEdBQUcsVUFBVSxPQUFpQixFQUFFLEtBQWUsRUFBRSxVQUFvQjtJQUNoRixFQUFFLENBQUMsY0FBYyxpQ0FDVixPQUFPLEtBQ1YsT0FBTztZQUNILEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELElBQUk7WUFDQSxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxNQUFNO2FBQ2YsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELFFBQVE7WUFDSixVQUFVLEVBQUUsQ0FBQztRQUNqQixDQUFDLElBQ0gsQ0FBQztBQUNQLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBcHBPcHRpb24gfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgeyBQYXlBY3Rpb25Gb3JtLCBXWFBheU9iaiB9IGZyb20gXCIuLi9tb2RlbHMvcGF5XCI7XHJcbmltcG9ydCB7IHJlc3VsdERhdGEgfSBmcm9tIFwiLi4vbW9kZWxzL2h0dHBcIjtcclxuaW1wb3J0IHsgQXBpcyB9IGZyb20gXCIuLi9jb25maWdzL2FwaVwiO1xyXG5cclxuY29uc3QgYXBwID0gPElBcHBPcHRpb24+Z2V0QXBwKCk7XHJcblxyXG5jb25zdCBwYXlCeVBheUFjdGlvbkZvcm0gPSBmdW5jdGlvbiAoeyBwYXlEYXRhRm9ybSwgc3VjRm4sIGNvbXBsZXRlRm4gfTogUGF5QWN0aW9uRm9ybSkge1xyXG4gICAgYXBwLmZldGNoQXBpPy5mZXRjaChcIlBPU1RcIiwgQXBpcy5HRVRfUEFZX0lORk8sIHBheURhdGFGb3JtKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheURhdGEgPSA8V1hQYXlPYmo+KHJlcyBhcyB1bmtub3duIGFzIHJlc3VsdERhdGEpPy5kYXRhO1xyXG4gICAgICAgICAgICBjYWxsV1hQYXkocGF5RGF0YSwgc3VjRm4sIGNvbXBsZXRlRm4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2FsbFdYUGF5ID0gZnVuY3Rpb24gKHBheURhdGE6IFdYUGF5T2JqLCBzdWNGbjogRnVuY3Rpb24sIGNvbXBsZXRlRm46IEZ1bmN0aW9uKSB7XHJcbiAgICB3eC5yZXF1ZXN0UGF5bWVudCh7XHJcbiAgICAgICAgLi4ucGF5RGF0YSxcclxuICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICBzdWNGbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaUr+S7mOW3suWPlua2iFwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgY29tcGxldGVGbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcGF5QnlQYXlBY3Rpb25Gb3JtIH0iXX0=
