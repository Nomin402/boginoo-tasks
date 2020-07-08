import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import {useHistory} from 'react-router-dom'

export const PassRecover = () => {

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 mt-4'>
                    Boginoo
                </div>
                <div className='font-ubuntu c-primary fs-32 lh-37 text-center mt-5 bold'>Нууц үг сэргээх</div>
                <div className='font-ubuntu fs-16 lh-25 mt-4 w-8 text-center'>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</div>
                <div className="mt-5">
                    <div className='font-ubuntu ph-4 fs-12 lh-18'>Цахим хаяг</div>
                    <Input placeholder='name@mail.domain' className='input h-5 w-8 mt-2 ph-4'/>
                </div>

                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 b-primary mt-4 w-8'>Илгээх</Button>     
                    
            </div>
        </Layout>
    )
}