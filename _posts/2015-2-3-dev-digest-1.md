---
layout: post
title: "Development Digest 1"
date: 2015-2-3 5:19:00 -1000
comments: true
---

I've been posting pictures and one-liners about new features to Twitter for a while, so I thought it would be nice to have a post here showing some of the more interesting ones. Click below to see them.

<!-- more -->

----

Selection boxes are no longer limited to plain cuboid boxes. Spheres and diamonds are possible now, and other shapes such as cones, cylinders, and polygons are planned. The selection renderer also shows only the blocks actually in the selection, so you can see exactly what is being selected.

<img src="/images/screenshots/shapedselections.png" alt="Shaped Selections" class="img-thumbnail">

----

You are now able to import several objects (e.g. from .schematic files, or from generator tools) and move, rotate, reconfigure them before finally committing them to the world. A big help for planning. Also, .schematic files have a built in browser that will one day show icons or thumbnail previews.

<img src="/images/screenshots/import.png" alt="Imports" class="img-thumbnail">

----

The venerable "Replace" command now lets you run multiple replacements in one go. You can do one-to-one block replacements or many-to-one, and as many as you want. Eventually you'll be able to configure tile entities to match against and replace with, to give you great control over chests, signs, and other such detailed blocks.

<img src="/images/screenshots/substitution.png" alt="Multi-replace" class="img-thumbnail">

----

This is the big change that requires you to have Minecraft 1.8 installed. MCEdit is now able to read block models and block state files from within the Minecraft .jar file and render them as they (nearly) appear in-game! This will greatly simplify adding new blocks after Minecraft is updated, and also opens the door to rendering models from mods(!) if they are using the 1.8 block model format!

<img src="/images/screenshots/blockmodels.png" alt="Block Models" class="img-thumbnail">

----

Unknown blocks now have a dedicated texture.

<img src="/images/screenshots/questionmark.png" alt="NBT Editor" class="img-thumbnail">

----

For saved games using Forge Mod Loader, the internal names of blocks are read from FML's saved data. This will at least give you some idea of which modded blocks are which, instead of showing them all as "UNKNOWN_BLOCK".

<img src="/images/screenshots/FML.png" alt="In the words of the mod loader" class="img-thumbnail">

----

MCEdit includes a full featured NBT editor, which will be used to edit entities, tile-entities, players, data files such as stronghold.dat, and can be used by new features and plugins to give low-level access to any NBT data in a world file.
 
<img src="/images/screenshots/nbt.png" alt="NBT Editor" class="img-thumbnail">

----

Lava and water is rendered more accurately now, showing the fluid level of each block.

<img src="/images/screenshots/wasser.png" alt="Lava and water" class="img-thumbnail">

----

MCEdit 2 still has a long way to go before it is ready for general use. I hope this gives you some idea of where things are headed.
