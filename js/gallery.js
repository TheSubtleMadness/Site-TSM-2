// A $( document ).ready() block.
$(document).ready(function () {
  // console.log( "ready!" );

  // Referencing ID to use NG2 for gallery page
  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: "0",
    thumbnailBorderHorizontal: "0",
    colorScheme: {
      thumbnail: {
        background: "rgba(255,0,0,1)"
      }
    },
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|imageSepiaOff|labelAppear75",
    thumbnailGutterWidth: "20",
    thumbnailGutterHeight: "20",
    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
