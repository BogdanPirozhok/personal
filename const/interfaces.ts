import { IconName } from '@/const/types';

interface PageState {
    link: string
    icon: IconName
    name: string
    title: string
}
interface RenderPageState {
    link: string
    icon: IconName
    name: string
    title: string
    originWidth?: number
    width?: string,
    isActiveLink?: boolean
    isFocusedLink?: boolean
}
interface AboutInfoState {
    name: string
    value: string
}
interface SkillState {
    name: string
    icon: string
    experience: number
    stack: string
}
interface StackState {
    name: string
    skills: SkillState[]
}
interface ContactInputs {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

export type {
    PageState,
    RenderPageState,
    AboutInfoState,
    SkillState,
    StackState,
    ContactInputs
};
