StartupEvents.registry('fluid', event => {
    // Creates 'kubejs:cracked_oil' using the built-in flat/thin vanilla-style texture
    event.create('cracked_oil', 'thin') 
        .displayName('Cracked Oil')
        .tint(0x5A5A5A)        // Overlays a medium-gray color onto the base texture
})