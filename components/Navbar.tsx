import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
    useEffect, useRef, useState, useCallback
} from 'react';
import Link from 'next/link';
import DynamicHeroIcon from '@/components/DynamicHeroIcon';
import { RootState } from '@/store';
import { RenderPageState } from '@/const/interfaces';
import { debounce } from 'lodash';

const classNames = require('classnames');

export default function Navbar() {
    const router = useRouter();

    const refs = useRef<(HTMLAnchorElement | null)[]>([]);

    const [isRendered, setIsRendered] = useState<boolean>(false);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [hoverLinkIndex, setHoverLinkIndex] = useState<number | null>(null);
    const [pages, setPages] = useState<RenderPageState[]>(
        useSelector((state: RootState) => state.pages)
    );

    const debounceSetIsResizing = useCallback(debounce(setIsResizing, 300), []);
    const debounceSetWindowWidth = useCallback(debounce(setWindowWidth, 250), []);

    useEffect(() => {
        const handleResize = () => {
            setIsResizing(true);

            debounceSetWindowWidth(window.innerWidth);
            debounceSetIsResizing(false);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setPages(
            pages.map((page, index) => {
                const item = { ...page };

                if (!item.originWidth || isResizing) {
                    item.originWidth = refs.current[index]?.clientWidth;
                }

                item.isActiveLink = page.link === router.pathname;
                item.isFocusedLink = item.isActiveLink || hoverLinkIndex === index;

                if (!isResizing) {
                    const newWidth: number | undefined = item.isFocusedLink
                        ? item.originWidth
                        : refs.current[index]?.clientHeight;

                    item.width = `${newWidth}px`;
                } else {
                    item.width = 'max-content';
                }

                return item;
            })
        );
        setIsRendered(true);
    }, [hoverLinkIndex, isResizing, router.pathname, windowWidth]);

    return (
        <nav
            className={classNames(
                'overflow-x-auto scrollbar-hide flex w-screen lg:w-[100%] mt-auto -ml-[10vw] lg:ml-0 px-[10vw] lg:px-0 space-x-2 mb-10 will-change-contents will-change-transform',
                {
                    'opacity-0': !isRendered || isResizing
                }
            )}
        >
            {
                pages.map((page, index) => (
                    <Link
                        scroll={ false }
                        key={ page.link }
                        href={ page.link }
                        ref={(ref) => {
                            refs.current[index] = ref;
                        }}
                        onMouseOver={() => setHoverLinkIndex(index)}
                        onMouseOut={() => setHoverLinkIndex(null)}
                        className={classNames(
                            'flex p-8 md:p-10 lg:p-12 min-w-max items-center rounded-xl text-primary-base space-x-2 overflow-hidden transition-all duration-300 will-change-contents will-change-transform',
                            {
                                'bg-primary-light': !page.isActiveLink,
                                'bg-primary-accent': page.isActiveLink
                            }
                        )}
                        style={{
                            width: page.width,
                            minWidth: page.width
                        }}
                    >
                        <DynamicHeroIcon
                            name={ page.icon }
                            className={classNames(
                                'h-10 w-10 min-w-10 transition-all duration-300',
                                {
                                    'text-primary-accent': !page.isActiveLink,
                                    'text-primary-base': page.isActiveLink
                                }
                            )}
                        />
                        <span
                            className={classNames(
                                'min-w-max text-2xl transition-all duration-300 opacity-0 translate-x-4 leading-none font-bold',
                                {
                                    'opacity-100': page.isFocusedLink,
                                    'translate-x-0': page.isFocusedLink
                                }
                            )}
                        >
                            { page.name }
                        </span>
                    </Link>
                ))
            }
        </nav>
    );
}
