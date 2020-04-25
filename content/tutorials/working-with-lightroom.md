---
title: Working with Lightroom
date: '2020-02-19T22:12:03.284Z'
image: ../assets/photoshop-macbook.jpg
imageCredit: Photo by @domenicoloia on Unsplash
author: patrick
category: tutorial
pinnedPosition: 7
---

Optyx is designed to work directly alongside your editing software by staying in permanent sync with your photo's metadata on disk. When you set a rating or color label in Optyx the file's metadata is updated immediately and when you set a rating or color label in another program the metadata is visible in Optyx immediately too.

Some programs like Lightroom handle metadata differently though and sometimes conflicts can occur. This guide walks through the optimal workflow to minimize conflicts and maximize your time saved.

Optyx Pro users also have access to the Optyx Connector Lightroom plugin that let's you invoke Optyx autocull from directly within the Lightroom UI. To learn more about working with the plugin, skip to the [Optyx Connector](#optyx-connector) section.

## Recommened Workflow

### New Shoots

1. Import and cull photos in Optyx (See [Getting Started](/tutorials/getting-started)).
1. Select in Optyx the photos you wish to edit.
1. Drag and drop the photos into Lightroom.
1. Edit in Lightroom.

<figure>
<img src="../assets/lightroom-drag-n-drop.gif">
<figcaption>Photos in Optyx can be dragged directly into Lightroom.</figcaption>
</figure>

### Existing Shoots (Using Optyx Connector)

**NOTE:** One of the primary benefits of Optyx is the ability to cull quickly without needing to import _all_ the photos into Lightroom. If you have a large shoot that you haven't imported already, it's still recommended to follow the workflow without Optyx Connector.

1. Open the Optyx app. Without minimizing Optyx, switch back to Lightroom.
1. Select photos in Lightroom that you wish to autocull with Optyx.
1. Select `Library > Plug-in Extras > Run Autocull...`.
1. Configure the shoot, autogroup profile, and autocull profile to use for the photos.
1. Wait for the photos to be imported and autoculled. The first time a photo is imported into a shoot, lengthy analysis will need to be computed, but future invocations should be much, much faster.

<figure>
<img src="../assets/lightroom-plugin-ui.png">
<figcaption>Photos in Lightroom can be imported directly to Optyx via the Optyx Connector plugin.</figcaption>
</figure>

## Optyx Connector

**WARNING**: The Optyx Connector is still in early development and may not be final.

Optyx Pro users have access to the Optyx Connector Lightroom plugin that let's you invoke Optyx autocull from directly within the Lightroom UI.

### Installation

1. Download the Optyx Connector zip file using the [official download link on your Optyx Pro receipt](https://customers.gumroad.com/article/199-how-do-i-access-my-purchase).
1. Unzip the plugin, and move the `.lrplugin` folder to wherever you store Lightroom plugins. <br />
   Recommendation: create a `Plugins` folder in the same location as your Lightroom catalogs.
1. Open the Lightroom Plugin Manager (`File > Plug-in Manager`) and click `Add` to add the Optyx `.lrplugin` in your chosen location.

<figure>
<img src="../assets/lightroom-plugin-add.png">
<figcaption>Use the Plug-in Manager to add the Optyx Connector.</figcaption>
</figure>

### Usage

See the [recommended workflow for existing shoots](#existing-shoots-using-optyx-connector).

### Limitations

- Optyx Connector is a remote control for the Optyx app. It cannot be used without the Optyx app.
- Optyx cannot be _minimized_ while using the plugin (occlusion of the window by having Lightroom in the foreground is fine).
- Lightroom will not be usable while Optyx Connector is waiting for results.
- Due to limitations in the Lightroom Plugin API, groups in Optyx cannot be replicated as stacks in Lightroom. If you'd like this functionality, please upvote [the open Adobe feature request](https://feedback.photoshop.com/photoshop_family/topics/lightroom_sdk_stack_ops).

## Resolving Conflicts

If you need to go back to culling Optyx after importing into Lightroom, you won't see changes reflected immediately there. Instead you'll see a small icon in the top right corner of the photo cell that there are metadata conflicts.

<figure>
<img src="../assets/lightroom-metadata-conflict.png">
<figcaption>Example of metadata conflicts in Lightroom.</figcaption>
</figure>

This is expected and no reason for concern. Click the icon that appeared and select "Import Settings from Disk" in the popup to import the metadata changes made by Optyx.

<figure>
<img src="../assets/lightroom-metadata-import-settings-from-disk.png">
<figcaption>Select "Import Settings from Disk" to import the metadata changes made by Optyx.</figcaption>
</figure>

Alternatively, select your photos with outdated metadata and select "Metadata" > "Read Metadata from File" in the menu bar to update many photos at once.

## Troubleshooting

Running into issues using Optyx with your other software? We want to hear about it! Shoot us an email at [support@optyx.app](mailto:support@optyx.app) and we'll see what we can do.
