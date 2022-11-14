export type DataRangeType = {
    min: number
    max: number
}

export type MainInformationInitialDataType = {
    milkType: string[]
    milkPH: DataRangeType
    protein: DataRangeType
    fat: DataRangeType
}

export type MainInformationType = {
    title: string
    cookingTime: number
    initialData: MainInformationInitialDataType
}

export type PasteurizationType = {
    pasteurizationTemperature: number
    pasteurizationTime: number
    coolingTemperature: DataRangeType
    milkPH: DataRangeType
}

export type LeavenType = {
    title: string[]
    time: DataRangeType
}

export type ClottingType = {
    temperature: number
    k: number
    time: number
}

export type EnzymeType = {
    title: string[]
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
    type: string

}
export type KneadingType = {
    time: number
}

export type SpicesWeightType = {
    total: number,
    option: string,
}

export type SpicesType = {
    type: string[]
    weight: SpicesWeightType
    additionally: string
}
export type SecondHeatingType = {
    heatingTemperature: DataRangeType
    heatingTime: DataRangeType
}
export type LayoutType = {
    type: string[]
    milkPH: DataRangeType
}
export type CoupsType = {
    first: number
    restCount: number
    restTime: DataRangeType
    totalTime: DataRangeType
    drainageType: string
    milkPH: DataRangeType
    finallyTime: DataRangeType | null
    finalAction: string | null
    finallyTemperature: DataRangeType | null
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
    saltingType: string
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
    care: string
}
export type StorageType = {
    storageTemperature: DataRangeType
}

export type RecipeType = {
    id: string
    mainInformation: MainInformationType
    pasteurization: PasteurizationType
    ripening: RipeningType
    cutting: CuttingType
    kneading: KneadingType
    secondHeating: SecondHeatingType | null
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

export type PostfixType = 'sec' | 'min' | 'hour' | 'deg' | 'unit' | '%' | 'cm' | 'g'


export type CreateRecipeParamsType = {
    title: string
    recipe: string
}

export type DBRecipeObjectType = {
    _id: string
    title: string
    recipe: string
    __v: number
}

export type CreateLeavenParamsType = {
    title: string,
    leavenPowerMin: number,
    leavenPowerMax: number,
    leavenConcentration: string,
    initialWeight: number,
    dateOfManufacture: string,
    dateOfPacketOpen: string
}
export type LeavenObjectType = {
    _id: string
    title: string,
    leavenPowerMin: number,
    leavenPowerMax: number,
    leavenConcentration: string,
    initialWeight: number,
    dateOfManufacture: string,
    dateOfPacketOpen: string
}
export type CreateEnzymeParamsType = {
    title: string,
    enzymePowerMin: number,
    enzymePowerMax: number,
    initialWeight: number,
    bestBeforeDate: string,
    dateOfPacketOpen: string
}
export type EnzymeObjectType = {
    _id: string
    title: string,
    enzymePowerMin: number,
    enzymePowerMax: number,
    initialWeight: number,
    bestBeforeDate: string,
    dateOfPacketOpen: string
}


// export type RecipeDBType = {
//     mainInformation: {
//         id: number
//         title: string
//         cookingTime: number
//         ripeningTime: number
//         initialData: {
//             milkType: String[]
//             milkPH: DataRangeType
//             protein: DataRangeType
//             fat: DataRangeType
//         }
//     }
//     pasteurization: PasteurizationType
//     ripening: RipeningType
//     cutting: {
//         size:
//             {
//                 width: number
//                 long: number
//             }
//         type: string[]
//     }
//     kneading: KneadingType
//     secondHeating: SecondHeatingType
//     spices: {
//         type: string[]
//         weight: {
//             total: number,
//             option: string,
//         }
//         additionally: string[]
//     } | null
//     layout: {
//         type: string[]
//         milkPH: DataRangeType
//     }
//     coups: {
//         first: number
//         restCount: number
//         restTime: DataRangeType
//         totalTime: DataRangeType
//         drainageType: string
//         milkPH: DataRangeType
//         finallyTime: DataRangeType
//         finalAction: string
//         finallyTemperature: DataRangeType
//     }
//     salting: SaltingType
//     drying: DryingType
//     aging: AgingType
//     storage: StorageType
// }
