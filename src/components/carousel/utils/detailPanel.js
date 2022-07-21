import React from 'react'
import { Formik } from 'formik';
import { Button, Grid, Input } from '@mui/material';
import ImageUploading from "react-images-uploading";

export default function DetailPanel(props) {

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
const {rowData}=props;
console.log(rowData);
const [images, setImages] = React.useState(rowData.imgPath);  
return (
    <div>
     

          <Formik

initialValues={{ title: rowData.title, description: rowData.description ,file:""}}

validate={values => {

  const errors = {};

  if (!values.title) {

    errors.title = 'Required';

  } 
  return errors;

}}

onSubmit={(values, { setSubmitting }) => {

  setTimeout(() => {

    alert(JSON.stringify(values, null, 2));
console.log(values.file)
    setSubmitting(false);

  }, 400);

}}

>

{({

  values,

  errors,

  touched,

  handleChange,

  handleBlur,

  handleSubmit,

  isSubmitting,

  /* and other goodies */

}) => (
<Grid container> 
  <form onSubmit={handleSubmit}>

<Grid item>
<ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            
       {console.log(imageList[0])}
                <img width="80%" height={"80%"} src={imageList[0]!==undefined?images.data_url:"http://localhost:3000"+`${images}`} alt="" />
               
     
                
              
          
          </div>
        )}
      </ImageUploading>








</Grid>










  
  <Grid item>

    <Input

      type="text"

      name="title"

      onChange={handleChange}

      onBlur={handleBlur}

      value={values.title}

    />

    {errors.title && touched.title && errors.title}
    </Grid> 

    <Grid item>
    <Input

      type="text"

      name="description"

      onChange={handleChange}

      onBlur={handleBlur}

      value={values.description}

    />

    {errors.title && touched.title && errors.title}
    </Grid>
    
    <Button type="submit" disabled={isSubmitting}>Update

    </Button>

  </form>
  </Grid>


)}

</Formik>
    </div>
  )
}
