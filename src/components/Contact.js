import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        'service_qd83ege',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        'eji0VvpPIv7l7jBrE'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register('name', { required: true })} />
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
    </div>
  );
}

export default Contact;

