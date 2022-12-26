import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/router';
import { PageState } from '@/const/interfaces';

export default function PageTitle() {
    const router = useRouter();
    const currentPage: (PageState | undefined) = useSelector(
        (state: RootState) => state.pages.find((page) => page.link === router.pathname)
    );

    return (
        <div>
            <p className="font-bold text-primary-accent text-2xl">{ currentPage?.name }</p>
            <p className="text-title mt-2">{ currentPage?.title }</p>
        </div>
    );
}
