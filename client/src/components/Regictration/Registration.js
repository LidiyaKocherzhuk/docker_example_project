import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';
import axios from 'axios';

import {apiConfig} from '../../config'

const Registration = () => {
    const {register, handleSubmit, /*reset,*/ formState: {errors}} = useForm();

    const [student, setStudent] = useState({});

    useEffect(() => {

        console.log(apiConfig.baseUrl)
        axios({
            method: 'post',
            url: `${apiConfig.baseUrl}/students/registration`,
            data: student,
        }).then();


    }, [student])

    const submit = (student) => {
        setStudent(student)
        // reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"  {...register('name')}/>
                {errors.name && <span>{errors.name.message}!</span>}
                <input type="number"  {...register('age')}/>
                {errors.age && <span>{errors.age.message}!</span>}
                <input type="email"  {...register('email')}/>
                {errors.email && <span>{errors.email.message}!</span>}
                <input type="password"  {...register('password')}/>
                {errors.password && <span>{errors.password.message}!</span>}
                <button>SAVE</button>
            </form>
        </div>
    )
}

export {Registration}
