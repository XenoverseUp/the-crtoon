import Flag from "../assets/france_flag.svg";

export default {
  infoTitle: "What is CRTOON?",
  infoContent: (
    <>
      <span>CRTOON</span> is lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Labore blanditiis ullam recusandae debitis voluptas iste cupiditate
      dolores neque voluptatum totam. Doloribus nesciunt ea, ab deleniti culpa
      animi praesentium saepe optio expedita quas ratione odio eos laborum totam
      delectus, nihil magnam.
    </>
  ),
  navigationLinks: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Sign In",
      path: "/sign-in",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ],
  socialMediaLinks: {
    instagram: "#",
    youtube: "#",
    twitter: "#",
  },
  appSectionTitle: "Coming Soon",
  flag: {
    src: Flag,
    alt: "France",
  },
  trademark: "Xenoverse, Inc. All rights are reserved.",
  legacyLinks: {
    termsOfUse: "#",
    privacyPolicy: "#",
    cookieSettings: "#",
  },
};
