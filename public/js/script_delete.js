document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn-delete')

    button.addEventListener('click', async () => {
        const id = button.dataset.id
        const res = await axios({
            method: 'delete',
            url: `/pets/${id}`,
        }).then((res) => {
            console.log(res.data);
            console.log(res.status)
        }).catch((err) => {
            console.log('error', err)
        });
})
})