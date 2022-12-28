import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EditNews from '../../../components/Dashboard/EditNews/EditNews';

const Edit = () => {
    const router = useRouter()
    console.log(router.query.newsid);
    const this_id = router.query.newsid;
    const [newsId, setNewsId] = useState(this_id);
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        console.log(this_id);

        fetch(`http://localhost:5000/getnews?id=${newsId}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setNewsData(data))

    }, [])
    return (
        <div className='mt-[100px] max-w-[1440px] w-[95%] mx-auto '>
            <div>
                <EditNews newsData={newsData}></EditNews>
            </div>

        </div>
    );
};

export default Edit;