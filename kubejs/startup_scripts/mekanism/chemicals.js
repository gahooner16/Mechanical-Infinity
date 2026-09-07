const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')

StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:tier_1_growth',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0xF8DE7E)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:tier_2_growth',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0xc6ed86)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:tier_3_growth',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0x96ed86)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:tier_4_growth',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0x299e13)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:diamond_infused_precious',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0x1faaf0)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:obsidian_infused_nether',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0x21086e)
        )
    )
})
StartupEvents.registry('mekanism:chemical', event => {
    event.createCustom(
        'kubejs:propane',
        () => new $Chemical(
            $ChemicalBuilder.builder()
                .tint(0xfaf6e3)
        )
    )
})
