import BeanieBaby from './BeanieBaby.js';


export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map((beanieBaby, i) => {
          return <BeanieBaby 
            {...beanieBaby} key={beanieBaby.title + i + beanieBaby.id} />;
        })
      }  
    </div>);
}
