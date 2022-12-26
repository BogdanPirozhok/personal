import { createSlice } from '@reduxjs/toolkit';
import { PageState } from '@/const/interfaces';

const initialState: PageState[] = [
    {
        link: '/',
        icon: 'UserIcon',
        name: 'Обо мне',
        title: 'Fullstack web разработчик'
    },
    {
        link: '/skills',
        icon: 'DocumentTextIcon',
        name: 'Специализация',
        title: 'Сочетание навыков и опыта'
    },
    {
        link: '/portfolio',
        icon: 'FolderOpenIcon',
        name: 'Партфолио',
        title: 'Некоторые примеры выполненных проектов'
    },
    {
        link: '/contact',
        icon: 'EnvelopeIcon',
        name: 'Контакты',
        title: 'Если у вас возникли вопросы, я буду рад на них ответить'
    }
];

const pages = createSlice({
    name: 'pages',
    initialState,
    reducers: {
    }
});

export default pages.reducer;
