"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    properties: {
        formData: Object,
        rules: Array
    },
    attached() {
        const rules = [
            {
                name: "radio",
                rules: { required: true, message: "单选列表是必选项" }
            },
            {
                name: "checkbox",
                rules: { required: true, message: "多选列表是必选项" }
            },
            {
                name: "qq",
                rules: { required: true, message: "qq必填" }
            },
            {
                name: "mobile",
                rules: [{ required: true, message: "mobile必填" }, { mobile: true, message: "mobile格式不对" }]
            },
            {
                name: "vcode",
                rules: { required: true, message: "验证码必填" }
            },
            {
                name: "idcard",
                rules: { required: true, message: "idcard必填" }
            }
        ];
        this.setData({ rules });
    },
    data: {
        error: ""
    },
    methods: {
        submitForm() {
            const formComponent = this.selectComponent("#form");
            formComponent.validate((valid, errors) => {
                var _a;
                if (!valid) {
                    const firstErr = Object.keys(errors);
                    if (firstErr.length) {
                        const firstErrIdx = parseInt(firstErr[0]);
                        this.setData({
                            error: (_a = errors[firstErrIdx]) === null || _a === void 0 ? void 0 : _a.message
                        });
                    }
                } else {
                    this.setData({
                        error: ""
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsQ0FBQztJQUVSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFFRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQWdCLENBQUM7Z0JBQzFCLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTthQUMvQyxFQUFFO2dCQUNELElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7YUFDL0MsRUFBRTtnQkFDRCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUU7YUFDM0MsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUM7YUFDMUYsRUFBRTtnQkFDRCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7YUFDNUMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7YUFDL0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxVQUFVO1lBQ1IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBYSxFQUFFLE1BQW1CLEVBQUUsRUFBRTs7Z0JBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsTUFBTSxRQUFRLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDOUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO3dCQUNuQixNQUFNLFdBQVcsR0FBVyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsS0FBSyxRQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsMENBQUUsT0FBTzt5QkFDcEMsQ0FBQyxDQUFBO3FCQUNIO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsS0FBSyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtUnVsZXMsIEZvcm1FcnJvciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZm9ybVwiO1xyXG5cclxuQ29tcG9uZW50KHtcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgZm9ybURhdGE6IE9iamVjdCxcclxuICAgIHJ1bGVzOiBBcnJheVxyXG4gIH0sXHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgY29uc3QgcnVsZXM6IEZvcm1SdWxlc1tdID0gW3tcclxuICAgICAgbmFtZTogJ3JhZGlvJyxcclxuICAgICAgcnVsZXM6IHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfljZXpgInliJfooajmmK/lv4XpgInpobknIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgIG5hbWU6ICdjaGVja2JveCcsXHJcbiAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5aSa6YCJ5YiX6KGo5piv5b+F6YCJ6aG5JyB9LFxyXG4gICAgfSwge1xyXG4gICAgICBuYW1lOiAncXEnLFxyXG4gICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ3Fx5b+F5aGrJyB9LFxyXG4gICAgfSwge1xyXG4gICAgICBuYW1lOiAnbW9iaWxlJyxcclxuICAgICAgcnVsZXM6IFt7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnbW9iaWxl5b+F5aGrJyB9LCB7IG1vYmlsZTogdHJ1ZSwgbWVzc2FnZTogJ21vYmlsZeagvOW8j+S4jeWvuScgfV0sXHJcbiAgICB9LCB7XHJcbiAgICAgIG5hbWU6ICd2Y29kZScsXHJcbiAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6aqM6K+B56CB5b+F5aGrJyB9LFxyXG4gICAgfSwge1xyXG4gICAgICBuYW1lOiAnaWRjYXJkJyxcclxuICAgICAgcnVsZXM6IHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdpZGNhcmTlv4XloasnIH0sXHJcbiAgICB9XTtcclxuXHJcbiAgICB0aGlzLnNldERhdGEoeyBydWxlcyB9KVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6IHtcclxuICAgIGVycm9yOiAnJ1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdEZvcm0oKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Db21wb25lbnQgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnI2Zvcm0nKTtcclxuICAgICAgZm9ybUNvbXBvbmVudC52YWxpZGF0ZSgodmFsaWQ6IHN0cmluZywgZXJyb3JzOiBGb3JtRXJyb3JbXSkgPT4ge1xyXG4gICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0RXJyOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGVycm9ycylcclxuICAgICAgICAgIGlmIChmaXJzdEVyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RFcnJJZHg6IG51bWJlciA9IHBhcnNlSW50KGZpcnN0RXJyWzBdKVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvcnNbZmlyc3RFcnJJZHhdPy5tZXNzYWdlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=
