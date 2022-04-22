import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Form, Label, Input } from "./ContactForm.styled";

export const ContactForm = ({onSubmit}) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const myHandleSubmit = ({name, phone}) => {
    onSubmit({ name, phone });
    reset();
  };

  return (

    <Form onSubmit={handleSubmit(myHandleSubmit)}>
      <Label>
        Name:
        <Input {...register("name", {
          required: "Поле обязательно к заполнению!",
          minLength: {
            value: 2,
            message: 'Минимум 2 символа'
          }
        })}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
      </Label>
      <div style={{ height: 40 }}>
        {errors?.name && <p>{errors?.name?.message || "Error!" }</p>}
      </div>
      <Label>
        Number:
        <Input {...register("phone", {
          required: "Поле обязательно к заполнению!",
          minLength: {
            value: 5,
            message: 'Минимум 5 символов'
          }
        })}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
      </Label>
      <div style={{ height: 40 }}>
        {errors?.number && <p>{errors?.number?.message || "Error!" }</p>}
      </div>
      <Button type="submit"
          variant="contained"
        color="success"
        >Add contact</Button>
    </Form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
