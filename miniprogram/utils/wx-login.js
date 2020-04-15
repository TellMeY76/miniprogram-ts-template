"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../configs/api");
const userInfo_1 = require("../models/userInfo");
const app = getApp();
const WXLogin = (needUnionId, sucFn) => {
    wx.login({
        success(res) {
            var _a;
            if (res.code) {
                (_a = app.fetchApi) === null || _a === void 0
                    ? void 0
                    : _a.fetch("GET", `${api_1.Apis.USER_LOGIN}/${res.code}`).then(res => {
                          var _a;
                          const data = res.data;
                          if (needUnionId) {
                              getUnionId(data.openid);
                          }
                          try {
                              (_a = app.store) === null || _a === void 0 ? void 0 : _a.setItem("loginData", data);
                              sucFn ? sucFn() : "";
                          } catch (e) {}
                      });
            }
        }
    });
};
exports.WXLogin = WXLogin;
const getUnionId = openId => {
    var _a;
    (_a = app.fetchApi) === null || _a === void 0
        ? void 0
        : _a.fetch("GET", `${api_1.Apis.GET_UNIONID}/${openId}`).then(res => {
              var _a, _b;
              const data = res.data;
              if (data && data.unionId) {
                  (_a = app.store) === null || _a === void 0 ? void 0 : _a.setItem("userInfo", data);
              } else if (!data) {
                  (_b = app.store) === null || _b === void 0 ? void 0 : _b.clear("userInfo");
              }
          });
};
exports.getUnionId = getUnionId;
const checkSession = (sucFn, failFn) => {
    wx.checkSession({
        success() {
            sucFn();
        },
        fail() {
            failFn();
        }
    });
};
const checkSessionOnLaunch = () => {
    const checkSessionSuc = () => {
        var _a;
        const loginData = (_a = app.store) === null || _a === void 0 ? void 0 : _a.getItem("loginData");
        if (loginData.openid) {
            getUnionId(loginData.openid);
        } else {
            WXLogin(true);
        }
    };
    const checkSessionFail = () => WXLogin(true);
    checkSession(checkSessionSuc, checkSessionFail);
};
exports.checkSessionOnLaunch = checkSessionOnLaunch;
const getUserBySessionKey = (detail, sucFn, sucParam) => {
    const checkSessionSuc = () => {
        var _a, _b;
        const loginData = (_a = app.store) === null || _a === void 0 ? void 0 : _a.getItem("loginData");
        if (loginData) {
            (_b = app.fetchApi) === null || _b === void 0
                ? void 0
                : _b
                      .fetch(
                          "POST",
                          api_1.Apis.USER_INFO,
                          new userInfo_1.UserSession(loginData.session_key, detail.encryptedData, detail.iv)
                      )
                      .then(res => {
                          var _a;
                          const data = res.data;
                          if (data.unionId && data) {
                              (_a = app.store) === null || _a === void 0 ? void 0 : _a.setItem("unionId", data.unionId);
                              sucFn ? sucFn(sucParam) : "";
                          }
                      });
        } else {
            loginAgain(detail);
        }
    };
    const checkSessionFail = () => {
        loginAgain(detail);
    };
    checkSession(checkSessionSuc, checkSessionFail);
};
exports.getUserBySessionKey = getUserBySessionKey;
const loginAgain = detail => {
    const loginSucFn = () => {
        getUserBySessionKey(detail);
    };
    WXLogin(false, loginSucFn);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3gtbG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3eC1sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUFzQztBQUV0QyxpREFBc0U7QUFHdEUsTUFBTSxHQUFHLEdBQWUsTUFBTSxFQUFFLENBQUM7QUFFakMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUFvQixFQUFFLEtBQWdCLEVBQUUsRUFBRTtJQUN2RCxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQWdCOztZQUNwQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsTUFBQSxHQUFHLENBQUMsUUFBUSwwQ0FBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsVUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOztvQkFDcEUsTUFBTSxJQUFJLEdBQWUsR0FBNkIsQ0FBQyxJQUFJLENBQUE7b0JBQzNELElBQUksV0FBVyxFQUFFO3dCQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzNCO29CQUNELElBQUk7d0JBQ0EsTUFBQSxHQUFHLENBQUMsS0FBSywwQ0FBRSxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRTt3QkFDdEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUN4QjtvQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO2dCQUNuQixDQUFDLEVBQUU7YUFDTjtRQUNMLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFpRU8sMEJBQU87QUEvRGhCLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7O0lBQ2xDLE1BQUEsR0FBRyxDQUFDLFFBQVEsMENBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLFVBQUksQ0FBQyxXQUFXLElBQUksTUFB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QUUsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQTtJQUN4RCxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBcHBPcHRpb24gfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xyXG5pbXBvcnQgeyBBcGlzIH0gZnJvbSBcIi4uL2NvbmZpZ3MvYXBpXCI7XHJcbmltcG9ydCB7IHJlc3VsdERhdGEgfSBmcm9tIFwiLi4vbW9kZWxzL2h0dHBcIjtcclxuaW1wb3J0IHsgTG9naW5EYXRhLCBVc2VySW5mbywgVXNlclNlc3Npb24gfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldFVzZXJJbmZvUmVzLCBMb2dpblN1Y1JlcyB9IGZyb20gXCIuLi9tb2RlbHMvd3hNb2RlbHNcIjtcclxuXHJcbmNvbnN0IGFwcCA9IDxJQXBwT3B0aW9uPmdldEFwcCgpO1xyXG5cclxuY29uc3QgV1hMb2dpbiA9IChuZWVkVW5pb25JZDogYm9vbGVhbiwgc3VjRm4/OiBGdW5jdGlvbikgPT4ge1xyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBMb2dpblN1Y1Jlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5mZXRjaEFwaT8uZmV0Y2goJ0dFVCcsIGAke0FwaXMuVVNFUl9MT0dJTn0vJHtyZXMuY29kZX1gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogTG9naW5EYXRhID0gKHJlcyBhcyB1bmtub3duIGFzIHJlc3VsdERhdGEpLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmVlZFVuaW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VW5pb25JZChkYXRhLm9wZW5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5zdG9yZT8uc2V0SXRlbShcImxvZ2luRGF0YVwiLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjRm4gPyBzdWNGbigpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVbmlvbklkID0gKG9wZW5JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBhcHAuZmV0Y2hBcGk/LmZldGNoKCdHRVQnLCBgJHtBcGlzLkdFVF9VTklPTklEfS8ke29wZW5JZH1gKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogVXNlckluZm8gPSAocmVzIGFzIHVua25vd24gYXMgcmVzdWx0RGF0YSkuZGF0YVxyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudW5pb25JZCkge1xyXG4gICAgICAgICAgICBhcHAuc3RvcmU/LnNldEl0ZW0oXCJ1c2VySW5mb1wiLCBkYXRhKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgYXBwLnN0b3JlPy5jbGVhcihcInVzZXJJbmZvXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja1Nlc3Npb24gPSAoc3VjRm46IEZ1bmN0aW9uLCBmYWlsRm46IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICB3eC5jaGVja1Nlc3Npb24oe1xyXG4gICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgIHN1Y0ZuKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICBmYWlsRm4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgY2hlY2tTZXNzaW9uT25MYXVuY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja1Nlc3Npb25TdWMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naW5EYXRhOiBMb2dpbkRhdGEgPSBhcHAuc3RvcmU/LmdldEl0ZW0oXCJsb2dpbkRhdGFcIik7XHJcbiAgICAgICAgaWYgKGxvZ2luRGF0YS5vcGVuaWQpIHtcclxuICAgICAgICAgICAgZ2V0VW5pb25JZChsb2dpbkRhdGEub3BlbmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBXWExvZ2luKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrU2Vzc2lvbkZhaWwgPSAoKSA9PiBXWExvZ2luKHRydWUpXHJcbiAgICBjaGVja1Nlc3Npb24oY2hlY2tTZXNzaW9uU3VjLCBjaGVja1Nlc3Npb25GYWlsKVxyXG59XHJcblxyXG5jb25zdCBnZXRVc2VyQnlTZXNzaW9uS2V5ID0gKGRldGFpbDogR2V0VXNlckluZm9SZXMsIHN1Y0ZuPzogRnVuY3Rpb24sIHN1Y1BhcmFtPzogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjaGVja1Nlc3Npb25TdWMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naW5EYXRhOiBMb2dpbkRhdGEgPSBhcHAuc3RvcmU/LmdldEl0ZW0oXCJsb2dpbkRhdGFcIik7XHJcbiAgICAgICAgaWYgKGxvZ2luRGF0YSkge1xyXG4gICAgICAgICAgICBhcHAuZmV0Y2hBcGk/LmZldGNoKCdQT1NUJywgQXBpcy5VU0VSX0lORk8sIG5ldyBVc2VyU2Vzc2lvbihsb2dpbkRhdGEuc2Vzc2lvbl9rZXksIGRldGFpbC5lbmNyeXB0ZWREYXRhLCBkZXRhaWwuaXYpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBVc2VySW5mbyA9IChyZXMgYXMgdW5rbm93biBhcyByZXN1bHREYXRhKS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudW5pb25JZCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5zdG9yZT8uc2V0SXRlbShcInVuaW9uSWRcIiwgZGF0YS51bmlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjRm4gPyBzdWNGbihzdWNQYXJhbSkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZ2luQWdhaW4oZGV0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja1Nlc3Npb25GYWlsID0gKCkgPT4ge1xyXG4gICAgICAgIGxvZ2luQWdhaW4oZGV0YWlsKTtcclxuICAgIH1cclxuICAgIGNoZWNrU2Vzc2lvbihjaGVja1Nlc3Npb25TdWMsIGNoZWNrU2Vzc2lvbkZhaWwpO1xyXG59O1xyXG5cclxuY29uc3QgbG9naW5BZ2FpbiA9IChkZXRhaWw6IEdldFVzZXJJbmZvUmVzKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpblN1Y0ZuID0gKCkgPT4geyBnZXRVc2VyQnlTZXNzaW9uS2V5KGRldGFpbCkgfVxyXG4gICAgV1hMb2dpbihmYWxzZSwgbG9naW5TdWNGbik7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHsgV1hMb2dpbiwgZ2V0VW5pb25JZCwgY2hlY2tTZXNzaW9uT25MYXVuY2gsIGdldFVzZXJCeVNlc3Npb25LZXkgfVxyXG4iXX0=
