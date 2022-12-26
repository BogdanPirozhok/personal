import PageTitle from '@/components/PageTitle';
import DynamicHeroIcon from '@/components/DynamicHeroIcon';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { ContactInputs } from '@/const/interfaces';
import { useToasts } from 'react-toast-notifications';

const classNames = require('classnames');

export default function Contact() {
    const { addToast } = useToasts();
    const [isSendingForm, setIsSendingForm] = useState<boolean>(false);

    const {
        register, handleSubmit, formState: { errors }, reset
    } = useForm<ContactInputs>();

    const onSubmit: SubmitHandler<ContactInputs> = (data) => {
        if (!isSendingForm) {
            setIsSendingForm(true);

            // TODO: Сделать валидацию на формать емейла и телефонв
            axios
                .post('/api/form', { data })
                .then(() => {
                    // TODO: Стиль шрифта уведомления
                    addToast('Спасибо!, я свяжусь с вами в ближайшее время', { appearance: 'success' });
                    reset();
                })
                .catch(() => {
                    addToast('Что-то пошло не так, пожалуйста повторите попытку позже', { appearance: 'error' });
                })
                .finally(() => setIsSendingForm(false));
        }
    };

    return (
        <div>
            <PageTitle />

            <div className="flex space-x-0 md:space-x-12 space-y-16 md:space-y-0 pt-16 flex-col md:flex-row">
                <ul className="flex flex-col space-y-6 w-full md:w-[40%]">
                    <li className="contact-item">
                        <DynamicHeroIcon
                            name="DevicePhoneMobileIcon"
                            className="contact-item__icon"
                        />
                        <p className="contact-item__text">
                            <span>Телефон</span>
                            <a href="tel:380997653276">+38 099 76 532 76</a>
                        </p>
                    </li>
                    <li className="contact-item">
                        <DynamicHeroIcon
                            name="EnvelopeIcon"
                            className="contact-item__icon"
                        />
                        <p className="contact-item__text">
                            <span>Email</span>
                            <a href="mailto:bogdan.pirozhok@gmail.com" className="break-all">bogdan.pirozhok@gmail.com</a>
                        </p>
                    </li>
                    <li className="contact-item">
                        <DynamicHeroIcon
                            name="MapPinIcon"
                            className="contact-item__icon"
                        />
                        <p className="contact-item__text">
                            <span>Адрес</span>
                            <a href="https://goo.gl/maps/RNnftvjKNVGbbMv8A" target="blank">
                                Limonluk sok. OliveGarden sitesi, 07410 Alanya/Antalya
                            </a>
                        </p>
                    </li>
                </ul>
                <form
                    className="w-full md:w-[60%] space-y-6"
                    onSubmit={ handleSubmit(onSubmit) }
                >
                    <div className="form-wrap">
                        <input type="text" placeholder="Ваше имя"
                            className={classNames(
                                'form-wrap__input',
                                {
                                    'form-wrap__input--error': errors.name
                                }
                            )}
                            { ...register('name', { required: true }) }
                        />
                        <input type="email" placeholder="Ваш E-mail"
                            className={classNames(
                                'form-wrap__input',
                                {
                                    'form-wrap__input--error': errors.email
                                }
                            )}
                            { ...register('email', { required: true }) }
                        />
                    </div>
                    <div className="form-wrap">
                        <input type="tel" placeholder="Номер телефона"
                            className={classNames(
                                'form-wrap__input',
                                {
                                    'form-wrap__input--error': errors.phone
                                }
                            )}
                            { ...register('phone', { required: true }) }
                        />
                        <input type="text" placeholder="Тема сообщения"
                            className={classNames(
                                'form-wrap__input',
                                {
                                    'form-wrap__input--error': errors.subject
                                }
                            )}
                            { ...register('subject', { required: true }) }
                        />
                    </div>
                    <div className="form-wrap">
                        <textarea placeholder="Ваше сообщение..."
                            className={classNames(
                                'form-wrap__input form-wrap__input--textarea',
                                {
                                    'form-wrap__input--error': errors.message
                                }
                            )}
                            { ...register('message', { required: true }) }
                        />
                    </div>
                    <button className="btn" type="submit">
                        { isSendingForm ? 'Обработка...' : 'Отправить'}
                    </button>
                </form>
            </div>
        </div>
    );
}
