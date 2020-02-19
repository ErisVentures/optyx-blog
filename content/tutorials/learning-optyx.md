---
title: Learning Optyx
date: '2019-05-21T22:12:03.284Z'
image: ../assets/autocull-profiles.png
author: patrick
category: tutorial
pinnedPosition: 5
---

The culling workflow in Optyx is centered around the concept of groups. Similar photos are grouped together based on content, capture time, and exposure bracketing. The best photo of each group is tagged with a rating or color according to the sharpness, exposure, facial expression, eyes open, and basic composition rules relative to others in the group. The complete workflow looks something like the below:

1. Copy photos to a local disk and import them to Optyx.
1. Use Autogroup to instantly group photos based on content similarity.
1. Refine groups with manual overrides.
1. Use Autocull to assign rating and color labels to the best photos in each group.
1. Scan filtered photos for stragglers and adjust metadata with manual overrides.
1. Re-import photos with set metadata to your editor.

## Autogroup

Autogroup creates photo groups based on content similarity with limits based on the time difference. Autogroup can also automatically identify bracketed shots for HDR or exposure stacking. You can control the aggressiveness of each of these options with the autogroup sliders. Sliding a slider to the right will group more photos together while sliding a slider to the left will group fewer photos together.

<figure class="figure-right">
<img src="../assets/autogroup.png" style="height: 300px;"/>
<figcaption>Autogroup sliders in the Optyx app</figcaption>
</figure>

1. **Content Similarity** - Controls grouping by content similarity of the photographs. At its strictest, photos will need to be nearly identical. At its most lenient, photos only need to have similar overall color patterns and structure.
1. **Time** - Controls what photos are _allowed_ to be grouped together. Photos will only be grouped together based on content similarity if the difference between their timestamps is at least this close.
1. **Exposure Brackets** - Controls grouping of multiple exposures. Photos will be grouped together based on exposure compensation information in Auto modes and overall exposure settings in Manual shooting modes.

<div class="clearfix"></div>

## Autocull

Autocull processes each group and tags the best photo. Autocull profiles can be configured to tag photos based on various rules. Default rating-based and color-based profiles are pre-configured, but custom profiles can be added and customized to fit your specific workflow.

The Autocull edit modal allows you to configure any set of conditions and actions you'd like. The actions for each profile will be applied in the order listed. For photos with multiple and conflicting applicable actions, the final action will override a previous action.

<figure>
<img src="../assets/autocull-profiles.png" style="height: 400px;"/>
<figcaption>Autocull profile edit modal in the Optyx app</figcaption>
</figure>

### Conditions

1. **Best Overall** - The best overall photo when all features are considered.
1. **Best Faces** - The photo with the overall best faces, the happiest, sharpest, and most eyes open.
1. **Happiest Faces** - The photo with the happiest faces, regardless of sharpness or squinting eyes.
1. **Sharpest** - The photo with the sharpest edges.
1. **Solo Group** - A photo that is the only photo in its group. When a photo is the only photo in the group, this is the only condition that will match.
1. **Unmatched** - A photo that does not match any other condition. Used as the default handling mechanism.

### Actions

1. **Set Color Label** - Sets the XMP `Label` property with the specified color. Used for interop with other photo management tools.
1. **Set Rating** - Sets the XMP `Rating` property with the specified rating. Used for interop with other photo management tools.
1. **Set Management** - Sets the [management method](#management-method) to the specified method.
1. **Add Management Bit** - Mutates the [management method](#management-method) to add the specified property.
1. **Remove Management Bit** - Mutates the [management method](#management-method) to remove the specified property.

<a name="management-method"></a>

## Management Methods (Locking)

Because Optyx allows you to instantly modify the metadata of very large sets of photo, controls are in place to avoid automatically wiping out manually set ratings. We call these controls "management methods", and they're represented in the Optyx app by a lock icon in the top left corner of a photo tile.

<figure>
<img src="../assets/management-methods.png" style="height: 300px;"/>
<figcaption>Photos under different management methods in the Optyx app.<br /><i>(left to right)</i> Unlocked, Manually Managed (Metadata only), Manually Managed, Completely Locked</figcaption>
</figure>

There are 5 available management methods:

1. **Unlocked** - Photos will be affected by autogroup, autocull, and explicit user input.
1. **Manually Managed (Metadata only)** - Photos will NOT be affected by autocull. Autogroup and explicit user input will continue to have an effect.
1. **Manually Managed (Groups only)** - Photos will NOT be affected by autogroup. Autocull and explicit user input will continue to have an effect.
1. **Manually Managed** - Photos will NOT be affected by autocull or autogroup. Explicit user input will continue to have an effect.
1. **Completely Locked** - Photos will NOT be affected by autocull, autogroup, or explicit user input. The photo's metadata cannot be changed within Optyx until the management method is changed.
