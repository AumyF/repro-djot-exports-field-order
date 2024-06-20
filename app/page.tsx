import { parse, renderHTML } from "@djot/djot";

export default function Home() {
  const html = renderHTML(parse(`# Hello, Djot`));
  return <main dangerouslySetInnerHTML={{ __html: html }}></main>;
}
