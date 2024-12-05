//how react renders dom in conservative manner - explain
/*
react renders the dom in a conservative manner by only rendering/rerendering the elements of the dom that have changed from
the previous dom. The first step in this is react creating a virtual dom that reflects the code and state of the program. 
Once this is done, react will compare the virtual dom with the real dom (the one currently displayed on the browser), detect any
differences between the real dom and the virtual dom using an effeicent diffing algorithm that utilizes DFS, and update/rerender
those elements of the code that need to be changed so that the real dom matches the virtual dom. 

Since this process will only render the entire page once and any changing parts of it piecemeal as they come, it is extremely 
fast compared to other UIs/web applications bc it does not need to render the entire page complete with HTML, CSS, JS, etc. 
everytime a change is made.
*/