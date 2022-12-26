import { createSlice } from '@reduxjs/toolkit';
import { SkillState } from '@/const/interfaces';

const initialState: SkillState[] = [
    {
        name: 'Laravel',
        icon: 'laravel-logo.svg',
        experience: 4 * 12,
        stack: 'Backend'
    },
    {
        name: 'Symfony',
        icon: 'symfony-logo.svg',
        experience: 6,
        stack: 'Backend'
    },
    {
        name: 'Yii 2',
        icon: 'yii-logo.svg',
        experience: 8,
        stack: 'Backend'
    },
    {
        name: 'Adonis.js',
        icon: 'adonisjs-icon.svg',
        experience: 5,
        stack: 'Backend'
    },
    {
        name: 'Express.js',
        icon: 'expressjs-icon.svg',
        experience: 4,
        stack: 'Backend'
    },
    {
        name: 'MySql',
        icon: 'mysql-icon.svg',
        experience: 4 * 12,
        stack: 'СУБД'
    },
    {
        name: 'PostgreSQL',
        icon: 'postgresql-icon.svg',
        experience: 3 * 12,
        stack: 'СУБД'
    },
    {
        name: 'Vue.js',
        icon: 'vue-logo.svg',
        experience: 4 * 12,
        stack: 'Frontend'
    },
    {
        name: 'React.js',
        icon: 'react-logo.svg',
        experience: 12,
        stack: 'Frontend'
    },
    {
        name: 'Angular',
        icon: 'angular-logo.svg',
        experience: 5,
        stack: 'Frontend'
    },
    {
        name: 'TypeScript',
        icon: 'typescriptlang-icon.svg',
        experience: 12,
        stack: 'Frontend'
    },
    {
        name: 'ReactNative',
        icon: 'react-native.svg',
        experience: 6,
        stack: 'Frontend'
    },
    {
        name: 'Expo',
        icon: 'expoio-icon.svg',
        experience: 9,
        stack: 'Frontend'
    },
    {
        name: 'IonicFramework',
        icon: 'ionicframework-icon.svg',
        experience: 12,
        stack: 'Frontend'
    },
    {
        name: 'NativeScript',
        icon: 'nativescript.svg',
        experience: 4,
        stack: 'Frontend'
    },
    {
        name: 'Bootstrap',
        icon: 'bootstrap-logo.svg',
        experience: 8,
        stack: 'Frontend'
    },
    {
        name: 'Tailwind',
        icon: 'tailwindcss-icon.svg',
        experience: 12,
        stack: 'Frontend'
    },
    {
        name: 'WordPress',
        icon: 'wordpress-logo.svg',
        experience: 2 * 12,
        stack: 'CMS'
    },
    {
        name: 'Shopify',
        icon: 'shopify-icon.svg',
        experience: 9,
        stack: 'CMS'
    }
];

const skills = createSlice({
    name: 'skills',
    initialState,
    reducers: {
    }
});

export default skills.reducer;
