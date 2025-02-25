import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const FrameOverlay = ({ page }) => {
  const [showTopCorners, setShowTopCorners] = useState(false);
  const [showBottomCorners, setShowBottomCorners] = useState(false);
  const mainDivRef = useRef(null);

  useEffect(() => {
    // Function to find your main content div
    const mainDiv =
      document.querySelector(".mainBgImgBg") ||
      document.querySelector("#root > div") ||
      document.body;
    mainDivRef.current = mainDiv;

    const handleScroll = () => {
      if (!mainDivRef.current) return;

      const mainRect = mainDivRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      console.log(mainRect.top);
      console.log(windowHeight);
      // Show bottom corners when user starts scrolling (main div not fully visible)
      // This activates as soon as the user starts scrolling down
      if (mainRect.top < -57) {
        setShowBottomCorners(true);
      } else {
        setShowBottomCorners(false);
      }

      // Show top corners when main div is completely or mostly out of view
      // This requires more scrolling than the bottom corners
      if (mainRect.bottom < 11) {
        setShowTopCorners(true);
      } else {
        setShowTopCorners(false);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cornerColor = "rgb(196, 205, 216)";
  const whiteCornerColor = "rgb(256,256,256)";

  FrameOverlay.propTypes = {
    page: PropTypes.string.isRequired, // Ensure 'page' is a required string
  };

  if (page === "Home") {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {/* Borders - always visible */}
        {/* Top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "13px",
            backgroundColor: "white",
          }}
        />

        {/* Right border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "13px",
            backgroundColor: "white",
          }}
        />

        {/* Bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "13px",
            backgroundColor: "white",
          }}
        />

        {/* Left border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "13px",
            backgroundColor: "white",
          }}
        />

        {/* Conditional corners */}
        {/* Top-left corner - only visible when top corners should show */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "30px",
            height: "30px",
            borderTop: `20px solid ${
              showTopCorners ? whiteCornerColor : "transparent"
            }`,
            borderLeft: `20px solid ${
              showTopCorners ? whiteCornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "13px",
            left: "13px",
            width: "40px",
            height: "40px",
            borderTop: `20px solid ${
              showTopCorners ? cornerColor : "transparent"
            }`,
            borderLeft: `20px solid ${
              showTopCorners ? cornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
            borderRadius: "20px",
          }}
        />

        {/* Top-right corner - only visible when top corners should show */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            width: "30px",
            height: "30px",
            borderTop: `20px solid ${
              showTopCorners ? whiteCornerColor : "transparent"
            }`,
            borderRight: `20px solid ${
              showTopCorners ? whiteCornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "13px",
            right: "13px",
            width: "40px",
            height: "40px",
            borderBottom: `20px solid ${
              showTopCorners ? cornerColor : "transparent"
            }`,
            borderRight: `20px solid ${
              showTopCorners ? cornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
            borderRadius: "20px",
          }}
        />

        {/* Bottom-right corner - only visible when bottom corners should show */}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "30px",
            height: "30px",
            borderBottom: `20px solid ${
              showBottomCorners ? whiteCornerColor : "transparent"
            }`,
            borderRight: `20px solid ${
              showBottomCorners ? whiteCornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "13px",
            right: "13px",
            width: "40px",
            height: "40px",
            borderBottom: `20px solid ${
              showBottomCorners ? cornerColor : "transparent"
            }`,
            borderRight: `20px solid ${
              showBottomCorners ? cornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
            borderRadius: "20px",
          }}
        />
        {/* Bottom-left corner - only visible when bottom corners should show */}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "30px",
            height: "30px",
            borderBottom: `20px solid ${
              showBottomCorners ? whiteCornerColor : "transparent"
            }`,
            borderLeft: `20px solid ${
              showBottomCorners ? whiteCornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
            borderRadius: "20px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "13px",
            left: "13px",
            width: "40px",
            height: "40px",
            borderBottom: `20px solid ${
              showBottomCorners ? cornerColor : "transparent"
            }`,
            borderLeft: `20px solid ${
              showBottomCorners ? cornerColor : "transparent"
            }`,
            //   transition: "border-color 0.3s ease",
            borderRadius: "20px",
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none", // Allows clicking through the frame
          zIndex: 9999, // High z-index to stay on top
        }}
      >
        {/* Top border */}{" "}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "13px",
            backgroundColor: "white",
          }}
        />
        {/* Right border */}{" "}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: "13px",
            backgroundColor: "white",
          }}
        />
        {/* Bottom border */}{" "}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "13px",
            backgroundColor: "white",
          }}
        />
        {/* Left border */}{" "}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "13px",
            backgroundColor: "white",
          }}
        />
        {/* Inverted corners - these create the "inverted border" effect */}
        {/* Top-left corner */}{" "}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "30px",
            height: "30px",
            borderTop: "20px solid #fff",
            borderLeft: "20px solid #fff",
          }}
        />{" "}
        <div
          style={{
            position: "absolute",
            top: "13px",
            left: "13px",
            width: "40px",
            height: "40px",
            borderTop: "20px solid rgb(196, 205, 216)",
            borderLeft: "20px solid rgb(196, 205, 216)",
            borderRadius: "20px",
          }}
        />
        {/* Top-right corner */}{" "}
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            width: "30px",
            height: "30px",
            borderTop: "20px solid #fff",
            borderRight: "20px solid #fff",
          }}
        />{" "}
        <div
          style={{
            position: "absolute",
            top: "13px",
            right: "13px",
            width: "40px",
            height: "40px",
            borderTop: "20px solid rgb(196, 205, 216)",
            borderRight: "20px solid rgb(196, 205, 216)",
            borderRadius: "20px",
          }}
        />
        {/* Bottom-right corner */}{" "}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "30px",
            height: "30px",
            borderBottom: "20px solid #fff",
            borderRight: "20px solid #fff",
          }}
        />{" "}
        <div
          style={{
            position: "absolute",
            bottom: "13px",
            right: "13px",
            width: "40px",
            height: "40px",
            borderBottom: "20px solid rgb(196, 205, 216)",
            borderRight: "20px solid rgb(196, 205, 216)",
            borderRadius: "20px",
          }}
        />
        {/* Bottom-left corner */}{" "}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "30px",
            height: "30px",
            borderBottom: "20px solid #fff",
            borderLeft: "20px solid #fff",
          }}
        />{" "}
        <div
          style={{
            position: "absolute",
            bottom: "13px",
            left: "13px",
            width: "40px",
            height: "40px",
            borderBottom: "20px solid rgb(196, 205, 216)",
            borderLeft: "20px solid rgb(196, 205, 216)",
            borderRadius: "20px",
          }}
        />{" "}
      </div>
    );
  }
};

export default FrameOverlay;
