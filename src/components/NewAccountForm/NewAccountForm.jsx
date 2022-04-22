import { useForm } from "react-hook-form";
import { Form, Label, Input } from "../ContactForm/ContactForm.styled";
import { Button } from "@mui/material";

export const NewAccountForm = () => {
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
    
    const myHandleSubmit = ({ name, email, password }) => {
        // onSubmit({ name, email, password });
        console.log({name, email, password})
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
                })} />
            </Label>
            <div style={{ height: 30 }}>
                {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
            <Label>
                Email:
                <Input {...register("email", {
                    required: "Поле обязательно к заполнению!",
                })}
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="test@gmail.com"/>
            </Label>
            <div style={{ height: 30 }}>
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <Label>
                Password:
                <Input {...register("password", {
                    required: "Поле обязательно к заполнению!",
                    minLength: {
                        value: 5,
                        message: 'Пароль должен содержать минимум 5 символов!'
                    }
                })} />
            </Label>
            <div style={{ height: 40 }}>
                {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </div>
            <Button type="submit"
                variant="contained"
                color="success"
            >Register</Button>
        </Form>
    );
};