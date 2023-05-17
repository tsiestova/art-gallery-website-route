import React from "react";
import galleryStyles from "./gallery.module.scss";
import layoutStyles from "../layout.module.scss";
import ResponsivePicture from "../picture/ResponsivePicture";

const GalleryList = () => {
  return (
    <div className={galleryStyles.gallery__list__wrap}>
      <div className={layoutStyles.layout}>
        <ul className={galleryStyles.gallery__list}>
          <li
            className={`${galleryStyles.gallery__item_pic} ${galleryStyles.gallery__item}`}
          >
            <ResponsivePicture
              path={"./assets/grid/image-grid-1.jpg"}
              sizes={["1200", "768"]}
            />
          </li>
          <li
            className={`${galleryStyles.gallery__item_text} ${galleryStyles.gallery__item}`}
          >
            <div className={galleryStyles.gallery__item__heading}>
              Your Day <br /> at the Gallery
            </div>
            <div className={galleryStyles.gallery__item__description}>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </div>
          </li>
          <li
            className={`${galleryStyles.gallery__item} ${galleryStyles.gallery__item_pic}`}
          >
            <ResponsivePicture
              path={"./assets/grid/image-grid-2.jpg"}
              sizes={["1200", "768"]}
            />
          </li>
          <li
            className={`${galleryStyles.gallery__item} ${galleryStyles.gallery__item_pic}`}
          >
            <ResponsivePicture
              path={"./assets/grid/image-grid-3.jpg"}
              sizes={["1200", "768"]}
            />
          </li>
          {/*<li className={galleryStyles.gallery__item_pic}></li>*/}
          <li
            className={`${galleryStyles.gallery__item_text} ${galleryStyles.black} ${galleryStyles.gallery__item}`}
          >
            <div className={galleryStyles.item__inner}>
              <div className={galleryStyles.gallery__item__heading}>
                COME & BE INSPIRED
              </div>
              <div className={galleryStyles.gallery__item__description}>
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryList;
