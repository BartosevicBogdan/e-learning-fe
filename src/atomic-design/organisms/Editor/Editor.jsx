import React, { useRef, useState } from 'react';
import { Editor as EditorMCE } from '@tinymce/tinymce-react';

const Editor = ({ onChange, initialText }) => {
  const editorRef = useRef(null);
  //   console.log('onChange', onChange);
  console.log('editor initialText', initialText);
  //   console.log('editor trigger', trigger);
  const [initialValue, setInitialValue] = useState(initialText);
  const onChangeHandler = () => onChange(editorRef.current.getContent());

  return (
    <>
      <EditorMCE
        apiKey="dpbd48ttf1zhgtcxcakye9sviiy7snjsh41pa2jihw3njghr"
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        // onEditorChange={() => console.log('editor')}
        onEditorChange={() => onChangeHandler()}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialText || '<p>Enter your text here...</p>'}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'preview',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' +
            'media | image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
};

export default Editor;
