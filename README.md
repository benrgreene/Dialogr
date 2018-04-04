# Dialogr

## About

This is a lightbox/modal library that uses only plain ol' JavaScript and native HTML elements, namely the **dialog** element. Given that, there is still very limited support for the dialog element (see [canisee](https://caniuse.com/#search=dialog). So you probably shouldn't use this in a production setting (yet)

## How To Use

Using is super easy. There are only two things you need when calling dialogr:

* The elements that will trigger the modal
* An options object.

There are only a couple options: 

* gallery
* type
* content 

The type option can be either 'image' or 'html'. The default value is 'html'. The gallery option is a boolean for whether there should be gallery controls on the lightbox, this is only available for 'image' types. Content is only available when the lightbox type is set to 'html'. As the name suggests... it accepts html.

Here's an example:

```
let galleryImages = document.querySelectorAll('img.gallery-image');
dialogr(galleryImages, {
  gallery: true,
  type: 'image',
});
```

This instantiates a lightbox, with gallery mode enabled, for all images with the class `.gallery-image`;

NOTE: only images should be passed to dialogr when setting the type to 'image'. I know, obvious, but I feel the need to say it. **Also, with type of image, the images are the triggers.** 

Here's an example of an HTML type lightbox:

```
let htmlDialogTrigger = document.querySelectorAll('.js-trigger-dialog');
dialogr(htmlDialogTrigger, {
  content: `<p>This is some HTML content!</p>
    <p>Warm fuzzy feelings</p>`,
});
```