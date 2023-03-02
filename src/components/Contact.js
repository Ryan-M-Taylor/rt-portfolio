import {React, useState} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [emailMessage, setEmailMessage] = useState("")

//   emailjs.init('eji0VvpPIv7l7jBrE')

//   const onSubmit = (data) => {
//     setEmailMessage("submitted!")
//   };

//   return (
//     <div className='d-flex flex-column align-items-center'>
//       <h4>Contact</h4>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           Name:
//           <input {...register('from_name', { required: true })} />
//           {errors.name && <span>This field is required</span>}
//         </label>
//         <br />
//         <label>
//           Email:
//           <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
//           {errors.email?.type === 'required' && <span>This field is required</span>}
//           {errors.email?.type === 'pattern' && <span>Invalid email address</span>}
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea {...register('message', { required: true })} />
//           {errors.message && <span>This field is required</span>}
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <div>{emailMessage}</div>
//     </div>
//   );
// }
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    // Use a regular expression to validate email format
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setFormErrors({
        ...formErrors,
        [name]: "This field is required",
      });
    } else {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        name: !formData.name ? "This field is required" : "",
        email: !formData.email ? "This field is required" : "",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormErrors({
        ...formErrors,
        email: "Invalid email address",
      });
      return;
    }

    // Handle form submission here
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <div className="contact" style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 className='pt-2'>Contact</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {formErrors.name && <p>{formErrors.name}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
      {submitted && <p>Submitted!</p>}
    </div>
  );
};

export default Contact;

