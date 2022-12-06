import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer } from './styles';
import { IInput } from './types';

const Input = ({leftIcon, name, control, ...rest}: IInput) => {

  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: {value, onChange } }) =>  <InputText value={value} onChange={onChange} {...rest} />}
      />
       
    </InputContainer>
  )
}

export { Input }; 
