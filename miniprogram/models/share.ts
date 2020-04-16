class Share {
    title?: string;
    path?: string;
    imageUrl?: string;
    success?: Function;
    fail?: Function;
    constructor(title?: string,
        path?: string,
        imageUrl?: string,
        success?: Function,
        fail?: Function) {
        this.title = title,
            this.path = path,
            this.imageUrl = imageUrl;
        this.success = success;
        this.fail = fail;
    }
}

export { Share }