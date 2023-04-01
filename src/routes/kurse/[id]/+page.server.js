import { redirect } from '@sveltejs/kit';
import { PROD_API_KEY, TEST_API_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { kurse } from '$lib/Kursangebot';


export function load({ params }) {
    const kurs = params.id
    return  kurse[kurs]
}

export const actions = {

    buchung: async ({ params }) => {
        // @ts-ignore
        var stripe = Stripe(PROD_API_KEY)

        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: kurse[params.id]["price"], quantity: 1}],
            mode: "payment",
            success_url: "http://www.codeheiner.de/bezahlen",
            cancel_url: "http://www.codeheiner.de/abbruch"
        });

        throw redirect(303, session.url)
    }
}