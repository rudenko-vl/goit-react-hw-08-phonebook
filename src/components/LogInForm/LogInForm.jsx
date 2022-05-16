import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Label, Input } from "../ContactForm/ContactForm.styled";
import { Button } from "@mui/material";
import { login } from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import toast from "react-hot-toast";

export const LogInForm = () => {
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

    const myHandleSubmit = ({ email, password }) => {
        dispatch(login({ email, password }));
        reset();
        setTimeout(()=>{toast.success(`Hello, ${email}!`)}, 500)
    };
    return (
        <Form autoComplete="off" onSubmit={handleSubmit(myHandleSubmit)}>
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
            <Label style={{position: "relative"}}>
                Password:
                <Input type={visiblePass ? "text" : "password"} {...register("password", {
                    required: "Поле обязательно к заполнению!",
                })} />
                {visiblePass ? <VisibilityOffIcon color="primary" sx={{ position: "absolute", top: 30, right: 15 }} onClick={() => { toggleVisiblePass() }}/> : <VisibilityIcon onClick={() => { toggleVisiblePass() }} color="primary" sx={{ position: "absolute", top: 30, right: 15 }}/>}
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