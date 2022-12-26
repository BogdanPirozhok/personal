import * as HeroIcons from '@heroicons/react/24/outline';
import { IconName } from '@/const/types';

interface IconProps {
    name: IconName;
    className?: string;
}

export default function DynamicHeroIcon({ name, className }: IconProps) {
    const SingleIcon = HeroIcons[name];

    return (
        <SingleIcon className={ className } />
    );
}
