
import QuestionCard from '@components/QuestionCard';
import style from './style.module.scss';

import React from 'react'
import { Editor } from '@tinymce/tinymce-react';


const AskQuestion = ({question}) => {
  return (
    <div className={style.pageContainer}>
        <div className={style.questionContainer}>
          <div className={style.question}>
            <div className={style.content}>
              <div className={style.title}>Ask a public questoin</div> 
            </div>
            <div className={style.titleForm}>
              <div className={style.title}>Title</div> 
              <div className={style.desc}>Be specific and imagine you are asking a question to another person.</div>
              <div className={style.inputForm}>
                <input type="text" />
              </div>
            </div>
            <div className={style.descForm}>
              <div className={style.title}>Description</div> 
              <div className={style.desc}>Be specific and imagine you are asking a question to another person.</div>
                <Editor 
                  className={style.descInput}
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
            </div>
            <div className={style.tagsForm}>
              <div className={style.title}>Tags</div> 
              <div className={style.desc}>Be specific and imagine you are asking a question to another person.</div>
              <div className={style.inputForm}>
                <input type="text" />
              </div>
            </div>
            <button className={style.buttonSave}>Save</button>

          </div>

          <div className={style.relatedQuestion}>
            <div className={style.container}>
              <div className={style.title}>Write a good question</div> 
              <p>Ikuti langkah berikut </p>
              <div className={style.steps}>
                <p className={style.title}>Steps</p>
                <ul>
                  <li>Summarize your problem in a one-line title.</li>
                  <li>Describe your problem in more detail.</li>
                  <li>Add “tags” which help surface your question to members of the community.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default AskQuestion

