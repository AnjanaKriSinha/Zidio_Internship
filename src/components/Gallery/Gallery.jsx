import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"


const Gallery = () => {

    var images = [
        {
            src: GalleryImg1,
            desc: "Details about image",
            sub: "Title of image"
        },
        {
            src: GalleryImg3,
            desc: "Details about image",
            sub: "Title of image"
        },
        {
            src: GalleryImg6,
            desc: "Details about image",
            sub: "Title of image"
        },
        {
            src: GalleryImg4,
            desc: "Details about image",
            sub: "Title of image"
        },
        {
            src: GalleryImg7,
            desc: "Details about image",
            sub: "Title of image"
        },
        {
            src: GalleryImg6,
            desc: "Details about image",
            sub: "Title of image"
        },
    ];

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <Lightroom images={images} settings={settings} />
   );
}

export default Gallery