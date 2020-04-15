"use strict";
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        height: {
            type: String,
            value: "80%"
        },
        width: {
            type: String,
            value: "82%"
        },
        bgTp: {
            type: Boolean,
            value: false
        },
        showClose: {
            type: Boolean,
            value: true
        }
    },
    data: {},
    methods: {
        closeModel() {
            this.setData({
                show: false
            });
            this.triggerEvent("close");
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFFRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRjtJQUVELElBQUksRUFBRSxFQUFFO0lBRVIsT0FBTyxFQUFFO1FBQ1AsVUFBVTtZQUNSLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLEtBQUs7YUFDWixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgb3B0aW9uczoge1xyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcclxuICB9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBzaG93OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiBcIjgwJVwiXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogXCI4MiVcIlxyXG4gICAgfSxcclxuICAgIGJnVHA6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc2hvd0Nsb3NlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YToge30sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsb3NlTW9kZWwoKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2xvc2VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19
