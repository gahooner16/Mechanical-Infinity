ServerEvents.loaded(event => {
    // Set gamerules using the /gamerule command
    // Syntax: event.server.runCommandSilent("gamerule <rule> <value>")

    event.server.runCommandSilent("gamerule doTraderSpawning false");
    event.server.runCommandSilent("gamerule doPatrolSpawning false");

    // You can add as many gamerules as needed
});