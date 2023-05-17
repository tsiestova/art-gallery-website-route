import React from "react";
import picStyles from "../picture/picture.module.scss";

const getResponsivePath = (fileName) => {
  const index = fileName.lastIndexOf(".");
  const extension = fileName.substring(index);
  const name = fileName.substring(0, index);

  return [`${fileName}`, `${name}@2x${extension} 2x`];
};

const getPath = (path, index) => {
  const lastIndex = path.lastIndexOf("/");
  const fileName = path.substring(lastIndex + 1);
  const filePath = path.substring(0, lastIndex);

  switch (index) {
    case 0:
      return getResponsivePath(fileName)
        .map((fileName) => `${filePath}/mobile/${fileName}`)
        .join(", ");
    //   `${filePath}/mobile/${fileName}`,
    //   `${filePath}/mobile/${fileName} 2x`,
    // ].join(", ");

    case 1:
      return getResponsivePath(fileName)
        .map((fileName) => `${filePath}/desktop/${fileName}`)
        .join(", ");
    case 2:
      return getResponsivePath(fileName)
        .map((fileName) => `${filePath}/tablet/${fileName}`)
        .join(", ");
  }
};

const ResponsivePicture = ({ path, sizes }) => {
  const sources = sizes.map((item, index) => ({
    media: `(min-width: ${item}px)`,
    path: getPath(path, index + 1),
  }));
  return (
    <picture className={picStyles.pic}>
      {sources.map((source) => (
        <source
          key={source.media}
          media={source.media}
          srcSet={source.path}
          type="image/jpg"
        />
      ))}

      <img srcSet={getPath(path, 0)} alt="" />
    </picture>
  );
};

export default ResponsivePicture;
