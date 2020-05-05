export class App {
    constructor() {
        let message: string = this.helloWorldMessage();

        console.log(message);
    }

    helloWorldMessage() : string {
        return 'Hello World!';
    }
}

export default new App();