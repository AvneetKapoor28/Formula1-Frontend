import {Poppins, Noto_Sans} from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add different weights you need
})

export const noto_sans = Noto_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add different weights you need
})