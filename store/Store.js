import { readable } from "svelte/store";

export const data = readable([
  {
    img: "image/icon-1.png",
    title: "HTML 5",
    content:
      "The term HTML5 is essentially a buzzword that refers to a set of modern web technologies. This includes the HTML Living Standard, along with JavaScript APIs to enhance storage, multimedia, and hardware access...",
    link: "#"
  },
  {
    img: "image/icon-2.png",
    title: "CSS 3",
    content:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media...",
    link: "#"
  },
  {
    img: "image/icon-3.png",
    title: "JavaScript",
    content:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat...",
    link: "#"
  },
  {
    img: "image/icon-4.png",
    title: "Sass",
    content:
      "CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS...",
    link: "#"
  },
  {
    img: "image/icon-5.png",
    title: "Svelte JS",
    content:
      "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app...",
    link: "#"
  },
  {
    img: "image/icon-6.png",
    title: "Vue JS",
    content:
      "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects...",
    link: "#"
  },
  {
    img: "image/icon-7.jpg",
    title: "Anime JS",
    content:
      "Anime.js (/ˈæn.ə.meɪ/) is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript Objects...",
    link: "#"
  }
]);
