const rightClickRecipes = [
    {
        blocks: ['farmersdelight:rich_soil'],
        output: '2x kubejs:earth_essence'
    },
    {
        blocks: ['minecraft:grass_block', 'minecraft:dirt'],
        output: 'kubejs:earth_essence'
    },
    {
        blocks: ['minecraft:grass_block', 'minecraft:dirt', 'farmersdelight:rich_soil'],
        output: '5x kubejs:earth_essence',
        item_needed: 'minecraft:iron_shovel'
    },
    {
        blocks: ['minecraft:obsidian'],
        output: 'kubejs:nether_essence',
        item_needed: 'butchery:diamond_hacksaw'
    },
    {
        blocks: ['mysticalagriculture:machine_frame'],
        output: '2x kubejs:metallic_essence',
        item_needed: 'butchery:iron_hammer'
    },
    {
        blocks: ['mysticalagriculture:machine_frame'],
        output: '4x kubejs:metallic_essence',
        item_needed: 'butchery:diamond_hammer'
    },
    {
        blocks: ['mysticalagriculture:machine_frame'],
        output: 'kubejs:metallic_essence',
        item_needed: 'butchery:bone_hammer'
    },
    {
        blocks: ['extendedcrafting:ender_ingot_block'],
        output: 'kubejs:ender_essence',
        item_needed: 'actuallyadditions:laser_wrench'
    },
    {
        blocks: ['minecraft:gold_block'],
        output: 'kubejs:precious_essence',
        item_needed: 'laserio:laser_wrench'
    }
]

const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
const CATEGORY_ID = $ResourceLocation.parse('mechanical_infinity:right_click_block')
const customCategoryMethod = 'custom(net.minecraft.resources.ResourceLocation,java.util.function.Consumer)'
const customRecipesMethod = 'custom(net.minecraft.resources.ResourceLocation)'

const WIDTH = 140
const HEIGHT = 18
const ITEM_NEEDED_X = 1
const ITEM_NEEDED_Y = 1
const OUTPUT_X = WIDTH - 18 - 1
const OUTPUT_Y = 1
const ARROW_X = OUTPUT_X - 22 - 4
const ARROW_Y = 4
const TEXT_X = ITEM_NEEDED_X + 16 + 4
const TEXT_Y = 6
const RIGHT_CLICK_ICON_X = TEXT_X + 39
const RIGHT_CLICK_ICON_Y = 1
const INPUT_X = RIGHT_CLICK_ICON_X + 16 + 1
const INPUT_Y = 1

KubeJEIEvents.registerCategories(event => {
    const helpers = event.registration.jeiHelpers
    const guiHelper = helpers.guiHelper
    const mc = event.mc

    event[customCategoryMethod](CATEGORY_ID, builder => {
        builder.icon = helpers.guiHelper.createDrawableItemStack("kubejs:right_click")
        builder.background = guiHelper.createBlankDrawable(WIDTH, HEIGHT)
        builder.title = Component.literal('Right Click Block')

        builder.recipeSetHandler = {
            setRecipe(slots, recipe, focuses) {
                const data = recipe.data

                const inputSlot = slots.addInputSlot(INPUT_X, INPUT_Y)
                for (const block of data.blocks) {
                    inputSlot.addItemStack(Item.of(block))
                }

                slots.addOutputSlot(OUTPUT_X, OUTPUT_Y).addItemStack(data.output)

                if(data.item_needed) {
                  slots.addSlot("render_only", ITEM_NEEDED_X, ITEM_NEEDED_Y).addItemStack(data.item_needed)
                }
            }
        }

        builder.drawHandler = {
            draw(recipe, graphics, mouseX, mouseY) {
                const drawString = 'drawString(net.minecraft.client.gui.Font,net.minecraft.network.chat.Component,int,int,int,boolean)'
                graphics[drawString](mc.font, Text.white('Sneak +'), TEXT_X, TEXT_Y, 0xFFFFFF, false)

                helpers.guiHelper.recipeArrowFilled.draw(graphics, ARROW_X, 1)
                
                graphics.blit(
                  $ResourceLocation.fromNamespaceAndPath('kubejs', 'textures/item/right_click.png'),
                  RIGHT_CLICK_ICON_X,
                  RIGHT_CLICK_ICON_Y,
                  0,
                  0,
                  16,
                  16,
                  16,
                  16
                )
            }
        }
    })
})

KubeJEIEvents.registerRecipes(event => {
    event[customRecipesMethod](CATEGORY_ID).addAll(rightClickRecipes)
})

KubeJEIEvents.denyCategory(event => {
    event.deny("mekmm:replicator"),
    event.deny("industrialforegoing:ore_laser")
})