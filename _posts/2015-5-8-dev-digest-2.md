---
layout: post
title: "Development Digest 2"
date: 2015-5-8 14:51:00 -1000
comments: true
---

Whew, it's been a while since the last digest. Let's see what I've been up to in the past few months. Click below for the pictures.

<!-- more -->

----

This simple view option from MCEdit 1 is finally back, but it's a little bare.

<img src="/images/screenshots/dev2/itsback.png" alt="View options" class="img-thumbnail">

----

You can now tell MCEdit about your MultiMC installation. It finds all of the 
MultiMC instances you've made and adds the saves folders to a menu in the world list.
It can also find all of the mods installed in an instance, which is useful
for the next feature.

<img src="/images/screenshots/dev2/MMC.png" alt="MultiMC" class="img-thumbnail">

----

A very basic form of mod support. You can tell MCEdit about any blocks added
to any world by MinecraftForge mods. The name, lighting values, and model and
textures are all configurable. In the future, you will be able to export
your configurations and share them with other MCEdit users. This is a work
in progress.

<img src="/images/screenshots/dev2/block_config.png" alt="Block Configuration" class="img-thumbnail">

----

Even if you don't touch the block configuration options, MCEdit also has basic 
support for importing and exporting with MinecraftForge mods. MCEdit is now
able to translate the block IDs between two different worlds with different
combinations of mods. This building was exported from one world and imported
into a world using a different modpack that has several mods in common with
the first - Chisel2, AppliedEnergistics2, and Mekanism in particular.

On the left, the building as it is imported with MCEdit 1, which lacks Forge
support. On the right, the building was imported with MCEdit 2. Because
of the new block translation, every single block in the building was intact!

(Well, mostly. I'm still working on getting the items in chests and AE2 drives to carry over.
At least the Forge Multipart facades carried over without any special treatment.)

<img src="/images/screenshots/dev2/modimport.png" alt="Import/export with modded blocks" class="img-thumbnail">

----

Inventory editing! MCEdit now includes a powerful inventory editor, styled
after the old INVEdit tool. The inventories of players, chests, dispensers, 
and hoppers can all be edited. 

<img src="/images/screenshots/dev2/player_invedit.png" alt="Player inventory" class="img-thumbnail">

<img src="/images/screenshots/dev2/dispenser_invedit.png" alt="Dispenser inventory" class="img-thumbnail">

----

As an experiment, I made an inventory editor for the 
[StorageDrawers mod](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2198533-storage-drawers-v1-3-9-updated-apr-16-15).
StorageDrawers does some nonstandard things with the way it stores items, 
so this is helping me get started on what will be the mod-support plugin API.

<img src="/images/screenshots/dev2/drawers_invedit.png" alt="StorageDrawers inventory" class="img-thumbnail">

----

Grass and leaves are now shown with the correct colors for the biome they
are in. Another brush mode is added for changing biomes.

<img src="/images/screenshots/dev2/biome.jpg" alt="Biomes" class="img-thumbnail">

----

An NBT-level find and replace is now here. You can search for tag names or
values, restrict your search to only entities or tile entities, replace the
value of tags found by name, or just use it to search for tags and find 
where they are in the world - clicking an item in the result list takes you
to that block or entity. 

(The other tabs for items and command blocks are not yet implemented.)

<img src="/images/screenshots/dev2/find_replace.png" alt="NBT Find and Replace" class="img-thumbnail">

----

Another vital MCEdit 1 feature makes a comeback. You can now switch between
the Nether, the End, and any other dimensions added by mods as well.

<img src="/images/screenshots/dev2/choosy.png" alt="Dimensions menu" class="img-thumbnail">
