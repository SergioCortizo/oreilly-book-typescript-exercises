interface DoURL {
    setURL(url: string) : DoMethod
}

interface DoMethod {
    setMethod(method: 'get' | 'post') : DoLast
}

interface DoLast {
    setData(data: object) : DoLast
    send() : void
}

class RequestBuilder implements DoURL, DoMethod, DoLast {

    protected data: object | null = null
    protected method: 'get' | 'post' | null = null
    protected url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setData(data: object): this {
        this.data = data
        return this
    }

    setURL(url: string): this {
        this.url = url
        return this
    }
    
    send() {
        // ...
    }

}

export const createRequestBuider = () : DoURL => {
    return new RequestBuilder();
}
