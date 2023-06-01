import React, {ReactNode} from 'react';
import style from "./main.module.scss"
interface MainProps {
    children: ReactNode;
}

const Main : React.FC<MainProps> = ({children}) =>{
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export {Main};
