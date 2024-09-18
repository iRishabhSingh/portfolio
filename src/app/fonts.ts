import localFont from "next/font/local";

const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-Black.woff2", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-Black.woff", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "./fonts/WorkSans-BlackItalic.woff", weight: "900", style: "italic" },

    { path: "./fonts/WorkSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/WorkSans-BoldItalic.woff", weight: "700", style: "italic" },

    { path: "./fonts/WorkSans-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBold.woff", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./fonts/WorkSans-ExtraBoldItalic.woff", weight: "800", style: "italic" },

    { path: "./fonts/WorkSans-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./fonts/WorkSans-ExtraLightItalic.woff", weight: "200", style: "italic" },

    { path: "./fonts/WorkSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/WorkSans-Italic.woff", weight: "400", style: "italic" },
    { path: "./fonts/WorkSans-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/WorkSans-Light.woff", weight: "300", style: "normal" },

    { path: "./fonts/WorkSans-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/WorkSans-LightItalic.woff", weight: "300", style: "italic" },
    { path: "./fonts/WorkSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-Medium.woff", weight: "500", style: "normal" },

    { path: "./fonts/WorkSans-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/WorkSans-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "./fonts/WorkSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Regular.woff", weight: "400", style: "normal" },

    { path: "./fonts/WorkSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/WorkSans-SemiBoldItalic.woff", weight: "600", style: "italic" },

    { path: "./fonts/WorkSans-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/WorkSans-Thin.woff", weight: "100", style: "normal" },
    { path: "./fonts/WorkSans-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "./fonts/WorkSans-ThinItalic.woff", weight: "100", style: "italic" }
  ],
  variable: "--font-work-sans",
});

export { workSans };