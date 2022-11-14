import React from 'react';
import {Button} from "antd";
import Link from "next/link";

type ApplyCancelBtnBlockPropsType = {
    btnData: {title: string, linkPath: string, callback: () => void, new?: boolean}[]
}

const ApplyCancelBtnBlock: React.FC<ApplyCancelBtnBlockPropsType> = ({btnData}) => {

    return (

        <div className='w-[100%] flex justify-evenly'>
            {btnData.map((btn,key)=><Link href={btn.linkPath} key={key}><Button ghost onClick={btn.callback}>{btn.title}</Button></Link>)}
        </div>
    );
};

export default ApplyCancelBtnBlock;