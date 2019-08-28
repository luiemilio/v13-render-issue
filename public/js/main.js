// uncomment line below to register offline cache service worker 
// navigator.serviceWorker.register('../serviceworker.js');

if (typeof fin !== 'undefined') {
    init();
} else {
    document.querySelector('#of-version').innerText =
        'The fin API is not available - you are probably running in a browser.';
}

//once the DOM has loaded and the OpenFin API is ready
async function init() {
    //get a reference to the current Application.
    const app = await fin.Application.getCurrent();
    const win = await fin.Window.getCurrent();

    const ofVersion = document.querySelector('#of-version');
    ofVersion.innerText = await fin.System.getVersion();

    let ctr = 0

    while(ctr < 10) {
        fin.Window.create({
            name: Math.random() + '',
            url: 'http://example.com',
            autoShow: true
        });
        ctr++;
    }

    fin.Window.create({
        name: 'win2',
        url: 'http://localhost:5555/index2.html',
        frame: true
    })
}