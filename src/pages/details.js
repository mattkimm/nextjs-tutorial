import Link from 'next/link';

const people = [
    { v : 'car', name : 'matt'},
    { v : 'bike', name : 'bruno'},
    { v : 'airplane', name : 'mick'},

]

export default function Details(){
    return <div>
        {people.map(e => (
           <div key={e.v}>
            <Link  as={`/${e.v}/${e.name}`} href='/[vehicle]/[person]'>
                <a >Navigate to{e.name}'s  {e.v}</a>
            </Link>
           </div>
        ))} 
    </div>
}