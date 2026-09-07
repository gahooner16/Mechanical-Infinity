BlockEvents.rightClicked(
    [
        'extendedcrafting:ender_ingot_block'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate while holding the Laser Wrench
        if (player.mainHandItem.id !== 'actuallyadditions:laser_wrench') return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:ender_essence')) return

        // Drop 1 Metal Essence at the clicked block
        block.popItemFromFace(Item.of('kubejs:ender_essence', 1), facing)

        // 3 tick cooldown
        player.cooldowns.addCooldown('kubejs:ender_essence', 20)

        // particle
        level.runCommandSilent(
          `particle minecraft:block{block_state:{Name:"${block.id}"}} ${
            block.x + 0.5} ${block.y + 1.0} ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
        );

        // Cancel the right-click event
        event.cancel()
    }
)