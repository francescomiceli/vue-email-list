const vueEmailList = new Vue ( 

    {
        el : "#root",
        data : {

            contacts: []

        },

        
        mounted() {

            // const self = this

            for(let i = 0; i < 10; i++) {

                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    console.log(result.data.response)
                    const randomMail = result.data.response
                    this.contacts.push(randomMail)

                    }
                
                );

            }

        }
    }

)
