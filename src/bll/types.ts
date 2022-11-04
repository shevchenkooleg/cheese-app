export type milkTypeType = 'Коровье' | 'Козье' | 'Смесь'
export type CuttingTypeType = 'кукурузное зерно' | 'нарезка венчиком'
export type LayoutTypeType = 'выкладка наливом с сывороткой через формы (ковш)' | 'насыпью без сыворотки (сито)'

export type DataRangeType = {
    min: number
    max: number
}

export type MainInformationInitialDataType = {
    milkType: milkTypeType[],
    milkPH: DataRangeType,
    protein: DataRangeType,
    fat: DataRangeType,
}

export type MainInformationType = {
    title: string
    cookingTime: number
    ripeningTime: number
    initialData: MainInformationInitialDataType,
}

export type PasteurizationType = {
    pasteurizationTemperature: number,
    pasteurizationTime: number,
    coolingTemperature: DataRangeType,
    milkPH: DataRangeType,
}

export type LeavenType = {
    title: string
    value: DataRangeType
    time: DataRangeType
}

export type ClottingType = {
    time: number
    temperature: number
    k: number
}

export type EnzymeType = {
    title: string
    value: DataRangeType
    clotting: ClottingType
}

export type RipeningType = {
    leaven: LeavenType,
    enzyme: EnzymeType
}

export type CuttingSizeType = {
    width: number
    long: number
}

export type CuttingType = {
    size: CuttingSizeType,
    type: CuttingTypeType[]

}
export type KneadingType = {
    time: number
}
export type SecondHeatingType = {
    heatingTemperature: DataRangeType
    heatingTime: DataRangeType
}
export type LayoutType = {
    type: LayoutTypeType[]
    milkPH: DataRangeType
}
export type CoupsType = {
    first: number,
    restCount: number,
    restTime: DataRangeType
    totalTime: DataRangeType
    milkPH: DataRangeType
}


export type RecipeType = {
    mainInformation: MainInformationType,
    pasteurization: PasteurizationType,
    ripening: RipeningType,
    cutting: CuttingType,
    kneading: KneadingType,
    secondHeating: SecondHeatingType,
    layout: LayoutType,
    coups: CoupsType,
}

export type NavigationType = {
    id: number
    title: string,
    path: string
}
