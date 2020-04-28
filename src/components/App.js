import React from "react";
import Header from "./Header";
import NewPostForm from "./NewPostForm";
import PostListControl from "./PostListControl";

function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <br />
        <Header />
        <br />
        <hr />
        <div className='row'>
          <div className='col-md-6'>
            <br />
            <PostListControl />
          </div>
          <div className='col-md-6'>
            <br />
            <NewPostForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;