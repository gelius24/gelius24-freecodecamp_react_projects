import "./App.css";
import marked from "marked";
import { useState } from "react";

const initialState = `
# Titre
## Sous titre 
- item 1
- item 2
- item 3
> Block Quotes

Voila un paragraphe
**Ce texte est en gras**
[Visitez mon site](https://gelius24.github.io/portfolio)
Ligne display = inline \`<div></div> \` 
Voici une ligne de code:
\`\`\`
let w = 0;
let g = 1
let z = 5;
\`\`\`
![React](https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ)
`

function App() {
  const [text, setText] = useState(initialState);
  const markdown = marked(text, {breaks: true})

  const handleChange = (e) => {
    setText(e.target.value)
  } 

  return (
    <div className="app">
      <h1 className='titre'>Markdown Previewer</h1>
      <div className="editor-box">
        <header>Editor</header>
        <textarea onChange={handleChange} id="editor" name="" cols="50" rows="15">
          {initialState}
        </textarea>
      </div>

      <div className="previewer">
        <header>Previewer</header>
        <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
          
        </div>
      </div>
      <footer>
        Coded by Woody Gelius - 2021
      </footer>
    </div>
  );
}

export default App;
