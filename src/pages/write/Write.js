import React, { useState } from 'react';
import './write.css';
import {CKEditor}  from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import './ckeditorCustom.css';

// const editorConfiguration = {
//     plugins: [ Essentials, Bold, Italic, Paragraph ],
//     toolbar: [ 'bold', 'italic' ]
//   };

export default function Write() {

    const [addData, setAddData] = useState('');

    const [addedData, setAddedData] = useState(0);

    const handleCKEditorChange = (e, editor) =>{
        const data= editor.getData();
        debugger;
        setAddData(data);
    }

    return (
        <div className="write">
            <img className="writeImg"
            src="https://mcdn.wallpapersafari.com/medium/24/76/tRLkfV.jpg"
            alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style= {{display: 'none'}} />
                    <input type="text" placeholder="Enter Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="ckeditorDiv">
                <CKEditor editor={ClassicEditor} data={addData}
                    // config={ editorConfiguration }
                    onChange={handleCKEditorChange} className="writeInput writeText"
                     />
                </div>
                {/* <div className="writeFormGroup">
                    <textarea placeholder="Tell your story . . . " type="text" className="writeInput writeText" />
                    
                </div> */}
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
