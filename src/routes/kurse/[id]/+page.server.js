import { redirect } from '@sveltejs/kit';
import { PROD_API_KEY, TEST_API_KEY } from '$env/static/private';
import Stripe from 'stripe';
import { kurse } from '$lib/Kursangebot';


export async function load({ params }) {

    const kurs = params.id
    const course_data = kurse[kurs]
    const price = course_data.price

    const res = await fetch(
        "https://codeheiner-backend-dqppwh4o2-codeheiner.vercel.app/dates/" + price  
    )

    const course_dates = await res.json()

    return {
        kurse: course_data,
        course_dates: course_dates
    }
}

export const actions = {

    buchung: async ({ params, request }) => {

        const data = await request.formData();
        const start_date = data.get("kurs_datum")
        console.log(start_date)
        // @ts-ignore
        var stripe = Stripe(PROD_API_KEY)

        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: kurse[params.id]["price"], quantity: 1}],
            metadata: {'datum': start_date},
            custom_fields: [
                {
                    key: "Vorname",
                    label: {
                        custom: "Vorname",
                        type: "custom"
                    },
                    type: "text",
        
                },
        
                {
                    key: "Nachname",
                    label: {
                        custom: "Nachname",
                        type: "custom"
                    },
                    type: "text",
        
                },
            ],
            mode: "payment",
            success_url: "http://www.codeheiner.de/bezahlen",
            cancel_url: "http://www.codeheiner.de/abbruch"
        });

        throw redirect(303, session.url)
    }
}