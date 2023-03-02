import Papa from "papaparse";

export type Products = {
    code: number,
    name: string;
    price: number;
    image?: string;
    alt?: string;
    description?: string;
}

const api = {
    products: {
        fetch: async () => {
            const res = await fetch(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5V6cYayJB_uaKFd0pRb5h8ykr0zuc7ESSgDhqf6jQrGa-p0nBG2NOr7SsFctyd3LCD6ua8LLrN6N8/pub?gid=0&output=csv"
            );
            const data = await res.text();
            const parsed = await new Promise<Products[]>((resolve, reject) => {
                Papa.parse<Products>(data,
                    {
                        header: true,
                        complete: (result) => resolve(result.data),
                        error: reject
                    });
            });

            return parsed;
        }
    }
}

export default api

