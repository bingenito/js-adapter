Leaves the current window group so that the window can be move independently of those in the group
# Example
```js
async function createWin(uuid) {
    const app = await fin.Application.create({
        name: 'myApp',
        uuid: uuid,
        url: 'https://www.openfin.co',
        autoShow: true
    });
    await app.run();
    return await app.getWindow();
}

async function leaveGroup() {
    const mainAppwin = await createWin('app-1');
    const app = await createWin('app-2');

    return await mainAppwin.leaveGroup(app);
}

leaveGroup().then(() => console.log('Windows disconnected')).catch(err => console.log(err));
```
