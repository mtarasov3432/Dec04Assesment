// explain how virtual dom works 

/*
React's virtual dom is a tree representation of the dom that the program will generate. A new one is generated everytime a render method
is called. Once it is generated, react compares the real dom (the one on the browser) with the current virtual one and detects
any differences using an effiecent diffing algorithm that utlizes DFS. If any differences are detected, React will render/rerender
those elements of the real dom to reflect the virtual dom. However, only the parts of the real dom that differ from the virtual dom
will be rendered instead of the entire page/application. This is how react utilizes the virtual dom to maximize efficiency
and keep the developer from working on the real dom directly.
*/