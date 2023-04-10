import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import data from './assets/data';
import Split from 'react-split';
import { AiOutlineGithub } from 'react-icons/ai';
function App() {
  const [markdown, setMarkdown] = useState(data);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <>
      <h1 className="title">Markdown Previewer</h1>
      <div className="App">
        <Split className="split" gutterSize={3} minSize={500}>
          <div className="editor">
            <textarea
              value={markdown}
              onChange={handleChange}
              name="editor"
              id="editor"
            ></textarea>
          </div>
          <div id="preview">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdown} />
          </div>
        </Split>
        <div className="footer">
          <a href="#" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
