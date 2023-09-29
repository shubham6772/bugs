import axios from 'axios';

export const CartInsert = async (email) => {
    
    let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: process.env.CART_API_KEY+'fetch',
        data: {
            "order_id": email,   
        }
    }

    
    const dataresponse = await axios.request(config)
        .then((response) => {

            console.log(response.data)

        })
        .catch((error) => {
            if (error) {

                console.log(error)
                // return {
                //     success: false,
                //     data: "Not Found",
                // }
            }
        });

    return dataresponse;

}