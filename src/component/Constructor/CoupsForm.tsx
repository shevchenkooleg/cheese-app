import React, {CSSProperties, useState} from 'react';
import {useFormik} from "formik";
import s from "../../styles/Constructor.module.css";
import MyCheckBox from "../uneversal/MyCheckBox";
import MultipleSelect from "../uneversal/MultipleSelect";
import IntegerStep from "../uneversal/IntegerStep";
import TextArea from "antd/lib/input/TextArea";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from "../../utils/appPath";
import DoubleSlider from "../uneversal/DoubleSlider";
import SingleSelect from "../uneversal/SingleSelect";

const CoupsForm = () => {

    const [finalAction, setFinalAction] = useState(false)

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
                    <IntegerStep title={'Время первого переворота'} minRange={1} maxRange={120} defaultValue={1} postfix={'min'}/>
                    <IntegerStep title={'Общее количество переворотов'} minRange={1} maxRange={8} defaultValue={6}/>
                    <DoubleSlider title={'Интервал между следующими переворотами, минут'} minRange={5} maxRange={60} step={1} defaultValues={[30,40]}/>
                    <DoubleSlider title={'Время дренажирования, часов'} minRange={1} maxRange={24} step={0.5} defaultValues={[3,5]}/>
                    <DoubleSlider title={'pH зерна целевой'} minRange={4} maxRange={6} step={0.1} defaultValues={[5.2,5.3]}/>
                    <MyCheckBox title={'Финальное действие'} callback={setFinalAction} isChecked={finalAction} style={{}} />
                    {finalAction && <SingleSelect values={['подготовка к росту дрожжей','остановка кислотности']} title={''} placeholder={'выберете финальное действие'}/>}
                    {/*{finalAction && <DoubleSlider title={'температура охлаждения'} minRange={1} maxRange={15} step={1} defaultValues={[8,12]}/>}*/}
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
                        {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.LAYOUT, callback:()=>{}},
                        {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.SALTING, callback:()=>{}}]}/>
                </div>

            </form>
        </div>
    );
};

export default CoupsForm;