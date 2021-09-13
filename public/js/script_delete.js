document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn-delete')

    button.addEventListener('click', async () => {
        try {
            const id = button.dataset.id
            const data = await fetch(`/pets/${id}`, {method: 'delete'})
            const res = await data.json()
            if (res.status) {
                window.location.href = '/pets'
            } else {
                console.log(res)
            }
        } catch (error) {
            console.log('error', error)
        }
    })
})

