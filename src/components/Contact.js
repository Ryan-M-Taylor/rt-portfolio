import {React, useState} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailMessage, setEmailMessage] = useState("")

  emailjs.init('eji0VvpPIv7l7jBrE')

  const onSubmit = (data) => {
    setEmailMessage("submitted!")
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <h4>Contact</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('from_name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Email:
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email?.type === 'required' && <span>This field is required</span>}
          {errors.email?.type === 'pattern' && <span>Invalid email address</span>}
        </label>
        <br />
        <label>
          Message:
          <textarea {...register('message', { required: true })} />
          {errors.message && <span>This field is required</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>{emailMessage}</div>
    </div>
  );
}

export default Contact;

