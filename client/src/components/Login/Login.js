import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const [studentValue, setStudentValue] = useState({});
    const [tokens, setTokens] = useState({})

    useEffect(() => {

        axios({
            method: 'post',
            url: 'http://localhost:9999/students/login',
            data: studentValue,
            // header: {
            //     'AccessToken': accessToken,
            //     'RefreshToken': refreshToken,
            // }
        })
            .then(response => {
                setTokens(response.data.tokens);
                console.log(response)
            });



    }, [studentValue]);

        console.log(tokens);
    const submit = (value) => {
        setStudentValue(value);
        // reset();
    };

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <input type="email"  {...register('email')}/>
                {errors.email && <span>{errors.email.message}!</span>}
                <input type="password"  {...register('password')}/>
                {errors.password && <span>{errors.password.message}!</span>}
                <button>SEND</button>
            </form>

        </div>
    );
};

export {Login};
