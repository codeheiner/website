import { redirect } from '@sveltejs/kit';

export const actions = {
    checkout : async ({ request }) => {
        console.log("yay")
        const formdata = await request.formData();

        const kurs = formdata.get("kurs")
        const kursDatum = formdata.get("date")
        
        const payload = {
            name: kurs
        }

        const res = await fetch("https://codeheiner-1-o1669007.deta.app/checkout",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        })

        const data = await res.json()
        console.log(data)

    throw redirect(303, data.url)
    }
}

