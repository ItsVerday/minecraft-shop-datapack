function enchantedBook(enchantment, level) {
    return `minecraft:enchanted_book{StoredEnchantments:[{id:"${enchantment}",lvl:${level}s}]}`;
}

/*
const products = {
    stone: {
        item: "minecraft:stone",
        display: "Stone",
        buy: 60,
        sell: 15
    },
    granite: {
        item: "minecraft:granite",
        display: "Granite",
        buy: 40,
        sell: 10
    },
    polished_granite: {
        item: "minecraft:polished_granite",
        display: "Polished Granite",
        buy: 40,
        sell: 10
    },
    diorite: {
        item: "minecraft:diorite",
        display: "Diorite",
        buy: 40,
        sell: 10
    },
    polished_diorite: {
        item: "minecraft:polished_diorite",
        display: "Polished Diorite",
        buy: 40,
        sell: 10
    },
    andesite: {
        item: "minecraft:andesite",
        display: "Andesite",
        buy: 40,
        sell: 10
    },
    polished_andesite: {
        item: "minecraft:polished_andesite",
        display: "Polished Andesite",
        buy: 40,
        sell: 10
    },
    dirt: {
        item: "minecraft:dirt",
        display: "Dirt",
        buy: 16,
        sell: 4
    },
    cobblestone: {
        item: "minecraft:cobblestone",
        display: "Cobblestone",
        buy: 28,
        sell: 7
    },
    oak_planks: {
        item: "minecraft:oak_planks",
        display: "Oak Planks",
        buy: 20,
        sell: 5
    },
    spruce_planks: {
        item: "minecraft:spruce_planks",
        display: "Spruce Planks",
        buy: 20,
        sell: 5
    },
    birch_planks: {
        item: "minecraft:birch_planks",
        display: "Birch Planks",
        buy: 20,
        sell: 5
    },
    jungle_planks: {
        item: "minecraft:jungle_planks",
        display: "Jungle Planks",
        buy: 20,
        sell: 5
    },
    acacia_planks: {
        item: "minecraft:acacia_planks",
        display: "Acacia Planks",
        buy: 20,
        sell: 5
    },
    dark_oak_planks: {
        item: "minecraft:dark_oak_planks",
        display: "Dark Oak Planks",
        buy: 20,
        sell: 5
    },
    crimson_planks: {
        item: "minecraft:crimson_planks",
        display: "Crimson Planks",
        buy: 40,
        sell: 10
    },
    warped_planks: {
        item: "minecraft:warped_planks",
        display: "Warped Planks",
        buy: 40,
        sell: 10
    },
    sand: {
        item: "minecraft:sand",
        display: "Sand",
        buy: 16,
        sell: 4
    },
    red_sand: {
        item: "minecraft:red_sand",
        display: "Red Sand",
        buy: 32,
        sell: 8
    },
    gravel: {
        item: "minecraft:gravel",
        display: "Gravel",
        buy: 20,
        sell: 5
    },
    oak_log: {
        item: "minecraft:oak_log",
        display: "Oak Log",
        buy: 80,
        sell: 20
    },
    spruce_log: {
        item: "minecraft:spruce_log",
        display: "Spruce Log",
        buy: 80,
        sell: 20
    },
    birch_log: {
        item: "minecraft:birch_log",
        display: "Birch Log",
        buy: 80,
        sell: 20
    },
    jungle_log: {
        item: "minecraft:jungle_log",
        display: "Jungle Log",
        buy: 80,
        sell: 20
    },
    acacia_log: {
        item: "minecraft:acacia_log",
        display: "Acacia Log",
        buy: 80,
        sell: 20
    },
    dark_oak_log: {
        item: "minecraft:dark_oak_log",
        display: "Dark Oak Log",
        buy: 80,
        sell: 20
    },
    crimson_stem: {
        item: "minecraft:crimson_stem",
        display: "Crimson Stem",
        buy: 160,
        sell: 40
    },
    warped_stem: {
        item: "minecraft:warped_stem",
        display: "Warped Stem",
        buy: 160,
        sell: 40
    },
    sandstone: {
        item: "minecraft:sandstone",
        display: "Sandstone",
        buy: 64,
        sell: 16
    },
    coal: {
        item: "minecraft:coal",
        display: "Coal",
        buy: 60,
        sell: 15
    },
    charcoal: {
        item: "minecraft:charcoal",
        display: "Charcoal",
        buy: 140,
        sell: 35
    },
    coal_ore: {
        item: "minecraft:coal_ore",
        display: "Coal Ore",
        sell: 25
    },
    coal_block: {
        item: "minecraft:coal_block",
        display: "Block of Coal",
        buy: 540,
        sell: 135
    },
    iron_ingot: {
        item: "minecraft:iron_ingot",
        display: "Iron Ingot",
        buy: 160,
        sell: 40
    },
    iron_ore: {
        item: "minecraft:iron_ore",
        display: "Iron Ore",
        buy: 96,
        sell: 24
    },
    iron_block: {
        item: "minecraft:iron_block",
        display: "Block of Iron",
        buy: 1440,
        sell: 360
    },
    gold_ingot: {
        item: "minecraft:gold_ingot",
        display: "Gold Ingot",
        buy: 600,
        sell: 150
    },
    gold_ore: {
        item: "minecraft:gold_ore",
        display: "Gold Ore",
        buy: 380,
        sell: 95
    },
    nether_gold_ore: {
        item: "minecraft:nether_gold_ore",
        display: "Nether Gold Ore",
        sell: 200
    },
    gold_block: {
        item: "minecraft:iron_block",
        display: "Block of Gold",
        buy: 5400,
        sell: 1350
    },
    lapis_lazuli: {
        item: "minecraft:lapis_lazuli",
        display: "Lapis Lazuli",
        buy: 40,
        sell: 10
    },
    lapis_lazuli_ore: {
        item: "minecraft:lapis_ore",
        display: "Lapis Lazuli Ore",
        sell: 100
    },
    lapis_lazuli_block: {
        item: "minecraft:lapis_block",
        display: "Lapis Lazuli Block",
        buy: 360,
        sell: 90
    },
    redstone: {
        item: "minecraft:redstone",
        display: "Redstone Dust",
        buy: 48,
        sell: 12
    },
    redstone_ore: {
        item: "minecraft:redstone_ore",
        display: "Redstone Ore",
        sell: 80
    },
    redstone_block: {
        item: "minecraft:redstone_block",
        display: "Block of Redstone",
        buy: 432,
        sell: 108
    },
    diamond: {
        item: "minecraft:diamond",
        display: "Diamond",
        buy: 6000,
        sell: 1500
    },
    diamond_ore: {
        item: "minecraft:diamond_ore",
        display: "Diamond Ore",
        sell: 3000
    },
    diamond_block: {
        item: "minecraft:diamond_block",
        display: "Block of Diamond",
        buy: 54000,
        sell: 13500
    },
    emerald: {
        item: "minecraft:emerald",
        display: "Emerald",
        buy: 400,
        sell: 100
    },
    emerald_ore: {
        item: "minecraft:emerald_ore",
        display: "Emerald Ore",
        sell: 4500
    },
    emerald_block: {
        item: "minecraft:emerald_block",
        display: "Block of Emerald",
        buy: 3600,
        sell: 900
    },
    quartz: {
        item: "minecraft:quartz",
        display: "Nether Quartz",
        buy: 320,
        sell: 80
    },
    nether_quartz_ore: {
        item: "minecraft:nether_quartz_ore",
        display: "Nether Quartz",
        sell: 200
    },
    ancient_debris: {
        item: "minecraft:ancient_debris",
        display: "Ancient Debris",
        buy: 30000,
        sell: 7500
    },
    netherite_scrap: {
        item: "minecraft:netherite_scrap",
        display: "Netherite Scrap",
        buy: 32000,
        sell: 8000
    },
    netherite_ingot: {
        item: "minecraft:netherite_ingot",
        display: "Netherite Ingot",
        buy: 130000,
        sell: 32500
    },
    netherite_block: {
        item: "minecraft:netherite_block",
        display: "Block of Netherite",
        buy: 1170000,
        sell: 292500
    },
    flint: {
        item: "minecraft:flint",
        display: "Flint",
        buy: 120,
        sell: 30
    },
    porkchop: {
        item: "minecraft:porkchop",
        display: "Raw Porkchop",
        buy: 120,
        sell: 30
    },
    cooked_porkchop: {
        item: "minecraft:cooked_porkchop",
        display: "Cooked Porkchop",
        buy: 220,
        sell: 55
    },
    beef: {
        item: "minecraft:beef",
        display: "Raw Beef",
        buy: 120,
        sell: 30
    },
    cooked_beef: {
        item: "minecraft:cooked_beef",
        display: "Steak",
        buy: 220,
        sell: 55
    },
    chicken: {
        item: "minecraft:chicken",
        display: "Raw Chicken",
        buy: 120,
        sell: 30
    },
    cooked_chicken: {
        item: "minecraft:cooked_chicken",
        display: "Cooked Chicken",
        buy: 220,
        sell: 55
    },
    mutton: {
        item: "minecraft:mutton",
        display: "Raw Mutton",
        buy: 120,
        sell: 30
    },
    cooked_mutton: {
        item: "minecraft:cooked_mutton",
        display: "Cooked Mutton",
        buy: 220,
        sell: 55
    },
    rabbit: {
        item: "minecraft:rabbit",
        display: "Raw Rabbit",
        buy: 120,
        sell: 30
    },
    cooked_rabbit: {
        item: "minecraft:cooked_rabbit",
        display: "Cooked Rabbit",
        buy: 220,
        sell: 55
    },
    wheat: {
        item: "minecraft:wheat",
        display: "Wheat",
        sell: 15
    },
    wheat_seeds: {
        item: "minecraft:wheat_seeds",
        display: "Wheat Seeds",
        sell: 7
    },
    beetroot: {
        item: "minecraft:beetroot",
        display: "Beetroot",
        sell: 12
    },
    beetroot_seeds: {
        item: "minecraft:beetroot_seeds",
        display: "Beetroot Seeds",
        sell: 6
    },
    carrot: {
        item: "minecraft:carrot",
        display: "Carrot",
        sell: 9
    },
    potato: {
        item: "minecraft:potato",
        display: "Potato",
        sell: 9
    },
    poisonous_potato: {
        item: "minecraft:poisonous_potato",
        display: "Poisonous Potato",
        sell: 3
    },
    baked_potato: {
        item: "minecraft:baked_potato",
        display: "Baked Potato",
        sell: 20
    },
    melon_slice: {
        item: "minecraft:melon_slice",
        display: "Melon Slice",
        sell: 10
    },
    melon_seeds: {
        item: "minecraft:melon_seeds",
        display: "Melon Seeds",
        sell: 10
    },
    melon: {
        item: "minecraft:melon",
        display: "Melon",
        sell: 90
    },
    pumpkin_seeds: {
        item: "minecraft:pumpkin_seeds",
        display: "Pumpkin Seeds",
        sell: 15
    },
    pumpkin: {
        item: "minecraft:pumpkin",
        display: "Pumpkin",
        sell: 30
    },
    bamboo: {
        item: "minecraft:bamboo",
        display: "Bamboo",
        sell: 20
    },
    cocoa_beans: {
        item: "minecraft:cocoa_beans",
        display: "Cocoa Beans",
        sell: 13
    },
    sugar_cane: {
        item: "minecraft:sugar_cane",
        display: "Sugar Cane",
        buy: 44,
        sell: 11
    },
    sweet_berries: {
        item: "minecraft:sweet_berries",
        display: "Sweet Berries",
        sell: 10
    },
    cactus: {
        item: "minecraft:cactus",
        display: "Cactus",
        sell: 9
    },
    brown_mushroom: {
        item: "minecraft:brown_mushroom",
        display: "Brown Mushroom",
        sell: 12
    },
    red_mushroom: {
        item: "minecraft:red_mushroom",
        display: "Red Mushroom",
        sell: 12
    },
    kelp: {
        item: "minecraft:kelp",
        display: "Kelp",
        sell: 5
    },
    dried_kelp: {
        item: "minecraft:dried_kelp",
        display: "Dried Kelp",
        sell: 10
    },
    sea_pickle: {
        item: "minecraft:sea_pickle",
        display: "Sea Pickle",
        sell: 25
    },
    nether_wart: {
        item: "minecraft:nether_wart",
        display: "Nether Wart",
        sell: 20
    },
    chorus_fruit: {
        item: "minecraft:chorus_fruit",
        display: "Chorus Fruit",
        sell: 45
    },
    crimson_fungus: {
        item: "minecraft:crimson_fungus",
        display: "Crimson Fungus",
        sell: 30
    },
    warped_fungus: {
        item: "minecraft:warped_fungus",
        display: "Warped Fungus",
        sell: 30
    },
    rotten_flesh: {
        item: "minecraft:rotten_flesh",
        display: "Rotten Flesh",
        buy: 80,
        sell: 20
    },
    string: {
        item: "minecraft:string",
        display: "String",
        buy: 100,
        sell: 25
    },
    spider_eye: {
        item: "minecraft:spider_eye",
        display: "Spider Eye",
        buy: 160,
        sell: 40
    },
    bone: {
        item: "minecraft:bone",
        display: "Bone",
        buy: 120,
        sell: 30
    },
    gunpowder: {
        item: "minecraft:gunpowder",
        display: "Gunpowder",
        buy: 100,
        sell: 25
    },
    slimeball: {
        item: "minecraft:slimeball",
        display: "Slimeball",
        buy: 240,
        sell: 60
    },
    ender_pearl: {
        item: "minecraft:ender_pearl",
        display: "Ender Pearl",
        buy: 400,
        sell: 100
    },
    blaze_rod: {
        item: "minecraft:blaze_rod",
        display: "Blaze Rod",
        buy: 500,
        sell: 125
    },
    ghast_tear: {
        item: "minecraft:ghast_tear",
        display: "Ghast Tear",
        buy: 400,
        sell: 100
    },
    magma_cream: {
        item: "minecraft:magma_cream",
        display: "Magma Cream",
        buy: 240,
        sell: 60
    },
    feather: {
        item: "minecraft:feather",
        display: "Feather",
        buy: 40,
        sell: 10
    },
    leather: {
        item: "minecraft:leather",
        display: "Leather",
        buy: 120,
        sell: 30
    },
    cod: {
        item: "minecraft:cod",
        display: "Raw Cod",
        buy: 200,
        sell: 50
    },
    cooked_cod: {
        item: "minecraft:cooked_cod",
        display: "Cooked Cod",
        buy: 360,
        sell: 90
    },
    salmon: {
        item: "minecraft:salmon",
        display: "Raw Salmon",
        buy: 400,
        sell: 100
    },
    cooked_salmon: {
        item: "minecraft:cooked_salmon",
        display: "Cooked Salmon",
        buy: 720,
        sell: 180
    },
    pufferfish: {
        item: "minecraft:pufferfish",
        display: "Pufferfish",
        buy: 600,
        sell: 150
    },
    tropical_fish: {
        item: "minecraft:tropical_fish",
        display: "Tropical Fish",
        buy: 2400,
        sell: 600
    },
    protection_book: {
        item: enchantedBook("minecraft:protection", 3),
        display: "Protection III Book",
        buy: 7000
    },
    fire_protection_book: {
        item: enchantedBook("minecraft:fire_protection", 3),
        display: "Fire Protection III Book",
        buy: 3500
    },
    feather_falling_book: {
        item: enchantedBook("minecraft:feather_falling", 3),
        display: "Feather Falling III Book",
        buy: 9000
    },
    blast_protection_book: {
        item: enchantedBook("minecraft:blast_protection", 3),
        display: "Blast Protection III Book",
        buy: 4500
    },
    projectile_protection_book: {
        item: enchantedBook("minecraft:projectile_protection", 3),
        display: "Projectile Protection III Book",
        buy: 5000
    },
    respiration_book: {
        item: enchantedBook("minecraft:respiration", 2),
        display: "Respiration II Book",
        buy: 4500
    },
    aqua_affinity_book: {
        item: enchantedBook("minecraft:aqua_affinity", 1),
        display: "Aqua Affinity Book",
        buy: 10000
    },
    thorns_book: {
        item: enchantedBook("minecraft:thorns", 2),
        display: "Thorns II Book",
        buy: 8500
    },
    depth_strider_book: {
        item: enchantedBook("minecraft:depth_strider", 2),
        display: "Depth Strider II Book",
        buy: 10000
    },
    frost_walker_book: {
        item: enchantedBook("minecraft:frost_walker", 1),
        display: "Frost Walker I Book",
        buy: 4000
    },
    sharpness_book: {
        item: enchantedBook("minecraft:sharpness", 3),
        display: "Sharpness III Book",
        buy: 7500
    },
    smite_book: {
        item: enchantedBook("minecraft:smite", 4),
        display: "Smite IV Book",
        buy: 6000
    },
    bane_of_arthropods_book: {
        item: enchantedBook("minecraft:bane_of_arthropods", 4),
        display: "Bane of Arthropods IV Book",
        buy: 6000
    },
    knockback_book: {
        item: enchantedBook("minecraft:knockback", 1),
        display: "Knockback I Book",
        buy: 5000
    },
    fire_aspect_book: {
        item: enchantedBook("minecraft:fire_aspect", 1),
        display: "Fire Aspect I Book",
        buy: 7500
    },
    looting_book: {
        item: enchantedBook("minecraft:looting", 2),
        display: "Looting II Book",
        buy: 9000
    },
    sweeping_edge_book: {
        item: enchantedBook("minecraft:sweeping", 2),
        display: "Sweeping Edge II Book",
        buy: 7000
    },
    efficiency_book: {
        item: enchantedBook("minecraft:efficiency", 3),
        display: "Efficiency III Book",
        buy: 6000
    },
    silk_touch_book: {
        item: enchantedBook("minecraft:silk_touch", 1),
        display: "Silk Touch Book",
        buy: 18000
    },
    unbreaking_book: {
        item: enchantedBook("minecraft:unbreaking", 1),
        display: "Unbreaking I Book",
        buy: 7000
    },
    fortune_book: {
        item: enchantedBook("minecraft:fortune", 1),
        display: "Fortune I Book",
        buy: 8000
    },
    power_book: {
        item: enchantedBook("minecraft:power", 3),
        display: "Power III Book",
        buy: 6500
    },
    punch_book: {
        item: enchantedBook("minecraft:punch", 1),
        display: "Punch I Book",
        buy: 5000
    },
    flame_book: {
        item: enchantedBook("minecraft:flame", 1),
        display: "Flame Book",
        buy: 17000
    },
    infinity_book: {
        item: enchantedBook("minecraft:infinity", 1),
        display: "Infinity Book",
        buy: 25000
    },
    luck_of_the_sea_book: {
        item: enchantedBook("minecraft:luck_of_the_sea", 1),
        display: "Luck of the Sea I Book",
        buy: 6000
    },
    lure_book: {
        item: enchantedBook("minecraft:lure", 2),
        display: "Lure II Book",
        buy: 7000
    },
    loyalty_book: {
        item: enchantedBook("minecraft:loyalty", 2),
        display: "Loyalty II Book",
        buy: 9000
    },
    impaling_book: {
        item: enchantedBook("minecraft:impaling", 3),
        display: "Impaling III Book",
        buy: 5000
    },
    riptide_book: {
        item: enchantedBook("minecraft:riptide", 1),
        display: "Riptide I Book",
        buy: 7000
    },
    channeling_book: {
        item: enchantedBook("minecraft:channeling", 1),
        display: "Channeling Book",
        buy: 9000
    },
    multishot_book: {
        item: enchantedBook("minecraft:multishot", 1),
        display: "Multishot Book",
        buy: 12000
    },
    quick_charge_book: {
        item: enchantedBook("minecraft:quick_charge", 1),
        display: "Quick Charge I Book",
        buy: 7500
    },
    frost_walker_book: {
        item: enchantedBook("minecraft:piercing", 3),
        display: "Piercing III Book",
        buy: 6000
    }
};
*/

function generateDatapack(products, status) {
    let triggers = [];
    let triggerID = 0;
    function addTrigger(command) {
        let id = triggerID++;
        let data = {
            name: `vs_t${id.toString(16).padStart(4, "0")}`,
            id, command
        };

        triggers.push(data);

        return data.name;
    }

    status("Creating basic datapack files...");
    const datapack = new JSZip();

    datapack.file("pack.mcmeta", `{
        "pack": {
            "pack_format": 5,
            "description": "Valgo's Shop - Sell and buy items for coins!"
        }
    }`);

    datapack.file("data/minecraft/tags/functions/load.json", `{
        "values": [
            "valgos_shop:init"
        ]
    }`);

    datapack.file("data/minecraft/tags/functions/tick.json", `{
        "values": [
            "valgos_shop:tick"
        ]
    }`);

    datapack.file("data/valgos_shop/functions/chat_line.mcfunction", `tellraw @p ["",{"text":"                                                                                 ","strikethrough":true,"color":"dark_gray"}]`);

    datapack.file("data/valgos_shop/functions/buy_sell/give_bronze_coins.mcfunction", `execute if score @p vs_coins matches 1.. run function valgos_shop:get_coins/bronze
    execute if score @p vs_coins matches 1.. run scoreboard players remove @p vs_coins 1
    execute if score @p vs_coins matches 1.. run function valgos_shop:buy_sell/give_bronze_coins`);

    datapack.file("data/valgos_shop/functions/buy_sell/give_silver_coins.mcfunction", `execute if score @p vs_coins matches 64.. run function valgos_shop:get_coins/silver
    execute if score @p vs_coins matches 64.. run scoreboard players remove @p vs_coins 64
    execute if score @p vs_coins matches 64.. run function valgos_shop:buy_sell/give_silver_coins`);

    datapack.file("data/valgos_shop/functions/buy_sell/give_gold_coins.mcfunction", `execute if score @p vs_coins matches 4096.. run function valgos_shop:get_coins/gold
    execute if score @p vs_coins matches 4096.. run scoreboard players remove @p vs_coins 4096
    execute if score @p vs_coins matches 4096.. run function valgos_shop:buy_sell/give_gold_coins`);

    datapack.file("data/valgos_shop/functions/buy_sell/give_platinum_coins.mcfunction", `execute if score @p vs_coins matches 262144.. run function valgos_shop:get_coins/platinum
    execute if score @p vs_coins matches 262144.. run scoreboard players remove @p vs_coins 262144
    execute if score @p vs_coins matches 262144.. run function valgos_shop:buy_sell/give_platinum_coins`);

    datapack.file("data/valgos_shop/functions/buy_sell/give_coins.mcfunction", `function valgos_shop:buy_sell/give_platinum_coins
    function valgos_shop:buy_sell/give_gold_coins
    function valgos_shop:buy_sell/give_silver_coins
    function valgos_shop:buy_sell/give_bronze_coins`);

    datapack.file("data/valgos_shop/functions/buy_sell/take_coins.mcfunction", `execute as @p store result score @p vs_takecoins run clear @p minecraft:player_head{coin:"bronze"}
    scoreboard players operation @p vs_takecoins *= #bronze_value vs_coins
    scoreboard players operation @p vs_coins += @p vs_takecoins
    scoreboard players set @p vs_takecoins 0

    execute as @p store result score @p vs_takecoins run clear @p minecraft:player_head{coin:"silver"}
    scoreboard players operation @p vs_takecoins *= #silver_value vs_coins
    scoreboard players operation @p vs_coins += @p vs_takecoins
    scoreboard players set @p vs_takecoins 0

    execute as @p store result score @p vs_takecoins run clear @p minecraft:player_head{coin:"gold"}
    scoreboard players operation @p vs_takecoins *= #gold_value vs_coins
    scoreboard players operation @p vs_coins += @p vs_takecoins
    scoreboard players set @p vs_takecoins 0

    execute as @p store result score @p vs_takecoins run clear @p minecraft:player_head{coin:"platinum"}
    scoreboard players operation @p vs_takecoins *= #platinum_value vs_coins
    scoreboard players operation @p vs_coins += @p vs_takecoins
    scoreboard players set @p vs_takecoins 0`);

    datapack.file("data/valgos_shop/functions/get_coins/bronze.mcfunction", `give @p minecraft:player_head{coin:"bronze",display:{Name:"{\\\"text\\\":\\\"Bronze Coin\\\",\\\"color\\\":\\\"#b58138\\\",\\\"italic\\\":false}",Lore:["{\\\"text\\\":\\\"A coin worth 1¢\\\",\\\"italic\\\":false,\\\"color\\\":\\\"gray\\\"}"]},SkullOwner:{Id:[I;-283256899,1417429749,-2043658424,436637202],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWI2NTE1YmFjNGM3N2E1MWM2ZDM3NmRhYzIzMzI3ODY3NTUwZTdkYmFlZDc2YmM0ZTdkZDIzMzY1N2RiYTNiNSJ9fX0="}]}}} 1`);
    datapack.file("data/valgos_shop/functions/get_coins/silver.mcfunction", `give @p minecraft:player_head{coin:"silver",display:{Name:"{\\\"text\\\":\\\"Silver Coin\\\",\\\"color\\\":\\\"#aaaaaa\\\",\\\"italic\\\":false}",Lore:["{\\\"text\\\":\\\"A coin worth 64¢\\\",\\\"italic\\\":false,\\\"color\\\":\\\"gray\\\"}"]},SkullOwner:{Id:[I;-2024803990,844710694,-1683350292,761969152],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmIxOTZjNzgzMjllYjM0YWZlMzVkZWU0MjgzZGZiYzdlOTBhYTI5OThjY2E0OWNlZTY4OTE3YWJiMGYxMzViZCJ9fX0="}]}}} 1`);
    datapack.file("data/valgos_shop/functions/get_coins/gold.mcfunction", `give @p minecraft:player_head{coin:"gold",display:{Name:"{\\\"text\\\":\\\"Gold Coin\\\",\\\"color\\\":\\\"#f5c422\\\",\\\"italic\\\":false}",Lore:["{\\\"text\\\":\\\"A coin worth 4096¢\\\",\\\"italic\\\":false,\\\"color\\\":\\\"gray\\\"}"]},SkullOwner:{Id:[I;1181195166,753683234,-1947310280,-1200650790],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2M2ZDdjM2EzMDU2MTkwYTAyMTU4MTgzYjUzNmI5YmQzNDQxOWE2YmQzYTc5ZjliYmMwZjliMTZlNGVhMzVjZCJ9fX0="}]}}} 1`);
    datapack.file("data/valgos_shop/functions/get_coins/platinum.mcfunction", `give @p minecraft:player_head{coin:"platinum",display:{Name:"{\\\"text\\\":\\\"Platinum Coin\\\",\\\"color\\\":\\\"#9ebfd9\\\",\\\"italic\\\":false}",Lore:["{\\\"text\\\":\\\"A coin worth 262144¢\\\",\\\"italic\\\":false,\\\"color\\\":\\\"gray\\\"}"]},SkullOwner:{Id:[I;1627634298,1652707196,-1691369731,-1969595910],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTdhYzk4YzY4MTA3OTllNWU2OWJhMmJkM2U2ZjQ2YThiM2E2NzY2YjM4MzZhZGJjZmNmNGYxMjY1ZTVhOWYwOSJ9fX0="}]}}} 1`);

    let pageProducts = [];
    let pageSize = 10;
    let count = Object.keys(products).length;
    let pageCount = Math.ceil(count / pageSize);

    status("Adding products to datapack...");
    for (let id in products) {
        status(`Adding product ${id} to datapack...`);
        pageProducts.push(id);
        const { item, buy, sell, display } = products[id];
        
        let backButton = `/trigger ${addTrigger(`function valgos_shop:pages/${Math.floor((pageProducts.length - 1) / pageSize) + 1}`)}`;
        let menuText = `function valgos_shop:chat_line
    tellraw @p ["",{"text":"« Back                    ","bold":true,"color":"red","clickEvent":{"action":"run_command","value":"${backButton}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Click to go back","color":"red"}]}},{"text":"${display}","underlined":true,"color":"aqua"}]
    `;

        if (buy) {
            const folder = datapack.folder(`data/valgos_shop/functions/products/${id}/buy`);
            folder.file("buy.mcfunction", `function valgos_shop:buy_sell/take_coins
    scoreboard players set @p vs_success 0

    scoreboard players set #product_value vs_coins ${buy}
    function valgos_shop:products/${id}/buy/buy_recursive_test_count

    execute as @p if score @p vs_success matches 1 run playsound minecraft:block.note_block.hat ambient @p ~ ~10 ~
    execute as @p if score @p vs_success matches 0 run playsound minecraft:block.anvil.land ambient @p ~ ~14 ~

    function valgos_shop:buy_sell/give_coins`);
            
            folder.file("buy_recursive.mcfunction", `execute as @p if score @p vs_coins >= #product_value vs_coins run give @p ${item} 1
    execute as @p if score @p vs_coins >= #product_value vs_coins run scoreboard players remove @p vs_bscount 1
    execute as @p if score @p vs_coins >= #product_value vs_coins run scoreboard players set @p vs_success 1
    execute as @p if score @p vs_coins >= #product_value vs_coins run scoreboard players operation @p vs_coins -= #product_value vs_coins
    execute as @p if score @p vs_coins >= #product_value vs_coins run function valgos_shop:products/${id}/buy/buy_recursive_test_count`);

            folder.file("buy_recursive_test_count.mcfunction", `execute if score @p vs_bscount matches 1.. run function valgos_shop:products/${id}/buy/buy_recursive`);
            
            folder.file("buy_1.mcfunction", `scoreboard players set @p vs_bscount 1
    function valgos_shop:products/${id}/buy/buy`);
            let buy_1 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/buy/buy_1`)}`;
            folder.file("buy_5.mcfunction", `scoreboard players set @p vs_bscount 5
    function valgos_shop:products/${id}/buy/buy`);
            let buy_5 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/buy/buy_5`)}`;
            folder.file("buy_16.mcfunction", `scoreboard players set @p vs_bscount 16
    function valgos_shop:products/${id}/buy/buy`);
            let buy_16 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/buy/buy_16`)}`;
            folder.file("buy_64.mcfunction", `scoreboard players set @p vs_bscount 64
    function valgos_shop:products/${id}/buy/buy`);
            let buy_64 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/buy/buy_64`)}`;
            folder.file("buy_256.mcfunction", `scoreboard players set @p vs_bscount 256
    function valgos_shop:products/${id}/buy/buy`);
            let buy_256 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/buy/buy_256`)}`;
            menuText += `tellraw @p ["",{"text":"Buy: ${buy}¢/ea ","color":"green"},{"text":"[Buy 1] ","color":"green","clickEvent":{"action":"run_command","value":"${buy_1}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Costs ${buy * 1}¢ total","color":"green"}]}},{"text":"[Buy 5] ","color":"green","clickEvent":{"action":"run_command","value":"${buy_5}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Costs ${buy * 5}¢ total","color":"green"}]}},{"text":"[Buy 16] ","color":"green","clickEvent":{"action":"run_command","value":"${buy_16}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Costs ${buy * 16}¢ total","color":"green"}]}},{"text":"[Buy 64] ","color":"green","clickEvent":{"action":"run_command","value":"${buy_64}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Costs ${buy * 64}¢ total","color":"green"}]}},{"text":"[Buy 256] ","color":"green","clickEvent":{"action":"run_command","value":"${buy_256}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Costs ${buy * 256}¢ total","color":"green"}]}}]
    `;
        }

        if (sell) {
            const folder = datapack.folder(`data/valgos_shop/functions/products/${id}/sell`);
            folder.file("sell.mcfunction", `execute as @p if score @p vs_issellall matches 0 run function valgos_shop:buy_sell/take_coins
    scoreboard players set @p vs_success 0

    execute as @p store result score @p vs_productcount run clear @p ${item} 0
    execute as @p if score @p vs_productcount < @p vs_bscount run scoreboard players operation @p vs_bscount = @p vs_productcount
    execute as @p if score @p vs_bscount matches 1.. run scoreboard players set @p vs_success 1

    scoreboard players set #product_value vs_coins ${sell}
    scoreboard players operation #product_value vs_coins *= @p vs_bscount
    scoreboard players operation @p vs_coins += #product_value vs_coins

    function valgos_shop:products/${id}/sell/sell_take

    execute as @p if score @p vs_issellall matches 0 run execute as @p if score @p vs_success matches 1 run playsound minecraft:block.note_block.hat ambient @p ~ ~10 ~
    execute as @p if score @p vs_issellall matches 0 run execute as @p if score @p vs_success matches 0 run playsound minecraft:block.anvil.land ambient @p ~ ~14 ~

    execute as @p if score @p vs_issellall matches 0 run function valgos_shop:buy_sell/give_coins`);

            folder.file("sell_take.mcfunction", `execute as @p if score @p vs_bscount matches 1.. run clear @p ${item} 1
    execute as @p if score @p vs_bscount matches 1.. run scoreboard players remove @p vs_bscount 1
    execute as @p if score @p vs_bscount matches 1.. run function valgos_shop:products/${id}/sell/sell_take`);

            folder.file("sell_1.mcfunction", `scoreboard players set @p vs_bscount 1
    function valgos_shop:products/${id}/sell/sell`);
            let sell_1 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_1`)}`;
            folder.file("sell_5.mcfunction", `scoreboard players set @p vs_bscount 5
    function valgos_shop:products/${id}/sell/sell`);
            let sell_5 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_5`)}`;
            folder.file("sell_16.mcfunction", `scoreboard players set @p vs_bscount 16
    function valgos_shop:products/${id}/sell/sell`);
            let sell_16 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_16`)}`;
            folder.file("sell_64.mcfunction", `scoreboard players set @p vs_bscount 64
    function valgos_shop:products/${id}/sell/sell`);
            let sell_64 = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_64`)}`;
            folder.file("sell_all.mcfunction", `scoreboard players set @p vs_bscount 99999
    function valgos_shop:products/${id}/sell/sell`);
            let sell_all = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_all`)}`;
            menuText += `tellraw @p ["",{"text":"Sell: ${sell}¢/ea ","color":"gold"},{"text":"[Sell 1] ","color":"gold","clickEvent":{"action":"run_command","value":"${sell_1}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Pays ${sell * 1}¢ total","color":"gold"}]}},{"text":"[Sell 5] ","color":"gold","clickEvent":{"action":"run_command","value":"${sell_5}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Pays ${sell * 5}¢ total","color":"gold"}]}},{"text":"[Sell 16] ","color":"gold","clickEvent":{"action":"run_command","value":"${sell_16}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Pays ${sell * 16}¢ total","color":"gold"}]}},{"text":"[Sell 64] ","color":"gold","clickEvent":{"action":"run_command","value":"${sell_64}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Pays ${sell * 64}¢ total","color":"gold"}]}},{"text":"[Sell All] ","color":"gold","clickEvent":{"action":"run_command","value":"${sell_all}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Pays ${sell}¢ per item","color":"gold"}]}}]
    `;
        }

        menuText += `function valgos_shop:chat_line`;
        datapack.file(`data/valgos_shop/functions/products/${id}/menu.mcfunction`, menuText);
    }

    status("Adding shop pages to datapack...");
    for (let page = 0; page < pageCount; page++) {
        status(`Adding shop page ${page + 1} to datapack...`);
        const canGoBack = page > 0;
        const canGoForward = page < pageCount - 1;

        let pageText = `function valgos_shop:chat_line
    tellraw @p ["",{"text":"« Previous","bold":true,"color":"${canGoBack ? "yellow" : "gray"}","clickEvent":${canGoBack ? `{"action":"run_command","value":"/trigger ${addTrigger(`function valgos_shop:pages/${page}`)}"}` : "{}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Go back a page","color":"yellow"}]}},{"text":"                   Page ${page + 1}/${pageCount}                   ","color":"blue"},{"text":"Next »","bold":true,"color":"${canGoForward ? "yellow" : "gray"}","clickEvent":${canGoForward ? `{"action":"run_command","value":"/trigger ${addTrigger(`function valgos_shop:pages/${page + 2}`)}"}` : "{}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Go forward a page","color":"yellow"}]}}]
    `;

        for (let i = 0; i < pageSize; i++) {
            let id = pageProducts[i + page * pageSize];
            if (id === undefined) {
                break;
            }

            const { buy, sell, display } = products[id];

            let prices = `{"text":"${buy}¢/ea","color":"green"},{"text":" / ","color":"gray"},{"text":"${sell}¢/ea","color":"gold"},`;

            if (buy !== undefined && sell === undefined) {
                prices = `{"text":"${buy}¢/ea","color":"green"},`;
            }

            if (buy === undefined && sell !== undefined) {
                prices = `{"text":"${sell}¢/ea","color":"gold"},`;
            }

            let openMenu = `/trigger ${addTrigger(`function valgos_shop:products/${id}/menu`)}`;
            if (sell) {
                let quickSellAll = `/trigger ${addTrigger(`function valgos_shop:products/${id}/sell/sell_all`)}`;
                pageText += `tellraw @p ["",{"text":"${display}","underlined":true,"color":"aqua","clickEvent":{"action":"run_command","value":"${openMenu}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Click to view this product","color":"aqua"}]}},{"text":" - ","color":"gray"},${prices}{"text":"  [View Shop]","color":"yellow","clickEvent":{"action":"run_command","value":"${openMenu}"}},{"text":" [Quick Sell]","color":"gold","clickEvent":{"action":"run_command","value":"${quickSellAll}"}}]
    `;
            } else {
                pageText += `tellraw @p ["",{"text":"${display}","underlined":true,"color":"aqua","clickEvent":{"action":"run_command","value":"${openMenu}"},"hoverEvent":{"action":"show_text","contents":["",{"text":"Click to view this product","color":"aqua"}]}},{"text":" - ","color":"gray"},${prices}{"text":"  [View Shop]","color":"yellow","clickEvent":{"action":"run_command","value":"${openMenu}"}}]
    `;
            }
        }

        pageText += `function valgos_shop:chat_line`;

        datapack.file(`data/valgos_shop/functions/pages/${page + 1}.mcfunction`, pageText);
    }

    status(`Adding last files to datapack...`);
    datapack.file("data/valgos_shop/functions/init.mcfunction", `scoreboard objectives add vs_coins dummy
    scoreboard objectives add vs_takecoins dummy
    scoreboard objectives add vs_bscount dummy
    scoreboard objectives add vs_productcount dummy
    scoreboard objectives add vs_success dummy
    scoreboard objectives add vs_issellall dummy
    scoreboard objectives add vs_sellallinit dummy
    scoreboard objectives add vs_sellallprofit dummy

    scoreboard objectives add shop trigger
    scoreboard players enable @a shop

    scoreboard objectives add sellall trigger
    scoreboard players enable @a sellall

    scoreboard players set #bronze_value vs_coins 1
    scoreboard players set #silver_value vs_coins 64
    scoreboard players set #gold_value vs_coins 4096
    scoreboard players set #platinum_value vs_coins 262144

    gamerule sendCommandFeedback false

    ${triggers.map(({ name }) => 
    `scoreboard objectives add ${name} trigger
    scoreboard players enable @a ${name}`).join(`
    `)}`);

    datapack.file("data/valgos_shop/functions/tick.mcfunction", `scoreboard players enable @a vs_coins
    scoreboard players enable @a vs_takecoins
    scoreboard players enable @a vs_bscount
    scoreboard players enable @a vs_productcount
    scoreboard players enable @a vs_success
    scoreboard players enable @a vs_issellall
    scoreboard players enable @a vs_sellallinit
    scoreboard players enable @a vs_sellallprofit

    scoreboard players enable @a shop
    scoreboard players enable @a sellall

    execute as @a[scores={shop=1..}] run function valgos_shop:pages/1
    execute as @a[scores={shop=1..}] run scoreboard players reset @p shop

    execute as @a[scores={sellall=1..}] run function valgos_shop:buy_sell/sellall
    execute as @a[scores={sellall=1..}] run scoreboard players reset @p sellall

    ${triggers.map(({ name, command }) =>
    `scoreboard players enable @a ${name}
    execute as @a[scores={${name}=1..}] run ${command}
    execute as @a[scores={${name}=1..}] run scoreboard players reset @p ${name}`).join(`
    `)}`);

    datapack.file("data/valgos_shop/functions/buy_sell/sellall.mcfunction", `
    scoreboard players set @p vs_issellall 1
    function valgos_shop:buy_sell/take_coins
    scoreboard players operation @p vs_sellallinit = @p vs_coins

    ${Object.keys(products).map(id => `function valgos_shop:products/${id}/sell/sell_all`).join(`
    `)}

    scoreboard players operation @p vs_sellallprofit = @p vs_coins
    function valgos_shop:buy_sell/give_coins
    scoreboard players operation @p vs_sellallprofit -= @p vs_sellallinit
    tellraw @p ["",{"text":"You sold your items for a total of ","color":"gold"},{"score":{"name":"@p","objective":"vs_sellallprofit"},"color":"gold"},{"text":"¢!","color":"gold"}]

    execute as @p if score @p vs_sellallprofit matches 1.. run playsound minecraft:block.note_block.hat ambient @p ~ ~10 ~
    execute as @p if score @p vs_sellallprofit matches 0 run playsound minecraft:block.anvil.land ambient @p ~ ~14 ~

    scoreboard players set @p vs_issellall 0`);

    status(`Compressing datapack... It will be automatically downloaded when done :)`);
    datapack.generateAsync({type: "blob"}).then(content => saveAs(content, "Valgo's Shop.zip"));
}

let app = new Vue({
    el: "#app",
    data: {
        addID: "",
        status: "Download pack...",
        products: [
            {
                id: "cobblestone",
                item: "minecraft:cobblestone",
                display: "Cobblestone",
                buy: 5,
                sell: 1
            },
            {
                id: "dirt",
                item: "minecraft:dirt",
                display: "Dirt",
                buy: 5,
                sell: 1
            }
        ]
    },
    methods: {
        deleteProduct: function(productID) {
            let product = this.products.filter(({ id }) => productID === id)[0];
            if (product) {
                let index = this.products.indexOf(product);
                this.products.splice(index, 1);
            }
        },
        addProduct: function(productID) {
            this.products.push({
                id: productID,
                item: `minecraft:${productID}`,
                display: productID,
                buy: "",
                sell: ""
            });
        },
        downloadPack: function() {
            let products = {};
            for (let product of this.products) {
                products[product.id] = product;
            }

            generateDatapack(products, message => {
                this.status = message;
            });
        }
    }
});