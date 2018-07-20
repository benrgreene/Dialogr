// Let's initiate all images with the 'gallery-image' class to open in the modal!
// These don't have to be images either, they can be anything! we just need to add
// the data attribute `data-dialogr-src` to the element.
let galleryImages = document.querySelectorAll('.gallery-image');
dialogr(galleryImages, {
  gallery: true,
  type: 'image',
});
  
// A lone wolf, who isn't part of a gallery
let loneWolfImage = document.querySelectorAll('.lone-wolf-image');
dialogr(loneWolfImage, {
  type: 'image',
});
  
// Let's get some HTML in that dialog modal!
let htmlDialogTrigger = document.querySelectorAll('.js-trigger-dialog');
dialogr(htmlDialogTrigger, {
  content: `<p>This is some HTML content!</p>
    <p>Warm fuzzy feelings</p>`,
});

let doubleClickDialogTrigger = document.querySelectorAll('.js-dblclick-dialog');
dialogr(doubleClickDialogTrigger, {
  openAction: 'dblclick',
  content: `<p>This is opened by a double click!</p>
    <p>So fancy.</p>`,
});