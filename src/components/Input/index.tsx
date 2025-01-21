import { BoxInput } from '../BoxInput';
import { Label } from '../ui/label';
import { Input as InputComponent } from '../ui/input';
import React from 'react';

type InputType = {
  htmlFor: string;
  id: string;
  type: string;
  placeholder: string;
  className?: string;
  labelText: string;
  name:string;
};

export const Input = ({
  htmlFor,
  id,
  type,
  placeholder,
  labelText,
  children,
  name,
}: InputType & { children?: React.ReactNode }) => {
  return (
    <BoxInput>
      {children ? (
        <div className="flex items-center">
          <Label htmlFor={htmlFor}>{labelText}</Label>
          {children}
        </div>
      ) : (
        <Label htmlFor={htmlFor} >{labelText}</Label>
      )}
      <InputComponent id={id} type={type} placeholder={placeholder} name={name} />
    </BoxInput>
  );
};
