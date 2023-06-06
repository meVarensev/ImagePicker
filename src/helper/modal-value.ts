import {IPropsModalValue} from "./types";

export const modalValueErrorInfo: IPropsModalValue = {
    severity: "warning",
    alertTitle: "Ошибка",
    text: "Добавьте фотографии",
    strongText: "в слайдер!",
}

export const modalValueSuccessInfo: IPropsModalValue = {
    severity: "success",
    alertTitle: "Успешно",
    text: "Продукт успешно добавлен",
    strongText: "в корзину!",
}


export const modalValueWarningInfo: IPropsModalValue = {
    severity: 'warning',
    alertTitle: 'Нет фотографий',
    text: 'Пожалуйста, выберите',
    strongText: 'фотографии!',
};
