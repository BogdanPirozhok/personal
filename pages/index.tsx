import MePhoto from '@/assets/images/common/me.jpg';
import Image from 'next/image';
import { AboutInfoState } from '@/const/interfaces';
import PageTitle from '@/components/PageTitle';

export default function Home() {
    const infoItems: AboutInfoState[] = [
        {
            name: 'Имя',
            value: 'Богдан Пирожок'
        },
        {
            name: 'Дата рождения',
            value: '14 июня, 1995'
        },
        {
            name: 'Семейное положение',
            value: 'Женат, есть ребенок'
        },
        {
            name: 'Уровень',
            value: 'Strong middle'
        },
        {
            name: 'Опыт работы',
            value: '7,5 лет'
        }
    ];
    return (
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-14 lg:space-y-0">
            <div className="flex w-[100%] lg:w-[55%] items-center lg:items-start -ml-[22%] xs:ml-0">
                <Image
                    src={ MePhoto }
                    alt="It`s me"
                    className="w-[68%] xs:w-[60%] rounded-xl object-cover max-h-[90%]"
                />
                <ul className="w-[50%] h-max bg-primary-accent rounded-xl lg:mt-auto -ml-[10%] px-5 sm:px-8 py-3 sm:py-6 min-w-[184px] sm:min-w-[220px]">
                    {
                        infoItems.map((item) => (
                            <li
                                key={ item.name }
                                className="[&:not(:last-child)]:border-b-[1px] border-dashed border-primary-base/40 [&:not(:last-child)]:mb-3 [&:not(:last-child)]:pb-3"
                            >
                                <p className="font-normal text-primary-base/70">{ item.name }</p>
                                <p className="font-bold text-primary-base">{ item.value }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-[100%] lg:w-[45%]">
                <PageTitle />

                <p className="text-xl text-gray-100 my-8">
                    Разработка WEB и мобильных приложений,
                    с помощью некоторых кроссплатформенных фреймворков
                </p>

                <p className="text-xl font-light text-gray-200">
                    Привет! Меня зовут Богдан и я благодарен за визит на эту страницу.<br />
                    Я, разработчик самоучка, практик с большим опытом,
                    высокой степенью самоорганизации и вниманию к мелочам.<br />
                    Все это позволяет мне объективно оценивать и выполнять проекты
                    различной сложности в оптимальные сроки,
                    добиваясь максимальных качественных показателей.
                </p>

                <a href="#" className="btn mt-8">
                    Скачать резюме
                </a>
            </div>
        </div>
    );
}
