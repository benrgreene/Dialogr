// Let's initiate all images with the 'gallery-image' class to open in the modal!
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