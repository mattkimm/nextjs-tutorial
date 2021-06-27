import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Person({ownersList}){
    const router = useRouter();
    const [owners, setOwners] = useState(ownersList);
    useEffect(() => {
        async function loadData(){ 
            const response = await fetch('http://localhost:4001/vehicles?ownerName='+ router.query.person + '&vehicle='+ router.query.vehicles);
            const ownerList = await response.json();
            setOwners(ownerList)
        }
        if(ownersList.length === 0){
            loadData();
        }
    }, [])

    return <pre>{owners[0]?.details}</pre>
}


Person.getInitialProps = async (context) => {
    if(!context.req) {
        return { owenersList : [] };
    }

    const {query} = context;
    const response = await fetch('http://localhost:4001/vehicles?ownerName='+ query.person + '&vehicle='+ query.vehicles);
    const ownersList = await response.json();

    return {
        ownersList : ownersList
    }
}