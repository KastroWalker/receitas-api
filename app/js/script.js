new Vue({
    el: '#root',
    data: {
        title: 'Receitas',
        comidas: []
    },
    mounted() {
        axios.get('http://127.0.0.1:3000')
            .then(response => {
                this.comidas = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
});