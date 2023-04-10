const value = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want!
- Even if you use dashes or asterisks.
- And last but not least, let's not forget embedded images:
need to add image cat 


![cat](https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)

`;

export default value;