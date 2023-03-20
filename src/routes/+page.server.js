import { redirect } from '@sveltejs/kit';
//import { TEST_API_KEY } from '$env/static/private';
import Stripe from 'stripe';




export const actions = {
    checkout: async ({ request }) => {

        // @ts-ignore
        var stripe = Stripe(process.env.PROD_API_KEY)

        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: "price_1MnOIbDlv47dRGNIEoIojwrw", quantity: 1}],
            mode: "payment",
            success_url: "http://www.codeheiner.de/bezahlen",
            cancel_url: "http://www.codeheiner.de/abbruch"
        });

        throw redirect(303, session.url)

    }

}

