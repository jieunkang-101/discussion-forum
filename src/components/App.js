import React from "react";
import Header from "./Header";
import NewPostForm from "./NewPostForm";
import PostListControl from "./PostListControl";

function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <Header />
        <div className='row'>
          <div className='col-md-6'>
            <PostListControl />
          </div>
          <div className='col-md-6'>
            <NewPostForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;