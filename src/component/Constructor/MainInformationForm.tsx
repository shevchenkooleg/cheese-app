import s from '../../styles/Constructor.module.css'
import IntegerStep from '../uneversal/IntegerStep';
import DoubleSlider from "../uneversal/DoubleSlider";
import MultipleSelect from "../uneversal/MultipleSelect";
import UInput from "../uneversal/UInput";
import ApplyCancelBtnBlock from "../uneversal/ApplyCancelBtnBlock";
import {PATH} from '../../utils/appPath';
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setMainInformation} from '../../bll/slices/newRecipeSlice';

const MainInformationForm = () => {

    const dispatch = useAppDispatch()
    const newRecipeData = useAppSelector(state => state.newRecipe.mainInformation)

    // useEffect(() => {
    //     console.log('updateData')
    //     console.log(newRecipeData)
    // }, [newRecipeData])

    const [titleValue, setTitleValue] = useState(newRecipeData ? newRecipeData.title : '')
    const [cookingTime, setCookingTime] = useState(newRecipeData ? newRecipeData.cookingTime : 4)
    const [milkType, setMilkType] = useState(newRecipeData.initialData ? newRecipeData.initialData.milkType : [] as string[])
    const [milkPH, setMilkPH] = useState(newRecipeData.initialData ? [newRecipeData.initialData.milkPH.min, newRecipeData.initialData.milkPH.max] as [number, number] : [6.6, 6.7] as [number, number])
    const [protein, setProtein] = useState(newRecipeData.initialData ? [newRecipeData.initialData.protein.min, newRecipeData.initialData.protein.max] as [number, number] : [3.2, 3.4] as [number, number])
    const [fat, setFat] = useState(newRecipeData.initialData ? [newRecipeData.initialData.fat.min, newRecipeData.initialData.fat.max] as [number, number] :[3.6, 4.0] as [number, number])

    const onSubmitHandler = () => {

        const mainInformationData = {
            title: titleValue,
            cookingTime: cookingTime,
            initialData: {
                milkType: milkType,
                milkPH: {min: milkPH[0], max: milkPH[1]},
                protein: {min: protein[0], max: protein[1]},
                fat: {min: fat[0], max: fat[1]},
            }
        }
        dispatch(setMainInformation({newRecipe: mainInformationData}))
    }


    return (

        <div>
            <div className={s.main}>
                <UInput title={'Наименование'} placeholderValue={'Название сыра'} callback={setTitleValue}
                        value={titleValue}
                />
                <IntegerStep title={'Время приготовления'} minRange={1} maxRange={10} postfix={"hour"}
                             value={cookingTime} callback={setCookingTime}
                />
                <MultipleSelect valuePool={['Коровье', 'Козье', 'Ежовое', 'Смешанное']} title={'Тип молока'}
                                value={milkType} callback={setMilkType} placeholder={'Выберите тип молока'}
                />
                <DoubleSlider title={'pH холодного молока'} minRange={6} maxRange={7} step={0.1} value={milkPH}
                              callback={setMilkPH}
                />
                <DoubleSlider title={'Содержание белка'} minRange={3} maxRange={4} step={0.1} value={protein}
                              callback={setProtein}
                />
                <DoubleSlider title={'Жирность'} minRange={3} maxRange={5} step={0.1} value={fat}
                              callback={setFat}
                />
            </div>
            <div className={s.btnBlock}>
                <ApplyCancelBtnBlock btnData={[
                    {
                        title: 'Назад', linkPath: PATH.LIBRARY.CHEESES.MAIN, callback: () => {
                        }
                    },
                    {
                        title: 'Далее', linkPath: PATH.LIBRARY.CHEESES.CONSTRUCTOR.PASTEURIZATION, callback: () => {
                            onSubmitHandler()
                        }
                    }]}/>
            </div>
        </div>
    );
};

export default MainInformationForm;