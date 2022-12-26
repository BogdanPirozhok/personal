import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { StackState } from '@/const/interfaces';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';

const plural = require('plural-ru');

export default function Skills() {
    const stacks = useSelector(
        (state: RootState) => state.skills
            .reduce((accumulate: StackState[], skill) => {
                const stack = accumulate.find((current) => current.name === skill.stack);

                if (stack) {
                    stack.skills.push(skill);
                    stack.skills.sort((a, b) => b.experience - a.experience);
                } else {
                    accumulate.push({
                        name: skill.stack,
                        skills: [skill]
                    });
                }

                return accumulate.sort((a, b) => b.skills.length - a.skills.length);
            }, [])
    );

    const printExperience = (experience: number) => {
        const countYears = experience / 12;

        if (countYears >= 1) {
            return `${countYears} ${plural(countYears, 'год', 'года', 'лет')}`;
        }

        return `${experience} ${plural(experience, 'месяц', 'месяца', 'месяцев')}`;
    };

    return (
        <div>
            <PageTitle />

            {
                stacks.map((stack) => (
                    <div key={ stack.name }>
                        <div className="mt-14 flex items-center space-x-5">
                            <span className="block relative w-5 h-5 bg-primary-accent rounded-full ml-1 mt-0.5 border-[5px] border-gray-300 shadow-marker" />
                            <span className="text-title leading-none">
                                { stack.name }
                            </span>
                        </div>
                        <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 mt-6">
                            {
                                stack.skills.map((skill) => (
                                    <li
                                        key={ skill.name }
                                        className="group flex items-center"
                                    >
                                        <div className="flex items-center bg-white h-[100%] rounded-[6px] rounded-br-none rounded-tr-none sm:rounded-[6px] px-2 sm:p-4">
                                            <Image
                                                src={ require(`@/assets/images/icons/${skill.icon}`) }
                                                alt={ skill.name }
                                                className="h-6 sm:h-12 w-6 sm:w-12 object-contain"
                                            />
                                        </div>
                                        <p className="text-xs sm:text-base leading-none border border-l-0 rounded-br-[6px] rounded-tr-[6px] border-primary-accent pl-2 pr-3 sm:pl-4 sm:pr-6 py-2 text-white group-hover:bg-primary-accent transition">
                                            <span className="opacity-75 block">{ skill.name }</span>
                                            <span className="font-bold mt-0.5 block">{ printExperience(skill.experience) }</span>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}
