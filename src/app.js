const clientId = 'client id goes here' // getting the client ID of the application
const DiscordRPC = require('discord-rpc') // Requiring the package of discord-rpc
const RPC = new DiscordRPC.Client({
    transport: 'ipc'
}); // creating a new client for the RPC

DiscordRPC.register(clientId); // registring the clientID for it to function

// Where the main presence comes in.
async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `My Presence`,
        state: `Watching`,
        startTimestamp: Date.now(),
        largeImageKey: 'cat-icon', // This is the large image that will display
        largeImageText: `It's a cat that is very cute.`, // Large image text that will display when hovering over.
        smallImageKey: `small-icon-anime`, // This is the small icon that will appear in the bottom right as a circle.
        smallImageText: `jsh. ♡#2672`, // Small icon text when hovering over
        instance: false,
        buttons: [{
                label: `custm button text`, // This is what the button will be named
                url: `custom url here` // The link this will be used to redirect you to. This doesn't work for the user of the account.
            },
            {
                label: `custoom text here`, // This is what the button will be named
                url: `custom url here` // The link this will be used to redirect you to. This doesn't work for the user of the account.
            },
        ]
    });
}

RPC.on('ready', async () => {
    setActivity();

    // how long it will go on for 15 = 15 seconds, 100 = 1.6 minutes etc.
    setInterval(() => {
        setActivity();
    }, 100 * 1000);
});

// logging in to the RPC using your client ID
RPC.login({
    clientId
}).catch(err => console.error(err)); // Catches any error in the console and displays it.

/* Credit goes to jsh. ♡#2672 */
// RPC based.
