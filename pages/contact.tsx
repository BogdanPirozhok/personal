import PageTitle from '@/components/PageTitle';
import DynamicHeroIcon from '@/components/DynamicHeroIcon';

export default function Contact() {
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
                <form action="#" className="w-full md:w-[60%] space-y-6">
                    <div className="form-wrap">
                        <input type="text" name="name" placeholder="Ваше имя" className="form-wrap__input" />
                        <input type="email" name="email" placeholder="Ваш E-mail" className="form-wrap__input" />
                    </div>
                    <div className="form-wrap">
                        <input type="tel" name="phone" placeholder="Номер телефона" className="form-wrap__input" />
                        <input type="text" name="subject" placeholder="Тема сообщения" className="form-wrap__input" />
                    </div>
                    <div className="form-wrap">
                        <textarea name="message" placeholder="Ваше сообщение..." className="form-wrap__input form-wrap__input--textarea" />
                    </div>
                    <button className="btn" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}
