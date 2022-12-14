import { partytownSnippet } from "@builder.io/partytown/integration";
const snippetContent = partytownSnippet();
const script = document.createElement("script");
script.textContent = snippetContent;
document.body.append(script);
