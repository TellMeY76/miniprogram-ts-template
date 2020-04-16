import { setShareParam } from "../utils/share";

import { Share } from "../models/share";

module.exports = {
    data: {
        share: {
            title: 'shareTitle',
            path: '/pages/index/index',
            imageUrl: '',
            success: () => { },
            fail: () => { }
        },
    },

    onLoad() {
        const share: Share = setShareParam();
        this.setData({ share })
    },

};