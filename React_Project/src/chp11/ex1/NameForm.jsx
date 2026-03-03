import React, {useState} from "react";
import './NameForm.css'

function NameForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case 'name':
                setName(target.value.toUpperCase());
                break;
            case 'email':
                setEmail(target.value);
                break;
            case 'value':
                setValue(target.value);
                break;
        }
    }

    const handleSubmit = (event) => {
        alert(`입력된 성명 : ${name}, E-mail: ${email}, 요청사항 ${value}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="name-form">
            <label>
                이름 <input type={'text'} id={'name'} onChange={handleChange} />
            </label>
            <label>
                이메일 <input type={'email'} id={'email'} onChange={handleChange} />
            </label>
            <label>
                요청사항 <textarea id={'value'} value={value} onChange={handleChange} />
            </label>
            <button type={'submit'}>제출</button>
        </form>
    );
}

export default NameForm;