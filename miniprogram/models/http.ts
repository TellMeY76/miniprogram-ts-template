interface ApiParams {
    baseURL: string;
    header: httpHeader;
    withBaseURL?: boolean;
}

interface httpHeader {
    "content-type": string;
    Authorization: string;
}

interface httpResponse {
    data: any;
    statusCode: number;
}

interface resultData {
    data: any;
    errCode: number;
}

export { ApiParams, httpResponse, resultData, httpHeader }