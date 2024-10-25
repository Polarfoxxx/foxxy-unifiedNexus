import React from 'react';
import { updateCookie } from '../../../APIs/cookie';
import { Type_RootState, setUserLogData } from '../../../../redux';
import { useSelector, useDispatch } from 'react-redux';

function ColorSwitcher(): JSX.Element {
    const USER_DATA = useSelector((state: Type_RootState) => state.userLogData);
    const dispatch = useDispatch()

    const handleColorChange = async (selectTheme: string) => {
        try {
            const resp_updateCookie = await updateCookie(selectTheme);
            if (resp_updateCookie === 200) {
                dispatch(setUserLogData({
                    ...USER_DATA,
                    appTheme: selectTheme
                }))
            };
        } catch (error) {
            console.error('Error:', error);
        };
    };


    return (
        <div className=' w-full h-full flex flex-col items-center justify-end bg-transparent p-2'>
            <label
                className=' text-thems-defaultTextColorDark text-[12px]'
                htmlFor="colorSwitcher">
                Color theme:
            </label>
            <select
                className=' w-16 text-center rounded-md cursor-pointer'
                id="colorSwitcher"
                value={USER_DATA.appTheme}
                onChange={(e) => handleColorChange(e.target.value)}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </div>
    );
};

export default ColorSwitcher;

