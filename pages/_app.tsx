import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Ubuntu } from '@next/font/google';
import { Provider } from 'react-redux';
import FirstScreen from '@/components/FirstScreen';
import { store } from '@/store';
import { ToastProvider } from 'react-toast-notifications';

const ubuntu = Ubuntu({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '700'],
    variable: '--font-ubuntu'
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ToastProvider>
                <div className={`w-[80%] max-w-[1440px] mx-auto ${ubuntu.variable} font-sans`}>
                    <FirstScreen />
                    <div className="bg-primary-light p-6 md:p-10 mb-10 lg:p-14 rounded-xl">
                        <Component
                            {...pageProps}
                        />
                    </div>
                </div>
            </ToastProvider>
        </Provider>
    );
}
