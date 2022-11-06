import { useFormik } from 'formik';
import React from 'react';
import {DataRangeType} from "../../bll/types";

const MainInformationForm = () => {

    // const formik = useFormik({
    //     initialValues: {
    //         title: '',
    //         cookingTime: null,
    //         ripeningTime: null,
    //         milkType: null,
    //         milkPH: null,
    //         protein: null,
    //         fat: null,
    //     },
    //     // validationSchema: LoginValidationSchema,
    //     onSubmit: (values, actions) => {
    //         const email = values.email
    //         const password = values.password
    //         const rememberMe = values.rememberMe
    //         dispatch(logInTC({email, password, rememberMe}))
    //         if (isAuth) {
    //             navigate('/')
    //         }
    //         actions.resetForm({values: {email: '', password: '', rememberMe: false}})
    //     }
    // })



    return (

        <div>
            {/*<form onSubmit={formik.handleSubmit}>*/}
            {/*    <div className={s.form}>*/}
            {/*        <TextField*/}
            {/*            {...formik.getFieldProps('email')}*/}
            {/*            size='small'*/}
            {/*            type="string"*/}
            {/*            label="Email"*/}
            {/*            sx={{margin: '10px', width: '204px'}}*/}
            {/*            error={!!formik.errors.email && formik.touched.email}*/}
            {/*            helperText={formik.touched.email ? formik.errors.email : null}/>*/}
            {/*        <TextField*/}
            {/*            {...formik.getFieldProps('password')}*/}
            {/*            InputProps={{*/}
            {/*                endAdornment: (*/}
            {/*                    <InputAdornment position="end">*/}
            {/*                        {!showHide*/}
            {/*                            ? <VisibilityIcon onClick={onClickShowPassword}/>*/}
            {/*                            : <VisibilityOffIcon onClick={onClickShowPassword}/>}*/}
            {/*                    </InputAdornment>*/}
            {/*                ),*/}
            {/*            }}*/}
            {/*            className={s.passwordField}*/}
            {/*            sx={{width: '204px'}}*/}
            {/*            size='small'*/}
            {/*            type={showHide ? 'text' : 'password'}*/}
            {/*            label="Password"*/}
            {/*            error={!!formik.errors.password && formik.touched.password}*/}
            {/*            helperText={formik.touched.password ? formik.errors.password : null}*/}
            {/*        />*/}

            {/*        <FormControlLabel*/}
            {/*            control={<Checkbox/>}*/}
            {/*            checked={formik.values.rememberMe}*/}
            {/*            name={"rememberMe"}*/}
            {/*            label={'remember'}*/}
            {/*            onChange={formik.handleChange}*/}
            {/*        />*/}
            {/*        <div className={s.forgot}><Link to={PATH.LOGIN.RESTORE_PASS} >Forgot Password?</Link></div>*/}

            {/*        <div className={s.buttons}>*/}
            {/*            <Button variant='contained' type="reset" onClick={formik.handleReset}*/}
            {/*                    sx={{marginRight: '30px'}}>*/}
            {/*                Cancel*/}
            {/*            </Button>*/}
            {/*            <Button variant='contained' type='submit'>*/}
            {/*                Sign in*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*        <span>Don't have account?</span>*/}
            {/*        <NavLink to={PATH.LOGIN.SIGN_UP} className={s.signLink}>Sign up</NavLink>*/}
            {/*    </div>*/}
            {/*</form>*/}
        </div>
    );
};

export default MainInformationForm;