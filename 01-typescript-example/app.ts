export class App {
    constructor() {
        const message: string = this.helloWorldMessage();

        console.log(message);
    }

    helloWorldMessage(): string {
        return 'Hello World!';
    }
}

export default new App();