import React, {useState} from 'react';
import {useFormik} from "formik";
import s from "../../styles/Constructor.module.css";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import SingleSelect from "../uneversal/SingleSelect";
import IntegerStep from "../uneversal/IntegerStep";
import DoubleSlider from "../uneversal/DoubleSlider";

const SaltingForm = () => {

    const [saltingType, setSaltingType] = useState('')

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
                    <SingleSelect title={'Тип посолки'} values={['Рассол','По-сухому']} placeholder={'выберите тип посолки'} callback={setSaltingType}/>
                    {saltingType === 'Рассол' && <IntegerStep title={'Концентрация раствора, %'} minRange={1} maxRange={50} defaultValue={20} postfix={'%'}/>}
                    {saltingType === 'Рассол' && <DoubleSlider title={'ph раствора'} minRange={5} maxRange={6} step={0.1} defaultValues={[5.2,5.3]}/>}
                    {saltingType === 'По-сухому' && <DoubleSlider title={'Количество соли на 1 кг веса сыра, г'} minRange={1} maxRange={50} step={1} defaultValues={[20,22]}/>}

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
                        {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.COUPS, callback:()=>{}},
                        {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.DRYING, callback:()=>{}}]}/>
                </div>

            </form>
        </div>
    );
};

export default SaltingForm;