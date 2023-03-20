import { redirect } from '@sveltejs/kit';
import { TEST_API_KEY, PROD_API_KEY } from '$env/static/private';
import Stripe from 'stripe';


export const actions = {
    checkout: async ({ request }) => {

        // const formdata = await request.formData();
        // const kursName = formdata.get("kurs")

        // @ts-ignore
        var stripe = Stripe(PROD_API_KEY)

        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: "price_1MnTJ4Dlv47dRGNIKbR1wXKc", quantity: 1}],
            mode: "payment",
            success_url: "https://www.codeheiner.de/bezahlen",
            cancel_url: "https://www.codeheiner.de/abbruch"
        });

        throw redirect(303, session.url)

        console.log(stripe)

    }

}

