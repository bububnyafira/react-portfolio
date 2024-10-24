import styled from "styled-components";
import { motion } from "framer-motion";


const ContactForm = () => {
  return (
    <StyledWrapper>
      <motion.form
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="form">
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            type="email"
            className="form__field"
            placeholder="Email"
            required
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group field">
          <textarea
            className="form__field"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>
        <button type="submit">Send Message</button>
      </motion.form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
  }

  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }

  button {
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;

export default ContactForm