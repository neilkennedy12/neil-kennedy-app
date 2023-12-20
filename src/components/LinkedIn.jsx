import { useRef, useState } from "react";

export const LinkedIn = () => {
  const ref = useRef();
  const [height, setHeight] = useState("0px");
  const onLoad = () => {
    // setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
    console.log(ref);
  };
  return (
    <iframe
      ref={ref}
      title="LinkedIn"
      onLoad={onLoad}
      id="myFrame"
      src="https://www.linkedin.com/embed/feed/update/urn:li:share:7131326898420248576"
      //   // height={size.height}
      //   width={size.width}
      width="100%"
      height={height}
      scrolling="no"
      frameBorder="0"
      style={{
        maxWidth: 640,
        width: "100%",
        overflow: "auto",
      }}
    ></iframe>
  );
};
