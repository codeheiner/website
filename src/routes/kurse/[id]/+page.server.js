import { redirect } from '@sveltejs/kit';
import { PROD_API_KEY, TEST_API_KEY } from '$env/static/private';
import Stripe from 'stripe';



let kurse = {
    k1 : {"price":"price_1MnOIbDlv47dRGNIEoIojwrw", "name": "Programmieren für Einsteiger", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},
    k2 : {"price":"price_1MqwM4Dlv47dRGNIHsJ3ANhk", "name": "Machine Learning Basics", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},
    k3 : {"price":"price_1MnTKkDlv47dRGNIQTjWDKpX", "name": "DevOps", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},
    k4 : {"price":"price_1MqwMfDlv47dRGNIndWXNNEG", "name": "Cloud-Architektur", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},
    k5 : {"price":"price_1MqwNXDlv47dRGNIdzp6Ll5W", "name": "Software-Engineering", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},
    k6 : {"price":"price_1MqwNrDlv47dRGNICY76EtGM", "name": "Realtime Python", "beschreibung": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."},

}

export function load({ params }) {
    const kurs = params.id

    return  kurse[kurs]
}

export const actions = {

    buchung: async ({ params }) => {
        // @ts-ignore
        var stripe = Stripe(process.env.PROD_API_KEY)

        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: kurse[params.id]["price"], quantity: 1}],
            mode: "payment",
            success_url: "http://www.codeheiner.de/bezahlen",
            cancel_url: "http://www.codeheiner.de/abbruch"
        });

        throw redirect(303, session.url)
    }
}