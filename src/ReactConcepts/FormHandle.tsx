import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const FormHandle = () => {
    const [submittedData, setSubmittedData] = useState({});
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isDirty, isValid, isSubmitting, touchedFields, dirtyFields, isValidating },
        reset,
        setValue,
        trigger,
    } = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Data:', data);
        setSubmittedData(data);
    };

    return (
        <div>
            <h2>Comprehensive Form Example</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                            <input
                                id="name"
                                type="text"
                                {...field}
                                placeholder="Enter your name"
                            />
                        )}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{String(errors.name.message)}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <input
                                id="email"
                                type="email"
                                {...field}
                                placeholder="Enter your email"
                            />
                        )}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{String(errors.email.message)}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'password is required', }}
                        render={({ field }) => (
                            <input
                                id="password"
                                type="password"
                                {...field}
                                placeholder="Enter your password"
                            />
                        )}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{String(errors.password.message)}</p>}
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }} >
                    <button type="button" onClick={
                        async () => {
                            setValue('name', 'Madhava Reddy');
                            setValue('email', 'madhava.reddy@email.com');
                            setValue('password', 'password123');
                            await trigger();
                        }
                    }>
                        Default Values
                    </button>
                    <button type="button" onClick={() => reset()}>
                        Reset Form
                    </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button type="submit" disabled={!isValid || isSubmitting}>
                        Submit
                    </button>
                </div>
            </form>
            {isSubmitSuccessful && (
                <div>
                    <h3>Submitted Data:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
            <div>
                <h3>Form State:</h3>
                <p>Is Dirty: {isDirty.toString()}</p>
                <p>Is Valid: {isValid.toString()}</p>
                <p>Is Submitting: {isSubmitting.toString()}</p>
                <p>Is Validating: {isValidating.toString()}</p>
                <p>Touched Fields: {JSON.stringify(touchedFields)}</p>
                <p>Dirty Fields: {JSON.stringify(dirtyFields)}</p>
            </div>
        </div>
    );
};

export default FormHandle;