ServerEvents.recipes(event => {
    event.recipes.oritech
        .particle_collision()
        .itemInputs(["kubejs:earth_essence", "kubejs:metallic_essence"])
        .itemOutputs("5x kubejs:precious_essence")
        .time(50)
})