import React, { memo } from 'react';
import Btn from 'components/Btn';
import Input from 'components/Input';
import './Form.css';

const Grid = memo(() => {
  return (
    <>
      <form className='form'>
        <label for='name' className='label form--label'>
          Name:
        </label>
        <Input id='name' name='name' className='form--control' />
        <label for='address' className='label form--label'>
          Address:
        </label>
        <Input id='address' name='address' className='form--control' />
        <label for='phone' className='label form--label'>
          Phone:
        </label>
        <Input id='phone' name='phone' className='form--control' />
        <label for='comment' className='label form--label'>
          Comment:
        </label>
        <Input id='comment' name='comment' className='form--control' />
        <Btn type='submit' label='submit' className='form--submit' />
      </form>
    </>
  );
});

export default Grid;
