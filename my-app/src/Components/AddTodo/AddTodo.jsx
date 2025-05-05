import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useOutletContext } from "react-router-dom";
import { useFormik } from "formik";
export default function AddTodo() {
  const {addTask} = useOutletContext();
 
  const formik = useFormik({
    initialValues:{
      text: "",
    completed: false,
    },
    onSubmit:(values , {resetForm})=>{
      if(values.text.trim() === ''){
        alert('You should write SomeThing')
      }
      else{
        addTask(values);
        // Clear input
        resetForm()
      }
    }

  })
  return (
   <>
   <div className='container image-add d-flex justify-content-center align-items-center'>
   <div className="img-add mt-5">
    <img className="w-100 h-50" src="/images/istockphoto-1184801139-612x612.jpg" alt="" />
  </div>   </div>
    <div className="container   d-flex justify-content-center align-items-center ">
      <Form className='border w-75 p-5 rounded-2 bg-form' onSubmit={formik.handleSubmit}>
    <Form.Group className="mb-3 text-center fw-bold" controlId="formBasicEmail">
      <Form.Label><h6>Add new task</h6> </Form.Label>
      <Form.Control type="text" name='text'
      value={formik.values.text}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      isInvalid={!!formik.errors.text && formik.touched.text} />
    </Form.Group>
    <Form.Control.Feedback type="invalid">
                {formik.errors.text}
              </Form.Control.Feedback>
<div className='btn-add d-flex justify-content-center'>
<Button variant=""  type="submit">
      ADD
    </Button>
</div>
    
  </Form>
    </div>
    
    </>
  );
}
