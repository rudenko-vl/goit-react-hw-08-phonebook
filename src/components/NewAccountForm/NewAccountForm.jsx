import { useForm } from "react-hook-form";
import { Form, Label, Input } from "../ContactForm/ContactForm.styled";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { regUser } from "redux/auth/auth-operations";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export const NewAccountForm = () => {
    const [visiblePass, setVisiblePass] = useState(false);
    const dispatch = useDispatch();
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

    const toggleVisiblePass = (e) => {
        setVisiblePass(!visiblePass)
    };

    const myHandleSubmit = ({ name, email, password }) => {
        dispatch(regUser({ name, email, password }))
        reset();
    };
    
    return (
        <Form autoComplete="off" onSubmit={handleSubmit(myHandleSubmit)}>
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
            <Label style={{position: "relative"}}>
                Password:
                <Input type={visiblePass ? "text" : "password"} {...register("password", {
                    required: "Поле обязательно к заполнению!",
                    minLength: {
                        value: 5,
                        message: 'Пароль должен содержать минимум 5 символов!'
                    }
                })} />
                {visiblePass ? <VisibilityOffIcon color="primary" sx={{ position: "absolute", top: 30, right: 15 }} onClick={() => { toggleVisiblePass() }}/> : <VisibilityIcon onClick={() => { toggleVisiblePass() }} color="primary" sx={{ position: "absolute", top: 30, right: 15 }}/>}
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