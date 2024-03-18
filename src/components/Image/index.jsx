import React from "react";
import { Img } from "./..";

export default function Image({ ...props }) {
  return (
    <div {...props}>
      <Img
        src="images/img_link_image_01_home_01_jpg.png"
        alt="linkimageone"
        className="justify-center h-[247px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[32px]"
      />
      <Img
        src="images/img_div_bt_bb_image_content_flex.svg"
        alt="divbtbbimage"
        className="justify-center h-[247px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[32px]"
      />
    </div>
  );
}
