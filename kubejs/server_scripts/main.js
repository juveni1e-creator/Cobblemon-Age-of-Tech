console.info('Hello, World! (Loaded server example script)')

// Item IDs organized by mod for reference:
// Minecraft: minecraft:gold_block, minecraft:golden_apple, minecraft:enchanted_golden_apple, minecraft:coal_block, minecraft:diamond, minecraft:moss_block, minecraft:wind_charge, minecraft:heavy_core, minecraft:quartz, minecraft:prismarine_crystals, minecraft:nether_star, minecraft:milk, minecraft:paper, minecraft:clay_ball, minecraft:copper_ingot
// Cobblenav: cobblenav:pokefinder_item_white, cobblenav:pokefinder_item_orange, cobblenav:pokefinder_item_magenta, cobblenav:pokefinder_item_light_blue, cobblenav:pokefinder_item_blue, cobblenav:pokefinder_item_red, cobblenav:pokefinder_item_green, cobblenav:pokefinder_item_lime, cobblenav:pokefinder_item_black, cobblenav:pokefinder_item_gray, cobblenav:pokefinder_item_light_gray, cobblenav:pokefinder_item_pink, cobblenav:pokefinder_item_purple, cobblenav:pokefinder_item_yellow, cobblenav:pokefinder_item_brown, cobblenav:pokefinder_item_cyan, cobblenav:pokenav_item_base, cobblenav:fishingnav_item
// Cobblemon: cobblemon:exp_candy_xs, cobblemon:exp_candy_s, cobblemon:exp_candy_m, cobblemon:exp_candy_l, cobblemon:exp_candy_xl, cobblemon:rare_candy, cobblemon:white_apricorn, cobblemon:black_apricorn, cobblemon:red_apricorn, cobblemon:blue_apricorn, cobblemon:green_apricorn, cobblemon:yellow_apricorn, cobblemon:pink_apricorn, cobblemon:old_gateau, cobblemon:fire_gem, cobblemon:water_gem, cobblemon:grass_gem, cobblemon:electric_gem, cobblemon:ice_gem, cobblemon:fighting_gem, cobblemon:poison_gem, cobblemon:ground_gem, cobblemon:flying_gem, cobblemon:psychic_gem, cobblemon:bug_gem, cobblemon:rock_gem, cobblemon:ghost_gem, cobblemon:dragon_gem, cobblemon:dark_gem, cobblemon:steel_gem, cobblemon:fairy_gem, cobblemon:electirizer, cobblemon:upgrade, cobblemon:poke_ball, cobblemon:water_gem, cobblemon:net_ball
// Mega Showdown: mega_showdown:flame_plate, mega_showdown:splash_plate, mega_showdown:zap_plate, mega_showdown:meadow_plate, mega_showdown:icicle_plate, mega_showdown:fist_plate, mega_showdown:toxic_plate, mega_showdown:earth_plate, mega_showdown:sky_plate, mega_showdown:mind_plate, mega_showdown:insect_plate, mega_showdown:stone_plate, mega_showdown:spooky_plate, mega_showdown:draco_plate, mega_showdown:dread_plate, mega_showdown:iron_plate, mega_showdown:pixie_plate, mega_showdown:bug_memory, mega_showdown:dark_memory, mega_showdown:dragon_memory, mega_showdown:electric_memory, mega_showdown:fairy_memory, mega_showdown:fighting_memory, mega_showdown:ghost_memory, mega_showdown:fire_memory, mega_showdown:flying_memory, mega_showdown:ice_memory, mega_showdown:grass_memory, mega_showdown:ground_memory, mega_showdown:poison_memory, mega_showdown:psychic_memory, mega_showdown:rock_memory, mega_showdown:steel_memory, mega_showdown:water_memory, mega_showdown:normal_tera_shard, mega_showdown:fire_tera_shard, mega_showdown:water_tera_shard, mega_showdown:grass_tera_shard, mega_showdown:electric_tera_shard, mega_showdown:ice_tera_shard, mega_showdown:fighting_tera_shard, mega_showdown:poison_tera_shard, mega_showdown:ground_tera_shard, mega_showdown:flying_tera_shard, mega_showdown:psychic_tera_shard, mega_showdown:bug_tera_shard, mega_showdown:rock_tera_shard, mega_showdown:ghost_tera_shard, mega_showdown:dragon_tera_shard, mega_showdown:dark_tera_shard, mega_showdown:steel_tera_shard, mega_showdown:fairy_tera_shard, mega_showdown:stellar_tera_shard
// SimpleTMS: simpletms:tm_blank
// Mekanism: mekanism:atomic_disassembler, mekanism:alloy_atomic, mekanism:ultimate_energy_cube, mekanism:ingot_refined_obsidian
// AE2: ae2:printed_calculation_processor, ae2:certus_quartz_crystal, ae2:printed_engineering_processor, ae2:printed_logic_processor, ae2:sculk, ae2:fluix_pearl, ae2:industrial_iron_block, ae2:heavy_core, ae2:charged_certus_quartz_crystal, ae2:logic_processor, ae2:cell_component_1k, ae2:cell_component_4k, ae2:cell_component_16k, ae2:cell_component_64k, ae2:cell_component_256k, ae2:item_storage_cell_1k, ae2:item_storage_cell_4k, ae2:item_storage_cell_16k, ae2:item_storage_cell_64k, ae2:item_storage_cell_256k, ae2:fluid_storage_cell_1k, ae2:fluid_storage_cell_4k, ae2:fluid_storage_cell_16k, ae2:fluid_storage_cell_64k, ae2:fluid_storage_cell_256k, ae2:printed_silicon, ae2:silicon, ae2:calculation_processor, ae2:engineering_processor
// Create: create:brass_sheet, create:electron_tube, create:precision_mechanism, create:honey, create:compacting, create:superheated, create:heated, create:pressing, create:iron_sheet, create:copper_sheet
// Create Enchantment Industry: create_enchantment_industry:experience
// Sophisticated Core: sophisticatedcore:xp_still
// Powah: powah:dielectric_paste

ServerEvents.recipes(event => {
    // Remove all PokeFinder items for each color (16 total colors)
    // These are navigation tools that help locate specific Pokémon types
    const finderColors = [
      'white','orange','magenta','light_blue','blue','red','green','lime',
      'black','gray','light_gray','pink','purple','yellow','brown','cyan'
    ];
    finderColors.forEach(color => {
      event.remove({ output: `cobblenav:pokefinder_item_${color}` });
    });

    // Remove all PokeNav items (navigation devices for Pokémon tracking)
    event.remove({ output: /cobblenav:pokenav_item.*/});

    // Remove specific navigation items
    event.remove({ output: 'cobblenav:fishingnav_item' }); // Fishing navigation tool
    event.remove({ output: 'cobblenav:pokenav_item_base' }); // Base navigation device

    // Remove Create mod's experience candy mixing recipes to prevent conflicts
    event.remove({ id: 'create:mixing/exp_candy_xs' });
    event.remove({ id: 'create:mixing/exp_candy_s' });
    event.remove({ id: 'create:mixing/exp_candy_m' });
    event.remove({ id: 'create:mixing/exp_candy_l' });
    event.remove({ id: 'create:mixing/exp_candy_xl' });

    // Remove rare candy to prevent conflicts with custom recipes
    event.remove({ output: 'cobblemon:rare_candy' });

    // Remove apricorn dye recipes that use Create Encapsulated paint
    // These are replaced with standard Minecraft dye recipes
    const apricornColors = ['black','white','pink','green','red','blue','yellow'];
    const minecraftDyes = ['white_dye','orange_dye','magenta_dye','light_blue_dye','yellow_dye','lime_dye','pink_dye','gray_dye','light_gray_dye','cyan_dye','purple_dye','blue_dye','brown_dye','green_dye','red_dye','black_dye'];
    apricornColors.forEach(function(apricorn) {
      minecraftDyes.forEach(function(dye) {
        event.remove({
          output: `/cobblemon:.*_apricorn/`,
          input: `minecraft:${dye}`
        });
      });
    });

    // Remove SimpleTMS blank TM recipes to prevent conflicts
    event.remove({output: 'simpletms:tm_blank'});
    event.remove({id: /tm_blank/});
    event.remove({id: 'simpletms:tr_blank_from_trs'});

    // Remove all standard Poké Ball crafting recipes (21 total)
    // These are replaced with custom recipes or removed for balance
    event.remove({ output: 'cobblemon:poke_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:great_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:safari_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:fast_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:level_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:friend_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:lure_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:love_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:moon_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:sport_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:park_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:net_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:dive_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:nest_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:repeat_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:luxury_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:dusk_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:heal_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ultra_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:quick_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:dream_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:beast_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:heavy_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:master_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:timer_ball', type: 'minecraft:crafting_shaped' });

    // Remove all Ancient Poké Ball crafting recipes (9 total)
    event.remove({ output: 'cobblemon:ancient_feather_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_wing_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_jet_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_heavy_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_leaden_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_gigaton_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_great_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_ultra_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_origin_ball', type: 'minecraft:crafting_shaped' });

    // Remove Ancient Poké Ball crafting recipes for original 7 colors (Crafting Table)
    // These are the original color variants that use crafting tables
    event.remove({ output: 'cobblemon:ancient_ivory_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_citrine_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_verdant_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_azure_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_roseate_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_slate_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_premier_ball', type: 'minecraft:crafting_shaped' });

    // Remove all special Poké Ball crafting recipes (12 total)
    event.remove({ output: 'cobblemon:citrine_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:verdant_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:azure_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:roseate_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:slate_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:premier_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_ivory_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_citrine_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_verdant_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_azure_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_roseate_ball', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'cobblemon:ancient_slate_ball', type: 'minecraft:crafting_shaped' });

    // Remove Mekanism atomic disassembler to prevent conflicts
    event.remove({ output: 'mekanism:atomic_disassembler' });

    // Remove Create compacting recipe for diamonds to prevent conflicts
    event.remove({ output: 'minecraft:diamond', type: 'create:compacting' });

    // Apricorn Dyeing Recipes (Shapeless Crafting)
    // Converts white apricorns to colored apricorns using Minecraft dyes
    // Used for crafting different types of Poké Balls
    const whiteTargets = ['red','blue','green','yellow','pink','black'];
    whiteTargets.forEach(function(target) {
      event.recipes.shapeless(
        `cobblemon:${target}_apricorn`,
        [
          `cobblemon:white_apricorn`,
          `minecraft:${target}_dye`
        ]
      ).id(`kubejs:crafting/apricorn_white_to_${target}`);
    });

    // Converts any apricorn to white using white dye
    // This allows players to reset any colored apricorn back to white
    const allApricornColors = ['white','black','red','blue','green','yellow','pink'];
    allApricornColors.forEach(color => {
      if (color !== 'white') { // Skip white apricorn to avoid redundant recipe
        event.recipes.shapeless(
          `cobblemon:white_apricorn`,
          [
            `cobblemon:${color}_apricorn`,
            `minecraft:white_dye`
          ]
        ).id(`kubejs:crafting/apricorn_${color}_to_white`);
      }
    });

    // Gem mapping for type lookup - maps element types to their corresponding gems
    const gemMap = {
      'fire': 'cobblemon:fire_gem',
      'water': 'cobblemon:water_gem',
      'grass': 'cobblemon:grass_gem',
      'electric': 'cobblemon:electric_gem',
      'ice': 'cobblemon:ice_gem',
      'fighting': 'cobblemon:fighting_gem',
      'poison': 'cobblemon:poison_gem',
      'ground': 'cobblemon:ground_gem',
      'flying': 'cobblemon:flying_gem',
      'psychic': 'cobblemon:psychic_gem',
      'bug': 'cobblemon:bug_gem',
      'rock': 'cobblemon:rock_gem',
      'ghost': 'cobblemon:ghost_gem',
      'dragon': 'cobblemon:dragon_gem',
      'dark': 'cobblemon:dark_gem',
      'steel': 'cobblemon:steel_gem',
      'fairy': 'cobblemon:fairy_gem'
    };

    // Plate Crafting Recipes (Shapeless Crafting)
    // Creates type-specific plates by combining Old Gateau with elemental gems
    // Used for crafting type-specific items and equipment
    const plates = [
      { id: 'mega_showdown:flame_plate', type: 'fire' },
      { id: 'mega_showdown:splash_plate', type: 'water' },
      { id: 'mega_showdown:zap_plate', type: 'electric' },
      { id: 'mega_showdown:meadow_plate', type: 'grass' },
      { id: 'mega_showdown:icicle_plate', type: 'ice' },
      { id: 'mega_showdown:fist_plate', type: 'fighting' },
      { id: 'mega_showdown:toxic_plate', type: 'poison' },
      { id: 'mega_showdown:earth_plate', type: 'ground' },
      { id: 'mega_showdown:sky_plate', type: 'flying' },
      { id: 'mega_showdown:mind_plate', type: 'psychic' },
      { id: 'mega_showdown:insect_plate', type: 'bug' },
      { id: 'mega_showdown:stone_plate', type: 'rock' },
      { id: 'mega_showdown:spooky_plate', type: 'ghost' },
      { id: 'mega_showdown:draco_plate', type: 'dragon' },
      { id: 'mega_showdown:dread_plate', type: 'dark' },
      { id: 'mega_showdown:iron_plate', type: 'steel' },
      { id: 'mega_showdown:pixie_plate', type: 'fairy' }
    ];
    plates.forEach(plate => {
      event.recipes.shapeless(plate.id, [
        'cobblemon:old_gateau',
        gemMap[plate.type]
      ]).id(`kubejs:crafting/${plate.id.split(':')[1]}`);
    });

    // Memory Crafting Recipes (Shapeless Crafting)
    // Creates type-specific memories by combining blank TMs with elemental gems
    // Used for teaching Pokémon moves of specific types
    const memories = [
      { id: 'mega_showdown:bug_memory', type: 'bug' },
      { id: 'mega_showdown:dark_memory', type: 'dark' },
      { id: 'mega_showdown:dragon_memory', type: 'dragon' },
      { id: 'mega_showdown:electric_memory', type: 'electric' },
      { id: 'mega_showdown:fairy_memory', type: 'fairy' },
      { id: 'mega_showdown:fighting_memory', type: 'fighting' },
      { id: 'mega_showdown:ghost_memory', type: 'ghost' },
      { id: 'mega_showdown:fire_memory', type: 'fire' },
      { id: 'mega_showdown:flying_memory', type: 'flying' },
      { id: 'mega_showdown:ice_memory', type: 'ice' },
      { id: 'mega_showdown:grass_memory', type: 'grass' },
      { id: 'mega_showdown:ground_memory', type: 'ground' },
      { id: 'mega_showdown:poison_memory', type: 'poison' },
      { id: 'mega_showdown:psychic_memory', type: 'psychic' },
      { id: 'mega_showdown:rock_memory', type: 'rock' },
      { id: 'mega_showdown:steel_memory', type: 'steel' },
      { id: 'mega_showdown:water_memory', type: 'water' }
    ];
    memories.forEach(memory => {
      event.recipes.shapeless(memory.id, [
        'simpletms:tm_blank',
        gemMap[memory.type]
      ]).id(`kubejs:crafting/${memory.id.split(':')[1]}`);
    });

    // Enchanted Golden Apple Recipe (Shaped Crafting)
    // Legacy recipe using gold blocks instead of gold ingots for balance
    // Creates a powerful healing item with status effects
    event.recipes.shaped('minecraft:enchanted_golden_apple', [
      'GGG',
      'GAG',
      'GGG'
    ], {
      G: 'minecraft:gold_block',
      A: 'minecraft:golden_apple'
    }).id('kubejs:crafting/enchanted_golden_apple_old');

    // Mekanism Atomic Disassembler Recipe (Shaped Crafting)
    // Creates a powerful tool that can break any block instantly
    // Uses advanced Mekanism components and refined obsidian
    event.recipes.shaped('mekanism:atomic_disassembler', [
      'ABA',
      'ACA',
      ' C '
    ], {
      A: 'mekanism:alloy_atomic',
      B: 'mekanism:ultimate_energy_cube',
      C: 'mekanism:ingot_refined_obsidian'
    }).id('kubejs:crafting/atomic_disassembler');

    // AE2 Printed Processor Polishing Recipes (Create Sandpaper Polishing)
    // Polishes raw materials into advanced AE2 processors using sandpaper
    // Used for creating Applied Energistics 2 computing components
    event.recipes.createSandpaperPolishing(
      'ae2:printed_calculation_processor',
      'ae2:certus_quartz_crystal'
    ).id('kubejs:polishing/printed_calculation_processor');
    event.recipes.createSandpaperPolishing(
      'ae2:printed_engineering_processor',
      'minecraft:diamond'
    ).id('kubejs:polishing/printed_engineering_processor');
    event.recipes.createSandpaperPolishing(
      'ae2:printed_logic_processor',
      'minecraft:gold_ingot'
    ).id('kubejs:polishing/printed_logic_processor');

    // Sculk Creation Recipes (Create Mixing - Heated)
    // Creates sculk blocks by mixing moss blocks with experience fluids
    // Uses either Create Enchantment Industry or Sophisticated Core XP fluids
    event.recipes.createMixing(
      'minecraft:sculk',
      [
        '2x minecraft:moss_block',
        Fluid.of('create_enchantment_industry:experience', 200)
      ]
    ).heated().id('kubejs:mixing/sculk_from_moss');

    event.recipes.createMixing(
      'minecraft:sculk',
      [
        '2x minecraft:moss_block',
        Fluid.of('sophisticatedcore:xp_still', 200)
      ]
    ).heated().id('kubejs:mixing/sculk_from_moss_xp_still');

    // Heavy Core Compacting Recipe (Create Compacting)
    // Creates a heavy core by compacting wind charges, fluix pearls, and industrial iron
    // Used for advanced machinery and automation systems
    event.recipes.createCompacting('minecraft:heavy_core', [
      '2x minecraft:wind_charge',
      'ae2:fluix_pearl',
      'create:industrial_iron_block'
    ]).id('kubejs:compacting/heavy_core');

    // Diamond Creation Recipe (Create Compacting - Superheated)
    // Creates diamonds by superheating coal blocks at extreme temperatures
    // Alternative diamond production method for industrial automation
    event.recipes.createCompacting(
      'minecraft:diamond',
      [
        '9x minecraft:coal_block'
      ]
    ).superheated().id('kubejs:compacting/diamond_from_coal');

    // Flux Dust Creation Recipe (Create Compacting - Heated)
    // Creates Flux Networks flux dust by compacting redstone and obsidian
    // Used for crafting Flux Networks components and energy systems
    event.recipes.createCompacting(
      '32x fluxnetworks:flux_dust',
      [
        '16x minecraft:redstone',
        '4x minecraft:obsidian'
      ]
    ).heated().id('kubejs:compacting/flux_dust_from_redstone_obsidian');

    // Experience Candy Creation Recipes (Create Mixing - Heated)
    // Creates various sizes of experience candy by mixing experience fluids with honey
    // Uses either Create Enchantment Industry or Sophisticated Core XP fluids
    // XS Size: Basic experience candy with minimal ingredients
    event.recipes.createMixing(
      'cobblemon:exp_candy_xs',
      [
        Fluid.of('create_enchantment_industry:experience', 75),
        Fluid.of('create:honey', 50)
      ]
    ).heated().id('kubejs:mixing/exp_candy_xs_from_enchantment_xp');

    event.recipes.createMixing(
      'cobblemon:exp_candy_xs',
      [
        Fluid.of('sophisticatedcore:xp_still', 75),
        Fluid.of('create:honey', 50)
      ]
    ).heated().id('kubejs:mixing/exp_candy_xs_from_xp_still');

    // S Size: Small experience candy with moderate ingredients
    event.recipes.createMixing(
      'cobblemon:exp_candy_s',
      [
        'cobblemon:exp_candy_xs',
        Fluid.of('create_enchantment_industry:experience', 85),
        Fluid.of('create:honey', 55)
      ]
    ).heated().id('kubejs:mixing/exp_candy_s_from_enchantment_xp');

    event.recipes.createMixing(
      'cobblemon:exp_candy_s',
      [
        'cobblemon:exp_candy_xs',
        Fluid.of('sophisticatedcore:xp_still', 85),
        Fluid.of('create:honey', 55)
      ]
    ).heated().id('kubejs:mixing/exp_candy_s_from_xp_still');

    // M Size: Medium experience candy with substantial ingredients
    event.recipes.createMixing(
      'cobblemon:exp_candy_m',
      [
        'cobblemon:exp_candy_s',
        Fluid.of('create_enchantment_industry:experience', 95),
        Fluid.of('create:honey', 65)
      ]
    ).heated().id('kubejs:mixing/exp_candy_m_from_enchantment_xp');

    event.recipes.createMixing(
      'cobblemon:exp_candy_m',
      [
        'cobblemon:exp_candy_s',
        Fluid.of('sophisticatedcore:xp_still', 95),
        Fluid.of('create:honey', 65)
      ]
    ).heated().id('kubejs:mixing/exp_candy_m_from_xp_still');

    // L Size: Large experience candy with significant ingredients
    event.recipes.createMixing(
      'cobblemon:exp_candy_l',
      [
        'cobblemon:exp_candy_m',
        Fluid.of('create_enchantment_industry:experience', 105),
        Fluid.of('create:honey', 75)
      ]
    ).heated().id('kubejs:mixing/exp_candy_l_from_enchantment_xp');

    event.recipes.createMixing(
      'cobblemon:exp_candy_l',
      [
        'cobblemon:exp_candy_m',
        Fluid.of('sophisticatedcore:xp_still', 105),
        Fluid.of('create:honey', 75)
      ]
    ).heated().id('kubejs:mixing/exp_candy_l_from_xp_still');

    // XL Size: Extra large experience candy with massive ingredients
    event.recipes.createMixing(
      'cobblemon:exp_candy_xl',
      [
        'cobblemon:exp_candy_l',
        Fluid.of('create_enchantment_industry:experience', 120),
        Fluid.of('create:honey', 85)
      ]
    ).heated().id('kubejs:mixing/exp_candy_xl_from_enchantment_xp');

    event.recipes.createMixing(
      'cobblemon:exp_candy_xl',
      [
        'cobblemon:exp_candy_l',
        Fluid.of('sophisticatedcore:xp_still', 120),
        Fluid.of('create:honey', 85)
      ]
    ).heated().id('kubejs:mixing/exp_candy_xl_from_xp_still');

    // Rare Candy Creation Recipe (Create Mixing - Superheated)
    // Creates rare candy by superheating multiple XL experience candies with milk, honey, and paper
    // Provides instant level-up for Pokémon
    event.recipes.createMixing(
      'cobblemon:rare_candy',
      [
        '2x cobblemon:exp_candy_xl',
        Fluid.of('minecraft:milk', 100),
        Fluid.of('create:honey', 100),
        '2x minecraft:paper'
      ]
    ).superheated().id('kubejs:mixing/rare_candy');

    // Gem mapping for Tera Shard creation - maps element types to their corresponding gems
    const gemMap2 = {
      'fire': 'cobblemon:fire_gem',
      'water': 'cobblemon:water_gem',
      'grass': 'cobblemon:grass_gem',
      'electric': 'cobblemon:electric_gem',
      'ice': 'cobblemon:ice_gem',
      'fighting': 'cobblemon:fighting_gem',
      'poison': 'cobblemon:poison_gem',
      'ground': 'cobblemon:ground_gem',
      'flying': 'cobblemon:flying_gem',
      'psychic': 'cobblemon:psychic_gem',
      'bug': 'cobblemon:bug_gem',
      'rock': 'cobblemon:rock_gem',
      'ghost': 'cobblemon:ghost_gem',
      'dragon': 'cobblemon:dragon_gem',
      'dark': 'cobblemon:dark_gem',
      'steel': 'cobblemon:steel_gem',
      'fairy': 'cobblemon:fairy_gem'
    };

    // Normal Tera Shard Creation Recipe (Create Mixing - Superheated)
    // Creates basic Tera Shards by superheating charged certus quartz, regular quartz, and prismarine crystals
    // Used as base material for all other Tera Shard types
    event.recipes.createMixing(
      '3x mega_showdown:normal_tera_shard',
      [
        'ae2:charged_certus_quartz_crystal',
        'ae2:charged_certus_quartz_crystal',
        'minecraft:quartz',
        'minecraft:prismarine_crystals'
      ]
    ).superheated().id('kubejs:mixing/normal_tera_shard');

    // Type-Specific Tera Shard Creation (Create Mixing - Superheated)
    // Creates elemental Tera Shards by mixing normal Tera Shards with corresponding gems
    // Each type provides different battle advantages and effects
    Object.entries(gemMap2).forEach(([type, gem]) => {
      event.recipes.createMixing(
        `mega_showdown:${type}_tera_shard`,
        [
          'mega_showdown:normal_tera_shard',
          gem,
          'ae2:charged_certus_quartz_crystal'
        ]
      ).superheated().id(`kubejs:mixing/${type}_tera_shard`);
    });

    // Stellar Tera Shard Creation Recipe (Create Mixing - Superheated)
    // Creates the most powerful Tera Shard type using nether stars and massive amounts of materials
    // Provides ultimate battle advantages and effects
    event.recipes.createMixing(
      '25x mega_showdown:stellar_tera_shard',
      [
        '25x mega_showdown:normal_tera_shard',
        'minecraft:nether_star',
        '25x ae2:charged_certus_quartz_crystal'
      ]
    ).superheated().id('kubejs:mixing/stellar_tera_shard');

    // Dielectric Paste Creation Recipes (Create Mixing)
    // Creates dielectric paste for Powah energy systems using coal and clay
    // Heated version uses more coal for higher yield
    event.recipes.createMixing(
      '16x powah:dielectric_paste',
      [
        '2x minecraft:coal',
        'minecraft:clay_ball'
      ]
    ).heated().id('kubejs:mixing/dielectric_paste');

    event.recipes.createMixing(
      '48x powah:dielectric_paste',
      [
        '4x minecraft:coal',
        '3x minecraft:clay_ball'
      ]
    ).superheated().id('kubejs:mixing/dielectric_paste_superheated');


    // AE2 Printed Silicon Pressing Recipe (Create Pressing)
    // Creates printed silicon by pressing raw silicon
    // Used as base material for AE2 processors and circuitry
    event.recipes.createPressing(
      'ae2:printed_silicon',
      'ae2:silicon'
    ).id('kubejs:pressing/printed_silicon');

    // Cobblenav PokeNav Base Assembly (Create Sequenced Assembly)
    // Creates the base navigation device by assembling brass sheets with electronic components
    // Uses multiple steps including deploying components and final pressing
    event.recipes.createSequencedAssembly(
      ['cobblenav:pokenav_item_base'],
      'create:brass_sheet',
      [
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'create:electron_tube']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'create:precision_mechanism']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:electirizer']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:upgrade']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:poke_ball']),
        event.recipes.createPressing('create:brass_sheet', 'create:brass_sheet')
      ]
    ).transitionalItem('create:brass_sheet').loops(1);

    // Cobblenav FishingNav Assembly (Create Sequenced Assembly)
    // Creates fishing navigation device by upgrading the base PokeNav
    // Adds water gems and net ball components for fishing functionality
    event.recipes.createSequencedAssembly(
      ['cobblenav:fishingnav_item'],
      'cobblenav:pokenav_item_base',
      [
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:water_gem']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:water_gem']),
        event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'cobblemon:net_ball']),
        event.recipes.createPressing('create:brass_sheet', 'create:brass_sheet')
      ]
    ).transitionalItem('create:brass_sheet').loops(1);

    // Cobblenav PokeFinder Assembly (Create Sequenced Assembly)
    // Creates white PokeFinder by assembling copper sheets with electronic components
    // Uses copper ingots and upgrade components for type detection functionality
    event.recipes.createSequencedAssembly(
      ['cobblenav:pokefinder_item_white'],
      'create:copper_sheet',
      [
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'cobblemon:electirizer']),
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'cobblemon:upgrade']),
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'minecraft:copper_ingot']),
        event.recipes.createDeploying('create:copper_sheet', ['create:copper_sheet', 'minecraft:copper_ingot']),
        event.recipes.createPressing('create:copper_sheet', 'create:copper_sheet')
      ]
    ).transitionalItem('create:copper_sheet').loops(1);

    // AE2 Cell Component Assembly (Create Sequenced Assembly)
    // Creates various capacity cell components by assembling logic processors with additional components
    // Each tier requires more advanced materials and provides higher storage capacity

    // 1K Cell Component: Basic storage component
    event.recipes.createSequencedAssembly(
      ['ae2:cell_component_1k'],
      'ae2:logic_processor',
      [
        event.recipes.createDeploying('ae2:logic_processor', ['ae2:logic_processor', 'ae2:charged_certus_quartz_crystal']),
        event.recipes.createDeploying('ae2:logic_processor', ['ae2:logic_processor', 'minecraft:redstone']),
        event.recipes.createPressing('ae2:logic_processor', 'ae2:logic_processor')
      ]
    ).transitionalItem('ae2:logic_processor').loops(1).id('kubejs:sequenced/cell_component_1k');

    // 4K Cell Component: Small capacity upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:cell_component_4k'],
      'ae2:cell_component_1k',
      [
        event.recipes.createDeploying('ae2:cell_component_1k', ['ae2:cell_component_1k', 'ae2:printed_calculation_processor']),
        event.recipes.createDeploying('ae2:cell_component_1k', ['ae2:cell_component_1k', 'minecraft:redstone']),
        event.recipes.createPressing('ae2:cell_component_1k', 'ae2:cell_component_1k')
      ]
    ).transitionalItem('ae2:cell_component_1k').loops(1).id('kubejs:sequenced/cell_component_4k');

    // 16K Cell Component: Medium capacity upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:cell_component_16k'],
      'ae2:cell_component_4k',
      [
        event.recipes.createDeploying('ae2:cell_component_4k', ['ae2:cell_component_4k', 'ae2:printed_calculation_processor']),
        event.recipes.createDeploying('ae2:cell_component_4k', ['ae2:cell_component_4k', 'minecraft:glowstone_dust']),
        event.recipes.createPressing('ae2:cell_component_4k', 'ae2:cell_component_4k')
      ]
    ).transitionalItem('ae2:cell_component_4k').loops(1).id('kubejs:sequenced/cell_component_16k');

    // 64K Cell Component: Large capacity upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:cell_component_64k'],
      'ae2:cell_component_16k',
      [
        event.recipes.createDeploying('ae2:cell_component_16k', ['ae2:cell_component_16k', 'ae2:printed_calculation_processor']),
        event.recipes.createDeploying('ae2:cell_component_16k', ['ae2:cell_component_16k', 'minecraft:glowstone_dust']),
        event.recipes.createPressing('ae2:cell_component_16k', 'ae2:cell_component_16k')
      ]
    ).transitionalItem('ae2:cell_component_16k').loops(1).id('kubejs:sequenced/cell_component_64k');

    // 256K Cell Component: Maximum capacity component
    event.recipes.createSequencedAssembly(
      ['ae2:cell_component_256k'],
      'ae2:cell_component_64k',
      [
        event.recipes.createDeploying('ae2:cell_component_64k', ['ae2:cell_component_64k', 'ae2:printed_calculation_processor']),
        event.recipes.createDeploying('ae2:cell_component_64k', ['ae2:cell_component_64k', 'ae2:sky_dust']),
        event.recipes.createPressing('ae2:cell_component_64k', 'ae2:cell_component_64k')
      ]
    ).transitionalItem('ae2:cell_component_64k').loops(1).id('kubejs:sequenced/cell_component_256k');

    // AE2 Item Storage Cell Assembly (Create Sequenced Assembly)
    // Creates item storage cells by assembling cell housings with corresponding cell components
    // Each capacity provides different item storage capabilities

    // 1K Item Storage Cell: Basic item storage
    event.recipes.createSequencedAssembly(
      ['ae2:item_storage_cell_1k'],
      'ae2:item_cell_housing',
      [
        event.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_1k'])
      ]
    ).transitionalItem('ae2:item_cell_housing').loops(1).id('kubejs:sequenced/item_storage_cell_1k');

    // 4K Item Storage Cell: Small item storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:item_storage_cell_4k'],
      'ae2:item_cell_housing',
      [
        event.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_4k'])
      ]
    ).transitionalItem('ae2:item_cell_housing').loops(1).id('kubejs:sequenced/item_storage_cell_4k');

    // 16K Item Storage Cell: Medium item storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:item_storage_cell_16k'],
      'ae2:item_cell_housing',
      [
        event.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_16k'])
      ]
    ).transitionalItem('ae2:item_cell_housing').loops(1).id('kubejs:sequenced/item_storage_cell_16k');

    // 64K Item Storage Cell: Large item storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:item_storage_cell_64k'],
      'ae2:item_cell_housing',
      [
        event.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_64k'])
      ]
    ).transitionalItem('ae2:item_cell_housing').loops(1).id('kubejs:sequenced/item_storage_cell_64k');

    // 256K Item Storage Cell: Maximum item storage
    event.recipes.createSequencedAssembly(
      ['ae2:item_storage_cell_256k'],
      'ae2:item_cell_housing',
      [
        event.recipes.createDeploying('ae2:item_cell_housing', ['ae2:item_cell_housing', 'ae2:cell_component_256k'])
      ]
    ).transitionalItem('ae2:item_cell_housing').loops(1).id('kubejs:sequenced/item_storage_cell_256k');

    // AE2 Fluid Storage Cell Assembly (Create Sequenced Assembly)
    // Creates fluid storage cells by assembling fluid cell housings with corresponding cell components
    // Each capacity provides different fluid storage capabilities

    // 1K Fluid Storage Cell: Basic fluid storage
    event.recipes.createSequencedAssembly(
      ['ae2:fluid_storage_cell_1k'],
      'ae2:fluid_cell_housing',
      [
        event.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_1k'])
      ]
    ).transitionalItem('ae2:fluid_cell_housing').loops(1).id('kubejs:sequenced/fluid_storage_cell_1k');

    // 4K Fluid Storage Cell: Small fluid storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:fluid_storage_cell_4k'],
      'ae2:fluid_cell_housing',
      [
        event.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_4k'])
      ]
    ).transitionalItem('ae2:fluid_cell_housing').loops(1).id('kubejs:sequenced/fluid_storage_cell_4k');

    // 16K Fluid Storage Cell: Medium fluid storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:fluid_storage_cell_16k'],
      'ae2:fluid_cell_housing',
      [
        event.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_16k'])
      ]
    ).transitionalItem('ae2:fluid_cell_housing').loops(1).id('kubejs:sequenced/fluid_storage_cell_16k');

    // 64K Fluid Storage Cell: Large fluid storage upgrade
    event.recipes.createSequencedAssembly(
      ['ae2:fluid_storage_cell_64k'],
      'ae2:fluid_cell_housing',
      [
        event.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_64k'])
      ]
    ).transitionalItem('ae2:fluid_cell_housing').loops(1).id('kubejs:sequenced/fluid_storage_cell_64k');

    // 256K Fluid Storage Cell: Maximum fluid storage
    event.recipes.createSequencedAssembly(
      ['ae2:fluid_storage_cell_256k'],
      'ae2:fluid_cell_housing',
      [
        event.recipes.createDeploying('ae2:fluid_cell_housing', ['ae2:fluid_cell_housing', 'ae2:cell_component_256k'])
      ]
    ).transitionalItem('ae2:fluid_cell_housing').loops(1).id('kubejs:sequenced/fluid_storage_cell_256k');

    // AE2 Processor Assembly (Create Sequenced Assembly)
    // Creates advanced AE2 processors by assembling printed silicon with additional components
    // Each processor type serves different computational purposes

    // Logic Processor: Basic AE2 processor for logic operations
    event.recipes.createSequencedAssembly(
      ['ae2:logic_processor'],
      'ae2:printed_silicon',
      [
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'minecraft:redstone']),
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'ae2:printed_logic_processor'])
      ]
    ).transitionalItem('ae2:printed_silicon').loops(1).id('kubejs:sequenced/logic_processor');

    // Calculation Processor: Advanced processor for mathematical operations
    event.recipes.createSequencedAssembly(
      ['ae2:calculation_processor'],
      'ae2:printed_silicon',
      [
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'minecraft:redstone']),
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'ae2:printed_calculation_processor'])
      ]
    ).transitionalItem('ae2:printed_silicon').loops(1).id('kubejs:sequenced/calculation_processor');

    // Engineering Processor: High-end processor for complex engineering tasks
    event.recipes.createSequencedAssembly(
      ['ae2:engineering_processor'],
      'ae2:printed_silicon',
      [
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'minecraft:redstone']),
        event.recipes.createDeploying('ae2:printed_silicon', ['ae2:printed_silicon', 'ae2:printed_engineering_processor'])
      ]
    ).transitionalItem('ae2:printed_silicon').loops(1).id('kubejs:sequenced/engineering_processor');

    // Superheated Compacting Recipe: Nether Star Creation
    // Creates 2 Nether Stars using Mekanism teleportation cores, AE2 quantum entangled singularities, dragon breath, and nutritional paste
    // This is a high-tier recipe requiring advanced materials and superheated conditions
    event.recipes.createCompacting(
      '2x minecraft:nether_star',
      [
        '32x mekanism:teleportation_core',
        '8x ae2:quantum_entangled_singularity',
        Fluid.of('create_dragons_plus:dragon_breath', 2000),
        Fluid.of('mekanism:nutritional_paste', 2000)
      ]
    ).superheated().id('kubejs:compacting/nether_star_from_advanced_materials');

    // Superheated Mixing Recipe: Dragon Breath Creation
    // Creates 100mB of Dragon Breath by mixing nutritional paste and oxygen under superheated conditions
    // Used as input for the nether star compacting recipe
    event.recipes.createMixing(
      Fluid.of('create_dragons_plus:dragon_breath', 100),
      [
        Fluid.of('mekanism:nutritional_paste', 250),
        Fluid.of('mekanism:oxygen', 250)
      ]
    ).superheated().id('kubejs:mixing/dragon_breath_from_nutritional_paste_oxygen');

    // AE2 Quantum Entangled Singularity Compacting Recipe (Version 1)
    // Creates 2 Quantum Entangled Singularities by compacting AE2 Singularity with Ender Dust
    // Provides an alternative method for creating quantum entangled singularities
    event.recipes.createCompacting(
      '2x ae2:quantum_entangled_singularity',
      [
        'ae2:singularity',
        'ae2:ender_dust'
      ]
    ).id('kubejs:compacting/quantum_entangled_singularity_from_ender_dust');

    // AE2 Quantum Entangled Singularity Compacting Recipe (Version 2)
    // Creates 2 Quantum Entangled Singularities by compacting AE2 Singularity with Ender Pearl
    // Provides another alternative method for creating quantum entangled singularities
    event.recipes.createCompacting(
      '2x ae2:quantum_entangled_singularity',
      [
        'ae2:singularity',
        'minecraft:ender_pearl'
      ]
    ).id('kubejs:compacting/quantum_entangled_singularity_from_ender_pearl');

    // Cobblenav PokeFinder Color Variants (Shapeless Crafting)
    // Creates colored PokeFinder items by combining white PokeFinder with corresponding dyes
    // Each color variant helps locate specific Pokémon types or provides different navigation features
    const pokefinderColors = [
      'white','orange','magenta','light_blue','blue','red','green','lime',
      'black','gray','light_gray','pink','purple','yellow','brown','cyan'
    ];
    pokefinderColors.forEach(color => {
      event.recipes.shapeless(
        `cobblenav:pokefinder_item_${color}`,
        [
          `cobblenav:pokefinder_item_white`,
          `minecraft:${color}_dye`
        ]
      ).id(`kubejs:crafting/pokefinder_${color}_from_white`);
    });

    // Cobblenav PokeNav Color Variants (Shapeless Crafting)
    // Creates colored PokeNav items by combining base PokeNav with corresponding dyes
    // Each color variant provides different navigation features or interface themes
    const pokenavColors = [
      'orange','magenta','light_blue','blue','red','green','lime',
      'black','gray','light_gray','pink','purple','yellow','brown','cyan'
    ];
    pokenavColors.forEach(color => {
      event.recipes.shapeless(
        `cobblenav:pokenav_item_${color}`,
        [
          `cobblenav:pokenav_item_base`,
          `minecraft:${color}_dye`
        ]
      ).id(`kubejs:crafting/pokenav_${color}_from_base`);
    });

    // Cobblemon Apricorn Seed Color Variants (Shapeless Crafting)
    // Creates colored apricorn seeds by combining white apricorn with corresponding dyes
    // Each color variant is used for crafting different types of Poké Balls
    const apricornSeedColors = ['black','red','blue','green','yellow','pink'];
    apricornSeedColors.forEach(color => {
      event.recipes.shapeless(
        `cobblemon:${color}_apricorn_seed`,
        [
          `cobblemon:white_apricorn_seed`,
          `minecraft:${color}_dye`
        ]
      ).id(`kubejs:crafting/apricorn_seed_${color}_from_white`);
    });
});

