import React from 'react';

function Form (props) {
    const { update, submit, val } = props;

    const onChange = event => {
        const {name, value} = event.target
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='container' onSubmit={onSubmit}>
            <div className='form-groups inputs'>
                <label>Name
                <input type='text' value={val.name} onChange={onChange} name='name'placeholder='Name' maxLength='15' />
                </label>
                <lable>Email
                    <input type='text' value={val.email} onChange={onChange} name='email' placeholder='Email' maxLength='55' />
                </lable>
                <lable>Role
                    <select value={val.role} onChange={onChange}>
                        <option value=''>Select</option>
                        <option value='Designer'>Designer</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Backend Developer'>Backend Developer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                    </select>
                </lable>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;