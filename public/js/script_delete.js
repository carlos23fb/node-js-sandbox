
const button = document.querySelector('#btn-delete')
const id = button.dataset.id
button.addEventListener('click', async () => {
    console.log(axiosDelete())
});

async function axiosDelete () {
    const res = await axios({
        method: 'delete',
        url: `/pets/${id}`,
    })
    console.log(res.data)
    return res.data
}