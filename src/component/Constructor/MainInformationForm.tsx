import { useFormik } from 'formik';
import s from '../../styles/Constructor.module.css'
import IntegerStep from '../uneversal/IntegerStep';
import DoubleSlider from "../uneversal/DoubleSlider";
import MultipleSelect from "../uneversal/MultipleSelect";
import UInput from "../uneversal/UInput";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import { PATH } from '../../utils/appPath';

const MainInformationForm = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            cookingTime: null,
            milkType: null,
            milkPH: null,
            protein: null,
            fat: null,
        },
        // validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            const title = values.title
            const cookingTime = values.cookingTime
            const milkType = values.milkType
            const milkPH = values.milkPH
            const protein = values.protein
            const fat = values.fat
            // dispatch(logInTC({email, password, rememberMe}))
            // if (isAuth) {
            //     navigate('/')
            // }
            actions.resetForm({values: {title: '',
                    cookingTime: null,
                    milkType: null,
                    milkPH: null,
                    protein: null,
                    fat: null,}})
        }
    })


    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.main}>
                    <UInput title={'Наименование'} placeholderValue={'Название сыра'}/>
                    <IntegerStep title={'Время приготовления'} minRange={1} maxRange={10} postfix={"hour"} defaultValue={4}/>
                    <MultipleSelect title={'Тип молока'} values={['Коровье','Козье','Ежовое','Смешанное']} placeholder={'Выберите тип молока'}/>
                    <DoubleSlider title={'pH холодного молока'} minRange={6} maxRange={7} step={0.1} defaultValues={[6.6,6.7]}/>
                    <DoubleSlider title={'Содержание белка'} minRange={3} maxRange={4} step={0.1} defaultValues={[3.2,3.4]}/>
                    <DoubleSlider title={'Жирность'} minRange={3} maxRange={5} step={0.1} defaultValues={[3.6,4.0]}/>


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
                        {title:'Назад', linkPath: PATH.LIBRARY.CHEESES.MAIN, callback:()=>{}},
                        {title:'Далее',linkPath:PATH.LIBRARY.CHEESES.CONSTRUCTOR.PASTEURIZATION, callback:()=>{}}]}/>
                </div>

            </form>
        </div>
    );
};

export default MainInformationForm;