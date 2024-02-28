import React from 'react'
import { Editor } from "@tinymce/tinymce-react";


import style from './style.module.scss';

const AnswerForm = () => {
  return (
    <div>
        <div className={style.title}>Your Respond</div>
        <div className={style.formContainer}>
            <Editor 
              apiKey='7lgpqpi2mesokgowio6pjhvg4ufx9q6ocqy6wfivkd4mkz64'
              init={{
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                menubar: false,
                toolbar: ' bold italic underline strikethrough | codesample link image media table mergetags | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                  { value: 'First.Name', title: 'First Name' },
                  { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
              }}
              initialValue=""
              />
            <button>Post response</button>
        </div>
        
    </div>
  )
}

export default AnswerForm