import { useForm } from "react-hook-form";
import { Form, Label, Input } from "../ContactForm/ContactForm.styled";
import { Button } from "@mui/material";

export const LogInForm = () => {
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
    
    const myHandleSubmit = (data) => {
        // onSubmit({ email, password });
        console.log(JSON.stringify(data))
        reset();
    };
    
    return (
        <Form onSubmit={handleSubmit(myHandleSubmit)}>
            <Label>
                Email:
                <Input {...register("email", {
                    required: "Поле обязательно к заполнению!",
                })}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="test@gmail.com"/>
            </Label>
            <div style={{ height: 40 }}>
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <Label>
                Password:
                <Input {...register("password", {
                    required: "Поле обязательно к заполнению!",
                    // minLength: {
                    //     value: 5,
                    //     message: 'Минимум 5 символов!'
                    // }
                })} />
            </Label>
            <div style={{ height: 40 }}>
                {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
            </div>
            <Button type="submit"
                variant="contained"
                color="success"
            >Log In</Button>
        </Form>
    );
};