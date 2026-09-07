BlockEvents.rightClicked(
    [
        'mysticalagriculture:machine_frame'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate while holding the Diamond Hammer
        if (player.mainHandItem.id !== 'butchery:diamond_hammer') return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:metallic_essence')) return

        // Drop 4 Metal Essence at the clicked block
        block.popItemFromFace(Item.of('kubejs:metallic_essence', 4), facing)

        // 1 tick cooldown
        player.cooldowns.addCooldown('kubejs:metallic_essence', 1)

        // particle
        level.runCommandSilent(
          `particle minecraft:block{block_state:{Name:"${block.id}"}} ${
            block.x + 0.5} ${block.y + 1.0} ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
        );

        // Cancel the right-click event
        event.cancel()
    }
)