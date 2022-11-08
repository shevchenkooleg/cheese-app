import React from 'react';
import {useFormik} from "formik";
import s from "../../styles/Constructor.module.css";
import IntegerStep from "../uneversal/IntegerStep";
import DoubleSlider from "../uneversal/DoubleSlider";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";

const PasteurizationForm = () => {

    const formik = useFormik({
        initialValues: {
            pasteurizationTemperature: null,
            pasteurizationTime: null,
            coolingTemperature: null,
            milkPH: null,
        },
        // validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            const pasteurizationTemperature = values.pasteurizationTemperature
            const pasteurizationTime = values.pasteurizationTime
            const coolingTemperature = values.coolingTemperature
            const milkPH = values.milkPH

            // dispatch(logInTC({email, password, rememberMe}))
            // if (isAuth) {
            //     navigate('/')
            // }
            actions.resetForm({
                values: {
                    pasteurizationTemperature: null,
                    pasteurizationTime: null,
                    coolingTemperature: null,
                    milkPH: null,
                }
            })
        }
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.main}>
                    <IntegerStep title={'Температура термической обработки'} minRange={0} maxRange={100} defaultValue={72} step={1} postfix={'deg'}/>
                    <IntegerStep title={'Время термической обработки'} minRange={1} maxRange={60} defaultValue={15} step={1} postfix={"sec"}/>
                    <DoubleSlider title={'Температура охлаждения'} minRange={20} maxRange={40} step={1} defaultValues={[36,37]}/>
                    <DoubleSlider title={'pH обработанного молока'} minRange={6} maxRange={7} step={0.1} defaultValues={[6.4,6.5]}/>


                    {/*<TextField*/}
                    {/*    {...formik.getFieldProps('email')}*/}
                    {/*    size='small'*/}
                    {/*    type="string"*/}
                    {/*    label="Email"*/}
                    {/*    sx={{margin: '10px', width: '204px'}}*/}
                    {/*    error={!!formik.errors.email && formik.touched.email}*/}
                    {/*    helperText={formik.touched.email ? formik.errors.email : null}/>*/}
                    {/*<TextField*/}
                    {/*    {...formik.getFieldProps('password')}*/}
                    {/*    InputProps={{*/}
                    {/*        endAdornment: (*/}
                    {/*            <InputAdornment position="end">*/}
                    {/*                {!showHide*/}
                    {/*                    ? <VisibilityIcon onClick={onClickShowPassword}/>*/}
                    {/*                    : <VisibilityOffIcon onClick={onClickShowPassword}/>}*/}
                    {/*            </InputAdornment>*/}
                    {/*        ),*/}
                    {/*    }}*/}
                    {/*    className={s.passwordField}*/}
                    {/*    sx={{width: '204px'}}*/}
                    {/*    size='small'*/}
                    {/*    type={showHide ? 'text' : 'password'}*/}
                    {/*    label="Password"*/}
                    {/*    error={!!formik.errors.password && formik.touched.password}*/}
                    {/*    helperText={formik.touched.password ? formik.errors.password : null}*/}
                    {/*/>*/}

                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox/>}*/}
                    {/*    checked={formik.values.rememberMe}*/}
                    {/*    name={"rememberMe"}*/}
                    {/*    label={'remember'}*/}
                    {/*    onChange={formik.handleChange}*/}
                    {/*/>*/}
                    {/*<div className={s.forgot}><Link to={PATH.LOGIN.RESTORE_PASS} >Forgot Password?</Link></div>*/}

                    <div>
                        {/*<Button variant='contained' type="reset" onClick={formik.handleReset}*/}
                        {/*        sx={{marginRight: '30px'}}>*/}
                        {/*    Cancel*/}
                        {/*</Button>*/}
                        {/*<Button variant='contained' type='submit'>*/}
                        {/*    Sign in*/}
                        {/*</Button>*/}
                    </div>
                    {/*<span>Don't have account?</span>*/}
                    {/*<NavLink to={PATH.LOGIN.SIGN_UP} className={s.signLink}>Sign up</NavLink>*/}
                </div>
                <div className={s.btnBlock}>
                    <ApplyCancelBtnBlock btnData={[
                        {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.MAIN, callback:()=>{}},
                        {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.RIPENING, callback:()=>{}}]}/>
                </div>

            </form>
        </div>
    );
};

export default PasteurizationForm;