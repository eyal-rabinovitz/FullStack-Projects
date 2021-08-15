import React, { useState } from 'react'; // { useState } add the availability to works with hooks
import './App.css';
import Post from './component/Post.js'
import AddPost from './component/AddPost.js'

function App() {

    const [flag, setFlag] = useState(false);

    const [postArr, setPostArr] = useState([
        {
            title: 'first post',
            info: 'my name is eyal'
        },
        {
            title: 'second post',
            info: 'my last name is rabinovitz'
        },
        {
            title: 'third post',
            info: 'my age is 27'
        },
        {
            title: 'fourth post',
            info: 'im from tel aviv'
        }
    ]);

    const addNewPost = (title, info) => {
        setPostArr([...postArr, { title: title, info: info}]);
    }

    const deletePost = (i) => {
        let newPostArr = postArr.filter((element, index) => (index != i));
        setPostArr(newPostArr);
    }

    return (
        <div className="App">

            <button onClick={() => setFlag(!flag)}> change flag </button>

            <AddPost add={addNewPost} />

            {postArr.map((element, i) => {
                return <Post title={element.title} info={element.info} deletePost={deletePost} index={i}/>
            })}

        </div>
    );
}

export default App;
