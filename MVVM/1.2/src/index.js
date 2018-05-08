import san from 'san';

const MyApp = san.defineComponent({
    template: `
                <div>
                    <p>Hello {{name}}!</p>
                </div>
            `
});

let myApp = new MyApp({
    data: {
        name: 'world'
    }
});
myApp.attach(document.body);