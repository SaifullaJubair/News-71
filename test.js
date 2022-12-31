const handleAddItem = (event) => {
    event.preventDefault()
    const form = event.target;
    const category_id = form.category_id.value;
    const total_likes = form.total_likes.value;
    const total_dislikes = form.total_dislikes.value;
    const location = form.location.value;
    const rating = form.rating.value;
    const location1 = form.location1.value;
    const total_view = form.total_view.value;
    const title = form.title.value;
    const details = form.details.value;
    const author = form.author.value;
    const types = form.types.value;
    const image = form.img.files[0]
    setLoading(true)


    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
        method: "POST",
        body: formData,
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // console.log(data.data.url)

                const addItem = {
                    title: title,
                    email: user?.email,
                    displayName: user?.displayName,
                    selleruser, role, roles,
                    img: data.data.url,
                    types, image, description, color, mobile, location, condition, orginal_price, total, rating, price, createdAt: new Date().toISOString()


                }

                // console.log(addItem)
                fetch('http://192.168.1.103:5000/items', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(addItem)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)

                        // toast("added successful", {
                        //     position: toast.POSITION.TOP_CENTER
                        // })
                        // navigate('/dashboard/myallproduct')

                    })

            }


        })

    // console.log(types, image, title, description, color, mobile, location, condition, orginal_price, total, rating, price,)
    if (loading) {
        <p>loading</p>
    }

}