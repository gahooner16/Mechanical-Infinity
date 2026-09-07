BlockEvents.rightClicked(
    [
        'minecraft:gold_block'
    ],
    event => {
        const { block, player, level, server, facing } = event

        // Only activate while crouching
        if (!player.isCrouching()) return

        // Only activate while holding the Laser Wrench
        if (player.mainHandItem.id !== 'laserio:laser_wrench') return

        // Don't activate if the cooldown is active
        if (player.cooldowns.isOnCooldown('kubejs:precious_essence')) return

        // Drop 1 Metal Essence at the clicked block
        block.popItemFromFace(Item.of('kubejs:precious_essence', 1), facing)

        // 3 tick cooldown
        player.cooldowns.addCooldown('kubejs:precious_essence', 5)

        // particle
        level.runCommandSilent(
          `particle minecraft:block{block_state:{Name:"${block.id}"}} ${
            block.x + 0.5} ${block.y + 1.0} ${block.z + 0.5} 0.25 0.25 0.25 0.02 7`
        );
        
        // Cancel the right-click event
        event.cancel()
    }
)