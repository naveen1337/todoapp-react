import { grey } from "@material-ui/core/colors";
import React from "react";

function Todo(props) {
  return (
    <>
      {props.items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div>
              <h2 style={item.status ? completetaskstyle : null}>
                {item.title}
              </h2>
              <h4>
                Status:{" "}
                {item.status ? <span>Done</span> : <span>Not Done</span>}
              </h4>
              {item.status ? (
                  <>
                <button onClick={() => props.ondelete(item.id)}>Delete</button>
                <img
                    onClick={() => props.oncomplete(item.id)}
                    style={{ width: 25, height: 15, marginLeft: 10 }}
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ0NC4zODlweCIgaGVpZ2h0PSI0NDQuMzg5cHgiIHZpZXdCb3g9IjAgMCA0NDQuMzg5IDQ0NC4zODkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0NC4zODkgNDQ0LjM4OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNy4zOTksMTYxLjgwOWM5MC4yLDAuMTczLDIyMC4wMjEsNC4xNjEsMzEwLjE5NSwyLjQ0Yy05LjcxNCw5LjgtMTkuMzE2LDE5LjcxOC0yOC42MjQsMjkuOTI0DQoJCQljLTI0LjU1MiwyNi45MjEsMTUuMzg2LDY3LjA4OCw0MC4wNDUsNDAuMDQ4YzI3LjI0OC0yOS44NzYsNTYuNDQxLTU3Ljc5NSw4Ni4zNzEtODQuOTUyYzE0LjEyMi0xMi44MDksOS45NjgtMjkuNzY1LTEuMDUxLTM5LjYyOA0KCQkJYy0xLjg5OS0yLjc5OC00LjM1Mi01LjQwOC03LjUxMS03LjY4Yy0yNy44MjItMjAuMDA1LTU0LjQ5MS00MS4zOTYtODAuNjQ0LTYzLjUzOWMtMjcuNjg1LTIzLjQ1LTY3Ljk1MywxNi40MTItNDAuMDQ1LDQwLjA1DQoJCQljMTEuNjI5LDkuODQ5LDIzLjQxLDE5LjUwNCwzNS4yODcsMjkuMDM2Yy05MS40NTQsMS45MDktMjIyLjU2LTIuMTU4LTMxNC4wMjktMi4zMzNDLTkuMTI5LDEwNS4xMDEtOS4xMjQsMTYxLjczOCwyNy4zOTksMTYxLjgwOQ0KCQkJeiIvPg0KCQk8cGF0aCBkPSJNNDE2Ljk5NCwyNzUuMDgzYy05MS40NzUsMC4xNzgtMjIyLjU3OCw0LjI0LTMxNC4wMzIsMi4zMzZjMTEuODc4LTkuNTMxLDIzLjY2MS0xOS4xODksMzUuMjg3LTI5LjAzNg0KCQkJYzI3LjkwOS0yMy42NDMtMTIuMzY1LTYzLjUwMi00MC4wNDUtNDAuMDVjLTI2LjE0NCwyMi4xNC01Mi44MTgsNDMuNTMzLTgwLjY0NCw2My41MzVjLTMuMTU2LDIuMjcxLTUuNjE2LDQuODgxLTcuNTA4LDcuNjc5DQoJCQljLTExLjAxOSw5Ljg2Ni0xNS4xNzMsMjYuODIxLTEuMDUxLDM5LjYyOGMyOS45MzUsMjcuMTYyLDU5LjEyMyw1NS4wODEsODYuMzY5LDg0Ljk1NWMyNC42NTksMjcuMDQsNjQuNTk3LTEzLjEyNyw0MC4wNDUtNDAuMDQ1DQoJCQljLTkuMzA4LTEwLjIxNy0xOC45MTMtMjAuMTI0LTI4LjYyOS0yOS45M2M5MC4xOCwxLjcyMiwyMjAuMDAzLTIuMjY1LDMxMC4yMDMtMi40MzgNCgkJCUM0NTMuNTE2LDMzMS42NTIsNDUzLjUyMSwyNzUuMDEyLDQxNi45OTQsMjc1LjA4M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                  />
                  </>
              ) : ( 
              
                  <button onClick={() => props.oncomplete(item.id)}>
                    Set Complete
                  </button>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

// Styles
const completetaskstyle = {
  color: "grey",
  textDecoration: "line-through",
};
export default Todo;
