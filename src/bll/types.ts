export type milkTypeType = 'Коровье' | 'Козье' | 'Смесь'
export type CuttingTypeType = 'кукурузное зерно' | 'нарезка венчиком'
export type LayoutTypeType = 'выкладка наливом с сывороткой через формы (ковш)' | 'насыпью без сыворотки (сито)'
export type SpicesTypeType = 'розмарин' | 'итальянские травы' | 'лук-шалот' | 'перец' | 'сухой чеснок' | 'пажитник'

export type DataRangeType = {
    min: number
    max: number
}

export type MainInformationInitialDataType = {
    milkType: milkTypeType[]
    milkPH: DataRangeType
    protein: DataRangeType
    fat: DataRangeType
}

export type MainInformationType = {
    id: number
    title: string
    cookingTime: number
    ripeningTime: number
    initialData: MainInformationInitialDataType
}

export type PasteurizationType = {
    pasteurizationTemperature: number
    pasteurizationTime: number
    coolingTemperature: DataRangeType
    milkPH: DataRangeType
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
    leaven: LeavenType
    enzyme: EnzymeType
}

export type CuttingSizeType = {
    width: number
    long: number
}

export type CuttingType = {
    size: CuttingSizeType
    type: CuttingTypeType[]

}
export type KneadingType = {
    time: number
}

export type SpicesWeightType = {
    total: number,
    option: string,
}

export type SpicesType = {
    type: SpicesTypeType[]
    weight: SpicesWeightType
    additionally: string[]
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
    first: number
    restCount: number
    restTime: DataRangeType
    totalTime: DataRangeType
    drainageType: 'самопрессование' | 'искусственное прессование'
    milkPH: DataRangeType
    finallyTime: DataRangeType
    finalAction: string
    finallyTemperature: DataRangeType
}
export type DrySaltingType = {
    totalWeight: DataRangeType
    saltingTime: number
}
export type WetSaltingType = {
    concentration: number
    brinePH: DataRangeType
    saltingTime: number
}
export type SaltingType = {
    dry: DrySaltingType
    wet: WetSaltingType
}
export type DryingType = {
    dryingTime: DataRangeType
    dryingTemperature: DataRangeType
    dryingHumidity: DataRangeType
}
export type AgingType = {
    agingTime: DataRangeType
    agingTemperature: DataRangeType
    agingHumidity: DataRangeType
    care: string[]
}
export type StorageType = {
    storageTemperature: DataRangeType
}

export type RecipeType = {
    mainInformation: MainInformationType
    pasteurization: PasteurizationType
    ripening: RipeningType
    cutting: CuttingType
    kneading: KneadingType
    secondHeating: SecondHeatingType
    spices: SpicesType | null
    layout: LayoutType
    coups: CoupsType
    salting: SaltingType
    drying: DryingType
    aging: AgingType
    storage: StorageType
}

export type NavigationType = {
    id: number
    title: string
    path: string
}
