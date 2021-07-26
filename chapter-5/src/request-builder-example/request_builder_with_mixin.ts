export class RequestBuilderWithMixin {

    protected data: object | null = null
    protected method: 'get' | 'post' | null = null
    protected url: string | null = null

    setMethod(method: 'get' | 'post') {
        this.method = method;

        if (this.url === null) {
            return this;
        } else {
            let instanceWithSend = new ClassWithSend();

            instanceWithSend.url = this.url;
            instanceWithSend.method = this.method;
            instanceWithSend.data = this.data;

            return instanceWithSend;

        }

    }

    setData(data: object) {
        this.data = data

        if (this.method === null || this.url === null) {
            return this;
        } else {
            let instanceWithSend = new ClassWithSend();

            instanceWithSend.url = this.url;
            instanceWithSend.method = this.method;
            instanceWithSend.data = this.data;

            return instanceWithSend;

        }
    }

    setURL(url: string) {
        this.url = url

        if (this.method === null) {
            return this;
        } else {
            let instanceWithSend = new ClassWithSend();

            instanceWithSend.url = this.url;
            instanceWithSend.method = this.method;
            instanceWithSend.data = this.data;

            return instanceWithSend;

        }
    }

}

type ClassConstructor = new (...args: any[]) => {}

export function withSend<C extends ClassConstructor>(Class: C) {
    return class RequestBuilderPrepared extends Class {
        send() {
            // ...
        }
    }
}

const ClassWithSend = withSend(RequestBuilderWithMixin)
