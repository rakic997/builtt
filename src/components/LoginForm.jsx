import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, selectDefaultUser } from '../features/user/userSlice';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const defaultUser = selectDefaultUser();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (credentials.email === defaultUser.username && credentials.password === defaultUser.password) {
            dispatch(login(defaultUser));
            navigate('/products');
        } else {
            console.log('Invalid login');
        }
    };

    return (
        <div className='login-page'>
            <form className='login-form' onSubmit={handleLogin}>
                <div className='form-group'>
                    <label>E-mail adresa</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Upišite E-mail adresu'
                        value={credentials.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Šifra</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Upišite šifru'
                        value={credentials.password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type='submit'>Prijavi se na nalog</button>
            </form>
        </div>
    )
}

export default LoginForm